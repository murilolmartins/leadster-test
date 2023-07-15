import { useVideoModal } from '@hooks';

import { VideoModalBody } from './components';

import { Modal } from 'antd';

const VideoModal = () => {
  const { isVideoModalOpen, handleCloseVideoModal, videoModalData } =
    useVideoModal();
  return (
    <Modal
      open={isVideoModalOpen}
      onCancel={handleCloseVideoModal}
      centered
      className="video-modal"
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
    >
      <VideoModalBody.Content>
        <VideoModalBody.Header title={videoModalData.title} />
        <VideoModalBody.Iframe url={videoModalData.url} />
        <VideoModalBody.Footer description={videoModalData.description} />
      </VideoModalBody.Content>
    </Modal>
  );
};

export { VideoModal };
