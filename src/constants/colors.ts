export const themeColors = {
    dark: {
        background: "#0f0f1a",
        foreground: "#e2e2f5",
        muted: "#a0a0c0",
        card: "#1a1a2e",
        cardForeground: "#e2e2f5",
        primary: "#a48fff",
        border: "#303052"
    },

    light: {
        background: "#f5f5ff",
        foreground: "#2a2a4a",
        muted: "#6c6c8a",
        card: "#ffffff",
        cardForeground: "#2a2a4a",
        primary: "#6e56cf",
        border: "#e0e0f0"
    }
} as const

export type ThemeColorTypes = keyof typeof themeColors.dark & keyof typeof themeColors.light