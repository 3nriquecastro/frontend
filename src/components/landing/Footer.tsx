import React from "react";
import { EnthosLogo } from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <EnthosLogo className="w-8 h-8" color="#1F2937" />
              <span className="text-xl font-semibold text-[#1F2937]">
                Enthos
              </span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Ethos is an autonomous vertical AI agent designed to learn and
              operate within businesses, starting with healthcare clinics and
              medical offices.
            </p>
          </div>

          {/* Links column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 inline-block transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Enthos AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
