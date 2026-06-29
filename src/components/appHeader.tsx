import useThemeColors from "@/hooks/useThemeColors";
import { Button, StyleSheet, View, ViewProps } from "react-native";
import AppText from "./appText";
import { SearchInput } from "./ui/input";
import { Card } from "./card";
import { AppButton } from "./ui/button";
import { useRouter } from "expo-router";

type AppHeaderProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  onSearchPress: () => void
} & ViewProps
export function AppHeader({ searchValue, onSearchChange, onSearchPress, ...rest }: AppHeaderProps){
    const colors = useThemeColors()
    const router = useRouter()
    return (
        <View 
            style={[
                style.header,
                {gap: 20}
            ]}
            {...rest}
        >
            <View>
                <AppText type="h3">MYTACHE</AppText>
                <AppText color="muted">Bienvenue sur mon premier app mobile!</AppText>
            </View>
            <AppButton title="Contact" onPress={() => router.navigate('/contact')}/>
            <Card style={{padding: 10, gap: 10}}>
                <SearchInput
                    placeholder="Rechercher une tâche"
                    value={searchValue}
                    onChangeText={onSearchChange}
                />
                <Button 
                    title="Recherche"
                    onPress={onSearchPress}
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