import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className='font-extrabold text-2xl text-[#e2b864] flex items-center gap-3'>
              <Image src={"/images/icononly_transparent_nobuffer.png"} alt={"Ritter Realty Logo"} width={100} height={100} className='w-18 h-auto' />
              Ritter Realty
            </Link>
            <p className="text-gray-300 text-sm my-4">
              Luxury real estate solutions for discerning clients worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/listings/florida" className="hover:text-primary transition-colors">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Listings */}
          <div>
            <h3 className="font-semibold mb-4">Listings</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/listings/florida-residential" className="hover:text-primary transition-colors">
                  Florida Residential
                </Link>
              </li>
              <li>
                <Link href="/listings/florida-commercial" className="hover:text-primary transition-colors">
                  Florida Commercial
                </Link>
              </li>
              <li>
                <Link href="/listings/international" className="hover:text-primary transition-colors">
                  International
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-2 items-start">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+1 (941) 830-3618</span>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>loyal@ritterrealtyllc.com</span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Southwest Florida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-background/80">
          <p>&copy; {currentYear} Ritter Realty LLC. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
