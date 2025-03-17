import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  Search
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  How to buy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  iOS & Android
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Address: 157 Cherni Vrah Blvd</p>
            <p className="mb-2">Email: <Link href="mailto:office@Carsusa.bhg" className="hover:text-yellow-400">office@Carsusa.bhg</Link></p>
            <p className="mb-4">Phone: +359 876 804 849</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-yellow-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">Copyright Company. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}