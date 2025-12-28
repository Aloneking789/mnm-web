import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MatchMyCofounder?",
    answer: "MatchMyCofounder is a platform dedicated to connecting entrepreneurs, innovators, and investors. We help you find the right people to build your dream company with.",
  },
  {
    question: "Who is this platform for?",
    answer: "We welcome aspiring founders, experienced operators, domain experts, developers, designers, and investors who are passionate about building great companies.",
  },
  {
    question: "Is this free to join?",
    answer: "Yes, creating a profile and browsing our network is free. We believe in making connections accessible to everyone.",
  },
  {
    question: "How do you match co-founders?",
    answer: "Our platform uses a combination of your profile information, interests, skills, and stated goals to suggest potential matches. You can then connect and explore the possibility of working together.",
  },
  {
    question: "What is the application process?",
    answer: "The process starts with the application form on our website. After that, you'll create your profile to start connecting with others in the network.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-border/60">
                <AccordionTrigger className="text-left font-headline text-xl text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
