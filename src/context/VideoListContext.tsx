/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';

import { VideoCategory, VideoListKeys } from '@enums';
import { IVideoListItem, VideoApiResponse } from '@interfaces';

import { connectionAPIGet, sortArray } from '@utils';

interface VideoListProviderProps {
  initialData?: IVideoListItem[];
  children: ReactNode;
}

interface VideoListProviderData {
  data: IVideoListItem[];
  handleFilterData: (searchTerm: VideoCategory) => void;
  handleOrderData: (orderTerm: VideoListKeys) => void;
  setData: Dispatch<SetStateAction<IVideoListItem[]>>;
  handleResetData: () => void;
  orderTerm: VideoListKeys;
  isLoading: boolean;
}

export const VideoListContext = createContext<VideoListProviderData>(
  {} as VideoListProviderData
);

export const VideoListProvider = ({ children }: VideoListProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IVideoListItem[]>([]);
  const [initialData, setInitialData] = useState<IVideoListItem[]>([]);
  const [orderTerm, setOrderTerm] = useState<VideoListKeys>(
    VideoListKeys.CREATED_AT
  );

  const handleOrderData = (newOrderTerm: VideoListKeys) => {
    const orderedData = sortArray(data, newOrderTerm);

    setOrderTerm(newOrderTerm);
    setData(() => [...orderedData]);
  };

  const handleFilterData = (searchTerm: VideoCategory) => {
    const filteredData = sortArray(
      initialData.filter(({ category }) => category.includes(searchTerm)),
      orderTerm
    );

    setData(filteredData);
  };

  const handleResetData = () => {
    setData(sortArray(initialData, orderTerm));
  };

  useEffect(() => {
    connectionAPIGet<VideoApiResponse>('/api/videos')
      .then((response) => {
        setData(sortArray(response.videos, orderTerm));
        setInitialData(response.videos);
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
        setData,
        orderTerm,
        isLoading
      }}
    >
      {children}
    </VideoListContext.Provider>
  );
};

export const useVideoList = () => useContext(VideoListContext);
