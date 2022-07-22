import axios from "axios";
import {
  IBreed,
  IDogImage,
  IGetImagesRequestParams,
  IBreedWithImage,
  IGetBreedsListWithImageParams,
  IBreedWithImageReference,
} from "./types";
import { BASE_URL, X_API_KEY, SUB_ID } from "../constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "x-api-key": X_API_KEY },
});

export const getGalleryImages = async (params: IGetImagesRequestParams) => {
  return instance.get<IDogImage[]>("/images/search", {
    params: { size: "small", ...params },
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
  return instance.get<IBreedWithImageReference>(`/breeds/${id}`);
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

export const postAddImageToFav = async (image_id: string) => {
  instance.post("/favourites", { sub_id: SUB_ID, image_id });
};

export const deleteImageFromFav = async (favourite_id: string) => {
  instance.post("/favourites", { params: { favourite_id } });
};
