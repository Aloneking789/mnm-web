import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Banknote, Handshake, Flame, Crosshair } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Concepts",
    description: "Sourced from our business opportunity vault.",
  },
  {
    icon: Banknote,
    title: "Capital",
    description: "And equity to build with conviction.",
  },
  {
    icon: Crosshair,
    title: "Clarity",
    description: "From mentors who've been in the trenches.",
  },
  {
    icon: Handshake,
    title: "Community",
    description: "Of founders as fierce as you are.",
  },
  {
    icon: Flame,
    title: "Culture",
    description: "That fuels momentum, not meetings.",
  },
];

const FeatureCard = ({ icon: Icon, title, description, className }: (typeof features)[0] & {className?: string}) => (
    <Card className={`group relative transform-gpu transition-all duration-300 will-change-transform hover:-translate-y-2 bg-white/40 backdrop-blur-sm rounded-3xl p-6 ${className}`}>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-7 w-7" />
        </div>
        <CardTitle className="font-headline text-2xl text-foreground">{title}</CardTitle>
        <CardDescription className="mt-2 text-base text-muted-foreground">{description}</CardDescription>
    </Card>
)

export default function BentoGridSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-transparent">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Everything you need to begin, and beyond
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At <span className="text-primary font-semibold">MatchMyCofounder</span>, you don't start from scratch - you start with firepower. Every co-founder joins an existing blueprint.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-6">
            <FeatureCard {...features[0]} className="md:col-span-3 lg:col-span-2" />
            <FeatureCard {...features[1]} className="md:col-span-3 lg:col-span-2" />
            <FeatureCard {...features[2]} className="md:col-span-6 lg:col-span-2" />
            <FeatureCard {...features[3]} className="md:col-span-3" />
            <FeatureCard {...features[4]} className="md:col-span-3" />
        </div>
      </div>
    </section>
  );
}
