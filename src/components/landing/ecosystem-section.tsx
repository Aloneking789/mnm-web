import React from 'react';

export default function EcosystemSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            More than a launchpad.
            <br />
            <span className="relative inline-block">
              <span className="absolute -inset-2 block -skew-y-3 bg-primary/20" aria-hidden="true"></span>
              <span className="relative text-primary">A whole ecosystem.</span>
            </span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            At MatchMyCofounder, you get everything you need to launch.
          </p>
        </div>
      </div>
    </section>
  );
}
