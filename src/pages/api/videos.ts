// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { VideoApiResponse } from '@interfaces';

import videos from 'db/videos.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<VideoApiResponse>
) {
  res.status(200).send(videos);
}
