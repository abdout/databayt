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

  return (
    <div className="flex flex-col pt-6 pr-20">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="text-2xl truncate w-3/5">{video.title}</h2>
          <p className="truncate w-3/5">{video.description}</p>
          <div className="flex items-center py-6">
            <div className="rounded-full overflow-hidden border w-12 h-12">
              <Image
                src={video.thumbnail || '/author/almgdad.png'}
                alt={video.title}
                width={45}
                height={45}
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col pl-4">
              <p className="font-bold">Author Name</p> {/* Placeholder for author name */}
              <p>{new Date().toLocaleDateString('ar-SA', { day: 'numeric', month: 'long', year: 'numeric' })}</p> {/* Custom date format */}
            </div>
          </div>
          <hr className="border-t border-gray-500 mb-5 w-[43.7rem]" />
          <iframe
            width="700"
            height="355"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <More />
        </>
      )}
    </div>
  );
};

export default OneVideo;
