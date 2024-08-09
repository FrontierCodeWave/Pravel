'use client';

import { useMemo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  flex?: boolean;
  border?: boolean;
  borderColor?: string;
  fill?: string;
  color?: string;
}

const Button = (props: ButtonProps) => {
  const {
    flex,
    border,
    borderColor,
    fill,
    children,
    color,
    className,
    ...rest
  } = props;
  const classNames = useMemo(() => {
    let base = 'bg-primary border-none text-white font-bold';

    if (flex) {
      base += ' flex items-center justify-center';
    }

    if (border) {
      base += ' border-solid border-[1px] border-[#7b7b7b]';
    }

    if (borderColor) {
      base += ` border-[${borderColor}]`;
    }

    if (fill) {
      base += ` bg-[${fill}]`;
    }

    if (color) {
      base += ` text-[${color}]`;
    }

    return `${base} ${className}`;
  }, [flex, border, borderColor, className, color, fill]);

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
