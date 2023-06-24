import Image from 'next/image';

import logo from '../../../../public/images/logo.png';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Image src={logo} alt="Leadster logo" />
    </S.HeaderContainer>
  );
};

export { Header };
