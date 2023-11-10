const handleAnimationEnd = ({
    event,
    element,
    eventType,
}) => {
    element.style.display = "none";
    element.removeEventListener(
        eventType === "animation"
            ? "animationend"
            : "transitionend",
        handleAnimationEnd,
    );
    element.remove();
};

export const removeOnTransitionEnd = ({
    element,
    eventType = "transition",
}) => {
    element.addEventListener(
        eventType === "animation"
            ? "animationend"
            : "transitionend",
        (event) => {
            handleAnimationEnd({
                event,
                element,
                eventType,
            });
        },
    );
};
