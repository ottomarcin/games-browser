import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
  //   game: Game;
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  android: FaAndroid,
  ios: MdPhoneIphone,
  linux: FaLinux,
  mac: FaApple,
  nintendo: SiNintendo,
  pc: FaWindows,
  playstation: FaPlaystation,
  web: BsGlobe,
  xbox: FaXbox,
};

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1} wrap='wrap'>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
