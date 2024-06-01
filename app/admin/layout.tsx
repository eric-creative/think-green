import React from "react";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;
}>) {
    return (
        <section>
            <h1>Dashboard</h1>
            {children}
        </section>
    );
}
