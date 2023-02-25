export type Article = {
  id: string;
  title: string;
  author: string;
  body: string;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
