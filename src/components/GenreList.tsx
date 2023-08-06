import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import useGenres, { Genre, GenresData } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error }: GenresData = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <VStack alignItems='flex-start'>
      <Heading fontSize='xl'>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
              />
              <Button
                fontSize='lg'
                variant='link'
                onClick={() => onSelectGenre(genre)}
                whiteSpace='normal'
                textAlign='left'
                fontWeight={selectedGenre === genre ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
