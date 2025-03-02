import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface PropertyCardProps {
  title?: string;
  location?: string;
  price?: number;
  rating?: number;
  imageUrl?: string;
  dates?: string;
  sharedWith?: number;
}

import { useNavigate } from "react-router-dom";

export function PropertyCard({
  title = "Luxury Penthouse with Ocean View",
  location = "Miami Beach, FL",
  price = 400,
  rating = 4.9,
  imageUrl = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  dates = "May 15-20",
  sharedWith = 2,
  // costSplit = "equal",
}: PropertyCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      className="group relative overflow-hidden cursor-pointer"
      onClick={() => navigate(`/listing/1`)} // Replace 1 with actual listing ID
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <button className="absolute right-3 top-3 rounded-full bg-white p-1.5 text-gray-900 transition-transform hover:scale-110">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            <span>★</span>
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-muted-foreground">{dates}</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-lg font-medium">${price}</span>
            <span className="text-sm text-muted-foreground">per night</span>
            <span className="text-sm text-muted-foreground">
              • Split with {sharedWith}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
