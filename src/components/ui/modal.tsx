import { useState } from "react"
import { Button, Modal, StyleSheet, View, ModalProps} from "react-native"
import useThemeColors from "@/hooks/useThemeColors"
import { AppButton } from "./button"

type AppModalProps = {onClose: () => void } & ModalProps
export function AppModal({onClose, ...rest}: AppModalProps){
    const colors = useThemeColors()

    const handeClose = () => {
        onClose()
    }
    return <Modal
        {...rest}
    >
            <View style={[
                {backgroundColor: colors.background},
                style.overlay
            ]}>
                <View style={[
                    {backgroundColor: colors.card},
                    style.modalContent
                ]}>
                    {rest.children}
                    <AppButton title="Fermer" colorType="red"  onPress={handeClose}/>
                </View>

            </View>
    </Modal>
}

const style = StyleSheet.create({
    overlay: {
        justifyContent: 'flex-end', 
        flex: 1,
        opacity: 0.7
    },
    modalContent: {
        padding: 10
    }
})