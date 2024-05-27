'use client';
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const ThemeProviders = ({ children }: { children: ReactNode }) => {
    return (<>
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    </>);
}

export default ThemeProviders;