import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl, userTypes } from '..';

export const useGetUser = (
  userId: string,
  options?: Omit<UseQueryOptions<userTypes.User, Error, userTypes.User>, 'queryKey' | 'queryFn'>
) => {
  const queryKey = `${baseUrl}/user`;
  const queryFn = () =>
    fetch.get<userTypes.User>(`${queryKey}?userId=${userId}`).then((res) => res.data);
  return useQuery({ queryKey: [queryKey, userId], queryFn, ...options });
};
