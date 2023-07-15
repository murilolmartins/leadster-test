import { navSectionContactsValues } from '@constants';

import * as S from './NavSectionContacts.styles';

const NavSectionContacts = () => {
  return (
    <S.NavSectionContactsContainer>
      <S.NavSectionContactsList>
        {navSectionContactsValues.map(({ label, text }) => (
          <S.NavSectionContactsItem key={label}>
            <S.NavSectionContactLabel className="p_footer">
              {label}
            </S.NavSectionContactLabel>
            <S.NavSectionContactText className="p_footer">
              {text}
            </S.NavSectionContactText>
          </S.NavSectionContactsItem>
        ))}
      </S.NavSectionContactsList>
    </S.NavSectionContactsContainer>
  );
};

export { NavSectionContacts };
