import * as S from './Button.styles';

import { ButtonType } from '@enums';
import { ButtonProps as ButtonAntdProps } from 'antd';

interface ButtonProps extends ButtonAntdProps {
  buttonType?: ButtonType;
}

const Button = ({
  buttonType = ButtonType.SECONDARY,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer buttonType={buttonType} {...rest}>
      {children}
    </S.ButtonContainer>
  );
};

export { Button };
