import { FC, ReactNode } from 'react';

import { Container } from '@chakra-ui/react';

interface IProps {
  children: ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => (
  <Container
    display="flex"
    minW={['414px', '768px', '768px', '1200px']}
    minH="100vh"
    m="auto auto 0"
    px={['21px', '22px']}
  >
    {children}
  </Container>
);

export default AppLayout;
