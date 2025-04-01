import * as React from "react";
import PostsPlaceholder from "../../components/posts/PostsPlaceholder.tsx";
import PostsDummy from "../../components/posts/PostsDummy.tsx";

type PostsComponentType = {
    [key: string]: React.ComponentType;
}

export const PostsComponentMap: PostsComponentType = {
    placeholder: PostsPlaceholder,
    dummy: PostsDummy
}