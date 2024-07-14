import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Admin Panel | Partner</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="p-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
