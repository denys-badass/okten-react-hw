export const retriveLocalStorage = <T,>(key: string) => {
    const data: string = localStorage.getItem(key) || '';
    if (!data) {
        return {} as T;
    }
    return JSON.parse(data) as T;
}