import { LinkButtonType } from './LinkButton.enums';

import { Button, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';

interface StyledLinkButtonProps extends ButtonProps {
  buttonType: LinkButtonType;
}

const primary = css`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

const LinkButtonTypeMap = {
  [LinkButtonType.PRIMARY]: primary
};

export const StyledLinkButton = styled(Button)<StyledLinkButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px !important;
  padding: 5px 15px !important;
  @media (min-width: 425px) {
    padding: 10px 25px !important;
  }
  @media (min-width: 768px) {
    padding: 25px 35px !important;
  }
  ${({ buttonType }) => LinkButtonTypeMap[buttonType]}
`;

export const StyledLinkButtonText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.small};
  @media (min-width: 425px) {
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;
