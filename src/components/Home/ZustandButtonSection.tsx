'use client';

import { Button } from '@chakra-ui/react';
import useStore from '@reducers/store';

const ZustandButtonSection: React.FC = () => {
  const me = useStore((state) => state.me);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  return (
    <Button colorScheme="primary" onClick={me === null ? login : logout}>
      {me === null ? 'Log In' : 'Log Out'}
    </Button>
  );
};

export default ZustandButtonSection;
