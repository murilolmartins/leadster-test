import { StaticImageData } from 'next/image';

export interface IVideoListItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: StaticImageData;
  url: string;
}
