import { ProductServiceProvider } from '../../domain/models/product-service.types';
import {
  productDescription,
  productDetails,
  productsFinderByQuery,
} from '../remotes/products-remote';

export const productService: ProductServiceProvider = () => {
  return {
    findProductsByQuery: productsFinderByQuery,
    findProductDetails: productDetails,
    findProductDescription: productDescription,
  };
};
