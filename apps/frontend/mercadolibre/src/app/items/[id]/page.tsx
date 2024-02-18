import { FC } from 'react';
import './index.scss';
import { Metadata, ResolvingMetadata } from 'next';
import { ItemResponse, ItemsPageProp } from '../types';
import { Panel } from '../../ui/Panel/Panel';
import { ProductDetails } from '../../ui/ProductDetails/ProductDetails';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const query = params.id;
  const data = await getData(query);
  const title = `${data?.item?.title} - ${data?.item?.price?.decimals}`;
  return {
    title: `${data?.item?.title || 'MercadoLibre'} | ${
      data?.item?.free_shipping ? 'Envio gratis' : 'MercadoLibre'
    } 📦`,
    description: `Envíos gratis en el día ✓ Compra online de manera segura con Compra Protegida © ${title}`,
    openGraph: {
      title: `${title}`,
      images: `${data?.item?.picture}`,
      url: `/items/${data?.item?.id}`,
    },
  };
}

const getData = async (id: string) => {
  try {
    const repo = await fetch(
      `${process.env.BASE_PRODUCT_ENDPOINT}/${id}` || ''
    );
    return (await repo.json()) as ItemResponse;
  } catch {
    return {} as ItemResponse;
  }
};

const ItemDetails: FC<Props> = async ({ params }) => {
  const props = await getData(params.id as string);
  console.log(props);
  return (
    <Panel categories={[]}>
      <ProductDetails
        title={props.item.title}
        amount={props.item.price.decimals}
        condition={props.item.condition}
        currencyCode={props.item.price.currency}
        description={props.item.description}
        imageSrc={props.item.picture}
        sold={props.item.sold_quantity}
      ></ProductDetails>
    </Panel>
  );
};

export default ItemDetails;
