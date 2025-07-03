import Link from "next/link"
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo.svg"
              alt="SyntaxLeap"
              width={220}
              height={50}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We build AI-driven digital products that transform businesses. Custom web & mobile apps powered by machine
              learning for startups and SMEs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/syntax-leap/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-teal-600 rounded-xl transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/syntaxleap"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-teal-600 rounded-xl transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:hello@syntaxleap.com"
                className="p-3 bg-gray-800 hover:bg-teal-600 rounded-xl transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:hello@syntaxleap.com"
                    className="text-white hover:text-teal-400 transition-colors duration-200"
                  >
                    hello@syntaxleap.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-teal-400 transition-colors duration-200">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white">
                    123 Innovation Drive
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} SyntaxLeap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
