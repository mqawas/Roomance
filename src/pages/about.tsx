import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export default function About() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "Michael Park",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Container className="py-12 space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">About Roomance</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing the way people find roommates and share living spaces,
              making it easier to find your perfect match.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                At Roomance, we believe that finding the right roommate should be as
                natural as finding a friend. Our platform combines advanced matching
                technology with a human-centered approach to help you find not just a
                roommate, but a compatible living partner.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">50K+</h3>
                <p className="text-sm text-muted-foreground">Happy Roommates</p>
              </Card>
              <Card className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-sm text-muted-foreground">Cities</p>
              </Card>
              <Card className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">95%</h3>
                <p className="text-sm text-muted-foreground">Match Success</p>
              </Card>
              <Card className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm text-muted-foreground">Support</p>
              </Card>
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Trust & Safety</h3>
                <p className="text-muted-foreground">
                  We prioritize your safety with verified profiles and secure
                  communication channels.
                </p>
              </Card>
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Community</h3>
                <p className="text-muted-foreground">
                  Building meaningful connections that go beyond just sharing a space.
                </p>
              </Card>
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously improving our matching algorithm to find your perfect roommate.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
