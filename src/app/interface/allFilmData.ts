import {
  IVideo,
  IFees,
  IRating,
  IDistributors,
  IPremiere,
  IPoster,
  IName,
  IPerson,
  IImages,
  ITechnology,
  IAudience,
} from './filmChange';

interface IMovieData {
  videos: {
    trailers: IVideo[];
    teasers: IVideo[];
  };
  fees: {
    russia: IFees;
  };
  id: number;
  type: string;
  externalId: {
    kpHD: null;
    imdb: null;
  };
  name: string;
  rating: IRating;
  description: string;
  votes: IRating;
  distributors: IDistributors;
  premiere: IPremiere;
  slogan: null;
  year: number;
  poster: IPoster;
  facts: null[];
  genres: IName[];
  countries: IName[];
  seasonsInfo: null[];
  persons: IPerson[];
  images: IImages;
  lists: null[];
  spokenLanguages: null[];
  productionCompanies: null[];
  typeNumber: number;
  alternativeName: string;
  budget: Record<string, string>;
  enName: null;
  names: IName[];
  updateDates: null[];
  updatedAt: string;
  sequelsAndPrequels: null[];
  movieLength: number;
  ratingMpaa: null;
  shortDescription: null;
  technology: ITechnology;
  ticketsOnSale: boolean;
  imagesInfo: IImages;
  similarMovies: null[];
  ageRating: number;
  backdrop: {
    url: string | null;
    previewUrl: string | null;
  };
  logo: {
    url: string | null;
  };
  watchability: {
    items: null;
  };
  top10: null;
  top250: null;
  status: null;
  audience: IAudience[];
  isSeries: boolean;
  seriesLength: null;
  totalSeriesLength: null;
  deletedAt: null;
}
export { IMovieData };
