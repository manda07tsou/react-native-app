import { ThemeColorTypes } from "@/constants/colors"
import useThemeColors from "@/hooks/useThemeColors"
import { StyleSheet, Text, TextProps, TextStyle } from "react-native"

type AppTextTypes = {
    type?: keyof typeof textStyles,
    color?: ThemeColorTypes,
    style?: TextStyle
} & TextProps
export default function AppText({style, type = 'p', color ,...rest}: AppTextTypes){
    const themeColors = useThemeColors()
    return <Text
        style={[
            textStyles[type],
            {color: themeColors[color ?? 'foreground']},
            style
        ]}
        {...rest}
    />
    
}

const textStyles = StyleSheet.create({
    p: {
        fontSize: 16,
        lineHeight: 24
    },
    h1: {
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 40

    },
    h2: {
        fontSize: 28,
        fontWeight: 500,
        lineHeight: 38
    },
    h3: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 36
    },
    h4: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 32
    },
    small: {
        fontSize: 13,
        lineHeight: 24
    }
})