import {useEffect, useState} from "react";

export const useFetch = <T,>(url: string): T | null => {
    let [state, setState] = useState<T | null>(null);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setState(data));
    }, [url]);

    return state;
}