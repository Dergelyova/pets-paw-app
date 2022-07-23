import axios from "axios";
import {
  IBreed,
  IDogImage,
  IGetImagesRequestParams,
  IBreedWithImage,
  IGetBreedsListWithImageParams,
  IImageActionPostResponse,
  IImageActionDeleteResponse,
  IFavouritesImage,
  IVote,
} from "./types";
import { BASE_URL, X_API_KEY, SUB_ID } from "../constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "x-api-key": X_API_KEY },
});

export const getGalleryImages = async (params: IGetImagesRequestParams) => {
  return instance.get<IDogImage[]>("/images/search", {
    params: { size: "small", sub_id: SUB_ID, ...params },
  });
};

export const getRandomImage = async () => {
  return instance.get<IDogImage[]>("/images/search", {
    params: { sub_id: SUB_ID },
  });
};

export const getImageById = async (id: string) => {
  return instance.get<IDogImage>(`/images/${id}`);
};

export const getBreedsList = async () => {
  return instance.get<IBreed[]>("/breeds");
};

export const getBreedsListWithImage = async (
  params: IGetBreedsListWithImageParams
) => {
  return instance.get<IBreedWithImage[]>("/breeds", { params });
};

export const getBreedInfoById = async (id: number) => {
  return instance.get<IBreed>(`/breeds/${id}`);
};

export const getBreedInfoByName = async (name: string) => {
  return instance.get<IBreed[]>("/breeds/search", {
    params: { q: name },
  });
};

export const postUploadedImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return instance.post("/images/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const postAddImageToFav = async (image_id: string | number) => {
  return instance.post<IImageActionPostResponse>("/favourites", {
    image_id,
    sub_id: SUB_ID,
  });
};

export const deleteImageFromFav = async (favourite_id: string | number) => {
  return instance.delete<IImageActionDeleteResponse>(
    `/favourites/${favourite_id}`
  );
};

export const getFavouriteImages = async () => {
  return instance.get<IFavouritesImage[]>("/favourites", {
    params: { sub_id: SUB_ID, limit: 20 },
  });
};

export const getVotes = async () => {
  return instance.get<IVote[]>("/votes", {
    params: { sub_id: SUB_ID, limit: 20 },
  });
};

export const postCreateVote = async (
  image_id: string | number,
  value: 1 | 0
) => {
  return instance.post<IImageActionPostResponse>("/votes", {
    image_id,
    sub_id: SUB_ID,
    value,
  });
};
