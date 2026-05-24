import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type SearchInputProps = TextInputProps
export function SearchInput({...rest}: SearchInputProps){
    const colors = useThemeColors()

    return <TextInput
        placeholder="Nouveau"
        placeholderTextColor={colors.muted}
        style={[
            style.input,
            {
                borderColor: colors.border,
                backgroundColor: colors.card,
                color: colors.foreground,
                borderRadius: 50
            }
        ]} 
        {...rest}
    />
}

export function AppInput({...rest}: SearchInputProps){
    const colors = useThemeColors()

    return <TextInput
        placeholder="Nouveau"
        placeholderTextColor={colors.muted}
        style={[
            style.input,
            {
                borderColor: colors.border,
                backgroundColor: colors.card,
                color: colors.foreground,
            }
        ]} 
        {...rest}
    />
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        fontSize: 16,
        lineHeight: 16,
        paddingRight: 20,
        paddingLeft: 20
    }
})