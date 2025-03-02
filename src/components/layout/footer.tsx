import { Container } from "@/components/ui/container";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Roomance</h3>
            <p className="text-sm text-muted-foreground">
              Find your perfect roommate and your dream home.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground">About</a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground">Contact</a>
              </li>
              <li>
                <a href="/how-it-works" className="text-muted-foreground hover:text-foreground">How it Works</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
              </li>
              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between py-6 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Roomance. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Roomance Team
          </p>
        </div>
      </Container>
    </footer>
  );
}
