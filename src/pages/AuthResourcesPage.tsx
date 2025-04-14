import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../api/api.service.ts";

export const AuthResourcesPage = () => {
    useEffect(() => {
        loadAuthProducts()
            .catch(reason => {
                console.log(reason);
                refresh().then(() => loadAuthProducts())
        })
    }, []);

    return (
        <>
            Auth Resources Page
        </>
    );
};