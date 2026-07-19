import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { fetch } from '@config/axios';

import { baseUrl, postTypes } from '..';

export const useAddPost = (
  options?: Omit<
    UseMutationOptions<postTypes.Post, Error, postTypes.Post>,
    'mutationKey' | 'mutationFn'
  >
) => {
  const mutationKey = `${baseUrl}/post`;
  const mutationFn = (data: postTypes.Post) =>
    fetch.post<postTypes.Post>(mutationKey, data).then((res) => res.data);
  return useMutation({ mutationKey: [mutationKey], mutationFn, ...options });
};
