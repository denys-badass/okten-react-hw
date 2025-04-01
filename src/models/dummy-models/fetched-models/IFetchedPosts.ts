import {IFetched} from "./IFetched.ts";
import {IPostDummy} from "../IPostDummy.ts";

export interface IFetchedPosts extends IFetched {
    posts: IPostDummy[];
}