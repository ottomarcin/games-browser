import useData from './useData';
import { Game } from './useGames';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games: Game[];
  games_count: number;
  image_background: string;
  description: string;
}

export interface GenresData {
  data: Genre[];
  error: string;
  isLoading: boolean;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
