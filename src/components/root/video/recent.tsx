'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/atom/title';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

const authors = ['هشام أحمد', 'المقداد الهجان', 'قاسم الظافر', 'أحمد المجتبى', 'إبراهيم نمر', 'ابوبكر جيكوني ', 'صالح ناصر', 'إبراهيم أحمد', 'عبدالعزيز إبراهيم ']; // Add more authors as needed

const RecentVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data: Video[] = await response.json();
        setVideos(data.slice(0, 3)); // Only take the first three videos
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

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
    <div dir="rtl" className="">
      <Title icon="fluent:video-28-regular" placeholder="الوثائقيات الجديدة" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8 pt-6 overflow-hidden">
          {videos.map((video) => {
            const titleWithoutEmoji = removeEmojiFromTitle(video.title);
            const author = extractAuthor(titleWithoutEmoji);
            const titleWithoutAuthor = removeAuthorFromTitle(titleWithoutEmoji, author);
            const formattedDate = formatDate(video.publishedAt);

            return (
              <Link href={`/video/${video.id}`} key={video.id}>
                <div className="flex flex-col w-full md:w-auto">
                  <Image
                    src={video.thumbnail}
                    alt={titleWithoutAuthor}
                    width={500}
                    height={350}
                    className="object-cover max-w-full block"
                  />
                  
                  <strong className="md:text-lg md:leading-7 mt-2 block truncate md:whitespace-normal md:overflow-visible md:w-auto w-56 whitespace-nowrap overflow-ellipsis">
                    {formatTitle(titleWithoutAuthor)}
                  </strong>

                  {/* Author and Date rendering */}
                  <p className='text-[12px] md:text-[14px] font-light'>
                    {author}
                    <span className="text-sm md:text-3xl items-center" style={{ position: 'relative', top: '0.15em' }}> · </span>
                    7 سبتمر 2024
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecentVideos;
