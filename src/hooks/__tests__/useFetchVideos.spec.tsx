import * as ReactQuery from '@tanstack/react-query';
import { ReactQueryWrapper } from '@test';
import { renderHook, waitFor } from '@testing-library/react';
import videos from 'db/videos.json';
import { useFetchVideos } from 'hooks/useFetchVideos';

jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
  jest.fn().mockReturnValue({
    data: videos,
    isLoading: false,
    isSuccess: true
  })
);

describe('useFetchVideos', () => {
  it('should fetch videos from local api', async () => {
    const { result } = renderHook(() => useFetchVideos(), {
      wrapper: ReactQueryWrapper
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(videos);
  });
});
