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

    const changeDisplay = (currentId) => {
        const picToRemove =
            productDisplay.querySelector("picture");
        console.log(picToRemove);
        if (picToRemove) {
            picToRemove.style.opacity = 0;
            picToRemove.style.transform = `rotate(-${
                currentId * 40
            }deg,)`;
            picToRemove.addEventListener(
                "transitionend",
                picToRemove.remove(),
            );
        }
        const currentPic =
            document.createElement("picture");
        currentPic.className = "product-picture";
        const currentImg = document.createElement("img");
        currentPic.appendChild(currentImg);
        console.log(currentPic);
        currentImg.alt = products[currentId % 2].name;
        currentImg.src = `/img/${currentId + 1}/768.webp`;
        productDisplay.appendChild(currentPic);
    };

    const changeProduct = async (currentId) => {
        rotateCarousel(currentId);
        changeDisplay(currentId);
        changeInfo(currentId);
        changeTheme(currentId);
    };

    const handleNext = async () => {
        if (currentProductId < 9) {
            changeProduct(++currentProductId);
        }
    };
    const handlePrevious = async () => {
        if (currentProductId > 0) {
            changeProduct(--currentProductId);
        }
    };

    nextButton.addEventListener("click", handleNext);
    previousButton.addEventListener(
        "click",
        handlePrevious,
    );
}
