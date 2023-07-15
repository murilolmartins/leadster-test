export interface IVideoListItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  url: string;
  createdAt: string;
}

export interface VideoApiResponse {
  videos: IVideoListItem[];
}
