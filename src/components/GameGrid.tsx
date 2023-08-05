import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game, GamesData } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { useEffect } from 'react';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading }: GamesData = useGames(gameQuery);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding={10}
      >
        {isLoading &&
          [...new Array(6).keys()].map((e) => (
            <GameCardContainer key={e}>
              <GameCardSkeleton key={e} />
            </GameCardContainer>
          ))}
        {data.length === 0 && !isLoading && (
          <Text>No games of this genre.</Text>
        )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
