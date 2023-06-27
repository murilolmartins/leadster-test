import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

import { IVideoListItem } from '@interfaces';

type VideoModalData = Pick<IVideoListItem, 'url' | 'title' | 'description'>;

interface VideoModalProviderProps {
  children: ReactNode;
}

interface VideoModalProviderData {
  data: VideoModalData;
  isModalVisible: boolean;
  handleOpenModal: (videoData: VideoModalData) => void;
  handleCloseModal: () => void;
  setData: Dispatch<SetStateAction<VideoModalData>>;
}

const VideoModalContext = createContext<VideoModalProviderData>(
  {} as VideoModalProviderData
);

export const VideoModalProvider = ({ children }: VideoModalProviderProps) => {
  const [data, setData] = useState<VideoModalData>({} as VideoModalData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = (videoData: VideoModalData) => {
    setData(videoData);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <VideoModalContext.Provider
      value={{
        data,
        isModalVisible,
        handleOpenModal,
        handleCloseModal,
        setData
      }}
    >
      {children}
    </VideoModalContext.Provider>
  );
};

export const useVideoModal = () => useContext(VideoModalContext);
