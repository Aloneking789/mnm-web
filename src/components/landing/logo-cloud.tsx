const logos = [
  { name: "Stanford", component: () => <p className="font-semibold">Stanford</p> },
  { name: "Harvard", component: () => <p className="font-semibold">Harvard</p> },
  { name: "MIT", component: () => <p className="font-semibold">MIT</p> },
  { name: "YC", component: () => <p className="font-bold">Y Combinator</p> },
  { name: "Google", component: () => <p className="font-semibold">Google</p> },
  { name: "Meta", component: () => <p className="font-semibold">Meta</p> },
  { name: "Stripe", component: () => <p className="font-bold">Stripe</p> },
  { name: "Berkeley", component: () => <p className="font-semibold">Berkeley</p> },
  { name: "Oxford", component: () => <p className="font-semibold">Oxford</p> },
];

export default function LogoCloud() {
  const extendedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <h2 className="mb-8 text-center font-headline text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by innovators from
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scrolling-logos">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex h-16 w-48 items-center justify-center px-4">
                <div className="text-2xl text-muted-foreground grayscale transition hover:grayscale-0">
                  <logo.component />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
