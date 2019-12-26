import React from 'react';

import styles from './styles.css';

interface SkeletonTextProps {
  dummyText: string;
  className?: string;
  skeletonType?: 'blurred' | 'gradient';
}

const SkeletonText: React.SFC<SkeletonTextProps> = ({ dummyText, className, children, skeletonType = 'blurred' }) => {
  const customClass = className ? ' ' + className : '';
  const classNames = `${children ? '' : styles[skeletonType]}${customClass}`;

  return <span className={classNames}>{children ? children : dummyText}</span>;
};

export default SkeletonText;
