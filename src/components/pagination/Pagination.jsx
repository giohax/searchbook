import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageByPageNum } from "../../features/search/searchBookSlice";

const Pagination = ({ children }) => {
    const curPage = useSelector((state) => state.searchBook.curPage);
    const totalItems = useSelector((state) => state.searchBook.totalItems);
    const maxResult = useSelector((state) => state.searchBook.maxResult);
    const totalPages = Math.ceil(totalItems / maxResult);
    const dispatch = useDispatch();

    const handleClickPrev = () => {
        dispatch(changePageByPageNum(curPage - 1));
    };

    const handleClickNext = () => {
        dispatch(changePageByPageNum(curPage + 1));
    };
    return (
        <div>
            <div>{children}</div>
            {totalItems > 0 && (
                <div className="flex justify-center gap-5 mt-10 mb-30 ">
                    <button onClick={handleClickPrev} disabled={curPage === 0}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-gray-500 active:text-amber-400"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <p className="text-gray-500">{curPage + 1}</p>
                    <button
                        onClick={handleClickNext}
                        disabled={curPage === totalPages}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-gray-500 active:text-amber-400"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pagination;
