import * as S from './VideoModalHeader.styles';

interface VideoModalHeaderProps {
  title: string;
}

const VideoModalHeader = ({ title }: VideoModalHeaderProps) => {
  return (
    <S.VideoModalHeaderContainer>
      <S.VideoModalTitle>
        <S.VideoModalSubtitle>Webinar: </S.VideoModalSubtitle>
        {title}
      </S.VideoModalTitle>
    </S.VideoModalHeaderContainer>
  );
};

export { VideoModalHeader };
