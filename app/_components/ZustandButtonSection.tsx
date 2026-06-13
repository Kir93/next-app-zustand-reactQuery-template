'use client';

import { LogIn, LogOut } from 'lucide-react';

import useStore from '@store';

import Button from '@components/ui/Button';

export default function ZustandButtonSection() {
  const me = useStore((state) => state.me);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const isLoggedIn = me !== null;

  return (
    <Button variant="primary" onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? (
        <LogOut className="size-4" aria-hidden />
      ) : (
        <LogIn className="size-4" aria-hidden />
      )}
      {isLoggedIn ? 'Log Out' : 'Log In'}
    </Button>
  );
}
