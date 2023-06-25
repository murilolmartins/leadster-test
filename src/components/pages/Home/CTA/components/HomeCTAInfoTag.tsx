import { StaticImageData } from 'next/image';

import * as S from './HomeCTAInfoTag.styles';

interface HomeCTAInfoTagProps {
  text: string;
  src: StaticImageData;
}

const HomeCTAInfoTag = ({ text, src }: HomeCTAInfoTagProps) => {
  return (
    <S.HomeCTAInfoTagContainer>
      <S.HomeCTAInfoTagImage src={src} alt="Ícone de tag" />
      <S.HomeCTAInfoTagText>{text}</S.HomeCTAInfoTagText>
    </S.HomeCTAInfoTagContainer>
  );
};

export { HomeCTAInfoTag };
