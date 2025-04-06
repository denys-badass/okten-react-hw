
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
        <div className='flex w-2/3 justify-center items-center m-auto gap-6'>
            <button onClick={() => {
                if (page > 1) setQuery({page: (--page).toString()});
                }
            } className='rounded-xl bg-emerald-900 w-1/5 h-10 text-teal-50'>Prev</button>
            <button onClick={() => {
                    if (page + 1 <= totalPages) setQuery({page: (++page).toString()});
                }
            } className='rounded-xl bg-emerald-900 w-1/5 h-10 text-teal-50'>Next</button>
        </div>
    );
};

export default Pagination;