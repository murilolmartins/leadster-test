import { VideoModalData } from '@interfaces';

import { create } from 'zustand';

type VideoModalStore = {
  videoModalData: VideoModalData;
  isVideoModalOpen: boolean;
  setVideoModalData: (data: VideoModalData) => void;
  setIsVideoModalOpen: (isOpen: boolean) => void;
};

const useVideoModalStore = create<VideoModalStore>((set) => ({
  videoModalData: {
    url: '',
    title: '',
    description: ''
  },
  isVideoModalOpen: false,
  setVideoModalData: (data) =>
    set((state) => ({
      ...state,
      videoModalData: data
    })),
  setIsVideoModalOpen: (isOpen: boolean) =>
    set((state) => ({
      ...state,
      isVideoModalOpen: isOpen
    }))
}));

export default useVideoModalStore;
