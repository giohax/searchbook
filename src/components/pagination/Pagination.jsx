import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageByPageNum } from "../../features/search/searchBookSlice";
import "./pagination.scss";

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
        <div className="container">
            <div>{children}</div>
            <div className="pagination">
                <button onClick={handleClickPrev} disabled={curPage === 0}>
                    {"<<"}
                </button>
                <span>{curPage + 1}</span>
                <button
                    onClick={handleClickNext}
                    disabled={curPage === totalPages}
                >
                    {">>"}
                </button>
            </div>
        </div>
    );
};

export default Pagination;
