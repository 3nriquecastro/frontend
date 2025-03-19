import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { EnthosLogo } from "@/components/ui/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E6F3F7] shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <EnthosLogo className="w-8 h-8" color="#1F2937" />
            <span className="text-xl font-semibold text-[#1F2937]">Enthos</span>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-[#1F2937] hover:text-[#4B5563] font-medium hover:scale-105 transition-all duration-300"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-[#1F2937] hover:text-[#4B5563] font-medium hover:scale-105 transition-all duration-300"
            >
              Pricing
            </a>
            <a
              href="#demo"
              className="text-sm text-[#1F2937] hover:text-[#4B5563] font-medium hover:scale-105 transition-all duration-300"
            >
              Demo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1F2937]"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              className="text-[#1F2937] hover:bg-[#E6F3F7]/80 font-medium text-sm sm:text-base"
              onClick={() => navigate("/auth?mode=signin")}
            >
              Sign In
            </Button>
            <Button
              className="bg-[#1F2937] hover:bg-[#374151] text-white text-sm sm:text-base"
              onClick={() => navigate("/auth?mode=register")}
            >
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-[#1F2937] hover:text-[#4B5563] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-[#1F2937] hover:text-[#4B5563] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#demo"
                className="text-[#1F2937] hover:text-[#4B5563] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                className="w-full justify-center text-[#1F2937] border-[#1F2937]"
                onClick={() => {
                  navigate("/auth?mode=signin");
                  setMobileMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button
                className="w-full justify-center bg-[#1F2937] text-white"
                onClick={() => {
                  navigate("/auth?mode=register");
                  setMobileMenuOpen(false);
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
