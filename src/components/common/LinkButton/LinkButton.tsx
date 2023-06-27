import Link, { LinkProps } from 'next/link';
import React, { forwardRef, ReactNode, Ref } from 'react';

import { theme } from '@styles';

import { LinkButtonType } from './LinkButton.enums';
import * as S from './LinkButton.styles';

import { ButtonProps } from 'antd';

type LinkRef = HTMLButtonElement | HTMLAnchorElement;
type NextLinkProps = Omit<ButtonProps, 'href'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch' | 'locale'> & {
    buttontype?: LinkButtonType;
    children: ReactNode;
  };

const LinkButton = (
  {
    href,
    as,
    prefetch,
    locale,
    buttontype = LinkButtonType.PRIMARY,
    children,
    ...rest
  }: NextLinkProps,
  ref: Ref<LinkRef>
) => (
  <Link href={href} as={as} prefetch={prefetch} locale={locale} passHref>
    <S.StyledLinkButton ref={ref} type="link" buttontype={buttontype} {...rest}>
      <S.StyledLinkButtonText className={theme.p.classes.small}>
        {children}
      </S.StyledLinkButtonText>
    </S.StyledLinkButton>
  </Link>
);

export default forwardRef<LinkRef, NextLinkProps>(LinkButton);
