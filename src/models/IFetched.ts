import {IUser} from "./IUser.ts";
import {IPost} from "./IPost.ts";
import {IComment} from "./IComment.ts";

export interface IFetched {
    "total": number;
    "skip": number;
    "limit": number;
}

export interface IFetchedUsers extends IFetched {
    users: IUser[];
}

export interface IFetchedPosts extends IFetched {
    posts: IPost[];
}

export interface IFetchedComments extends IFetched {
    comments: IComment[];
}