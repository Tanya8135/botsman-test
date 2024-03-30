import { useState } from "react";
import listTable from "js/itemTables";

const useTableBtns = () => {
    const [addImg, setAddImg] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [showLoadMore, setShowLoadMore] = useState(true);

    const handleLoadMoreClick = () => {
        const nextIndex = startIndex + 4;

        if (nextIndex >= listTable.length) {
            setAddImg([...addImg, ...listTable.slice(startIndex)]);
            setStartIndex(listTable.length);
            setShowLoadMore(false);
        } else {
            setAddImg([...addImg, ...listTable.slice(startIndex, nextIndex)]);
            setStartIndex(nextIndex);
        }
    };

    const handleCloseCatalof = () => {
        const displayShow = 0;
        setAddImg(listTable.slice(0, displayShow));
        setStartIndex(displayShow);
        setShowLoadMore(true);
    };

    return {
        addImg,
        showLoadMore,
        handleLoadMoreClick,
        handleCloseCatalof,
    }
}

export default useTableBtns;