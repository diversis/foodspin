import { removeOnTransitionEnd } from "./removeOnTransitionEnd";

export const replaceOrderButton = async ({
    currentId,
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
        // oldButton.style.transform = "scale(0.5)";
        oldButton.classList.replace(
            "fade-in-left",
            "fade-out-right",
        );
        removeOnTransitionEnd({
            element: oldButton,
            eventType: "animation",
        });

        newButton.id = `order-button-${renderedProductKey}`;
        newButton.style.transform = "";
        newButton.className = `${
            currentId % 2 === 0
                ? "btn-primary"
                : "btn-secondary"
        } btn-order shadow fade-in-left`;
        buttonDiv.append(newButton);
    } catch (e) {
        console.log(e);
    }
};
