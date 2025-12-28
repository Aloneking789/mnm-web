import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote: "MatchMyCofounder connected me with my technical co-founder in less than a month. We just closed our seed round!",
    name: "Sarah Chen",
    title: "CEO, InnovateAI",
    image: PlaceHolderImages.find(p => p.id === "testimonial-1"),
  },
  {
    quote: "As an investor, the quality of startups on this platform is unmatched. I've made three investments already.",
    name: "Michael Lee",
    title: "Angel Investor",
    image: PlaceHolderImages.find(p => p.id === "testimonial-2"),
  },
  {
    quote: "The community is incredible. I've found mentors, partners, and friends who have been crucial to my journey.",
    name: "Jessica Rodriguez",
    title: "Founder, EcoSolutions",
    image: PlaceHolderImages.find(p => p.id === "testimonial-3"),
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-2">Testimonials</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Why People Love Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from real users who have transformed their ideas into reality with MatchMyCofounder.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto mt-16 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <p className="text-base text-foreground">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center">
                        {testimonial.image && (
                          <Image
                            src={testimonial.image.imageUrl}
                            alt={`Photo of ${testimonial.name}`}
                            width={48}
                            height={48}
                            className="rounded-full"
                            data-ai-hint={testimonial.image.imageHint}
                          />
                        )}
                        <div className="ml-4">
                          <p className="font-headline font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
