import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../const/const";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KHU DOC",
  description: "null",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
