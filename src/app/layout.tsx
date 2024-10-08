import { Metadata } from "next";
import { metaData } from "@/data";
import "./globals.css";
import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="z-50 absolute top-0">
          <NavBar />
        </div>
        <div className="mt-[100px]">
          {children}
        </div>
          <Footer />
      </body>
    </html>
  );
}
