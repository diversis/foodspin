import {
    getCurrentProductId,
    setCurrentProductId,
} from "@/lib/currentProduct";

export const setupPrevButton = ({ changeProduct }) => {
    try {
        const prevButton = document.querySelector(
            "#spin-nav #button-previous",
        );

        const handlePrev = () => {
            const currentProductId = getCurrentProductId();
            if (currentProductId > 0) {
                const prevId = currentProductId;
                const currentId = currentProductId - 1;
                changeProduct({
                    currentId,
                    prevId,
                });
            } else {
                const prevId = currentProductId;
                setCurrentProductId(4);
                const currentId = 4;
                changeProduct({
                    currentId,
                    prevId,
                });
            }
        };

        prevButton.addEventListener("click", handlePrev);
    } catch (e) {
        console.log(e);
    }
};
