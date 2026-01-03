import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MatchMyCoFounder?",
    answer: "It is a professional matchmaking platform. We help Founders find partners, Investors find ideas, and Professionals/Students find their next big startup project.",
  },
  {
    question: "When will the app be available?",
    answer: "We are currently in the final build phase! By joining the waitlist today, you are \"pre-ordering\" your spot. We will notify you via email and WhatsApp the moment we go live.",
  },
  {
    question: "What do I get for joining the waitlist now?",
    answer: "Early birds get exclusive priority access to the app before the general public. You will also receive a special Premium subscription bonus (like a free trial period) that won't be available after we launch.",
  },
  {
    question: "How does the matching work?",
    answer: "Once we launch, you'll create a profile based on your category (Founder, Investor, Pro, or Student). Our system then introduces you to the people who have exactly what you're looking for—no more endless searching.",
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We only use your email and WhatsApp to send you your launch invite and important project updates. No spam, ever.",
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
