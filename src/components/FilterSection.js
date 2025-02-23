import { SimpleGrid, Box, Button, Text, Flex } from '@chakra-ui/react';

const FilterSection = ({ filters, setFilters, isKorean, translations }) => {
  const characteristics = [
    'Big-Eyed', 'Canines', 'Diving', 'Egg-Laying', 'Felines',
    'Fluffy', 'Flying', 'Horned', 'Long Tailed', 'Meat-Eating', 'Plant-Eating'
  ];

  const handleFilterChange = (characteristic) => {
    setFilters(prev => ({
      ...prev,
      [characteristic]: prev[characteristic] === undefined ? true : 
                       prev[characteristic] === true ? false : 
                       undefined
    }));
  };

  const getButtonColor = (value) => {
    if (value === undefined) return 'gray.200';
    if (value === true) return 'green.400';
    return 'red.400';
  };

  const getButtonText = (value) => {
    if (value === undefined) return '○';
    if (value === true) return '✓';
    return '✕';
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <SimpleGrid columns={[3, 4, 6]} spacing={4}>
        {characteristics.map(characteristic => (
          <Flex 
            key={characteristic}
            align="center"
            gap={2}
          >
            <Button
              size="sm"
              onClick={() => handleFilterChange(characteristic)}
              bg={getButtonColor(filters[characteristic])}
              color={filters[characteristic] === undefined ? 'black' : 'white'}
              _hover={{ opacity: 0.8 }}
              w="30px"
              h="30px"
              p={0}
            >
              {getButtonText(filters[characteristic])}
            </Button>
            <Text fontSize="sm" color="white">
              {isKorean ? translations[characteristic] : characteristic}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FilterSection; 