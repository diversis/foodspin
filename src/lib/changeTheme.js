import { themes } from "./constants";

export const changeTheme = ({ currentId, productGrid }) => {
    const currentTheme = themes[currentId % 2];
    try {
        productGrid.style.setProperty(
            "--theme-clr",
            currentTheme.clr,
        );
        productGrid.style.setProperty(
            "--theme-bg",
            currentTheme.bg,
        );
    } catch (e) {
        console.log(e);
    }
};
