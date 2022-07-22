export interface IGetImagesRequestParams {
  limit?: number;
  order?: OrderOptions;
  size?: "med";
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
}

export interface IBreed {
  id: number;
  name: string;
  temperament?: string;
  origin?: string;
  weight?: { imperial: string; metric: string };
  life_span?: string;
  bred_for?: string;
}

export interface IBreedWithImage extends IBreed {
  image: IDogImage;
}

export interface IBreedWithImageReference extends IBreed {
  reference_image_id: string;
}
