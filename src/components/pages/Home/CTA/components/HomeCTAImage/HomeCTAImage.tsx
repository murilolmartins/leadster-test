import * as S from './HomeCTAImage.styles';

import leadsComparative from '@images/leads-comparative.png';

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
