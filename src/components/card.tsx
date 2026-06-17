import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, View, ViewProps } from "react-native";

type cardProps = ViewProps
export function Card({...rest}: cardProps){
    const colors = useThemeColors()

    return <View 
        style={[
            styles.card,
            {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1
            }
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