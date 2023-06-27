import { VideoModalContent } from './VideoModalContent/VideoModalContent';

import { useVideoModal } from '@contexts';
import { Modal } from 'antd';

const VideoModal = () => {
  const { isModalVisible, handleCloseModal } = useVideoModal();
  return (
    <Modal
      open={isModalVisible}
      onCancel={handleCloseModal}
      centered
      className="video-modal"
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
    >
      <VideoModalContent />
    </Modal>
  );
};

export { VideoModal };
