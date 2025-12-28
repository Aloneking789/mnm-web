import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full text-white overflow-hidden">
      <video
        src="https://cdn.jsdelivr.net/gh/Aloneking789/mnm-web@main/public/hero.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container">
           <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Ambition is everywhere. <br /> 
              <span className="text-primary">MatchMyCofounder</span> is where it&apos;s shaped.
            </h1>
            <div className="mx-auto mt-8 max-w-2xl space-y-4 text-lg text-gray-300">
                <p>
                    Here, you <span className="font-semibold text-white">build with us</span> — drawing on an ecosystem of mentors, operators, strategists, and experts working to turn your spark into a business.
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
    </section>
  );
}
