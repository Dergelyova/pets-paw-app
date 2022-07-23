export interface IGetImagesRequestParams {
  limit?: number;
  order?: OrderOptions;
  size?: "med" | "small";
  mime_types?: ImageType;
  page?: number;
  breed_id?: number;
}

export interface IGetBreedsListWithImageParams {
  limit?: number;
  order?: OrderOptionsShort;
  page?: number;
}

export type OrderOptionsShort = Exclude<OrderOptions, OrderOptions.RANDOM>;

export enum OrderOptions {
  RANDOM = "Random",
  DESC = "Desc",
  ASC = "Asc",
}

export enum ImageType {
  ALL = "jpg,png,gif",
  STATIC = "jpg,png",
  ANIMATED = "gif",
}

export interface IDogImage {
  id: string | number;
  url: string;
  width?: number;
  height?: number;
  name?: string;
  favourite?: { id: number | string };
}

export interface IBreed {
  id: number;
  name: string;
  temperament?: string;
  origin?: string;
  weight?: { imperial: string; metric: string };
  height?: { imperial: string; metric: string };
  life_span?: string;
  bred_for?: string;
  reference_image_id?: string;
}

export interface IBreedWithImage extends IBreed {
  image: IDogImage;
}

export interface IImageActionPostResponse {
  message: string;
  id: number | string;
}

export interface IImageActionDeleteResponse {
  message: string;
}

export interface IFavouritesImage {
  id: number;
  image_id: string;
  user_id?: string;
  created_at?: string;
  sub_id?: string;
  image: { id: string; url: string };
}

export interface IVote {
  id?: number;
  value: 1 | 0;
  image_id: string;
  user_id?: string;
  created_at?: string;
}
