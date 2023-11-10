import { products } from "./constants";
import { removeOnTransitionEnd } from "./removeOnTransitionEnd";

export const changeProductInfo = ({
    productGrid,
    currentId,
    renderedProductKey,
    oldProductKey,
}) => {
    try {
        const oldProductDetails = document.querySelector(
            `#product-details-${oldProductKey}`,
        );
        const productPrice =
            oldProductDetails.querySelector(
                `#product-price`,
            );
        const productName =
            oldProductDetails.querySelector(
                `#product-name`,
            );
        const productDescription =
            oldProductDetails.querySelector(
                `#product-description`,
            );
        // Animate old product data removal
        for (const element of [
            productPrice,
            productName,
            productDescription,
        ]) {
            element.style.transform = "scale(0.5)";
        }
        oldProductDetails.classList.replace(
            "fade-in",
            "fade-out",
        );
        removeOnTransitionEnd({
            element: oldProductDetails,
            eventType: "animation",
        });

        // Add new product data
        const currentProductDetails =
            document.createElement("article");
        currentProductDetails.id = `product-details-${renderedProductKey}`;
        currentProductDetails.className =
            "grid product-details fade-in";

        const currentProductPrice =
            document.createElement("p");
        currentProductPrice.className =
            "text-primary text-h1 font-600";
        currentProductPrice.id = `product-price`;
        currentProductPrice.innerText =
            products[currentId % 2].price;
        currentProductDetails.append(currentProductPrice);

        const currentProductName =
            document.createElement("h2");
        currentProductName.className = "text-h2 leading-h";
        currentProductName.id = `product-name`;
        currentProductName.innerText =
            products[currentId % 2].name;
        currentProductDetails.append(currentProductName);

        const currentProductDescription =
            document.createElement("p");
        currentProductDescription.className =
            "text-capitalize mt-3";
        currentProductDescription.id = `product-description`;
        currentProductDescription.innerText =
            products[currentId % 2].description;
        currentProductDetails.append(
            currentProductDescription,
        );
        // console.log(currentProductDetails);
        productGrid.prepend(currentProductDetails);
    } catch (e) {
        console.log(e);
    }
};
