import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./components/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import VerifyEmail from "./pages/verify-email";
import { AuthProvider } from "./contexts/auth-context";
import { LanguageProvider } from "./contexts/language-context";
import Profile from "./pages/profile/[id]";
import Listing from "./pages/listing/[id]";
import About from "./pages/about";
import Contact from "./pages/contact";
import HowItWorks from "./pages/how-it-works";
import Explore from "./pages/explore";
import { Accordion } from "./components/ui/accordion";
import { AccordionItem } from "./components/ui/accordion";
import { AccordionTrigger } from "./components/ui/accordion";
import { AccordionContent } from "./components/ui/accordion";
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Suspense
            fallback={
              <p>
                Loading...
                <Accordion type={"single"} collapsible={true}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other
                      components' aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It's animated by default, but you can disable it if you
                      prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </p>
            }
          >
            <>
              {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/listing/:id" element={<Listing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </>
          </Suspense>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
