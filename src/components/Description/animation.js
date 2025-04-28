export const slideUp = {
    initial: {
        y: "100%",
    },
    open: (i) => ({
        y: "0%",
        transition: { duration: 0.6, delay: 0.05 * i, ease: "easeOut" },
    }),
    closed: {
        y: "100%",
        transition: { duration: 0.5 },
    },
};

export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: { duration: 1 },
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
};

export const slideInFromLeft = {
    hidden: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
    },
};

export const slideInFromRight = {
    hidden: {
        x: "100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
    },
};
