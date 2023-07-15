import { PageSection } from '@components-common';
import { navSectionLinksValues } from '@constants';

import { NavSectionContacts } from './components/NavSectionContacts/NavSectionContacts';
import { NavSectionHeader } from './components/NavSectionHeader/NavSectionHeader';
import { NavSectionNavigationColumn } from './components/NavSectionNavigationColumn/NavSectionNavigationColumn';
import { NavSectionSocialMedia } from './components/NavSectionSocialMedia/NavSectionSocialMedia';
import * as S from './NavSection.styles';

const NavSection = () => {
  return (
    <PageSection>
      <S.NavSectionContainer>
        <NavSectionHeader />
        <S.NavSectionContent>
          {navSectionLinksValues.map((item) => (
            <NavSectionNavigationColumn {...item} key={item.title} />
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
