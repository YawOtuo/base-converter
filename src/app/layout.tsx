import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Home from "./components/Home";
import useHome from "./components/useHome";
import LayoutSideText from "./components/LayoutSideText";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Base Converter",
  description:
    "Convert numbers between different numeral systems effortlessly with the Base Converter. Switch between decimal, binary, octal, hexadecimal, and more, and explore the diverse world of numeral bases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className="grid grid-cols-5 h-[100vh] text-black ">
          <LayoutSideText />
          <div className="col-span-5 lg:col-span-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
