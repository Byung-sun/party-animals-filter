import { SimpleGrid, Checkbox, Box } from '@chakra-ui/react';

const FilterSection = ({ filters, setFilters, isKorean, translations }) => {
  const characteristics = [
    'Big-Eyed', 'Canines', 'Diving', 'Egg-Laying', 'Felines',
    'Fluffy', 'Flying', 'Horned', 'Long Tailed', 'Meat-Eating', 'Plant-Eating'
  ];

  const handleFilterChange = (characteristic) => {
    setFilters(prev => ({
      ...prev,
      [characteristic]: !prev[characteristic]
    }));
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <SimpleGrid columns={[3, 4, 6]} spacing={2}>
        {characteristics.map(characteristic => (
          <Checkbox
            key={characteristic}
            isChecked={filters[characteristic]}
            onChange={() => handleFilterChange(characteristic)}
            color="white"
            colorScheme="orange"
            size="sm"
            spacing={1}
          >
            {isKorean ? translations[characteristic] : characteristic}
          </Checkbox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FilterSection; 