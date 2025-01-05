import CustomColorBar from '@atoms/CustomColorBar/CustomColorBar';
import { Box, Text } from '@chakra-ui/react';
import CommonBar from '@components/Common/CommonBar';
import { HomeButtonSection, ZustandButtonSection } from '@components/Home';

export default function Home() {
  return (
    <Box w="100%">
      <HomeButtonSection />
      <Text fontSize="2xl">Home Style!</Text>
      <CommonBar />
      <CustomColorBar color="#ff9595" />
      <ZustandButtonSection />
    </Box>
  );
}
