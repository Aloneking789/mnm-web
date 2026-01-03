import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative px-4 py-6 md:px-6 md:py-8">
      <div className="relative h-[80vh] min-h-[600px] w-full text-white overflow-hidden rounded-3xl">
        <video
          src="https://cdn.jsdelivr.net/gh/Aloneking789/mnm-web@main/public/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-3xl" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <div className="container">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Connect with founders. Meet investors. <br />
              <span className="text-primary">Stop searching</span> Start Building
            </h1>
            <div className="mx-auto mt-8 max-w-2xl space-y-4 text-lg text-gray-300">
              <p>
                We match founders with partners, ideas with money, and projects with experts. The all-in-one place to turn your vision into a reality.
              </p>
            </div>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-primary px-10 text-lg font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90"
              >
                <Link href="#join-form">
                  Join the Network <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
