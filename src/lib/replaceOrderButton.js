import { removeOnTransitionEnd } from "./removeOnTransitionEnd";

export const replaceOrderButton = async ({
    renderedProductKey,
    oldProductKey,
}) => {
    try {
        const buttonDiv = document.querySelector(
            "#content-order",
        );
        const oldButton = buttonDiv.querySelector(
            `#order-button-${oldProductKey}`,
        );
        const newButton = oldButton.cloneNode(true);
        oldButton.style.transform = "scale(0.5)";
        oldButton.classList.replace("fade-in", "fade-out");
        removeOnTransitionEnd({
            element: oldButton,
            eventType: "animation",
        });

        newButton.id = `order-button-${renderedProductKey}`;
        newButton.style.transform = "";
        newButton.className =
            "btn-theme btn-order shadow fade-in";
        buttonDiv.append(newButton);
    } catch (e) {
        console.log(e);
    }
};
