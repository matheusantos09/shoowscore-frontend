export const BASE_PATH_IMAGES = 'https://image.tmdb.org/t/p/';

export const SIZE_IMAGES = {
  w45: 'w45/',
  w92: 'w92/',
  w154: 'w154/',
  w185: 'w185/',
  w300: 'w300/',
  w342: 'w342/',
  w500: 'w500/',
  w780: 'w780/',
  w1280: 'w1280/',
  h632: 'h632/',
  original: 'original/',
};

export function full_path_images(size = 'original', path = ''): string {
  // @ts-ignore
  if (typeof SIZE_IMAGES[size] === 'undefined') {
    return BASE_PATH_IMAGES + SIZE_IMAGES.original + path;
  }

  // @ts-ignore
  return BASE_PATH_IMAGES + SIZE_IMAGES[size] + path;
}
