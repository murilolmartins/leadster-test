import { FaPlay } from 'react-icons/fa';

import { useVideoModal } from '@hooks';
import thumbnail from '@images/thumbnail.png';
import { IVideoListItem } from '@interfaces';
import { theme } from '@styles';

import * as S from './HomeVideoListCard.styles';

type HomeVideoListCardProps = Pick<
  IVideoListItem,
  'title' | 'description' | 'url'
>;

const HomeVideoListCard = ({
  title,
  url,
  description
}: HomeVideoListCardProps) => {
  const { handleOpenModal } = useVideoModal();
  return (
    <S.HomeVideoListCardContainer
      onClick={() => handleOpenModal({ url, title, description })}
    >
      <S.HomeVideoListCardImageContainer>
        <S.HomeVideoListCardImageOpacity className="hidden_play" />
        <S.HomeVideoListCardImageIconContainer className="hidden_play">
          <FaPlay color={theme.colors.white} size={50} />
        </S.HomeVideoListCardImageIconContainer>
        <S.HomeVideoListCardImage src={thumbnail} alt={title} priority />
      </S.HomeVideoListCardImageContainer>
      <S.HomeVideoListCardInfoContainer>
        <S.HomeVideoListCardTitle className="text_primary_color">
          {title}
        </S.HomeVideoListCardTitle>
      </S.HomeVideoListCardInfoContainer>
    </S.HomeVideoListCardContainer>
  );
};

export { HomeVideoListCard };
