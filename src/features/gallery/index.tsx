import { lazy, Suspense } from 'react';

import Skeleton from '@/components/Skeleton';

const Board = lazy(() => import('@/features/gallery/components/Board'));
const Assets = lazy(() => import('@/features/gallery/components/Assets'));

const HomeGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<Skeleton />}>
        <Board />
      </Suspense>

      <Suspense fallback={<Skeleton type="assets" />}>
        <Assets />
      </Suspense>
    </div>
  );
};

export default HomeGallery;
