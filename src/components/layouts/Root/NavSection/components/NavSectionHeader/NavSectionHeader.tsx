import logo from '@images/logo.png';
import { theme } from '@styles';

import * as S from './NavSectionHeader.styles';

const NavSectionHeader = () => {
  return (
    <S.NavSectionHeaderContainer>
      <S.NavSectionHeaderLogo src={logo} alt="Leadster logo" />
      <S.NavSectionHeaderImageText className={theme.p.classes.small}>
        Transformando visitantes em cliente
      </S.NavSectionHeaderImageText>
    </S.NavSectionHeaderContainer>
  );
};

export { NavSectionHeader };
