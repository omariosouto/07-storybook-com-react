import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;
  ${({ theme, variant }) => {
    /* console.log(theme); */
    return {
      backgroundColor: theme.colors[variant].main,
      color: theme.colors[variant].text,
      ':hover': {
        backgroundColor: theme.colors[variant].light,
      },
      ':focus': {
        backgroundColor: theme.colors[variant].dark,
      },
    };
  }}
`;

interface ButtonProps {
  /** Essa prop é baseada nas opções de cor que temos no nosso tema, confira a página do tema para mais infos  */
  variant?: 'primary' | 'accent';
  disabled?: boolean;
  /** Esse onClick tem integração mágica com eventos ...  */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  disabled: false,
  variant: 'primary'
}
