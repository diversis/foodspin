import { themes } from "./constants";

export const changeTheme = ({ currentId, productGrid }) => {
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
