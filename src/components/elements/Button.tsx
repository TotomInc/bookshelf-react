import React from 'react';
import clsx from 'clsx';

const VARIANTS = {
  primary: 'bg-blue-600 text-slate-100 hover:bg-blue-500',
  secondary: 'bg-gray-600 text-slate-100 hover:bg-gray-500',
  tertiary: 'text-red-600',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANTS;
};

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof VARIANTS;
};

/**
 * A `<button />` that already have a default style. You can use the `variant`
 * prop to set a default variant style (`primary, secondary or tertiary`).
 *
 * Use this button component only for actions that doesn't make the user leave
 * the page.
 */
export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => (
  <button
    type="button"
    className={clsx(
      'flex items-center justify-center px-4 py-2 rounded-sm font-medium text-base transition duration-100',
      VARIANTS[variant],
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

/**
 * A `<a />` that already have a default style similar to a button. You can use
 * the `variant` prop to set a default variant style (`primary, secondary or
 * tertiary`).
 *
 * Use this link-button component only for actions that will make the user
 * leave the page.
 */
export const LinkButton: React.FC<ButtonLinkProps> = ({
  children,
  href,
  type,
  target,
  variant = 'primary',
  className = '',
  ...props
}) => (
  <a
    href={href}
    target={target}
    type={type}
    className={clsx(
      'flex items-center justify-center px-4 py-2 rounded-sm font-medium text-base transition duration-100 cursor-pointer',
      VARIANTS[variant],
      className,
    )}
    {...props}
  >
    {children}
  </a>
);
