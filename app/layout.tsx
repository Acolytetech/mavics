import Navbar from "@/components/global component/Navbar";
import "./globals.css";
import { defaultSEO } from "@/lib/seo";
import Footer from "@/components/global component/Footer";

export const metadata = defaultSEO;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
