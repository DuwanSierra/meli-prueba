import { Author, Item } from './items-response';

export type ItemFullDetails = Item & {
  sold_quantity: number;
  description: string;
};

export type ItemResponse = {
  author: Author;
  item: ItemFullDetails;
};
