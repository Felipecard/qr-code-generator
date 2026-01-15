import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './styles.css';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "QR Code Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins}`}>
        {children}
      </body>
    </html>
  );
}
