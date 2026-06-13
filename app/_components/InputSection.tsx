'use client';

import { useState } from 'react';

import { Field } from '@base-ui/react/field';
import { Input } from '@base-ui/react/input';

export default function InputSection() {
  const [name, setName] = useState('');

  return (
    <Field.Root className="flex w-full max-w-sm flex-col gap-1">
      <Field.Label className="text-sm font-medium">이름</Field.Label>
      <Input
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900"
        placeholder="이름을 입력하세요…"
        value={name}
        onValueChange={(value) => setName(value)}
        autoComplete="name"
      />
      <Field.Description className="text-xs text-gray-500">
        {name ? `안녕하세요, ${name}님!` : 'Base UI Field + Input 예시'}
      </Field.Description>
    </Field.Root>
  );
}
