import UsersPlaceholder from "../../components/users/UsersPlaceholder.tsx";
import * as React from "react";
import UsersDummy from "../../components/users/UsersDummy.tsx";

type UserComponentType = {
    [key: string]: React.ComponentType;
}

export const UserComponentMap: UserComponentType = {
    'placeholder': UsersPlaceholder,
    'dummy': UsersDummy,
}