import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

type cardProps = ViewProps & {style: ViewStyle}
export function Card({style, ...rest}: cardProps){
    const colors = useThemeColors()

    return <View 
        style={[
            styles.card,
            {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1
            },
            style
        ]}
        {...rest}
    />
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 8
    }
})