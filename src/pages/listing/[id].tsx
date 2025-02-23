import { useParams } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Heart, Share2, Users } from "lucide-react";

export default function Listing() {
  const { id } = useParams();

  // This would come from your database
  const listing = {
    title: "Luxury Penthouse with Ocean View",
    location: "Miami Beach, FL",
    price: 400,
    rating: 4.9,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    ],
    description:
      "Stunning penthouse with panoramic ocean views, featuring modern amenities and luxury finishes throughout.",
    amenities: ["Ocean View", "Private Pool", "Gym", "Spa", "24/7 Concierge"],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2.5,
    squareFeet: 2000,
    host: {
      name: "Michael Roberts",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 4.95,
      listings: 12,
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">{listing.title}</h1>
                <p className="text-muted-foreground">{listing.location}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-full aspect-[2/1] object-cover rounded-lg"
                />
              </div>
              {listing.images.slice(1).map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${listing.title} ${i + 2}`}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {/* Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">About this place</h2>
                  <p>{listing.description}</p>
                </div>

                {/* Amenities */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    What this place offers
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {listing.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Host */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Meet your host</h2>
                  <Card className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={listing.host.image}
                        alt={listing.host.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{listing.host.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {listing.host.listings} listings ·{" "}
                          {listing.host.rating} rating
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Booking Card */}
              <div>
                <Card className="p-6 space-y-6 sticky top-24">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-2xl font-bold">
                        ${listing.price}
                      </span>
                      <span className="text-muted-foreground"> / night</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>★</span>
                      <span>{listing.rating}</span>
                      <span className="text-muted-foreground">
                        ({listing.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Calendar mode="range" />
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span>Split with {listing.maxGuests - 1} others</span>
                    </div>
                    <Button className="w-full">Reserve</Button>
                  </div>

                  <div className="pt-4 border-t">
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt>$400 x 5 nights</dt>
                        <dd>$2,000</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Cleaning fee</dt>
                        <dd>$150</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Service fee</dt>
                        <dd>$200</dd>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <dt>Total</dt>
                        <dd>$2,350</dd>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <dt>Your share (split with 2)</dt>
                        <dd>$1,175</dd>
                      </div>
                    </dl>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
