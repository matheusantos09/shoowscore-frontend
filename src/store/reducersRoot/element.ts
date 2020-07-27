import { TypedUseSelectorHook, useSelector } from 'react-redux'

interface RootState {
  element: {
    loading: true,
    alternativesElements: {
      query: string;
      results: {
        tv: {
          page: number;
          results: {
            adult: boolean;
            backdrop_path: null;
            genre_ids: [];
            id: number;
            original_language: string;
            original_title: string;
            overview: string;
            popularity: number
            poster_path: string;
            release_date: string;
            title: string;
            video: boolean;
            vote_average: number;
            vote_count: number;
          }[];
          total_pages: number;
          total_results: number;
        };
        movie: {
          page: number;
          results: {
            adult: boolean;
            backdrop_path: null;
            genre_ids: [];
            id: number;
            original_language: string;
            original_title: string;
            overview: string;
            popularity: number
            poster_path: string;
            release_date: string;
            title: string;
            video: boolean;
            vote_average: number;
            vote_count: number;
          }[];
          total_pages: number;
          total_results: number;
        }
      };
      expiresAt: string
    },
    element: [],
    content: {},
    msgError: ''
  }
}

export const useElementSelector: TypedUseSelectorHook<RootState> = useSelector
