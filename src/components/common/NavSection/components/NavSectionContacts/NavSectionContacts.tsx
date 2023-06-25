import * as S from './NavSectionContacts.styles';

import { NavSectionContactsValues } from '@constants';
import { nanoid } from 'nanoid';

const NavSectionContacts = () => {
  return (
    <S.NavSectionContactsContainer>
      <S.NavSectionContactsList>
        {NavSectionContactsValues.map(({ label, text }) => (
          <S.NavSectionContactsItem key={nanoid()}>
            <S.NavSectionContactLabel className="p_small">
              {label}
            </S.NavSectionContactLabel>
            <S.NavSectionContactText className="p_small">
              {text}
            </S.NavSectionContactText>
          </S.NavSectionContactsItem>
        ))}
      </S.NavSectionContactsList>
    </S.NavSectionContactsContainer>
  );
};

export { NavSectionContacts };
