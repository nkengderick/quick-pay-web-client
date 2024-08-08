import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Quick Pay",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugit illo! Eos, iure molestias. Perspiciatis eius consequatur eos excepturi necessitatibus facere quam animi molestias rerum, eum accusamus nulla, voluptatem provident!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
