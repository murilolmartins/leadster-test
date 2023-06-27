import { useContext } from 'react';

import { VideoListContext } from '@contexts';

export const useVideoList = () => useContext(VideoListContext);
