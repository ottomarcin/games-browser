import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input
          ref={ref}
          placeholder='Search games...'
          borderRadius='20px'
          variant='filled'
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
