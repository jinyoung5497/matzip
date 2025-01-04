import {createPost} from '@/api';
import {UseMutationCustomOptions} from '@/types/common';
import {useMutation} from '@tanstack/react-query';
import React from 'react';

export default function useMutateCreatePost(
  mutationOptions?: UseMutationCustomOptions,
) {
  return useMutation({
    mutationFn: createPost,
    ...mutationOptions,
  });
}
