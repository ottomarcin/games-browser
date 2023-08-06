import useData, { DataType } from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  slug: string;
}

export interface GamesData {
  data: Game[];
  error: string;
  isLoading: boolean;
}

const useGames = (selectedGenre?: Genre | null) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
