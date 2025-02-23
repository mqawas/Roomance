import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          🇬🇧 English {language === "en" && "✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("de")}>
          🇩🇪 Deutsch {language === "de" && "✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")}>
          🇦🇪 العربية {language === "ar" && "✓"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
