import { useState } from 'react';
import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchAssets } from '@/app/api/clips';
import Skeleton from './Skeleton';
import Title from './Title';
import Card from './Card';

const Assets = () => {
  const [showAssets, setShowAssets] = useState(true);

  const { data, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Page>({
      queryKey: ['assets'],
      queryFn: ({ pageParam = null }: { pageParam: unknown }) =>
        fetchAssets({ cursor: pageParam as string | null }),
      getNextPageParam: (lastPage) => lastPage.pagination.cursor,
      initialPageParam: undefined,
    });

  if (isLoading) {
    return <Skeleton />;
  }

  const assets = data?.pages.flatMap((page) => (page as Page).data.clips) || [];
  const totalCount = data?.pages[0]?.data.total ?? 0;

  console.log('assets', assets);

  return (
    <>
      <Title
        title="Assets"
        count={totalCount}
        onClick={() => setShowAssets(!showAssets)}
      />

      {showAssets && (
        <InfiniteScroll
          dataLength={assets.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Skeleton />}
        >
          <div className="grid grid-cols-3 gap-4">
            {assets.map((asset) => (
              <Card
                key={asset.id}
                imageUrl={asset.assets.image}
                title={asset.title ?? ''}
                height={236}
                type="clip"
                clipInfo={{
                  ext: asset.ext,
                  size: asset.size,
                  height: asset.height,
                  width: asset.width,
                }}
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Assets;
