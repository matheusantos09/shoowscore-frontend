import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface RootState {
  search: {
    loading: boolean;
    error: boolean;
    msgError: '';
    // query: string;
    payload: {
      payload: {
        total_results: number;
        results: Array<{
          type: string;
          results: Array<{
            title?: string;
            name?: string;
            adult: boolean;
            backdrop_path?: null;
            id: number;
            original_language: string;
            original_title: string;
            overview: string;
            popularity: number;
            poster_path: string;
            release_date: string;
            video: boolean;
            vote_average: number;
            vote_count: number;
          }>;
        }>;
      };
    };
  };
}

export const useSearchSelector: TypedUseSelectorHook<RootState> = useSelector;
