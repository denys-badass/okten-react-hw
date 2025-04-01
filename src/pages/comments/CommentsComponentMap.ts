import * as React from "react";
import CommentsPlaceholder from "../../components/placeholder/comments/CommentsPlaceholder.tsx";
import CommentsDummy from "../../components/dummy/comments/CommentsDummy.tsx";

type CommentsComponentType = {
    [key: string]: React.ComponentType;
}

export const CommentsComponentMap: CommentsComponentType = {
    placeholder: CommentsPlaceholder,
    dummy: CommentsDummy
}