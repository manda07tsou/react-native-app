import useThemeColors from "@/hooks/useThemeColors";
import { useState } from "react";
import { Button, StyleSheet, View, ViewProps } from "react-native";
import AppText from "./appText";
import { SearchInput } from "./form/input";

type AppHeaderProps = {
    onNewTodo: (todo: string) => void
} & ViewProps
export function AppHeader({onNewTodo, ...rest}: AppHeaderProps){
    const colors = useThemeColors()
    const [value, setValue] = useState('')

    const onCreate = () => {
        onNewTodo(value)
        setValue('')
    }
    return (
        <View 
            style={[
                style.header,
                {gap: 10}
            ]}
        >
            <View>
                <AppText type="h3">MYTACHE</AppText>
                <AppText color="muted">Bienvenue sur mon premier app mobile!</AppText>
            </View>
            <SearchInput value={value} onChangeText={setValue}/>
            <Button 
                title="New"
                onPress={onCreate}
            />
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        marginBottom: 20
    }
})