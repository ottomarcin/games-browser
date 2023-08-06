import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useEffect, useState } from 'react';

interface Props {
  sortOrder: string;
  onSelectSortOrder: (value: string) => void;
}

const useSorting = (update: (sort: string) => void) => {
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [sortProperty, setSortProperty] = useState<string>('');

  useEffect(() => {
    const sorting = sortProperty
      ? `${sortOrder === 'desc' ? '-' : ''}${sortProperty}`
      : '';
    update(sorting);
  }, [sortOrder, sortProperty]);

  return { setSortOrder, setSortProperty };
};

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const { setSortOrder, setSortProperty } = useSorting(onSelectSortOrder);

  const currentSorting = {
    order: sortOrder?.startsWith('-') ? 'desc' : 'asc',
    property: sortOrder?.startsWith('-') ? sortOrder.slice(1) : sortOrder,
  };

  console.log(currentSorting);

  const sortOrders = [
    { property: '', label: 'Default' },
    { property: 'name', label: 'Name' },
    { property: 'released', label: 'Release date' },
    { property: 'metacritic', label: 'Average rate' },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.property === currentSorting.property
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} whiteSpace='nowrap'>
        <HStack gap={0}>
          <Text marginRight='0.25rem'>Sort by: </Text>
          {currentSorting.property && (
            <>
              {currentSorting.order === 'asc' ? (
                <AiOutlineArrowUp />
              ) : (
                <AiOutlineArrowDown />
              )}
            </>
          )}
          <Text>{currentSortOrder?.label || 'Default'}</Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {currentSorting.property && (
          <MenuOptionGroup
            defaultValue='asc'
            title='Order'
            type='radio'
            value={currentSorting.order}
          >
            <MenuItemOption value='asc' onClick={() => setSortOrder('asc')}>
              Ascending
            </MenuItemOption>
            <MenuItemOption value='desc' onClick={() => setSortOrder('desc')}>
              Descending
            </MenuItemOption>
          </MenuOptionGroup>
        )}
        <MenuOptionGroup
          defaultValue='asc'
          title='Property'
          type='radio'
          value={
            currentSorting.property === undefined ? '' : currentSorting.property
          }
        >
          {sortOrders.map((order) => (
            <MenuItemOption
              key={order.property}
              value={order.property}
              onClick={() => setSortProperty(order.property)}
            >
              {order.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
