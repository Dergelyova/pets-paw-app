import {
  getGalleryImages,
  getBreedsList,
  postUploadedImage,
  getBreedsListWithImage,
  getBreedInfoById,
  getImageById,
} from "./api";
import {
  IGetImagesRequestParams,
  IGetBreedsListWithImageParams,
} from "./types";

export const fetchGalleryImages = async (params: IGetImagesRequestParams) => {
  const { data } = await getGalleryImages(params);
  return data;
};

export const fetchBreedsImages = async (
  params: IGetBreedsListWithImageParams
) => {
  const { data } = await getBreedsListWithImage(params);
  return data;
};

export const fetchBreedsListInfo = async () => {
  const { data } = await getBreedsList();
  return data;
};

export const uploadImage = async (file: File) => {
  const { status } = await postUploadedImage(file);
  return status;
};

export const fetchBreedInfoWithImage = async (breedId: number) => {
  const breedResponse = await getBreedInfoById(breedId);
  const breedInfo = breedResponse.data;
  const imageResponse = await getImageById(breedInfo.reference_image_id);
  const imageInfo = imageResponse.data;
  return { breedInfo, imageInfo };
};
