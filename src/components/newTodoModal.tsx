import { useState } from "react"
import { Button, View} from "react-native"
import AppText from "./appText"
import useThemeColors from "@/hooks/useThemeColors"
import { AppModal } from "./ui/modal"
import { AppInput } from "./ui/input"
import { WriteTodoType } from "@/types/todo"
import { AppButton } from "./ui/button"

type props = {
    onNewTodo: (data: WriteTodoType) => void
}
export function NewTodoModal({onNewTodo}: props){
    const [isOpen, setIsOpen] = useState(false)
    const colors = useThemeColors()
    const [value, setValue] = useState('')

    const handleCreate = () => {
        onNewTodo({content: value})
        setValue('')
        setIsOpen(false)
    }

    return <>
        <AppButton
            title="New"
            onPress={() => setIsOpen(true)}
        />
        <AppModal
            visible={isOpen}
            animationType="slide"
            transparent={true}
            onClose={() => setIsOpen(false)}
        >
            <View style={{gap: 20, marginBottom: 20}}>
                <AppText type="h4">Ajouter tache</AppText>
                <AppInput placeholder="Contenu" onChangeText={setValue}/>
                <AppButton title="Enregistrer" onPress={handleCreate}/>
            </View>
        </AppModal>
    </>
}