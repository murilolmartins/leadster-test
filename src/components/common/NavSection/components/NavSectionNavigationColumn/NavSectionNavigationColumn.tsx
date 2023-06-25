import { ReactNode } from 'react';

import * as S from './NavSectionNavigationColumn.styles';

import { NavSectionColum } from 'interfaces';

type NavSectionNavigationColumnProps = Partial<NavSectionColum> & {
  children?: ReactNode;
};

const NavSectionNavigationColumn = ({
  title,
  links,
  children
}: NavSectionNavigationColumnProps) => {
  return (
    <S.NavSectionNavigationColumnContainer>
      <S.NavSectionNavigationColumnTitle>
        {title}
      </S.NavSectionNavigationColumnTitle>
      {links && (
        <S.NavSectionNavigationColumnLinksContainer>
          {links.map(({ text, url }) => (
            <S.NavSectionNavigationColumnLinkContainer
              key={crypto.randomUUID()}
            >
              <S.NavSectionNavigationColumnLink href={url}>
                {text}
              </S.NavSectionNavigationColumnLink>
            </S.NavSectionNavigationColumnLinkContainer>
          ))}
        </S.NavSectionNavigationColumnLinksContainer>
      )}
      {children}
    </S.NavSectionNavigationColumnContainer>
  );
};

export { NavSectionNavigationColumn };
