import { products } from "./constants";
import { removeOnTransitionEnd } from "./removeOnTransitionEnd";
export const changeProductImage = async ({
    currentId,
    renderedProductKey,
    oldProductKey,
}) => {
    const productDisplay = document.querySelector(
        "#product-display",
    );
    const picsToRemove = productDisplay.querySelectorAll(
        `#product-display-${oldProductKey}`,
    );
    if (picsToRemove && picsToRemove.length > 0) {
        for (const picToRemove of picsToRemove) {
            picToRemove.style.opacity = 0;
            picToRemove.style.transform = `rotate(-${
                currentId * 40
            }deg,)`;
            picToRemove.classList.replace(
                "rotate-cw",
                "rotate-ccw",
            );

            removeOnTransitionEnd({
                element: picToRemove,
                eventType: "animation",
            });
        }
    }
    const currentPic = document.createElement("picture");
    currentPic.className = "product-picture rotate-cw";
    currentPic.id = `product-display-${renderedProductKey}`;
    const currentImg = document.createElement("img");
    currentPic.append(currentImg);
    currentImg.alt = products[currentId % 2].name;
    currentImg.src = `/img/${currentId + 1}/768.webp`;
    productDisplay.append(currentPic);
};
