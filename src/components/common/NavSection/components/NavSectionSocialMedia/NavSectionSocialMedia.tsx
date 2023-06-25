import * as S from './NavSectionSocialMedia.styles';

import { NavSectionSocialMediaValues } from '@constants';
import { nanoid } from 'nanoid';

const NavSectionSocialMedia = () => {
  return (
    <S.NavSectionSocialMediaContainer>
      <S.NavSectionSocialMediaList>
        {NavSectionSocialMediaValues.map(({ url, icon: Icon }) => (
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
