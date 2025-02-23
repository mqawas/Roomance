import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { ProfileCard } from "@/components/profiles/profile-card";
import { PropertyCard } from "@/components/listings/property-card";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <Container>
            <div className="flex max-w-[980px] flex-col items-start gap-2">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Share luxury accommodations, split costs, make connections.
              </h1>
              <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                Experience high-end stays at half the price while meeting
                like-minded travelers.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg">Find Your Next Stay</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 bg-muted/50">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Find Your Perfect Match</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProfileCard />
              <ProfileCard
                name="Alex Chen"
                age={31}
                location="New York, USA"
                bio="Tech entrepreneur who loves exploring new cities and cultures."
                imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                interests={["Fine Dining", "Architecture", "Tech", "Art"]}
              />
              <ProfileCard
                name="Emma Schmidt"
                age={27}
                location="Munich, Germany"
                bio="Food blogger and wellness enthusiast seeking luxury retreats."
                imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                interests={["Wellness", "Food", "Photography", "Hiking"]}
              />
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <PropertyCard />
              <PropertyCard
                title="Mountain Villa with Private Pool"
                location="Aspen, CO"
                price={600}
                rating={4.8}
                imageUrl="https://images.unsplash.com/photo-1518780664697-55e3ad937233"
                dates="Jun 1-5"
                sharedWith={3}
              />
              <PropertyCard
                title="Beachfront Designer Villa"
                location="Bali, Indonesia"
                price={300}
                rating={4.95}
                imageUrl="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
                dates="Jul 10-15"
                sharedWith={2}
              />
              <PropertyCard
                title="Historic Palazzo Suite"
                location="Venice, Italy"
                price={450}
                rating={4.85}
                imageUrl="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
                dates="Aug 20-25"
                sharedWith={2}
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
