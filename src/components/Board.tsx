import React, { useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { fetchBoards } from '@/app/api/boards';
import Skeleton from './Skeleton';
import Title from './Title';
import Card from './Card';

const Board = () => {
  const [showBoards, setShowBoards] = useState(true);

  const { data, isLoading } = useQuery({
    queryKey: ['boards'],
    queryFn: fetchBoards,
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="mb-6">
      <Title
        showIcon={showBoards}
        title="Boards"
        count={data?.total ?? 0}
        onClick={() => setShowBoards(!showBoards)}
      />

      {showBoards && (
        <div className="flex gap-4">
          {data?.data.map((board) => (
            <Card
              key={board.id}
              imageUrl={board?.thumbnails?.[0]}
              title={board.title}
              height={204}
              width={236}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
