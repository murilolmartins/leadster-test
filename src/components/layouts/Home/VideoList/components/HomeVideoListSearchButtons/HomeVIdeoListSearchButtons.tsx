import { Button } from '@components-common';
import { videoListValues } from '@constants';
import { VideoCategory } from '@enums';
import { useVideoList } from '@hooks';

import * as S from './HomeVideoListSearchButtons.styles';

const HomeVideoListSearchButtons = () => {
  const { handleFilterData, setData } = useVideoList();
  return (
    <S.HomeVideoListSerchButtonsContainer>
      {Object.values(VideoCategory).map((category) => (
        <Button key={category} onClick={() => handleFilterData(category)}>
          {category}
        </Button>
      ))}
      <Button onClick={() => setData(videoListValues)}>Todos</Button>
    </S.HomeVideoListSerchButtonsContainer>
  );
};

export { HomeVideoListSearchButtons };
