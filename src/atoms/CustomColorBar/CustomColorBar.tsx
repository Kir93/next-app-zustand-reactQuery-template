import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  color: string;
}

const CustomColorBar: FC<IProps> = ({ color }) => (
  <Box w="100%" h="2px" m="15px auto" bgColor={color} />
);

export default CustomColorBar;
