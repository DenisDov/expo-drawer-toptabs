import { z } from 'zod';

import { delay } from '../../utils/delay';
import { api } from './api';
import { INewPost } from './types';

// types start
const PostsSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    body: z.string(),
    userId: z.number(),
    reactions: z.number(),
    tags: z.array(z.string()),
  }),
);

export type IPosts = z.infer<typeof PostsSchema>;
// types end

export const postsCacheKey = 'posts';

const getPosts = async () => {
  await delay(1000); // debug
  const response = await api.get(`${postsCacheKey}?limit=10`);
  // 🎉 parse against the schema
  return PostsSchema.parse(response.data.posts);
};

const addPost = async (newPost: INewPost) => {
  return await api.post(`${postsCacheKey}/add`, newPost);
};

export { getPosts, addPost };
