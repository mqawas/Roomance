import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { PropertyCard } from "@/components/listings/property-card";
import { ProfileCard } from "@/components/profiles/profile-card";

export default function Explore() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Container className="py-12 space-y-12">
          <section>
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
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8">
              Potential Travel Companions
            </h2>
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
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
