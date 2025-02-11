'use client';

import Skeleton from '@/components/Skeleton';
import { lazy, Suspense } from 'react';

const Board = lazy(() => import('@/components/Board'));
const Assets = lazy(() => import('@/components/Assets'));

const HomeGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<Skeleton />}>
        <Board />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <Assets />
      </Suspense>
    </div>
  );
};

export default HomeGallery;
