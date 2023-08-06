import { Button, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import React from 'react';
import ColorModeSwitch from './ColorModeSwitch';

interface Props {
  onIconClick: Function;
}

const NavBar = ({ onIconClick }: Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image
        src={logo}
        boxSize='60px'
        onClick={() => onIconClick()}
        cursor='pointer'
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
