interface IVideo {
  url: string;
  name: string;
  site: string;
}

interface IFees {
  value: number;
  currency: string;
}

interface IRating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface IDistributors {
  distributor: string;
  distributorRelease: null;
}

interface IPremiere {
  russia: string;
}

interface IPoster {
  url: string;
  previewUrl: string;
}

interface IPerson {
  enName: string;
  enProfession: string;
  id: number;
  name: string;
  photo: string;
  profession: string;
}

interface IImages {
  framesCount: number;
}

interface IName {
  name: string;
}

interface IAudience {
  count: number;
  country: string;
}

interface ITechnology {
  hasImax: boolean;
  has3D: boolean;
}

export {
  IVideo,
  IFees,
  IRating,
  IDistributors,
  IPremiere,
  IPoster,
  IPerson,
  IImages,
  IName,
  IAudience,
  ITechnology,
};
