import { ButtonType } from '@enums';
import { Button } from 'antd';
import styled, { css } from 'styled-components';

const secondary = css`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  ::selection {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonTypeMap = {
  [ButtonType.SECONDARY]: secondary
};

interface ButtonContainerProps {
  buttonType?: ButtonType;
}

export const ButtonContainer = styled(Button)<ButtonContainerProps>`
  border-radius: 15px;
  ${({ buttonType }) => buttonType && ButtonTypeMap[buttonType]}
`;
