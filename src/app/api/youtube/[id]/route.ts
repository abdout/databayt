// src/app/api/youtube/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
  // Extract the video ID from the URL
 
 

  if (!id) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch video from YouTube' }, { status: response.status });
    }

    const data = await response.json();
    if (data.items.length === 0) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    const video = {
      id: data.items[0].id,
      title: data.items[0].snippet.title,
      description: data.items[0].snippet.description,
      thumbnail: data.items[0].snippet.thumbnails.medium.url,
    };

    return NextResponse.json(video, { status: 200 });
  } catch (error) {
    console.error('Error fetching video:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
