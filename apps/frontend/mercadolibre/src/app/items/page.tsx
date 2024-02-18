import { FC } from 'react';
import './index.scss';
import { ProductCard } from '../ui/ProductCard/ProductCard';
import { Separator } from '../ui/Separator/Separator';
import { ItemsPageProp } from './types';
import { Metadata, ResolvingMetadata } from 'next';
import { Panel } from '../ui/Panel/Panel';

type Props = {
  params: { search: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const query = searchParams.search;
  return {
    title: `${query} | MercadoLibre 📦`,
    description: `Envíos Gratis en el día ✓ Compre ${query} en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.`,
  };
}

export const getData = async (query: string) => {
  const data = new URLSearchParams();
  data.append('q', query);
  const repo = await fetch(
    `${process.env.BASE_PRODUCT_ENDPOINT}?${data.toString()}` || ''
  );
  return (await repo.json()) as ItemsPageProp;
};

export const Items: FC<Props> = async ({ searchParams }) => {
  const props = await getData(searchParams.search as string);

  return (
    <Panel categories={props.categories}>
      <ol className="items">
        {props.items &&
          props.items.map((item, index) => {
            return (
              <ul key={`${item.id}-${index}`}>
                <ProductCard
                  alt={item.title}
                  status={item.condition}
                  description={item.title}
                  imageSrc={item.picture}
                  amount={item.price.decimals}
                  currencyCode={item.price.currency}
                  isFastShipping={item.free_shipping}
                  id={item.id}
                ></ProductCard>
                <Separator></Separator>
              </ul>
            );
          })}
      </ol>
    </Panel>
  );
};

export default Items;
