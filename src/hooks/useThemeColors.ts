import { themeColors } from "@/constants/colors";
import { useColorScheme } from "react-native";

export default function useThemeColors(){
    const scheme = useColorScheme()
    const theme = scheme === 'unspecified' ? 'light' : scheme
    return themeColors[theme]
}