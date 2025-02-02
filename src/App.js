import { useState, useEffect } from 'react';
import { ChakraProvider, Box, Container, Heading, Button, Flex } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
// import Papa from 'papaparse';  // 더 이상 필요없음
import FilterSection from './components/FilterSection';
import CharacterGrid from './components/CharacterGrid';
// import charactersData from './data/characters.csv';  // 이 줄 삭제
import { charactersData } from './data/characters.js';  // 새로운 import

// 특성 이름 번역
const characteristicsTranslation = {
  'Big-Eyed': '큰 눈',
  'Canines': '개과',
  'Diving': '다이빙',
  'Egg-Laying': '알 낳는',
  'Felines': '고양이과',
  'Fluffy': '복실복실',
  'Flying': '나는',
  'Horned': '뿔 있는',
  'Long Tailed': '긴 꼬리',
  'Meat-Eating': '육식',
  'Plant-Eating': '초식'
};

// 캐릭터 이름 번역
const nameTranslation = {
  'Bacon': '베이컨',
  'Barbie': '바비',
  'Bob': '밥',
  'Bruce': '브루스',
  'Cabbage Dog': '양배추 독',
  'Carrot': '캐럿',
  'Coco': '코코',
  'Curtis': '커티스',
  'Dodo': '도도',
  'Dundun': '둔둔',
  'Fluffy': '플러피',
  'Fubao': '푸바오',
  'Fuguee': '푸기',
  'Garfat': '가팻',
  'Googoo': '구구',
  'Gopher': '고퍼',
  'Hachi': '하치',
  'Hammer': '해머',
  'Harry': '해리',
  'Kato': '카토',
  'Kiko': '키코',
  'Kola': '콜라',
  'Levi': '레비',
  'Lloyd': '로이드',
  'Lotus': '로터스',
  'Lou': '루',
  'Macchiato': '마끼아또',
  'Maneki': '마네키',
  'Max': '맥스',
  'Miu': '미우',
  'Moonmoon': '문문',
  'Morse': '모스',
  'Nemo': '네모',
  'Om Nom': '옴놈',
  'Ori': '오리',
  'Otta': '오타',
  'Pensky': '펜스키',
  'Ron': '론',
  'Sam': '샘',
  'Shin': '신',
  'Snow': '스노우',
  'Sparky': '스파키',
  'Spike': '스파이크',
  'Stella': '스텔라',
  'Sunday': '선데이',
  'Sunny': '써니',
  'The Lamb': '램',
  'Tiagra': '티아그라',
  'Tuskarr': '터스카',
  'Underbite': '언더바이트',
  'Uni': '유니',
  'Valiente': '발리엔테',
  'Yurusa': '유루사'
};

// Create a custom theme
const theme = extendTheme({
  fonts: {
    heading: `'Fredoka', sans-serif`,
    body: `'Fredoka', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'orange.700',
        color: 'white'
      }
    }
  },
  components: {
    Box: {
      baseStyle: {
        borderRadius: 'xl'
      }
    },
    Card: {
      baseStyle: {
        bg: 'orange.500',
        color: 'white'
      }
    }
  }
});

// 이미지 경로를 위한 상수 추가
const PUBLIC_URL = process.env.PUBLIC_URL;

function App() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});
  const [isKorean, setIsKorean] = useState(false);

  useEffect(() => {
    // CSV 파싱 대신 직접 데이터 설정
    setCharacters(charactersData);
  }, []);

  const filteredCharacters = characters.filter(character => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return character[key] === 'TRUE';
    });
  });

  return (
    <ChakraProvider theme={theme}>
      <Box bg="orange.700" minH="100vh" py={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" mb={8}>
            <Heading textAlign="center" color="white">
              {isKorean ? '파티 애니멀즈 캐릭터 필터' : 'Party Animals Characters Filter'}
            </Heading>
            <Button
              onClick={() => setIsKorean(!isKorean)}
              colorScheme="orange"
              bg="white"
              color="orange.700"
              _hover={{ bg: 'orange.100' }}
              size="md"
              fontWeight="bold"
              px={6}
              boxShadow="md"
            >
              {isKorean ? 'ENG' : 'KOR'}
            </Button>
          </Flex>
          <Box bg="orange.500" p={6} borderRadius="xl" mb={6}>
            <FilterSection 
              filters={filters} 
              setFilters={setFilters} 
              isKorean={isKorean}
              translations={characteristicsTranslation}
            />
          </Box>
          <CharacterGrid 
            characters={filteredCharacters} 
            isKorean={isKorean}
            translations={characteristicsTranslation}
            nameTranslations={nameTranslation}
            imageBasePath={`${PUBLIC_URL}/images/`}
          />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App; 