'use client';
import React, { useState, useEffect } from'react';
import VideoCard from '@/components/root/video/card';
import Title from '@/components/atom/title';
import Image from 'next/image';
import Link from 'next/link';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

const authors = ['هشام أحمد', 'المقداد الهجان', 'قاسم الظافر', 'أحمد المجتبى', 'إبراهيم نمر', 'ابوبكر جيكوني ', 'صالح ناصر', 'إبراهيم أحمد', 'عبدالعزيز إبراهيم ']; // Add more authors as needed

const AllVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('/api/youtube');
      const data: Video[] = await response.json();
      console.log('Fetched videos:', data);
      setVideos(data);
      setLoading(false);
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
    <div dir="rtl" className="md:container mx-auto md:p-4">
      <div className='hidden md:block'>
      <Title icon="fluent:video-28-regular" placeholder="  الوثائقيات" big={true}/>
      </div>
      
      {loading? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {videos.map((video, index) => {
            const titleWithoutEmoji = removeEmojiFromTitle(video.title);
            const author = extractAuthor(titleWithoutEmoji);
            const titleWithoutAuthor = removeAuthorFromTitle(titleWithoutEmoji, author);
            const formattedDate = formatDate(video.publishedAt);
            return (
              <Link href={`/video/${video.id}`} key={video.id} className="py-2 md:p-4">
                <div className="flex flex-col">
                  <Image
                    src={video.thumbnail}
                    alt={titleWithoutAuthor}
                    width={500}
                    height={350}
                    className="object-cover"
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

export default AllVideos;