import { navSectionSocialMediaValues } from '@constants';

import * as S from './NavSectionSocialMedia.styles';

const NavSectionSocialMedia = () => {
  return (
    <S.NavSectionSocialMediaContainer>
      <S.NavSectionSocialMediaList>
        {navSectionSocialMediaValues.map(({ url, icon: Icon, title }) => (
          <S.NavSectionSocialMediaListItem key={title}>
            <S.NavSectionSocialMediaLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link para ${title}`}
            >
              <Icon style={{ fontSize: '14px' }} size={20} />
            </S.NavSectionSocialMediaLink>
          </S.NavSectionSocialMediaListItem>
        ))}
      </S.NavSectionSocialMediaList>
    </S.NavSectionSocialMediaContainer>
  );
};

export { NavSectionSocialMedia };
