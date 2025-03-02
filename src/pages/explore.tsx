import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ProfileCard } from "@/components/profiles/profile-card";
import { PropertyCard } from "@/components/listings/property-card";
import { Search, Users, Home } from "lucide-react";

export default function Explore() {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <Tabs defaultValue="people" className="space-y-8">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="people" className="space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Find People</span>
                </TabsTrigger>
                <TabsTrigger value="places" className="space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Find Places</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="people" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input placeholder="Any location" />
                      </div>
                      <div className="space-y-2">
                        <Label>Age Range</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="18-25">18-25</SelectItem>
                            <SelectItem value="26-35">26-35</SelectItem>
                            <SelectItem value="36-45">36-45</SelectItem>
                            <SelectItem value="46+">46+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Travel Style</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="luxury">Luxury</SelectItem>
                            <SelectItem value="adventure">Adventure</SelectItem>
                            <SelectItem value="cultural">Cultural</SelectItem>
                            <SelectItem value="relaxation">Relaxation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Languages</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="de">German</SelectItem>
                            <SelectItem value="ar">Arabic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProfileCard />
                  <ProfileCard
                    name="Alex Chen"
                    age={31}
                    location="New York, USA"
                    imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  />
                  <ProfileCard
                    name="Emma Schmidt"
                    age={27}
                    location="Munich, Germany"
                    imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="places" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input placeholder="Where are you going?" />
                      </div>
                      <div className="space-y-2">
                        <Label>Price Range (per night)</Label>
                        <div className="pt-2">
                          <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={1000}
                            step={50}
                          />
                          <div className="flex justify-between mt-2">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Property Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="penthouse">Penthouse</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Number of Guests</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 guests</SelectItem>
                            <SelectItem value="3">3 guests</SelectItem>
                            <SelectItem value="4">4 guests</SelectItem>
                            <SelectItem value="5+">5+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PropertyCard />
                  <PropertyCard
                    title="Mountain Villa with Private Pool"
                    location="Aspen, CO"
                    price={600}
                    imageUrl="https://images.unsplash.com/photo-1518780664697-55e3ad937233"
                  />
                  <PropertyCard
                    title="Beachfront Designer Villa"
                    location="Bali, Indonesia"
                    price={300}
                    imageUrl="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </main>
    </div>
  );
}
