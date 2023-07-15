import { IVideoListItem } from './videoList';

export type VideoModalData = Pick<
  IVideoListItem,
  'url' | 'title' | 'description'
>;
