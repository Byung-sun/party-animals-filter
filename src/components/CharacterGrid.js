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

const CharacterGrid = ({ characters, isKorean, nameTranslations, imageBasePath }) => {
  return (
    <SimpleGrid columns={[2, 3, 4, 5]} spacing={4}>
      {characters.map(character => (
        <Box key={character.name}>
          <Image 
            src={`${imageBasePath}${character.name}.webp`}
            alt={character.name}
            boxSize="80px"
            objectFit="cover"
            borderRadius="md"
          />
          <CharacterCard 
            character={character} 
            isKorean={isKorean}
            nameTranslations={nameTranslations}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CharacterGrid; 