import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Create Your Profile",
      description:
        "Tell us about yourself, your travel style, and preferences.",
    },
    {
      title: "Find Your Match",
      description: "Browse and connect with like-minded luxury travelers.",
    },
    {
      title: "Book Together",
      description:
        "Split costs and share amazing experiences in luxury accommodations.",
    },
    {
      title: "Travel & Connect",
      description: "Enjoy your stay and make meaningful connections.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Container className="py-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold">How It Works</h1>
            <p className="text-xl text-muted-foreground">
              Find your perfect travel companion and share luxury experiences
              together
            </p>
          </div>

          <div className="grid gap-8 mt-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
