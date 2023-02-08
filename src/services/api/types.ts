export type IApiError = {
  message: string;
  description: string;
  statusCode: string | number;
};

export type IPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type INewPost = {
  title: string;
  body: string;
  userId: number;
};
