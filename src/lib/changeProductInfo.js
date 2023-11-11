import { products } from "./constants";
import { removeOnTransitionEnd } from "./removeOnTransitionEnd";

export const changeProductInfo = ({
    productGrid,
    currentId,
    renderedProductKey,
    oldProductKey,
}) => {
    try {
        const productDetails = productGrid.querySelector(
            `#product-details`,
        );
        const productPrice = productGrid.querySelector(
            `#product-price-${oldProductKey}`,
        );
        const productName = productGrid.querySelector(
            `#product-name-${oldProductKey}`,
        );
        const productDescription =
            productGrid.querySelector(
                `#product-description-${oldProductKey}`,
            );
        // Animate old product data removal
        for (const element of [
            productPrice,
            productName,
            productDescription,
        ]) {
            element.classList.replace(
                "fade-in-scale",
                "fade-out-scale",
            );
            removeOnTransitionEnd({
                element,
                eventType: "animation",
            });
        }

        // Add new product data
        const currentProductPrice =
            document.createElement("p");
        currentProductPrice.className =
            "product-price fade-in-scale";
        currentProductPrice.id = `product-price-${renderedProductKey}`;
        currentProductPrice.innerText =
            products[currentId % 2].price;
        productDetails.append(currentProductPrice);

        const currentProductName =
            document.createElement("h2");
        currentProductName.className =
            "product-name fade-in-scale";
        currentProductName.id = `product-name-${renderedProductKey}`;
        currentProductName.innerText =
            products[currentId % 2].name;
        productDetails.append(currentProductName);

        const currentProductDescription =
            document.createElement("p");
        currentProductDescription.className =
            "product-description fade-in-scale";
        currentProductDescription.id = `product-description-${renderedProductKey}`;
        currentProductDescription.innerText =
            products[currentId % 2].description;
        productDetails.append(currentProductDescription);
        // console.log(currentProductDetails);
    } catch (e) {
        console.log(e);
    }
};
