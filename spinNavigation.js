const products = [
    {
        price: "$32",
        name: "Green Goddess Chicken Salad",
        description:
            "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
    },
    {
        price: "$35",
        name: "Asian Cucumber Salad",
        description:
            "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
    },
];

const themes = [
    { button: "#ff922c", bg: "#ffeede" },
    { button: "#54bf29", bg: "#eaffe2" },
];

export function setupNavigation(productGrid) {
    let currentProductId = 0;

    const productCurrentInfo = document.querySelector(
        "#product-current-info",
    );

    const productPrice = productCurrentInfo.querySelector(
        "#product-price",
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

    const changeTheme = (currentId) => {
        const currentTheme = themes[currentId % 2];
        productGrid.style.setProperty(
            "--theme-button",
            currentTheme.button,
        );
        productGrid.style.setProperty(
            "--theme-bg",
            currentTheme.bg,
        );
    };

    const changeInfo = (currentId) => {
        const currentProduct = products[currentId % 2];
        productPrice.innerText = currentProduct.price;
        productName.innerText = currentProduct.name;
        productDescription.innerText =
            currentProduct.description;
    };

    const changeDisplay = ({ currentId, prevId }) => {
        // TODO proper query based on id
        const picsToRemove =
            productDisplay.querySelectorAll(
                `#product-display-${prevId}`,
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
        currentPic.id = `product-display-${currentId}`;
        const currentImg = document.createElement("img");
        currentPic.append(currentImg);
        currentImg.alt = products[currentId % 2].name;
        currentImg.src = `/img/${currentId + 1}/768.webp`;
        productDisplay.append(currentPic);
    };

    const changeProduct = ({ currentId, prevId }) => {
        rotateCarousel(currentId);
        changeDisplay({ currentId, prevId });
        changeInfo(currentId);
        changeTheme(currentId);
        currentProductId = currentId;
    };

    const handleNext = () => {
        if (currentProductId < 4) {
            const prevId = currentProductId;
            const currentId = currentProductId + 1;
            changeProduct({
                currentId,
                prevId,
            });
        } else {
            const prevId = currentProductId;
            const currentId = (currentProductId = 0);
            changeProduct({
                currentId,
                prevId,
            });
        }
    };
    const handlePrevious = () => {
        if (currentProductId > 0) {
            const prevId = currentProductId;
            const currentId = currentProductId - 1;
            changeProduct({
                currentId,
                prevId,
            });
        } else {
            const prevId = currentProductId;
            const currentId = (currentProductId = 4);
            changeProduct({
                currentId,
                prevId,
            });
        }
    };

    nextButton.addEventListener("click", handleNext);
    previousButton.addEventListener(
        "click",
        handlePrevious,
    );
}
