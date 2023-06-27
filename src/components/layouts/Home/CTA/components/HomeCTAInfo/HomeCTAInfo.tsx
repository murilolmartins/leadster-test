import { InfoTag, LinkButton } from '@components-common';
import cardTag from '@images/no-card-dark.webp';
import ratingTag from '@images/rating.webp';
import rdImage from '@images/selo_RD.png';

import * as S from './HomeCTAInfo.styles';

const HomeCTAInfo = () => {
  return (
    <S.HomeCTAInfoContainer>
      <S.HomeCTAInfoTextContainer>
        <S.HomeCTAInfoTitle>
          Pronto para triplicar sua <b>Geração de leads?</b>
        </S.HomeCTAInfoTitle>
        <S.HomeCTAInfoSubtitle>
          Criação e ativação em <b>4 minutos</b>.
        </S.HomeCTAInfoSubtitle>
      </S.HomeCTAInfoTextContainer>
      <S.HomeCTAInfoDivisor />
      <S.HomeCTAInfoButtonContainer>
        <LinkButton href="/" size="large">
          VER DEMONSTRAÇÃO
        </LinkButton>
        <S.HomeCTAInfoRDImage src={rdImage} alt="Selo RD" />
      </S.HomeCTAInfoButtonContainer>
      <S.HomeCTAInfoTagsContainer>
        <InfoTag text="Não é necessario Cartão de Crédito" src={cardTag} />
        <S.HomeCTAInfoTagsDivisor />
        <InfoTag text="4.9/5 média de satisfação" src={ratingTag} />
      </S.HomeCTAInfoTagsContainer>
    </S.HomeCTAInfoContainer>
  );
};

export { HomeCTAInfo };
