// import { products, themes } from "@/lib/constants";
import { changeTheme } from "../lib/changeTheme";
import {
    getRenderedProductKey,
    setRenderedProductKey,
} from "@/lib/renderedProduct";
import { setupNextButton } from "./nextButton";
import { setupPrevButton } from "./prevButton";
import { setCurrentProductId } from "@/lib/currentProduct";
import { changeProductInfo } from "@/lib/changeProductInfo";
import { changeProductImage } from "@/lib/changeProductImage";
import { rotateCarousel } from "@/lib/rotateCarousel";
import { replaceOrderButton } from "@/lib/replaceOrderButton";

export function setupNavigation(productGrid) {
    // change product

    const changeProduct = async ({ currentId, prevId }) => {
        const oldProductKey = getRenderedProductKey();
        await setRenderedProductKey(Date.now());
        const renderedProductKey = getRenderedProductKey();

        rotateCarousel({ productGrid, currentId });
        changeProductImage({
            currentId,
            renderedProductKey,
            oldProductKey,
        });
        changeProductInfo({
            productGrid,
            currentId,
            renderedProductKey,
            oldProductKey,
        });
        changeTheme({ currentId, productGrid });
        replaceOrderButton({
            renderedProductKey,
            oldProductKey,
        });
        setCurrentProductId(currentId);
    };

    setupNextButton({ changeProduct });
    setupPrevButton({ changeProduct });
}
