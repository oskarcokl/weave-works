import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme"

export const metadata: Metadata = {
    title: "Weave Works",
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1
}

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true}}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
