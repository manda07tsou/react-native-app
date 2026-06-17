export const themeColors = {
    dark: {
        background: "#0f0f1a",
        foreground: "#c4c2ff",
        card: "#2d2b55",
        cardForeground: "#e2e2f5",
        primary: "#a48fff" 
    },

    light: {
        background: "#e4dfff",
        foreground: "#2a2a4a",
        card: "#ffffff",
        cardForeground: "#2a2a4a",
        primary: "#6e56cf"
    }
} as const

export type ThemeColorTypes = keyof typeof themeColors.dark & keyof typeof themeColors.light