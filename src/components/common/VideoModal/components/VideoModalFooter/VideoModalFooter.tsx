import { BsCloudDownload } from 'react-icons/bs';

import * as S from './VideoModalFooter.styles';

interface VideoModalFooterProps {
  description: string;
}

const VideoModalFooter = ({ description }: VideoModalFooterProps) => {
  return (
    <S.VideoModalFooterContainer>
      <S.VideoModalSectionContainer>
        <S.VideoModalSectionTitle>Descrição</S.VideoModalSectionTitle>
        <S.VideoModalDivisor />
        <S.VideoModalDescriptionText>{description}</S.VideoModalDescriptionText>
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
    </S.VideoModalFooterContainer>
  );
};

export { VideoModalFooter };
