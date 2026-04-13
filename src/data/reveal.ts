// reveal.ts

// variant for container
export const revealLabel = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" as const },
    viewport: { once: true }
}

export const revealItem = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeInOut" as const },
    viewport: { once: true }
}