export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type Author = {
  name: string;
  lastname: string;
};

export type ItemsResponse = {
  author: Author;
  categories: string[];
  items: Item[];
};
