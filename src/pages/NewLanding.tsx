import NewHero from "@/components/landing/NewHero";
import Features2 from "@/components/landing/Features2";
import Pricing from "@/components/landing/Pricing";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AgentDemo from "@/components/landing/AgentDemo";

export default function NewLanding() {
  return (
    <div className="min-h-screen bg-white text-[#1F2937]">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <NewHero />

        {/* Features Section */}
        <div id="features">
          <Features2 />
        </div>

        {/* Demo Section */}
        <div id="demo" className="py-24 container mx-auto px-4 bg-[#E6F3F7]">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#1F2937]">
              See Enthos in Action
            </h2>
            <p className="text-xl text-[#4B5563]">
              Watch how our AI assistant handles real business scenarios
            </p>
          </div>
          <AgentDemo />
        </div>

        {/* Pricing Section */}
        <div id="pricing">
          <Pricing />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
