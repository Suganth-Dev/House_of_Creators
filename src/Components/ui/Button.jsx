import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  fullWidth = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  const sizeStyles = 'px-6 py-3 text-base';
  
  const variantStyles = {
    primary: 'bg-indigo-800 hover:bg-indigo-700 text-white shadow-sm hover:shadow',
    secondary: 'bg-coral-500 hover:bg-coral-400 text-white shadow-sm hover:shadow',
    outline: 'border-2 border-indigo-800 text-indigo-800 hover:bg-indigo-50',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const allStyles = `${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${widthStyles} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allStyles} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={allStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
