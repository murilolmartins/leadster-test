import { Button } from '@components-common';
import { videoListValues } from '@constants';

import * as S from './VideoListSearchButtons.styles';

import { useVideoList } from '@contexts';
import { VideoCategory } from '@enums';

const VideoListSearchButtons = () => {
  const { handleFilterData, setData } = useVideoList();
  return (
    <S.VideoListSerchButtonsContainer>
      {Object.values(VideoCategory).map((category) => (
        <Button key={category} onClick={() => handleFilterData(category)}>
          {category}
        </Button>
      ))}
      <Button onClick={() => setData(videoListValues)}>Todos</Button>
    </S.VideoListSerchButtonsContainer>
  );
};

export { VideoListSearchButtons };
