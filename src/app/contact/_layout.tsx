import { RootView } from "@/components/rootView";
import useThemeColors from "@/hooks/useThemeColors";
import { Tabs } from "expo-router";


export default function RootLayout(){
    const colors = useThemeColors()

    return <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: colors.cardForeground,
                tabBarStyle: {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                }
            }}>
        </Tabs>
}