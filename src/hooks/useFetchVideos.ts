import { getVideos } from '@services';
import { useQuery } from '@tanstack/react-query';

export function useFetchVideos() {
  return useQuery(['videos'], getVideos, {
    initialData: []
  });
}
