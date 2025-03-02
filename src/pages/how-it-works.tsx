import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Users, Home, Heart, MessageCircle, CreditCard, Search } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Find Your Match",
      description:
        "Browse profiles of like-minded luxury travelers or search for high-end accommodations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Connect & Match",
      description:
        "Like profiles that interest you. When both users like each other, it's a match!",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Chat & Plan",
      description:
        "Discuss travel preferences, dates, and accommodation details with your matches.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Book Together",
      description:
        "Choose luxury accommodations and split the costs with your travel companion.",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Share Costs",
      description:
        "Split accommodation costs easily and securely through our platform.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Travel & Connect",
      description:
        "Enjoy luxury stays while making meaningful connections with fellow travelers.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <Container className="space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                How Roomance Works
              </h1>
              <p className="text-lg text-muted-foreground">
                Experience luxury travel with like-minded companions and split the
                costs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 space-y-4">
                  <div className="p-3 w-fit rounded-full bg-primary/10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    How does the matching system work?
                  </h3>
                  <p className="text-muted-foreground">
                    Our matching system pairs travelers based on shared interests,
                    travel styles, and accommodation preferences. When both users
                    express interest by liking each other's profiles, they can start
                    chatting and planning their shared stay.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">How is payment handled?</h3>
                  <p className="text-muted-foreground">
                    All payments are processed securely through our platform. Costs
                    are split equally between travel companions, and funds are only
                    released to the accommodation provider after check-in.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    Is my information secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, we take security seriously. All users are verified, and
                    personal information is protected. Our platform uses bank-level
                    security for all transactions.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
