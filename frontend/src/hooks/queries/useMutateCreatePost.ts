import {createPost} from '@/api';
import {queryClient} from '@/api/queryClient';
import {queryKeys} from '@/constants';
import {UseMutationCustomOptions} from '@/types/common';
import {Marker} from '@/types/domain';
import {useMutation} from '@tanstack/react-query';

export default function useMutateCreatePost(
  mutationOptions?: UseMutationCustomOptions,
) {
  return useMutation({
    mutationFn: createPost,
    onSuccess: newPost => {
      queryClient.setQueryData<Marker[]>(
        [queryKeys.MARKER, queryKeys.GET_MARKERS],
        existingMarkers => {
          const newMarker = {
            id: newPost.id,
            latitude: newPost.latitude,
            longitude: newPost.longitude,
            color: newPost.color,
            score: newPost.score,
          };

          return existingMarkers
            ? [...existingMarkers, newMarker]
            : [newMarker];
        },
      );
    },
    ...mutationOptions,
  });
}
