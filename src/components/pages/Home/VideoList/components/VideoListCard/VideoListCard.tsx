import { FaPlay } from 'react-icons/fa';

import { IVideoListItem } from '@interfaces';
import { theme } from '@styles';

import * as S from './VideoListCard.styles';

import { useVideoModal } from '@contexts';

type VideoListCardProps = Pick<
  IVideoListItem,
  'title' | 'thumbnail' | 'description' | 'url'
>;

const VideoListCard = ({
  thumbnail,
  title,
  url,
  description
}: VideoListCardProps) => {
  const { handleOpenModal } = useVideoModal();
  return (
    <S.VideoListCardContainer
      onClick={() => handleOpenModal({ url, title, description })}
    >
      <S.VideoListCardImageContainer>
        <S.VideoListCardImageOpacity className="hidden_play" />
        <S.VideoListCardImageIconContainer className="hidden_play">
          <FaPlay color={theme.colors.white} size={50} />
        </S.VideoListCardImageIconContainer>
        <S.VideoListCardImage src={thumbnail} alt={title} />
      </S.VideoListCardImageContainer>
      <S.VideoListCardInfoContainer>
        <S.VideoListCardTitle className="text_primary_color">
          {title}
        </S.VideoListCardTitle>
      </S.VideoListCardInfoContainer>
    </S.VideoListCardContainer>
  );
};

export { VideoListCard };
