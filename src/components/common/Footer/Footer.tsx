import { footerItemsValues } from '@constants';

import * as S from './Footer.styles';
import { FooterItem } from './FooterItem/FooterItem';

import { nanoid } from 'nanoid';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterItemsContainer>
        {footerItemsValues.map((item) => (
          <FooterItem {...item} key={nanoid()} />
        ))}
      </S.FooterItemsContainer>
    </S.FooterContainer>
  );
};

export { Footer };
