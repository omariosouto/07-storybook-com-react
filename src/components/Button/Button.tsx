import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
}
