// src/app/page.tsx
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
    const regex = /- ([أدما].*)$/;
    const match = title.match(regex);
    if (match) {
      return match[1];
    }
    return '';
  };

  const removeAuthorFromTitle = (title: string) => {
    const regex = /- ([أدما].*)$/;
    return title.replace(regex, '');
  };

  const removeEmojiFromTitle = (title: string) => {
    const regex = /🔻/g;
    return title.replace(regex, '');
  };

  const formatTitle = (title: string) => {
    const words = title.split(' ');
    return (
      <div>
        <span>{words.slice(0, 3).join(' ')}</span>
        <br />
        <span>{words.slice(3).join(' ')}</span>
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
    <div dir="rtl" className=" mx-auto p-4">
      <Title icon="fluent:video-28-regular" placeholder="  الوثائقيات الجديدة"/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-8 pt-6 overflow-x-auto">
          {videos.map((video, index) => {
            const titleWithoutEmoji = removeEmojiFromTitle(video.title);
            const author = extractAuthor(titleWithoutEmoji);
            const titleWithoutAuthor = removeAuthorFromTitle(titleWithoutEmoji);
            return (
              
              <Link href={`/video/${video.id}`} key={video.id}>


                <div className="flex flex-col">
                  <Image
                    src={video.thumbnail}
                    alt={titleWithoutAuthor}
                    width={500}
                    height={350}
                    className="object-cover"
                  />
                  <h4 className="font-large text-xl leading-7 mt-2">{formatTitle(titleWithoutAuthor)}</h4>
                  <p className="text-sm text-gray-500 mt-1">{author}</p>
                  
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