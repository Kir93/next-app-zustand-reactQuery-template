import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl, userTypes } from '..';

export const usePutUser = (
  options?: Omit<
    UseMutationOptions<userTypes.User, Error, userTypes.User>,
    'mutationKey' | 'mutationFn'
  >
) => {
  const mutationKey = `${baseUrl}/user`;
  const mutationFn = (data: userTypes.User) =>
    fetch.put<userTypes.User>(`${mutationKey}?userId=${data.id}`, data).then((res) => res.data);
  return useMutation({ mutationKey: [mutationKey], mutationFn, ...options });
};
