import { ItemResponse } from '../../domain/models/item-response';
import { ItemsResponse } from '../../domain/models/items-response';
import { findProductDetailsHandler } from '../../domain/queries/find-product-detail-handler';
import { findProductsHandler } from '../../domain/queries/find-products-handler';
import { Controller } from '../types';

export const itemsFinderController: Controller<ItemsResponse> = async (
  req,
  res
) => {
  const queryParam = req.query['q'] as string;
  console.log(queryParam);
  const data = await findProductsHandler(queryParam);
  return res.json(data);
};

export const itemByIdFinder: Controller<ItemResponse> = async (req, res) => {
  const id = req.params['id'] as string;
  const data = await findProductDetailsHandler(id);
  console.log(data);
  return res.json(data);
};
