import UsersPlaceholder from "../../components/placeholder/users/UsersPlaceholder.tsx";
import * as React from "react";
import UsersDummy from "../../components/dummy/users/UsersDummy.tsx";

type UsersComponentType = {
    [key: string]: React.ComponentType;
}

export const UsersComponentMap: UsersComponentType = {
    jsonplaceholder: UsersPlaceholder,
    dummyjson: UsersDummy,
}