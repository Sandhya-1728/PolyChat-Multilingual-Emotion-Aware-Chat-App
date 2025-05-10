import type { ReactNode } from 'react';

export const metadata = {
    title: "PolyChat",
    description: "Multilingual & Emotion-Aware Chat App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
