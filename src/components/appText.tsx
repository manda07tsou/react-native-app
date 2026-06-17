import { ThemeColorTypes } from "@/constants/colors"
import useThemeColors from "@/hooks/useThemeColors"
import { StyleSheet, Text, TextProps } from "react-native"

type AppTextTypes = {
    type: keyof typeof textStyles,
    color?: ThemeColorTypes
} & TextProps
export default function AppText({type, color ,...rest}: AppTextTypes){
    const themeColors = useThemeColors()
    return <Text
        style={[
            textStyles[type],
            {color: themeColors[color ?? 'foreground']}
        ]}
        {...rest}
    />
    
}

const textStyles = StyleSheet.create({
    p: {
        fontSize: 16
    },
    h1: {
        fontSize: 32
    },
    h2: {
        fontSize: 28
    },
    h3: {
        fontSize: 24
    },
    h4: {
        fontSize: 20
    },
    small: {
        fontSize: 13
    }
})