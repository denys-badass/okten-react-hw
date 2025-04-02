import * as React from "react";
import PostsPlaceholder from "../../components/placeholder/posts/PostsPlaceholder.tsx";
import PostsDummy from "../../components/dummy/posts/PostsDummy.tsx";

type PostsComponentType = {
    [key: string]: React.ComponentType;
}

export const PostsComponentMap: PostsComponentType = {
    jsonplaceholder: PostsPlaceholder,
    dummyjson: PostsDummy
}