import type {Metadata} from "next";
import {Oswald, Montserrat, Playpen_Sans as FontSans} from "next/font/google"
import "./globals.css";
import React from "react";
import {UserProvider} from "@auth0/nextjs-auth0/client";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    style: "normal", weight: "400"
})
const capriola = Oswald({
    subsets: ["latin"],
    variable: "--font-hero",
});
const adventPro = Montserrat({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-all",
});


export const metadata: Metadata = {
    title: "Think Green - Our Environment, Our Life",
    description: "Think Green a perfect club for environmental conservation",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <UserProvider>
            <body className={`${capriola.variable} ${adventPro.variable} min-h-screen bg-background antialiased scroll-smooth`}>
            {children}
            </body>
        </UserProvider>
        </html>
    );
}
