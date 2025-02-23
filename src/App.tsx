import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import ThemeProvider from "@/components/theme-provider";
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
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Suspense fallback={<p>Loading...</p>}>
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
              </Routes>
            </>
          </Suspense>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
