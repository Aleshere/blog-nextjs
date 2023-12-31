import { Inter } from 'next/font/google';
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog Next JS',
  description: 'Created by Alessio - The Coding Lab',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
