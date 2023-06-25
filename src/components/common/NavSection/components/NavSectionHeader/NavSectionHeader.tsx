import * as S from './NavSectionHeader.styles';

import logo from '@images/logo.png';

const NavSectionHeader = () => {
  return (
    <S.NavSectionHeaderContainer>
      <S.NavSectionHeaderLogo src={logo} alt="Leadster logo" />
      <S.NavSectionHeaderImageText className="p_small">
        Transformando visitantes em cliente
      </S.NavSectionHeaderImageText>
    </S.NavSectionHeaderContainer>
  );
};

export { NavSectionHeader };
