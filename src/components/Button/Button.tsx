import React from 'react';

export type ButtonProps = {
  label: string;
  color?: string;
}

const Button = ({label}: ButtonProps) => {
  return <button>{ label}</button>
}

export default Button;