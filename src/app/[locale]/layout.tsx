import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
    title: "my portfolio",
    description: "enjoy my portfolio",
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: { locale: string }
}

export default function RootLayout({children, params: {locale}}: Readonly<RootLayoutProps>) {
    return (
        <html lang={locale}>
        <body>
        <main>
            <Header/>
            {children}
        </main>
        </body>
        </html>
    );
}
