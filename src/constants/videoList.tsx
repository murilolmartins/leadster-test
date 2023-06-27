import thumbNail from '@images/thumbnail.png';
import { IVideoListItem } from '@interfaces';

import { VideoCategory } from '@enums';

export const videoListValues: IVideoListItem[] = Object.values(VideoCategory)
  .map((category) =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      title: `Como aumentar ${category} feat. Traktor ${i}`,
      category,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam, nunc nisl ultricies nunc, quis ultrices nisl nisl eget nisl.`,
      url: `https://www.youtube.com/watch?v=kvZxxVLApxw`,
      thumbnail: thumbNail
    }))
  )
  .flat(1);
