/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';

import { VideoCategory, VideoListKeys } from '@enums';
import { useFetchVideos } from '@hooks';
import { IVideoListItem } from '@interfaces';

import { sortArray } from '@utils';

export const useVideos = () => {
  const { data: videos, isLoading } = useFetchVideos();
  const [searchVideos, setSearchVideos] = useState<IVideoListItem[]>([]);
  const [orderTerm, setOrderTerm] = useState<VideoListKeys>(
    VideoListKeys.CREATED_AT
  );

  const handleOrderSearchVideos = (newOrderTerm: VideoListKeys) => {
    setSearchVideos([
      ...sortArray(
        searchVideos.length > 0 ? searchVideos : videos,
        newOrderTerm
      )
    ]);
    setOrderTerm(newOrderTerm);
  };

  const handleFilterSearchVideos = useCallback(
    (searchCategory: VideoCategory) => {
      const fiteredList = sortArray(
        videos.filter(({ category }) => category === searchCategory),
        orderTerm
      );
      setSearchVideos(fiteredList);
    },
    [videos]
  );

  const handleResetSearchVideos = useCallback(() => {
    setSearchVideos([]);
  }, []);

  return {
    handleFilterSearchVideos,
    handleOrderSearchVideos,
    handleResetSearchVideos,
    orderTerm,
    searchVideos,
    videos,
    isLoading
  };
};
