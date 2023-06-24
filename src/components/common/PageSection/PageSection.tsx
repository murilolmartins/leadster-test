import { ReactNode } from 'react';

import * as S from './PageSection.styles';

interface PageSectionProps {
  backgroudColor?: string;
  children: ReactNode;
}

const PageSection = ({ backgroudColor, children }: PageSectionProps) => {
  return (
    <S.PageSectionContainer backgroundColor={backgroudColor}>
      {children}
    </S.PageSectionContainer>
  );
};

export { PageSection };
