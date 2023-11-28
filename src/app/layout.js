import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../const/const";
import Footer from "@/view/Footer/Footer";
import Header from "@/view/Header/Header";

// const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "KHU DOC",
  description: "null",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
