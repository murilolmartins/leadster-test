import { BsCloudDownload } from 'react-icons/bs';

import { useVideoModal } from '@hooks';

import * as S from './VideoModalContent.styles';

const VideoModalContent = () => {
  const { data } = useVideoModal();
  return (
    <S.VideoModalContentContainer>
      <S.VideoModalTitleContainer>
        <S.VideoModalTitle>
          <S.VideoModalSubtitle>Webinar: </S.VideoModalSubtitle>
          {data.title}
        </S.VideoModalTitle>
      </S.VideoModalTitleContainer>
      <div>
        <iframe
          width="100%"
          height="400px"
          src={data.url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          id="responsive-iframe"
        />
      </div>
      <S.VideoModalContent>
        <S.VideoModalSectionContainer>
          <S.VideoModalSectionTitle>Descrição</S.VideoModalSectionTitle>
          <S.VideoModalDivisor />
          <S.VideoModalDescriptionText>
            {data.description}
          </S.VideoModalDescriptionText>
        </S.VideoModalSectionContainer>
        <S.VideoModalSectionContainer>
          <S.VideoModalSectionTitle>Downloads</S.VideoModalSectionTitle>
          <S.VideoModalDivisor />
          <S.VideoModalDownLoadTagsContainer>
            <S.VideoModalDownLoadTag
              icon={<BsCloudDownload size={15} />}
              color="success"
            >
              Spreadsheet.xls
            </S.VideoModalDownLoadTag>
            <S.VideoModalDownLoadTag
              icon={<BsCloudDownload size={15} />}
              color="processing"
            >
              Documento.doc
            </S.VideoModalDownLoadTag>
            <S.VideoModalDownLoadTag
              icon={<BsCloudDownload size={15} />}
              color="error"
            >
              Presentation.ppt
            </S.VideoModalDownLoadTag>
          </S.VideoModalDownLoadTagsContainer>
        </S.VideoModalSectionContainer>
      </S.VideoModalContent>
    </S.VideoModalContentContainer>
  );
};

export { VideoModalContent };
