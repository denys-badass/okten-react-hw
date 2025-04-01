import {IFetched} from "./IFetched.ts";
import {ICommentDummy} from "../ICommentsDummy.ts";

export interface IFetchedComments extends IFetched {
    comments: ICommentDummy[];
}