import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface RootState {
  element: {
    loading: true;
    alternativesElements: {
      query: string;
      total_results: number;
      results: {
        type: string;
        results: {
          adult: boolean;
          // backdrop_path: null;
          genre_ids: [];
          id: number;
          // original_language: string;
          original_title: string;
          overview: string;
          popularity: number;
          poster_path: string;
          // release_date: string;
          title: string;
          // video: boolean;
          vote_average: number;
          vote_count: number;
        }[];
      };
      expiresAt: string;
    };
    element: [];
    content: {};
    msgError: '';
    error: boolean;
  };
}

export const useElementSelector: TypedUseSelectorHook<RootState> = useSelector;
