import useThemeColors from "@/hooks/useThemeColors";
import { useState } from "react";
import { Button, StyleSheet, View, ViewProps } from "react-native";
import AppText from "./appText";
import { SearchInput } from "./ui/input";
import { Card } from "./card";

type AppHeaderProps = {
} & ViewProps
export function AppHeader({...rest}: AppHeaderProps){
    const colors = useThemeColors()
  
    return (
        <View 
            style={[
                style.header,
                {gap: 20}
            ]}
        >
            <View>
                <AppText type="h3">MYTACHE</AppText>
                <AppText color="muted">Bienvenue sur mon premier app mobile!</AppText>
            </View>
            <Card style={{padding: 10, gap: 10}}>
                <SearchInput value={''} onChangeText={() => {}}/>
                <Button 
                    title="Recherche"
                />

            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        marginBottom: 20
    }
})