import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "AirBnB",
  description: "AirBnB clone",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-600`}>{children}</body>
    </html>
  );
}
