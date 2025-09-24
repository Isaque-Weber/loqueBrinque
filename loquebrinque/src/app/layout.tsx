import "./globals.css";

export const metadata = {
    title: "Loque Brinque",
    description: "Aluguel de brinquedos infláveis para festas e eventos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
        <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        </body>
        </html>
    );
}
