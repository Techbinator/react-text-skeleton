import React from 'react';

import styles from './styles.css';

interface SkeletonTextProps {
  dummyText: string;
  className?: string;
  skeletonType?: 'blurred' | 'gradient';
}

const SkeletonText: React.SFC<SkeletonTextProps> = ({
  dummyText,
  className = '',
  skeletonType = 'blurred',
  children,
}) => {
  const classNames = `${children ? '' : styles[skeletonType]}${className && ' ' + className}`;

  return <span className={classNames}>{children ? children : dummyText}</span>;
};

export default SkeletonText;
