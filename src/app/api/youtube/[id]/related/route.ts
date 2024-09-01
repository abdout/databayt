import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  console.log('Fetching related videos for ID:', id);

  if (!id) {
    console.log('No video ID provided');
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=4&key=${API_KEY}`;
    console.log('Request URL:', url);
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text(); // Fetch the error text to understand the problem
      console.log('Failed to fetch related videos:', response.status, response.statusText, errorText);
      return NextResponse.json({ error: 'Failed to fetch related videos' }, { status: response.status });
    }

    const data = await response.json();
    console.log('Related videos data:', data);

    if (!data.items || data.items.length === 0) {
      console.log('No related videos found for this ID.');
      return NextResponse.json({ error: 'No related videos found' }, { status: 404 });
    }

    const relatedVideos = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    return NextResponse.json(relatedVideos, { status: 200 });
  } catch (error) {
    console.error('Error fetching related videos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
