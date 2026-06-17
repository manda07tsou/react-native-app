import useThemeColors from "@/hooks/useThemeColors";
import { View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type rootViewProps = ViewProps
export function RootView({children, ...rest}: rootViewProps){
    const scheme = useThemeColors()

    return <View style={{
        backgroundColor: scheme.background,
        flex: 1,
        padding: 4
    }}>
        <SafeAreaView>
            {children}
        </SafeAreaView>
    </View>
}