'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

const authors = ['هشام أحمد', 'المقداد الهجان', 'قاسم الظافر', 'أحمد المجتبى', 'إبراهيم نمر', 'ابوبكر جيكوني ', 'صالح ناصر', 'إبراهيم أحمد', 'عبدالعزيز إبراهيم ']; // Add more authors as needed

const More = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const currentVideoId = pathname.split('/').pop();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data: Video[] = await response.json();

        const filteredVideos = data.filter(video => video.id !== currentVideoId);
        const shuffledVideos = filteredVideos.sort(() => 0.5 - Math.random());
        const selectedVideos = shuffledVideos.slice(0, 4);

        setVideos(selectedVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [currentVideoId]);

  const extractAuthor = (title: string) => {
    for (const author of authors) {
      if (title.includes(author)) {
        return author;
      }
    }
    return '';
  };

  const removeAuthorFromTitle = (title: string, author: string) => {
    return title.replace(author, '');
  };

  const removeEmojiFromTitle = (title: string) => {
    const regex = /🔻/g;
    return title.replace(regex, '');
  };

  const formatTitle = (title: string) => {
    const truncatedTitle = title.split(/[.\-_]/)[0].trim();
    return (
      <div className="flex flex-wrap md:block">
        <span>{truncatedTitle}</span>
      </div>
    );
  };

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('ar-SA', options);
  };

  return (
    <div className='space-y-10'>
      <h5 className="pt-8" dir="rtl">المزيد</h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-12 pt-6">
          {videos.map((video, index) => {
            const titleWithoutEmoji = removeEmojiFromTitle(video.title);
            const author = extractAuthor(titleWithoutEmoji);
            const titleWithoutAuthor = removeAuthorFromTitle(titleWithoutEmoji, author);
            const formattedDate = formatDate(video.publishedAt);

            return (
              <Link href={`/video/${video.id}`} key={index}>
                <div className="flex gap-4 md:gap-10 items-center text-right">
                  <Image
                    src={video.thumbnail}
                    alt={titleWithoutAuthor}
                    width={180}
                    height={150}
                    className="object-cover object-center max-w-full block h-28 w-24 md:w-44 md:h-36"
                  />
                  <div className="flex flex-col space-y-1">
                    <strong className="md:text-xl block truncate md:whitespace-normal md:overflow-visible md:w-auto w-48 whitespace-nowrap overflow-ellipsis">
                      {formatTitle(titleWithoutAuthor)}
                    </strong>
                    <p className='text-[12px] md:text-[14px] font-light'>
                      {author}
                      <span className="text-sm md:text-3xl items-center" style={{ position: 'relative', top: '0.15em' }}> · </span>
                      7 سبتمر 2024
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default More;