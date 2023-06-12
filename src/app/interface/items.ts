import { IPerson } from './filmChange';

export interface IItems {
  persons: IPerson;
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  names: string[];
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  logo: string;
  poster: string;
  backdrop: string;
  rating: number;
  votes: number;
  movieLength: number;
  genres: string[];
  countries: string[];
  releaseYears: number[];
}
