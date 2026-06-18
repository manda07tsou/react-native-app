import { TodoItemTypes } from "@/constants/data";
import useThemeColors from "@/hooks/useThemeColors";
import { StyleSheet, View } from "react-native";
import AppText from "./appText";
import { AppButton } from "./ui/button";

type todoItemProps = {
    todo: TodoItemTypes
}

export function TodoItem({
    todo
}: todoItemProps){
    const colors = useThemeColors()
    return <View
        style={[
            styles.card,
            {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }
        ]}
    >
        <View>
            <AppText type="small" color="muted">#{todo.id}</AppText>
            <AppText>{todo.content}</AppText>
        </View>r
        <AppButton
            title="Del"
            colorType="red"
        />
    </View>
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 8
    }
})