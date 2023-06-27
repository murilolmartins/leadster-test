/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react';

import { videoListValues } from '@constants';
import { VideoCategory, VideoListKeys } from '@enums';
import { IVideoListItem } from '@interfaces';

interface VideoListProviderProps {
  children: ReactNode;
}

interface VideoListProviderData {
  data: IVideoListItem[];
  handleFilterData: (searchTerm: VideoCategory) => void;
  handleOrderData: (orderTerm: VideoListKeys) => void;
  setData: Dispatch<SetStateAction<IVideoListItem[]>>;
  orderTerm: VideoListKeys;
}

export const VideoListContext = createContext<VideoListProviderData>(
  {} as VideoListProviderData
);

export const VideoListProvider = ({ children }: VideoListProviderProps) => {
  const [data, setData] = useState<IVideoListItem[]>(videoListValues);
  const [orderTerm, setOrderTerm] = useState<VideoListKeys>(
    VideoListKeys.CREATED_AT
  );

  const handleOrderData = (newOrderTerm: VideoListKeys) => {
    const orderedData = data.sort((a, b) => {
      if (a[newOrderTerm] < b[newOrderTerm]) {
        return -1;
      }
      if (a[newOrderTerm] > b[newOrderTerm]) {
        return 1;
      }
      return 0;
    });

    setOrderTerm(newOrderTerm);
    setData(() => [...orderedData]);
  };

  const handleFilterData = (searchTerm: VideoCategory) => {
    const filteredData = videoListValues
      .filter(({ category }) => category.includes(searchTerm))
      .sort((a, b) => {
        if (a[orderTerm] < b[orderTerm]) {
          return -1;
        }
        if (a[orderTerm] > b[orderTerm]) {
          return 1;
        }
        return 0;
      });

    setData(filteredData);
  };

  useEffect(() => {
    handleOrderData(orderTerm);
  }, []);

  return (
    <VideoListContext.Provider
      value={{
        data,
        handleFilterData,
        handleOrderData,
        setData,
        orderTerm
      }}
    >
      {children}
    </VideoListContext.Provider>
  );
};
