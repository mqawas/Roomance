import { useParams } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, X } from "lucide-react";

export default function Profile() {
  const { id } = useParams();

  // This would come from your database
  const profile = {
    name: "Sarah Johnson",
    age: 28,
    location: "Berlin, Germany",
    bio: "Digital nomad seeking luxury adventures. Love photography and wine tasting.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    interests: ["Luxury Travel", "Photography", "Wine Tasting", "Yoga"],
    languages: ["English", "German"],
    occupation: "Travel Photographer",
    verified: true,
    memberSince: "2023",
    tripStyle: "Luxury Adventure",
    photos: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="w-full aspect-square object-cover"
                />
              </Card>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full border-2 border-destructive"
                >
                  <X className="h-6 w-6 text-destructive" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full border-2 border-green-500"
                >
                  <Heart className="h-6 w-6 text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                >
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                >
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">
                  {profile.name}, {profile.age}
                </h1>
                <p className="text-muted-foreground">{profile.location}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">About</h2>
                <p>{profile.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-full bg-primary/10 text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Details</h2>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-muted-foreground">Languages</dt>
                    <dd>{profile.languages.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Occupation
                    </dt>
                    <dd>{profile.occupation}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Member Since
                    </dt>
                    <dd>{profile.memberSince}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">
                      Trip Style
                    </dt>
                    <dd>{profile.tripStyle}</dd>
                  </div>
                </dl>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Photos</h2>
                <div className="grid grid-cols-3 gap-4">
                  {profile.photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo}
                      alt={`Travel photo ${i + 1}`}
                      className="aspect-square object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
