import {
  getGalleryImages,
  getBreedsList,
  postUploadedImage,
  getBreedsListWithImage,
  getBreedInfoById,
  getImageById,
  getBreedInfoByName,
  getRandomImage,
  postAddImageToFav,
  deleteImageFromFav,
  postCreateVote,
  getFavouriteImages,
  getVotes,
} from "./api";
import {
  IGetImagesRequestParams,
  IGetBreedsListWithImageParams,
  IBreedWithImage,
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

export const fetchRandomImage = async () => {
  const { data } = await getRandomImage();
  return data[0];
};

export const fetchBreedsListInfo = async () => {
  const { data } = await getBreedsList();
  return data;
};

export const uploadImage = async (file: File) => {
  const { status } = await postUploadedImage(file);
  return status;
};

export const fetchBreedInfoWithImages = async (breedId: number) => {
  const breedResponse = await getBreedInfoById(breedId);
  const breedInfo = breedResponse.data;
  const imagesResponse = await getGalleryImages({
    breed_id: breedId,
    limit: 5,
  });
  const breedImages = imagesResponse.data;
  return { breedInfo, breedImages };
};

export const fetchBreedSearchWithImageByName = async (breedName: string) => {
  const breedsResponse = await getBreedInfoByName(breedName);
  const breedsInfo = breedsResponse.data;
  const breedsWithImages = await Promise.all(
    breedsInfo.map(async (breed) => {
      if (breed?.reference_image_id) {
        const imageResponse = await getImageById(breed.reference_image_id);
        return { ...breed, image: imageResponse.data };
      }
    })
  );

  return breedsWithImages.filter(Boolean) as IBreedWithImage[];
};

export const addImageToFavourite = async (imageId: string | number) => {
  const { data } = await postAddImageToFav(imageId);
  return data;
};

export const removeImageFromFavourite = async (favId: string | number) => {
  const { data } = await deleteImageFromFav(favId);
  return data;
};

export const fetchFavourites = async () => {
  const { data } = await getFavouriteImages();
  return data;
};

export const createVote = async (imageId: number | string, value: 1 | 0) => {
  const { data } = await postCreateVote(imageId, value);
  return data;
};

export const fetchLikedImages = async () => {
  const { data } = await getVotes();
  const likes = data.filter(({ value }) => value === 1);
  const likedImages = await Promise.all(
    likes.map(async (like) => {
      const imageResponse = await getImageById(like.image_id);
      return { ...imageResponse.data };
    })
  );

  return likedImages;
};

export const fetchDislikedImages = async () => {
  const { data } = await getVotes();
  const dislikes = data.filter(({ value }) => value === 0);
  const dislikedImages = await Promise.all(
    dislikes.map(async (dislike) => {
      const imageResponse = await getImageById(dislike.image_id);
      return { ...imageResponse.data };
    })
  );

  return dislikedImages;
};
