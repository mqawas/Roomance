import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Container } from "@/components/ui/container";
import { UserCircle2, Menu, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">LuxShare</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/explore"
              className="text-sm font-medium hover:text-primary"
            >
              Explore
            </a>
            <a
              href="/how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How it Works
            </a>
            <LanguageSwitcher />
            <ThemeToggle />
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">{user.email}</span>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" onClick={() => navigate("/signin")}>
                Sign In
              </Button>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}
