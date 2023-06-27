import { useContext } from 'react';

import { VideoModalContext } from '@contexts';

export const useVideoModal = () => useContext(VideoModalContext);
