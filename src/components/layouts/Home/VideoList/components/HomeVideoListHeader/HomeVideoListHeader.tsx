import { ReactNode, memo } from 'react';

import * as S from './HomeVideoListHeader.styles';

interface HomeVideoListHeaderProps {
  children: ReactNode;
}

const HomeVideoListHeader = ({ children }: HomeVideoListHeaderProps) => {
  return (
    <S.HomeVideoListHeaderContainer>{children}</S.HomeVideoListHeaderContainer>
  );
};

export default memo(HomeVideoListHeader);
