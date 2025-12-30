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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (path: string) =>
    `relative transition ${
      pathname === path
        ? "font-semibold text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black"
        : "text-gray-700 hover:text-black"
    }`;

  const openPopup = () => {
    window.dispatchEvent(new Event("open-lead-popup"));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-white/90 backdrop-blur "
          : "bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              width={150}
              height={36}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-lg">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/residences" className={linkClass("/residences")}>Residences</Link>
            <Link href="/feature" className={linkClass("/feature")}>Features</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
             {/* INQUIRY BUTTON */}
          <button
            onClick={openPopup}
            className="hidden md:block px-5 py-2 rounded-full bg-gray-900 text-white text-lg hover:bg-gray-800"
          >
            Inquiry Now
          </button>
          </nav>

         

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col space-y-4 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/residences" onClick={() => setOpen(false)}>Residences</Link>
            <Link href="/feature" onClick={() => setOpen(false)}>Features</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <button
              onClick={() => {
                setOpen(false);
                openPopup();
              }}
              className="block w-full mt-4 px-5 py-2 rounded-full bg-gray-900 text-white"
            >
              Inquiry Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
