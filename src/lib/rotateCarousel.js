export const rotateCarousel = ({
    productGrid,
    currentId,
}) => {
    try {
        productGrid.style.setProperty(
            "--product-id",
            currentId,
        );
    } catch (e) {
        console.log(e);
    }
};
