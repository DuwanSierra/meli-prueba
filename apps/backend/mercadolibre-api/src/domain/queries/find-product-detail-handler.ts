import { productService } from '../../infrastructure/services/product-service';
import { ItemResponse } from '../models/item-response';
import {
  MercadoLibreItemDescriptionResponse,
  MercadoLibreItemDetailResponse,
} from '../models/mercadolibre-item.response';

const { findProductDetails, findProductDescription } = productService();

export const findProductDetailsHandler = async (id: string) => {
  if (!id) throw new Error('ID is required');
  const data = await Promise.all([
    findProductDescription(id),
    findProductDetails(id),
  ]);
  return mapperFullDetailsResponseToItemResponse(data[0], data[1]);
};

const mapperFullDetailsResponseToItemResponse = (
  descriptionResponse: MercadoLibreItemDescriptionResponse,
  fulldetailResponse: MercadoLibreItemDetailResponse
) => {
  const item: ItemResponse = {
    author: {
      name: 'Duwan',
      lastname: 'Sierra',
    },
    item: {
      description: descriptionResponse.plain_text,
      condition: fulldetailResponse.condition,
      free_shipping: fulldetailResponse.shipping?.free_shipping || false,
      id: fulldetailResponse.id,
      picture: fulldetailResponse.pictures?.find((picture) => picture.url)
        ?.secure_url,
      price: {
        amount: fulldetailResponse.original_price,
        currency: fulldetailResponse.currency_id,
        decimals: fulldetailResponse.price,
      },
      sold_quantity: fulldetailResponse.initial_quantity,
      title: fulldetailResponse.title,
    },
  };
  return item;
};
