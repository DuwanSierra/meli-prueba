import {
  MercadoLibreItemDescriptionResponse,
  MercadoLibreItemDetailResponse,
} from './mercadolibre-item.response';
import { MercadoLibreItemsResponse } from './mercadolibre-items.response';

export type FindProductsByQuery = (
  query: string,
  limit?: number
) => Promise<MercadoLibreItemsResponse>;

export type FindProductDetails<T> = (id: string) => Promise<T>;

export type ProductServiceOperations = {
  findProductsByQuery: FindProductsByQuery;
  findProductDetails: FindProductDetails<MercadoLibreItemDetailResponse>;
  findProductDescription: FindProductDetails<MercadoLibreItemDescriptionResponse>;
};

export type ProductServiceProvider = () => ProductServiceOperations;
