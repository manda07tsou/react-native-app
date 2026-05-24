import useThemeColors from "@/hooks/useThemeColors";
import { Alert, StyleSheet, View } from "react-native";
import AppText from "./appText";
import { AppButton } from "./ui/button";
import { TodoItemTypes } from "@/types/todo";

type todoItemProps = {
    todo: TodoItemTypes,
    onDeleteTodo: (todoId: number) => void
}

export function TodoItem({
    todo,
    onDeleteTodo
}: todoItemProps){
    const colors = useThemeColors()

    const handleDelete = () => {
        return Alert.alert(
            'Suppression', 
            `Vous êtes sur le point de supprimer ${todo.id} todo.`,
            [
                {
                    text: 'Annuler',
                    style: 'cancel'
                },
                {
                    text: 'Confirmer',
                    onPress: () => onDeleteTodo(todo.id),
                }
            ]
        )
    }
    
    return <View
        style={[
            styles.card,
            {
                backgroundColor: colors.card,
                borderColor: colors.border,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 8
            }
        ]}
    >
        <View>
            <AppText type="small" color="muted">#{todo.id}</AppText>
            <AppText>{todo.content}</AppText>
        </View>
        <AppButton
            title="Del"
            colorType="red"
            onPress={handleDelete}
        />
    </View>
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 8
    }
})