import { navSectionLinksValues } from '@constants';

import { PageSection } from '../PageSection/PageSection';
import { NavSectionContacts } from './components/NavSectionContacts/NavSectionContacts';
import { NavSectionHeader } from './components/NavSectionHeader/NavSectionHeader';
import { NavSectionNavigationColumn } from './components/NavSectionNavigationColumn/NavSectionNavigationColumn';
import NavSectionSocialMedia from './components/NavSectionSocialMedia/NavSectionSocialMedia';
import * as S from './NavSection.styles';

import { nanoid } from 'nanoid';

const NavSection = () => {
  return (
    <PageSection>
      <S.NavSectionContainer>
        <NavSectionHeader />
        <S.NavSectionContent>
          {navSectionLinksValues.map((item) => (
            <NavSectionNavigationColumn {...item} key={nanoid()} />
          ))}
          <NavSectionNavigationColumn title="Siga a Leadster">
            <NavSectionSocialMedia />
            <NavSectionContacts />
          </NavSectionNavigationColumn>
        </S.NavSectionContent>
      </S.NavSectionContainer>
    </PageSection>
  );
};

export { NavSection };
