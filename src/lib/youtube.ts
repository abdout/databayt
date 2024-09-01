// lib/youtube.ts
interface YouTubeVideo {
    id: { videoId: string };
    snippet: { title: string; description: string };
  }
  
  export const fetchYouTubeVideos = async (apiKey: string, channelId: string, maxResults = 3): Promise<YouTubeVideo[]> => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch YouTube videos');
    }
    const data = await response.json();
    return data.items;
  };
  