import { Button } from '@components-common';

import * as S from './VideoListSearchButtons.styles';

import { VideoCategory } from '@enums';

const VideoListSearchButtons = () => {
  return (
    <S.VideoListSerchButtonsContainer>
      {Object.values(VideoCategory).map((category) => (
        <Button key={category}>{category}</Button>
      ))}
    </S.VideoListSerchButtonsContainer>
  );
};

export { VideoListSearchButtons };
