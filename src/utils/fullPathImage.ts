import { BASE_PATH_IMAGES, SIZE_IMAGES } from '../configs/tmdb';

export function fullPathImages(path = '', size = 'original'): string {
  // @ts-ignore
  if (typeof SIZE_IMAGES[size] === 'undefined') {
    return BASE_PATH_IMAGES + SIZE_IMAGES.original + path;
  }

  // @ts-ignore
  return BASE_PATH_IMAGES + SIZE_IMAGES[size] + path;
}
