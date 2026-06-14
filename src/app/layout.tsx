import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praxis am Park – Ihre Hausarztpraxis",
  description: "Echte Ärzte, echte Fürsorge – jederzeit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
