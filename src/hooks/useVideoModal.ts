/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';

import { VideoModalData } from '@interfaces';

import useVideoModalStore from 'store/videoModal';

const useVideoModal = () => {
  const {
    videoModalData,
    isVideoModalOpen,
    setVideoModalData,
    setIsVideoModalOpen
  } = useVideoModalStore();

  const handleOpenVideoModal = useCallback((videoData: VideoModalData) => {
    setVideoModalData(videoData);
    setIsVideoModalOpen(true);
  }, []);

  const handleCloseVideoModal = useCallback(() => {
    const iframeModal = document.getElementById('responsive-iframe');

    iframeModal?.setAttribute('src', iframeModal.getAttribute('src')!);
    setIsVideoModalOpen(false);
  }, []);

  return {
    videoModalData,
    isVideoModalOpen,
    handleOpenVideoModal,
    handleCloseVideoModal
  };
};

export { useVideoModal };
