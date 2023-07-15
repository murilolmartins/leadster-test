import { ReactNode } from 'react';

import * as S from './VideoModalContent.styles';

interface VideoModalContentProps {
  children: ReactNode;
}

const VideoModalContent = ({ children }: VideoModalContentProps) => {
  return (
    <S.VideoModalContentContainer>{children}</S.VideoModalContentContainer>
  );
};

export { VideoModalContent };
