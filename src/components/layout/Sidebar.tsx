import { Button } from "@/components/ui/button";
import { Settings, LogOut, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { clearAuth } from "@/lib/auth";
import { EnthosLogo } from "@/components/ui/logo";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    clearAuth();
    navigate("/");
  };

  return (
    <div className="h-screen w-64 bg-[#E6F3F7] border-r p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8 mt-2">
        <EnthosLogo className="w-8 h-8" />
        <span className="text-xl font-semibold text-gray-800">Enthos</span>
      </div>
      <div className="flex-1 space-y-2">
        <Button
          variant={location.pathname === "/assistant" ? "secondary" : "ghost"}
          className="w-full justify-start"
          size="lg"
          onClick={() => navigate("/assistant")}
        >
          <MessageSquare className="mr-2 h-5 w-5" />
          Assistant
        </Button>
        <Button
          variant={location.pathname === "/settings" ? "secondary" : "ghost"}
          className="w-full justify-start"
          size="lg"
          onClick={() => navigate("/settings")}
        >
          <Settings className="mr-2 h-5 w-5" />
          Settings
        </Button>
      </div>
      <Button
        variant="ghost"
        className="w-full justify-start text-red-500"
        size="lg"
        onClick={handleLogout}
      >
        <LogOut className="mr-2 h-5 w-5" />
        Logout
      </Button>
    </div>
  );
}
