import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fermor | Finance, made clear",
  description:
    "Bring your spending, saving, and goals into one clear view with Fermor.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
