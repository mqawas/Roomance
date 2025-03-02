import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Container className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Get in Touch</h1>
                <p className="text-muted-foreground">
                  Have questions? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="p-4 flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email us</h3>
                    <p className="text-sm text-muted-foreground">support@roomance.com</p>
                  </div>
                </Card>
                <Card className="p-4 flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Call us</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </Card>
                <Card className="p-4 flex items-start space-x-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Live chat</h3>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                  />
                </div>
                <Button className="w-full">Send message</Button>
              </form>
            </Card>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
