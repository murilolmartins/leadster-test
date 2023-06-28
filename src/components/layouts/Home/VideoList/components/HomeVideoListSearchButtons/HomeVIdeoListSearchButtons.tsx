import { Button } from '@components-common';
import { VideoCategory } from '@enums';
import { useVideoList } from '@hooks';

import * as S from './HomeVideoListSearchButtons.styles';

const HomeVideoListSearchButtons = () => {
  const { handleFilterData, handleResetData } = useVideoList();
  return (
    <S.HomeVideoListSerchButtonsContainer>
      {Object.values(VideoCategory).map((category) => (
        <Button
          key={category}
          onClick={() => handleFilterData(category)}
          autoFocus
        >
          {category}
        </Button>
      ))}
      <Button onClick={handleResetData}>Todos</Button>
    </S.HomeVideoListSerchButtonsContainer>
  );
};

export { HomeVideoListSearchButtons };
