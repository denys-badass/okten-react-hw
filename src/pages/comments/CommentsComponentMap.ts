import * as React from "react";
import CommentsPlaceholder from "../../components/comments/CommentsPlaceholder.tsx";
import CommentsDummy from "../../components/comments/CommentsDummy.tsx";

type CommentsComponentType = {
    [key: string]: React.ComponentType;
}

export const CommentsComponentMap: CommentsComponentType = {
    placeholder: CommentsPlaceholder,
    dummy: CommentsDummy
}