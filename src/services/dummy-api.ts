import axios, { AxiosResponse } from 'axios';
import { Post, GetPost } from '../types';

export const getPost: GetPost = async (postId: Number) => {
  const result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post: Post = result.data;
  return post;
};
