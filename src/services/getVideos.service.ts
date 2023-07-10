import { VideoApiResponse } from '@interfaces';

import { connectionAPIGet } from '@utils';

export async function getVideos() {
  const { videos } = await connectionAPIGet<VideoApiResponse>('/api/videos');

  return videos;
}
