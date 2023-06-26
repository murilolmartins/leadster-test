import { FooterItem } from '@interfaces';

import * as S from './FooterItem.styles';

type FooterItemProps = FooterItem;

const FooterItem = ({ text, link }: FooterItemProps) => {
  return (
    <S.FooterItemContainer>
      <S.FooterItemText className="p_footer">{text}</S.FooterItemText>
      <S.FooterItemDivisor />
      <S.FooterItemLink href={link.url}>{link.label}</S.FooterItemLink>
    </S.FooterItemContainer>
  );
};

export { FooterItem };
