import { FacebookIcon, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black text-white py-10">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">EcoTrack</h2>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor amet consectetur adipiscing elit integer.
            </p>
            <ul className="flex space-x-4 mt-4">
             <li><FacebookIcon/></li>
             <li><Twitter/></li>
             <li><Linkedin/></li>
             <li><Instagram/></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold">Company Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Company Service */}
          <div>
            <h3 className="text-lg font-semibold">Company Service</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Request A Freight
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Track & Trace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Air Freight
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Rail Freight
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Maritime Transport
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Say Hello!</h3>
            <div className="flex items-center mt-2">
              <div className="bg-yellow-400 p-3 rounded-full">📞</div>
              <p className="ml-2 font-bold text-lg">897 686 5475 48</p>
            </div>
            <p className="mt-2 text-gray-400">Get in touch with us:</p>
            <p className="text-gray-400">yourwebsitename.com</p>
            <p className="mt-2 text-gray-400 font-bold">Address:</p>
            <p className="text-gray-400">
              Germany —785 15h Street, Office 478Berlin, De 81566
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400">
          <p>
            © 2025 <span className="text-white">RadiusTheme</span>. All Rights
            Reserved
          </p>
          <div className="mt-2">
            <a href="#" className="mr-4 hover:text-yellow-400">
              Privacy
            </a>
            <a href="#" className="mr-4 hover:text-yellow-400">
              Terms & Conditions
            </a>
            <a href="#" className="mr-4 hover:text-yellow-400">
              Site Map
            </a>
            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
