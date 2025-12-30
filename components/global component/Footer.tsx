import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-fit rounded flex items-center justify-center font-bold">
              <Image src="/images/logo1.png" alt="Mavics Logo" width={150} height={24} />
            </div>
            {/* <span className="text-xl font-semibold">Mavics</span> */}
          </div>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-2">
              <MapPin size={16} />
              1889 NW 79th St, Asheville, NC 28716
            </li>
            <li className="flex gap-2">
              <Phone size={16} />
              (800) 543 5332
            </li>
            <li className="flex gap-2">
              <Mail size={16} />
              inquiry@realhomes.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">Properties Listing</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h4 className="font-semibold mb-4">Other Pages</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">Agents</Link></li>
            <li><Link href="#">Agencies</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>

        {/* Talk To Expert */}
        <div>
          <h4 className="font-semibold mb-4">Talk To An Expert</h4>
          <p className="text-sm text-gray-600 mb-4">
            Get expert consultation regarding your real estate needs.
          </p>

          <Link
            href="/contact"
            className="inline-block mb-6 px-5 py-2 rounded-md bg-black text-white text-sm hover:bg-black/80 transition"
          >
            Make an Inquiry
          </Link>

          <div>
            <p className="text-sm font-medium mb-3">Connect With Us</p>
            <div className="flex gap-4 text-gray-600">
              <Facebook size={18} />
              <Twitter size={18} />
              <Linkedin size={18} />
              <Instagram size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
  © {new Date().getFullYear()} Mavics Realty Pvt. Ltd. All Rights Reserved.
</div>
      </div>
    </footer>
  );
}
