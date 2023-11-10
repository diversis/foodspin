let currentProductId = 0;

export const getCurrentProductId = () => currentProductId;

export const setCurrentProductId = async (id) =>
    await (currentProductId = id);
