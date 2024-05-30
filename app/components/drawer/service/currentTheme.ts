import { useTheme } from "next-themes";

export const CurrentTheme=()=>{
    const { theme } = useTheme();
    
    return theme;
}