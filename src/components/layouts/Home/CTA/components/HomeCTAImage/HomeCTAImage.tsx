import leadsComparative from '@images/leads-comparative.png';

import * as S from './HomeCTAImage.styles';

const HomeCTAImage = () => {
  return (
    <S.HomeCTAImageContainer>
      <S.HomeCTAImage
        src={leadsComparative}
        alt="Comparativo geração de leads"
      />
    </S.HomeCTAImageContainer>
  );
};

export { HomeCTAImage };
