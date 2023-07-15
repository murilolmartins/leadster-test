import { footerItemsValues } from '@constants';

import * as S from './Footer.styles';
import { FooterItem } from './FooterItem/FooterItem';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterItemsContainer>
        {footerItemsValues.map((item) => (
          <FooterItem {...item} key={item.text} />
        ))}
      </S.FooterItemsContainer>
    </S.FooterContainer>
  );
};

export { Footer };
