'use client';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5';
  
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl',
    success: 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}