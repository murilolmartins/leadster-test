import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';

import { IVideoListItem } from '@interfaces';

type VideoModalData = Pick<IVideoListItem, 'url' | 'title' | 'description'>;

interface VideoModalProviderProps {
  children: ReactNode;
  initialVisible?: boolean;
  initialData?: VideoModalData;
}

interface VideoModalProviderData {
  data: VideoModalData;
  isModalVisible: boolean;
  handleOpenModal: (videoData: VideoModalData) => void;
  handleCloseModal: () => void;
  setData: Dispatch<SetStateAction<VideoModalData>>;
}

export const VideoModalContext = createContext<VideoModalProviderData>(
  {} as VideoModalProviderData
);

export const VideoModalProvider = ({
  children,
  initialVisible = false,
  initialData = {} as VideoModalData
}: VideoModalProviderProps) => {
  const [data, setData] = useState<VideoModalData>(initialData);
  const [isModalVisible, setIsModalVisible] = useState(initialVisible);

  const handleOpenModal = (videoData: VideoModalData) => {
    setData(videoData);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    const iframeModal = document.getElementById('responsive-iframe');

    iframeModal?.setAttribute('src', iframeModal.getAttribute('src')!);
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
