import {
  MercadoLibreItemDescriptionResponse,
  MercadoLibreItemDetailResponse,
} from '../../domain/models/mercadolibre-item.response';
import { DEFAULT_API_LIMIT } from '../../domain/models/mercadolibre-items.response';
import {
  FindProductsByQuery,
  FindProductDetails,
} from '../../domain/models/product-service.types';

export const productsFinderByQuery: FindProductsByQuery = async (
  query: string,
  limit = DEFAULT_API_LIMIT
) => {
  if (!query) throw Error('Query is required');
  const data = await fetch(
    `${process.env.MELI_QUERY_PATH}?q=${query}&limit=${limit}`
  );
  return await data.json();
};

export const productDetails: FindProductDetails<
  MercadoLibreItemDetailResponse
> = async (id) => {
  if (!id) throw Error('ID is required');
  const data = await fetch(`${process.env.MELI_ITEMS_API_BASE_PATH}/${id}`);
  return await data.json();
};

export const productDescription: FindProductDetails<
  MercadoLibreItemDescriptionResponse
> = async (id) => {
  if (!id) throw Error('ID is required');
  const data = await fetch(
    `${process.env.MELI_ITEMS_API_BASE_PATH}/${id}/description`
  );
  return await data.json();
};
