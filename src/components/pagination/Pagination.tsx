
import {useSearchParams} from "react-router-dom";
import {FC} from "react";

type TotalUsersProp = {
    total: number;
    perPage: number;
}

const Pagination:FC<TotalUsersProp> = ({total, perPage}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    let page = Number(query.get("page") || '1');
    const totalPages = Math.ceil(total / perPage);
    return (
        <div>
            <button onClick={() => {
                if (page > 1) setQuery({page: (--page).toString()});
                }
            }>Prev</button>
            <button onClick={() => {
                    if (page + 1 <= totalPages) setQuery({page: (++page).toString()});
                }
            }>Next</button>
        </div>
    );
};

export default Pagination;