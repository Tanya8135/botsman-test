import { useState } from "react";
import listPouf from "js/PoufsList";

const useBtnLdMrCl = () => {
    const [addImg, setAddImg] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [showLoadMore, setShowLoadMore] = useState(true);

    const handleLoadMoreClick = () => {
        const nextIndex = startIndex + 4;

        if (nextIndex >= listPouf.length) {
            setAddImg([...addImg, ...listPouf.slice(startIndex)]);
            setStartIndex(listPouf.length);
            setShowLoadMore(false);
        } else {
            setAddImg([...addImg, ...listPouf.slice(startIndex, nextIndex)]);
            setStartIndex(nextIndex);
        }
    };

    const handleCloseCatalof = () => {
        const displayShow = 0;
        setAddImg(listPouf.slice(0, displayShow));
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

export default useBtnLdMrCl;