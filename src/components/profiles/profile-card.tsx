import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, X } from "lucide-react";

interface ProfileCardProps {
  name?: string;
  age?: number;
  location?: string;
  bio?: string;
  imageUrl?: string;
  interests?: string[];
}

import { useNavigate } from "react-router-dom";

export function ProfileCard({
  name = "Sarah Johnson",
  age = 28,
  location = "Berlin, Germany",
  bio = "Digital nomad seeking luxury adventures. Love photography and wine tasting.",
  imageUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  interests = ["Luxury Travel", "Photography", "Wine Tasting", "Yoga"],
}: ProfileCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className="w-full max-w-md mx-auto overflow-hidden bg-background cursor-pointer"
      onClick={() => navigate(`/profile/1`)} // Replace 1 with actual profile ID
    >
      <div className="relative aspect-[3/4] w-full">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-semibold">
            {name}, {age}
          </h3>
          <p className="text-sm opacity-90">{location}</p>
          <p className="mt-2 text-sm">{bio}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-2 py-1 text-xs rounded-full bg-white/20"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 p-4">
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
      </div>
    </Card>
  );
}
