import { mapperCategories } from '../../infrastructure/mappers/filters-to-categories';
import { productService } from '../../infrastructure/services/product-service';
import { Item, ItemsResponse } from '../models/items-response';
import { MercadoLibreItemsResponse } from '../models/mercadolibre-items.response';

const { findProductsByQuery } = productService();

export const findProductsHandler = async (query: string) => {
  const responseRemote = await findProductsByQuery(query);
  return mapperMeliResponseToItemResponse(responseRemote);
};

const mapperMeliResponseToItemResponse = (
  remoteResponse: MercadoLibreItemsResponse
) => {
  const categories = mapperCategories(remoteResponse.filters);
  const items: Item[] = remoteResponse.results.map((item) => {
    return {
      id: item.id,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      picture: item.thumbnail,
      price: {
        amount: item.original_price,
        currency: item.currency_id,
        decimals: item.price,
      },
      title: item.title,
    };
  });
  const response: ItemsResponse = {
    author: {
      name: 'Duwan',
      lastname: 'Sierra',
    },
    categories,
    items,
  };
  return response;
};
