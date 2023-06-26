import { navSectionSocialMediaValues } from '@constants';

import * as S from './NavSectionSocialMedia.styles';

import { nanoid } from 'nanoid';

const NavSectionSocialMedia = () => {
  return (
    <S.NavSectionSocialMediaContainer>
      <S.NavSectionSocialMediaList>
        {navSectionSocialMediaValues.map(({ url, icon: Icon }) => (
          <S.NavSectionSocialMediaListItem key={nanoid()}>
            <S.NavSectionSocialMediaLink
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon style={{ fontSize: '14px' }} size={20} />
            </S.NavSectionSocialMediaLink>
          </S.NavSectionSocialMediaListItem>
        ))}
      </S.NavSectionSocialMediaList>
    </S.NavSectionSocialMediaContainer>
  );
};

export default NavSectionSocialMedia;
