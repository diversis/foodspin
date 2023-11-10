export const rotateCarousel = ({
    productGrid,
    currentId,
}) => {
    // rotate carousel with
    // .spin-variants {transform: rotate(calc(var(--product-id) * -40deg));}
    productGrid.style.setProperty(
        "--product-id",
        currentId,
    );
};
