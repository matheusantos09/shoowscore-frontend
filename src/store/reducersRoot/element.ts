import { TypedUseSelectorHook, useSelector } from 'react-redux';

export interface RootState {
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
      networks: Array<{
        name: string;
        logo_path: string;
        origin_country: string;
      }>;
    };
  };
}

export const useElementSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface RootStateTvShow {
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
      networks: Array<{
        name: string;
        logo_path: string;
        origin_country: string;
      }>;
    };
  };
}

export const useElementTvShowSelector: TypedUseSelectorHook<RootStateTvShow> = useSelector;

export interface RootStateMovie {
  element: {
    loading: true;
    error: boolean;
    msgError: '';
    payload: {
      typeResource: string;
      original_title: string;
      tagline: string;
      backdrop_path: string;
      poster_path: string;
      overview: string;
      runtime?: number;
      genres: [];
    };
  };
}

export const useElementMovieSelector: TypedUseSelectorHook<RootStateMovie> = useSelector;
