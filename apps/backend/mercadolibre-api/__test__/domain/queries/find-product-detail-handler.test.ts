import { findProductDetailsHandler } from '@domain/queries/find-product-detail-handler';
import {
  mockProductDescriptionMeliResponse,
  mockProductDetailMeliresponse,
} from '../../stubs/response.stubs';

describe('find product details handler: use case if id empty', () => {
  test('if id its empty, throw error', () => {
    expect(findProductDetailsHandler('')).rejects.toThrow();
  });
});

describe('find product details handler: use case if module has error', () => {
  //Init mock from import module
  beforeEach(() => {
    jest.mock('@infrastructure/services/product-service', () => {
      const originalModule = jest.requireActual(
        '@infrastructure/services/product-service'
      );

      //Mock the default export and named export 'foo'
      return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        productService: {
          findProductDetails: async () => {
            throw new Error('MockError');
          },
          findProductDescription: async () => {
            throw new Error('MockError');
          },
        },
      };
    });
  });

  afterEach(() => {
    jest.resetModules();
  });

  test('if id its empty, throw error', () => {
    expect(findProductDetailsHandler('MLA1401249643')).rejects.toThrow();
  });
});

describe('find product details handler: use case if remotes have data', () => {
  beforeEach(() => {
    //Init mock from import module
    jest.mock('@infrastructure/services/product-service', () => {
      const originalModule = jest.requireActual(
        '@infrastructure/services/product-service'
      );

      //Mock the default export and named export 'foo'
      return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        productService: {
          findProductDetails: async () => {
            return mockProductDetailMeliresponse;
          },
          findProductDescription: async () => {
            return mockProductDescriptionMeliResponse;
          },
        },
      };
    });
  });

  afterEach(() => {
    jest.resetModules();
  });

  test('Happy path when find all data', async () => {
    const id = 'MLA1385553071';
    const resp = await findProductDetailsHandler(id);
    expect(resp.author.name).toEqual('Duwan');
    expect(resp.item.id).toEqual(id);
  });
});
