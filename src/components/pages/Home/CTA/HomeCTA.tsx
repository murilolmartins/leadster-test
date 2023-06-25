import { PageSection } from 'components/common';

import { HomeCTAImage } from './components/HomeCTAImage';
import { HomeCTAInfo } from './components/HomeCTAInfo';
import * as S from './HomeCTA.styles';

import theme from 'styles/theme';

const HomeCTA = () => {
  return (
    <PageSection backgroudColor={theme.colors.light_blue}>
      <S.HomeCTAContainer>
        <HomeCTAImage />
        <HomeCTAInfo />
      </S.HomeCTAContainer>
    </PageSection>
  );
};

export { HomeCTA };
