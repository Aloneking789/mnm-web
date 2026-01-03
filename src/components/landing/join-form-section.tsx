"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleJoin } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button size="lg" type="submit" className="w-full rounded-full bg-primary font-bold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Claiming...
        </>
      ) : (
        <>
          CLAIM MY FREE PREMIUM
        </>
      )}
    </Button>
  );
}

export default function JoinFormSection() {
  const initialState = { message: "", errors: {}, redirectUrl: "" };
  const [state, dispatch] = useFormState(handleJoin, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.redirectUrl) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    } else if (state.message && state.redirectUrl) {
      toast({
        title: "Success!",
        description: state.message,
        className: "bg-green-600 text-white border-green-600"
      });
      formRef.current?.reset();
      window.open(state.redirectUrl, '_blank');
    }
  }, [state, toast]);

  return (
    <section id="join-form" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-block">
            <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Limited Offer
            </div>
          </div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Join the waitlist today and get 100% Free Premium subscription
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This is the most important part of the page
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-xl border-2 border-border/50 shadow-xl rounded-3xl">
          <CardContent className="p-8">
            <form ref={formRef} action={dispatch} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp Number (Optional)</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 9999999999" />
                {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">I am a...</Label>
                <Select name="category" required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select your background" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="founder">Founder</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="freelancer">Working Professional / Freelancer</SelectItem>
                  </SelectContent>
                </Select>
                {state.errors?.category && <p className="text-sm text-destructive">{state.errors.category[0]}</p>}
              </div>
              <div className="pt-4">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
