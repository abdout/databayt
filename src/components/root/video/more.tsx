'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  date: string;
}

const More = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const currentVideoId = pathname.split('/').pop(); // Get the current video ID from the URL

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data: Video[] = await response.json();

        // Filter out the current video
        const filteredVideos = data.filter(video => video.id !== currentVideoId);

        // Shuffle and select the first 4 videos
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

  return (
    <div>
      <h5 className="pt-8" dir="rtl">المزيد</h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-12 pt-6">
          {videos.map((video, index) => (
            <Link href={`/video?videoId=${video.id}&index=${index}`} key={index}>
              <div className="flex gap-4 items-center text-right">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={200}
                  height={150}
                  className="object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <p className="font-medium text-lg w-96">{video.title}</p>
                  </div>
                  <p className="text-sm w-80">{video.description}</p>
                  <div className="flex gap-4">
                    <p>
                      {video.author}
                      <span className="text-3xl items-center" style={{ position: 'relative', top: '0.15em' }}> · </span>
                      {video.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default More;
