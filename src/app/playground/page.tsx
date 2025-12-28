"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Briefcase,
  Lightbulb,
  Check,
  X,
  Heart,
  Users,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const initialCandidates = [
  {
    id: 1,
    name: 'Alexina',
    age: 31,
    location: 'San Francisco, CA',
    turningPoint: 'Choosing to prioritize mental health and well-being.',
    exploring:
      'Launching a website that connects creatives with potential clients.',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
  },
  {
    id: 2,
    name: 'Ben',
    age: 28,
    location: 'New York, NY',
    turningPoint: 'Leaving a stable job to pursue my passion for sustainable tech.',
    exploring:
      'Building a platform to help consumers make eco-friendly choices.',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
  },
  {
    id: 3,
    name: 'Chloe',
    age: 34,
    location: 'London, UK',
    turningPoint: 'Realizing my corporate experience could help startups scale effectively.',
    exploring: 'A consultancy to help early-stage companies with their growth strategy.',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
  },
];

const FilterItem = ({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-muted-foreground" />
      <span className="font-medium">{title}</span>
    </div>
    <div className="flex items-center gap-2 text-muted-foreground">
      <span>{value}</span>
      <ChevronRight className="h-4 w-4" />
    </div>
  </div>
);

export default function PlaygroundPage() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [activeCard, setActiveCard] = useState(candidates.length - 1);
  const [distance, setDistance] = useState(10);

  const handleSwipe = (isMatch: boolean) => {
    // Basic swipe logic
    if (activeCard >= 0) {
      setTimeout(() => {
        setActiveCard(activeCard - 1);
      }, 300); // Animation delay
    }
  };
  
  // Reset when all cards are swiped
  React.useEffect(() => {
    if (activeCard < 0 && candidates.length > 0) {
       setTimeout(() => setActiveCard(candidates.length - 1), 1000)
    }
  }, [activeCard, candidates.length])

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/30">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
            <div className='flex items-center gap-4'>
                 <Button variant="outline" size="icon" asChild>
                    <Link href="/">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="font-headline text-xl font-semibold">Playground</h1>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">
              Welcome to our app&apos;s Playground
            </p>
        </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full border-r bg-background p-6 md:w-80 lg:w-96">
          <div className="flex h-full flex-col">
            <h2 className="font-headline text-2xl font-bold">
              What are you looking for in a cofounder?
            </h2>
            <p className="mt-2 text-muted-foreground">Basic preferences</p>
            
            <div className="mt-6 flex-1">
                <FilterItem icon={MapPin} title="Location" value="San Francisco, CA" />
                <div className="py-3">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Heart className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">Maximum Distance</span>
                        </div>
                        <span className="text-muted-foreground">{distance} miles</span>
                    </div>
                    <Slider defaultValue={[10]} max={100} step={1} className="mt-3" onValueChange={(value) => setDistance(value[0])} />
                </div>
                <FilterItem icon={Briefcase} title="Portfolios" value="Open to all" />
                <FilterItem icon={Lightbulb} title="Industry" value="Open to all" />
                <FilterItem icon={Users} title="Matching Intention" value="Open to all" />
            </div>

            <Button size="lg" className="mt-6 w-full">Generate Candidates</Button>
             <p className="mt-4 text-center text-xs text-muted-foreground">
                The intent of this playground is to simulate the mobile app experience. All profiles are fictional.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center p-4 md:p-10">
          <div className="relative h-[600px] w-full max-w-sm">
             {candidates.length === 0 && <p>No more candidates.</p>}

            {candidates.map((candidate, index) => (
              <Card
                key={candidate.id}
                className={`absolute h-full w-full transform transition-all duration-300 ease-in-out ${
                  index === activeCard ? 'z-10 rotate-0' : `z-0 scale-95`
                } ${index < activeCard ? 'opacity-0 -translate-x-full rotate-[-15deg]' : ''}`}
              >
                <ScrollArea className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                    <div className="relative mb-4 h-48 w-full">
                        {candidate.image && (
                            <Image
                                src={candidate.image.imageUrl}
                                alt={`Photo of ${candidate.name}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                                data-ai-hint={candidate.image.imageHint}
                            />
                        )}
                    </div>

                    <h3 className="font-headline text-3xl font-bold">{candidate.name}</h3>
                  
                  <div className="mt-4 space-y-4 text-muted-foreground">
                    <div>
                        <p className="text-sm font-semibold text-foreground">A turning point in my life</p>
                        <p>{candidate.turningPoint}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">I'm exploring</p>
                        <p>{candidate.exploring}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t pt-4">
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{candidate.age}</span>
                    </div>
                     <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{candidate.location}</span>
                    </div>
                  </div>

                </CardContent>
                </ScrollArea>
              </Card>
            ))}
          </div>
        </main>
         <div className="fixed bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:bottom-10 md:right-10 md:translate-x-0 z-20 flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-full border-2 border-red-500 bg-white text-red-500 shadow-lg hover:bg-red-50"
              onClick={() => handleSwipe(false)}
            >
              <X className="h-8 w-8" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-full border-2 border-green-500 bg-white text-green-500 shadow-lg hover:bg-green-50"
              onClick={() => handleSwipe(true)}
            >
              <Check className="h-8 w-8" />
            </Button>
          </div>
      </div>
    </div>
  );
}
