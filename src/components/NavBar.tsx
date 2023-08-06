import { Button, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import React from 'react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onIconClick: Function;
  onSearch: (value: string) => void;
  searchText: string;
}

const NavBar = ({ onIconClick, onSearch, searchText }: Props) => {
  return (
    <HStack padding='10px'>
      <Image
        src={logo}
        boxSize='60px'
        onClick={() => onIconClick()}
        cursor='pointer'
      />
      <SearchInput searchText={searchText} onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
