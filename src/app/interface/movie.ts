import { IItems } from './items';

export interface IMovie {
  docs: IItems[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
