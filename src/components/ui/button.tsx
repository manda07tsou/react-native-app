import { ThemeColorTypes } from "@/constants/colors";
import useThemeColors from "@/hooks/useThemeColors";
import { Button, ButtonProps } from "react-native";

type AppButtonProps = {colorType?: ThemeColorTypes} & ButtonProps
export function AppButton({
    colorType = 'primary',
    ...rest
}: AppButtonProps){
    const colors = useThemeColors()
    return <Button
        color={colors[colorType]}
        {...rest}
    />
}