import type { Metadata } from "next";
import "./globals.css";
import {Poppins, Raleway, Roboto} from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "300"] });
const raleway = Raleway({subsets: ["latin"], weight: ["400", "600"], variable:'--font-raleway'})
const roboto = Roboto({subsets: ["latin"], weight: ['700'], variable:"--font-roboto"})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${raleway.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
