import {IReactions} from "./IReaction.ts";

export interface IPostDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}