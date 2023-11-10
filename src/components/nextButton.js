import {
    getCurrentProductId,
    setCurrentProductId,
} from "@/lib/currentProduct";

export const setupNextButton = ({ changeProduct }) => {
    const nextButton = document.querySelector(
        "#spin-nav #button-next",
    );

    const handleNext = async () => {
        try {
            const currentProductId = getCurrentProductId();
            if (currentProductId < 4) {
                const prevId = currentProductId;
                const currentId = currentProductId + 1;
                changeProduct({
                    currentId,
                    prevId,
                });
            } else {
                const prevId = currentProductId;
                await setCurrentProductId(0);
                const currentId = 0;
                changeProduct({
                    currentId,
                    prevId,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    nextButton.addEventListener("click", handleNext);
};
