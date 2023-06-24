import { PageSection } from 'components/common';

import { HomeBannerColoredTitle } from './components/HomeBannerColoredTitle';
import * as S from './HomeBanner.styles';

import theme from 'styles/theme';

const HomeBanner = () => {
  return (
    <PageSection backgroudColor={theme.colors.light_blue}>
      <S.HomeBannerContainer>
        <S.HomeBannerTag>
          <S.HomeBannerTagText>WEBINARS EXCLUSIVOS</S.HomeBannerTagText>
        </S.HomeBannerTag>
        <S.HomeBannerTitle>Menos conversinha,</S.HomeBannerTitle>
        <HomeBannerColoredTitle />
        <S.HomeBannerDivisor />
        <S.HomeBannerDescription>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
          seu negócio.
        </S.HomeBannerDescription>
      </S.HomeBannerContainer>
    </PageSection>
  );
};

export { HomeBanner };
