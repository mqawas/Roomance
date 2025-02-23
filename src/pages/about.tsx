import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Container className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl font-bold">About LuxShare</h1>
            <p className="text-xl text-muted-foreground">
              Connecting luxury travelers for shared experiences
            </p>
            <div className="prose dark:prose-invert">
              <p>
                LuxShare is revolutionizing luxury travel by making it more
                accessible and social. We connect like-minded travelers who want
                to share high-end accommodations, split costs, and create
                meaningful connections.
              </p>
              <h2>Our Mission</h2>
              <p>
                We believe that luxury travel should be accessible to more
                people. By bringing together travelers with similar interests
                and lifestyle preferences, we make it possible to enjoy premium
                accommodations at a fraction of the cost.
              </p>
              <h2>How It Works</h2>
              <p>
                Create a profile, connect with potential travel companions, and
                start sharing amazing experiences in luxury accommodations
                worldwide. Our platform handles all the details, from matching
                to booking.
              </p>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
