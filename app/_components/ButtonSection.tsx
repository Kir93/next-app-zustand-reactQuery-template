'use client';

import { useState } from 'react';

import Button from '@components/ui/Button';

interface IProps {
  hello?: boolean;
}

export default function ButtonSection({ hello }: IProps) {
  const [test, setTest] = useState(false);
  return (
    <div className="rounded-lg bg-gray-100 p-4">
      <p className="text-lg">컴포넌트의 경우 state 존재{test && !hello ? '유무로' : ''}</p>
      <Button variant={test ? 'primary' : 'secondary'} onClick={() => setTest((prev) => !prev)}>
        Test
      </Button>
    </div>
  );
}
