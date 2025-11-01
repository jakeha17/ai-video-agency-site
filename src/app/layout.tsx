import React from "react";
import "./globals.css";

export const metadata = {
  title: "AI Video Content Agency",
  description: "Short-form videos that sell for you."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
