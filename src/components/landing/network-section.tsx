import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export default function NetworkSection() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'network-map');

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-2">Global Reach</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Join a Worldwide Network
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From Silicon Valley to Singapore, our community spans the globe, connecting you with talent and opportunities everywhere.
          </p>
        </div>

        <div className="mt-12">
          {mapImage && (
             <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              width={1200}
              height={600}
              className="mx-auto rounded-lg object-cover"
              data-ai-hint={mapImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
