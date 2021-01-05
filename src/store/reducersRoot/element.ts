import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface RootState {
  element: {
    loading: true;
    error: boolean;
    msgError: '';
    payload: {
      typeResource: string;
      original_title?: string;
      name?: string;
      backdrop_path: string;
      poster_path: string;
      overview: string;
      runtime?: number;
      genres: [];
      networks: {
        name: string;
        logo_path: string;
        origin_country: string;
      }[];
    };
  };
}

export const useElementSelector: TypedUseSelectorHook<RootState> = useSelector;
