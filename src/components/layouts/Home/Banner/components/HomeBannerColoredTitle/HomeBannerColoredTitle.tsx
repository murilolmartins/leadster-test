import textHeader from '@images/asset-header.png';

import * as S from './HomeBannerColoredTitle.styles';

const HomeBannerColoredTitle = () => {
  return (
    <S.HomeBannerColoredTitleContainer>
      <S.HomeBannerColoredTitleText>
        Mais Conversão
      </S.HomeBannerColoredTitleText>
      <S.HomeBannerColoredTitleColoredImageContainer>
        <S.HomeBannerColoredTitleColoredImage
          src={textHeader}
          alt="Adereço do texto"
        />
      </S.HomeBannerColoredTitleColoredImageContainer>
    </S.HomeBannerColoredTitleContainer>
  );
};

export { HomeBannerColoredTitle };
