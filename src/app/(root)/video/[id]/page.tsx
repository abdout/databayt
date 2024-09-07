'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import More from '@/components/root/video/more';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const authors = ['هشام أحمد', 'المقداد الهجان', 'قاسم الظافر', 'أحمد المجتبى', '']; // Add more authors as needed

const OneVideo = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();

  const [video, setVideo] = useState<Video>({
    id: '',
    title: 'Title not found',
    description: 'Description not available',
    thumbnail: '/placeholder.jpg', // Placeholder image path
  });
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`/api/youtube/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }
        const data: Video = await response.json();
        setVideo(data);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    const fetchRelatedVideos = async () => {
      try {
        const response = await fetch(`/api/youtube/${id}/related`);
        if (!response.ok) {
          throw new Error('Failed to fetch related videos');
        }
        const data: Video[] = await response.json();
        setRelatedVideos(data);
      } catch (error) {
        console.error('Error fetching related videos:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVideo();
      fetchRelatedVideos();
    }
  }, [id]);

  if (!id) return null;

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
    // Remove text after symbols like - or .
    const formattedTitle = title.replace(/[-.].*$/, '');
    return formattedTitle;
  };

  const formatDate = () => {
    return '7 سبتمر 2024'; // Placeholder date for now
  };

  return (
    <div className="flex flex-col pt-2 md:pt-6 md:pr-20">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-lg md:text-2xl truncate md:w-3/5">
            {formatTitle(removeEmojiFromTitle(video.title))}
          </h2>
          <p className="truncate w-3/5">{video.description}</p>
          <div className="flex items-center gap-2 md:gap-3 py-2 md:py-6">
            <div className="rounded-full overflow-hidden border w-10 h-10 md:w-12 md:h-12 ">
              <Image
                src={video.thumbnail || '/author/almgdad.png'}
                alt={video.title}
                width={45}
                height={45}
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col pl-4">
              <p className="md:font-bold text-sm">
                {extractAuthor(removeEmojiFromTitle(video.title))}
              </p>
              <p className='text-sm'>{formatDate()}</p>
            </div>
          </div>
          <hr className="border-t border-gray-500 mb-5 md:w-[43.7rem]" />
          <div className="w-full md:w-[700px] h-[200px] md:h-[355px] relative">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <More />
        </>
      )}
    </div>
  );
};

export default OneVideo;