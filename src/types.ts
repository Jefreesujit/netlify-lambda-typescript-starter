export type Post = {
  userId: Number;
  id: Number;
  title: String;
  body: String;
}

export type GetPost = (postId: Number) => Promise<Post>;
