import UsersPlaceholder from "../../components/users/UsersPlaceholder.tsx";
import * as React from "react";
import UsersDummy from "../../components/users/UsersDummy.tsx";

type UsersComponentType = {
    [key: string]: React.ComponentType;
}

export const UsersComponentMap: UsersComponentType = {
    'placeholder': UsersPlaceholder,
    'dummy': UsersDummy,
}