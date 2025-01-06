import {uploadImages} from '@/api';
import {UseMutationCustomOptions} from '@/types/common';
import {useMutation} from '@tanstack/react-query';

export default function useMutateImages(
  mutationOptions?: UseMutationCustomOptions,
) {
  return useMutation({
    mutationFn: uploadImages,
    ...mutationOptions,
  });
}
