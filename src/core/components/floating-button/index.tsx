import React from 'react';

interface FloatingButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, className = '', children }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-7 right-7 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default FloatingButton;
