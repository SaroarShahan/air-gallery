import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { getSize } from '@/utils';

interface ClipInfo {
  ext: string;
  size: number;
  height: number;
  width: number;
}

interface CardProps {
  imageUrl: string | undefined;
  title: string;
  height: number;
  width?: number | 'auto';
  type?: 'clip' | 'board';
  clipInfo?: ClipInfo;
}

const Card = ({
  imageUrl,
  title,
  width = 'auto',
  height,
  type = 'board',
  clipInfo,
}: CardProps) => {
  const classes = clsx(
    `group relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-gray-950 inset-[-6px] rounded-md overflow-hidden border-4 border-transparent hover:border-gray-200 transition-all h-[${height}px]`,
    width !== 'auto' && `w-[${width}px}`
  );

  return (
    <div className={classes} style={{ width, height }}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover rounded-md"
        />
      ) : null}

      {type === 'board' ? (
        <Link
          href="/"
          className="absolute bottom-3 px-2 text-base font-normal text-white hover:underline"
        >
          {title}
        </Link>
      ) : null}

      {type === 'clip' && clipInfo ? (
        <div className="absolute bottom-0 left-0 right-0 flex h-[100px] flex-col justify-end rounded rounded-t-none bg-gradient-to-b from-black/0 to-black/90 px-2 pb-2 pt-1 opacity-0 group-hover:opacity-100 transition-all">
          <div className="pointer-events-none flex">
            <Link
              href="/"
              className="truncate text-left font-medium hover:underline text-white"
            >
              {title}
            </Link>
          </div>

          <p className="truncate text-12 text-white uppercase">
            {clipInfo.ext} · {getSize(clipInfo.size)} ·{' '}
            {`${clipInfo.width} x ${clipInfo.height}`}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
