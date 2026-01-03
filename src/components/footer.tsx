import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram, Music } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./icons";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "FAQs", href: "#faq" },
  { name: "Playground", href: "/playground" },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/matchmycofounder/" },
  { name: "YouTube", icon: Music, href: "https://www.youtube.com/@matchmycofounder/shorts" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">
                MatchMyCofounder
              </span>
            </Link>
            <p className="max-w-xs text-sm">
              Connecting innovators and visionaries to build the future, together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
            <div>
              <h3 className="font-headline font-semibold uppercase text-foreground">Platform</h3>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold uppercase text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold uppercase text-foreground">Connect</h3>
              <div className="mt-4 flex space-x-2">
                {socialLinks.map((social) => (
                  <Button key={social.name} variant="ghost" size="icon" asChild>
                    <Link href={social.href} aria-label={social.name}>
                      <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} MatchMyCofounder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
