import { Input, InputGroup, InputLeftElement, theme } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  onSearch: (value: string) => void;
  searchText: string;
}

const SearchInput = ({ onSearch, searchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const [data, setData] = useState('');

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        ref.current?.focus();
      }
      if (e.code === 'Escape') {
        ref.current?.blur();
      }
    };

    window.addEventListener('keydown', callback);
    return () => window.removeEventListener('keydown', callback);
  });

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
          value={data}
          onChange={(e) => setData(e.target.value)}
          borderColor={
            searchText === data && data !== ''
              ? theme.colors.gray[700]
              : undefined
          }
          focusBorderColor={theme.colors.gray[500]}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
