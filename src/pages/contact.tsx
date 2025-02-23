import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Container className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto space-y-8"
          >
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
