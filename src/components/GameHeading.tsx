import React from 'react';
import { GameQuery } from '../App';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genre, platform } = gameQuery;

  const heading = `${platform?.name || ''} ${genre?.name || ''} ${
    (!platform && !genre && 'All ') || ''
  }Games`;

  return (
    <Heading as='h1' size='4xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
