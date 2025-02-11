import React, { useState } from 'react';

interface TitleProps {
  showIcon?: boolean;
  title: string;
  count?: number;
  onClick: VoidFunction;
}

const Title = ({ showIcon = true, title, count = 0, onClick }: TitleProps) => {
  return (
    <h3
      className="text-lg font-semibold inline-flex items-center gap-2 mb-2 uppercase cursor-pointer"
      onClick={onClick}
    >
      {title} {`(${count})`} {showIcon ? '▼' : '▶'}
    </h3>
  );
};

export default Title;
