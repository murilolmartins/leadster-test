import { memo } from 'react';

import { Button } from '@components-common';
import { VideoCategory } from '@enums';

import * as S from './HomeVideoListSearchButtons.styles';

interface HomeVideoListSearchButtonsProps {
  handleFilterSearchVideos: (searchTerm: VideoCategory) => void;
  handleResetSearchVideos: () => void;
}

const HomeVideoListSearchButtons = ({
  handleFilterSearchVideos,
  handleResetSearchVideos
}: HomeVideoListSearchButtonsProps) => {
  return (
    <S.HomeVideoListSerchButtonsContainer>
      {Object.values(VideoCategory).map((category) => (
        <Button
          key={category}
          onClick={() => handleFilterSearchVideos(category)}
        >
          {category}
        </Button>
      ))}
      <Button onClick={handleResetSearchVideos}>Todos</Button>
    </S.HomeVideoListSerchButtonsContainer>
  );
};

export default memo(HomeVideoListSearchButtons);
