import { useQuery } from '@tanstack/react-query';
import { getVideos } from 'services/getVideos.service';

export function useFetchVideos() {
  return useQuery(['videos'], getVideos, {
    initialData: []
  });
}
