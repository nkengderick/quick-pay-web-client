import { Metadata } from "next";
import { metaData } from "@/data";
import "./globals.css";

export const metadata: Metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
