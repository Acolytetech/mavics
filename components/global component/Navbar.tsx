"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path: string) =>
    `relative transition ${
      pathname === path
        ? "font-semibold text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black"
        : "text-gray-700 hover:text-black"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all shadow-sm ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo Image */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"   // 👉 apna logo image
              alt="Mavics Logo"
              width={150}
              height={36}
              priority
              
            />
        
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/residences" className={linkClass("/residences")}>
              Residences
            </Link>
            <Link href="/features" className={linkClass("/features")}>
              Features
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </nav>

          {/* Right Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
            >
              Inquiry Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4 text-sm font-medium">
            <Link href="/" onClick={() => setOpen(false)} className={linkClass("/")}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className={linkClass("/about")}>About</Link>
            <Link href="/residences" onClick={() => setOpen(false)} className={linkClass("/residences")}>Residences</Link>
            <Link href="/features" onClick={() => setOpen(false)} className={linkClass("/features")}>Features</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className={linkClass("/contact")}>Contact Us</Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center mt-4 px-5 py-2 rounded-full bg-gray-900 text-white"
            >
              Inquiry Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
