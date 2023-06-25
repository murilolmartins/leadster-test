import { StaticImageData } from 'next/image';

import * as S from './InfoTag.styles';

interface InfoTagProps {
  text: string;
  src: StaticImageData;
}

const InfoTag = ({ text, src }: InfoTagProps) => {
  return (
    <S.InfoTagContainer>
      <S.InfoTagImage src={src} alt="Ícone de tag" />
      <S.InfoTagText className="p_small">{text}</S.InfoTagText>
    </S.InfoTagContainer>
  );
};

export { InfoTag };
