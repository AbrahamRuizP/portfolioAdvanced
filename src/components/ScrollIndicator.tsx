// ScrollIndicator.tsx

export const ScrollIndicator = () => {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "32px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                opacity: 0.4,
                animation: "fadeIn 1s ease forwards 1.5s",
            }}
        >
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)"
                }}
            >
                scroll
            </span>
            <div
                style={{
                    width: "1px",
                    height: "40px",
                    background: "linear-gradient(to bottom, var(--accent), transparent)",
                    animation: "fadeSlideUp 1.5s ease infinite",
                }}
            />
        </div>
    );
}