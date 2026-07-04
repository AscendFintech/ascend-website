import React from 'react';

interface IconBadgeProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-10 h-10 rounded-lg',
  md: 'w-14 h-14 rounded-xl',
  lg: 'w-16 h-16 rounded-2xl',
};

const IconBadge: React.FC<IconBadgeProps> = ({ children, size = 'md', className = '' }) => {
  return (
    <div
      className={`inline-flex items-center justify-center flex-shrink-0 ${sizeMap[size]} bg-gold-500/[0.08] border border-gold-500/25 ${className}`}
    >
      {children}
    </div>
  );
};

export default IconBadge;
