import {ICommentator} from "./ICommentator.ts";

export interface ICommentDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: ICommentator;
}