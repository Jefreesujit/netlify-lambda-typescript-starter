import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { getPost } from '../services/dummy-api';

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const randomId: Number = Math.floor((Math.random() * 10) + 1);
  const dummyData = await getPost(randomId);
  return {
    statusCode: 200,
    body: JSON.stringify({ ...dummyData }),
  };
}
