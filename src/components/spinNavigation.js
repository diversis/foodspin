import { products, themes } from "@/lib/constants";
import { changeTheme } from "../lib/changeTheme";

export function setupNavigation(productGrid) {
    const productCurrentInfo = document.querySelector(
        "#product-details",
    );

    const productName =
        productCurrentInfo.querySelector("#product-name");

    const productDescription =
        productCurrentInfo.querySelector(
            "#product-description",
        );

    const productDisplay = document.querySelector(
        "#product-display",
    );
    const nextButton =
        document.querySelector("#button-next");
    const previousButton = document.querySelector(
        "#button-previous",
    );

    // change product
    const rotateCarousel = (currentId) => {
        productGrid.style.setProperty(
            "--product-id",
            currentId,
        );
    };

    const changeInfo = ({
        currentId,
        renderedProductKey,
        oldProductKey,
    }) => {
        const productDetails = document.querySelector(
            `#product-details-${oldProductKey}`,
        );
        const currentProduct = products[currentId % 2];
        const productPrice =
            productCurrentInfo.querySelector(
                `#product-price-${renderedProductKey}`,
            );
        productPrice.innerText = currentProduct.price;
        productName.innerText = currentProduct.name;
        productDescription.innerText =
            currentProduct.description;
    };

    const changeDisplay = async ({
        currentId,
        renderedProductKey,
        oldProductKey,
    }) => {
        const picsToRemove =
            productDisplay.querySelectorAll(
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

                const handleAnimationEnd = (event) => {
                    picToRemove.style.display = "none";
                    picToRemove.removeEventListener(
                        "animationend",
                        handleAnimationEnd,
                    );
                    picToRemove.remove();
                };

                picToRemove.addEventListener(
                    "animationend",
                    (event) => {
                        handleAnimationEnd(event);
                    },
                );
            }
        }
        const currentPic =
            document.createElement("picture");
        currentPic.className = "product-picture rotate-cw";
        currentPic.id = `product-display-${renderedProductKey}`;
        const currentImg = document.createElement("img");
        currentPic.append(currentImg);
        currentImg.alt = products[currentId % 2].name;
        currentImg.src = `/img/${currentId + 1}/768.webp`;
        productDisplay.append(currentPic);
    };

    const changeProduct = ({ currentId, prevId }) => {
        const oldProductKey = renderedProductKey;
        renderedProductKey = Date.now();

        rotateCarousel(currentId);
        changeDisplay({
            currentId,
            renderedProductKey,
            oldProductKey,
        });
        changeInfo({
            currentId,
            renderedProductKey,
            oldProductKey,
        });
        changeTheme({ currentId, productGrid });
        currentProductId = currentId;
    };
}
