/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from 'react';

import { VideoCategory, VideoListKeys } from '@enums';
import { IVideoListItem, VideoApiResponse } from '@interfaces';

import { connectionAPIGet, sortArray } from '@utils';

interface VideoListProviderProps {
  children: ReactNode;
  initialData?: Data;
  initialLoading?: boolean;
}

interface Data {
  initialData: IVideoListItem[];
  search: IVideoListItem[];
}

interface VideoListProviderData {
  data: Data;
  handleFilterData: (searchTerm: VideoCategory) => void;
  handleOrderData: (orderTerm: VideoListKeys) => void;
  handleResetData: () => void;
  orderTerm: VideoListKeys;
  isLoading: boolean;
}

export const VideoListContext = createContext<VideoListProviderData>(
  {} as VideoListProviderData
);

export const VideoListProvider = ({
  initialLoading = true,
  initialData = { search: [], initialData: [] },
  children
}: VideoListProviderProps) => {
  const [data, setData] = useState<Data>(initialData);
  const [orderTerm, setOrderTerm] = useState<VideoListKeys>(
    VideoListKeys.CREATED_AT
  );
  const [isLoading, setIsLoading] = useState<boolean>(initialLoading);

  const handleOrderData = (newOrderTerm: VideoListKeys) => {
    console.log(data.search);
    setOrderTerm(newOrderTerm);
    setData((previosData) => {
      return {
        ...previosData,
        search: sortArray(previosData.search, newOrderTerm)
      };
    });
  };

  const handleFilterData = (searchTerm: VideoCategory) => {
    const filteredData = sortArray(
      data.initialData.filter(({ category }) => category.includes(searchTerm)),
      orderTerm
    );

    setData((previosData) => {
      return {
        ...previosData,
        search: filteredData
      };
    });
  };

  const handleResetData = () => {
    setData((previosData) => {
      return {
        ...previosData,
        search: sortArray(previosData.initialData, orderTerm)
      };
    });
  };

  useEffect(() => {
    connectionAPIGet<VideoApiResponse>('/api/videos')
      .then((response) => {
        setData({
          initialData: response.videos,
          search: sortArray(response.videos, orderTerm)
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <VideoListContext.Provider
      value={{
        data,
        handleFilterData,
        handleOrderData,
        handleResetData,
        orderTerm,
        isLoading
      }}
    >
      {children}
    </VideoListContext.Provider>
  );
};
