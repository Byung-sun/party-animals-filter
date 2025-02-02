import { SimpleGrid, Box, Text, Image, Flex } from '@chakra-ui/react';

const CharacterCard = ({ character, isKorean, translations, nameTranslations }) => {
  const characterName = character['Character Name'];
  
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bg="orange.500" borderColor="orange.400">
      <Flex gap={4}>
        <Box flex="1">
          <Text fontSize="lg" fontWeight="bold" color="white">
            {isKorean ? nameTranslations[characterName] : characterName}
          </Text>
          <Text fontSize="sm" color="orange.100">
            {Object.entries(character)
              .filter(([key, value]) => value === 'TRUE' && key !== 'Character Name')
              .map(([key]) => isKorean ? translations[key] : key)
              .join(', ')}
          </Text>
        </Box>
        <Image 
          src={`/images/${characterName}.webp`} 
          alt={characterName}
          boxSize="80px"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>
    </Box>
  );
};

const CharacterGrid = ({ characters, isKorean, translations, nameTranslations }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
      {characters.map(character => (
        <CharacterCard 
          key={character['Character Name']} 
          character={character} 
          isKorean={isKorean}
          translations={translations}
          nameTranslations={nameTranslations}
        />
      ))}
    </SimpleGrid>
  );
};

export default CharacterGrid; 