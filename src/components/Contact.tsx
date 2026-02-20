import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  org: z.string().trim().max(200, "Organization name must be less than 200 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  project: z.string(),
  timeline: z.string(),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      org: "",
      email: "",
      project: "Website",
      timeline: "Exploring",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!FORMSPREE_FORM_ID) {
      toast({
        title: "Form in demo mode",
        description: "Add VITE_FORMSPREE_FORM_ID to receive submissions. See README.",
        variant: "default",
      });
      form.reset();
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          org: data.org,
          email: data.email,
          project: data.project,
          timeline: data.timeline,
          message: data.message,
          _subject: `FaithTech.dev contact from ${data.name}`,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Send failed");
      toast({
        title: "Message sent!",
        description: "I'll get back to you within 1-2 business days.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or book a call instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as unknown as { openCalendly?: (ev: React.MouseEvent) => void }).openCalendly?.(e);
  };

  return (
    <section id="contact" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Let’s talk</h3>
        <p className="text-muted-foreground mb-6">
          The fastest way to get clarity is a short call. Book a <strong className="text-foreground">free 30‑minute strategy call</strong> and we’ll map your goals, bottlenecks, and next steps—no pitch, no commitment.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <Button onClick={openCalendly} className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-6 shadow-glow">
            Book your free strategy call
          </Button>
        </div>
        <p className="text-muted-foreground mb-8 border-t border-border pt-8">
          Prefer to write first? Share a few details below and I’ll reply with next steps—usually within 1–2 business days.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot field for spam prevention */}
            <div className="sr-only">
              <label htmlFor="bot-field">Don't fill this out if you're human:</label>
              <input type="text" id="bot-field" name="bot-field" tabIndex={-1} />
            </div>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-muted-foreground">Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-transparent border-border"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="org"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-muted-foreground">Organization</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Church, ministry, publisher…"
                      className="bg-transparent border-border"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-muted-foreground">Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.org"
                      className="bg-transparent border-border"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-muted-foreground">Project Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-transparent border-border">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Website">Website</SelectItem>
                      <SelectItem value="Mobile App">Mobile App</SelectItem>
                      <SelectItem value="Bible App Integration">Bible App Integration</SelectItem>
                      <SelectItem value="API / Platform">API / Platform</SelectItem>
                      <SelectItem value="Strategy Workshop">Strategy Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-muted-foreground">Timeline</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-transparent border-border">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Exploring">Exploring</SelectItem>
                      <SelectItem value="1-3 months">1–3 months</SelectItem>
                      <SelectItem value="3-6 months">3–6 months</SelectItem>
                      <SelectItem value=">6 months">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-muted-foreground">What's the goal?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about outcomes, audience, and any constraints."
                      className="bg-transparent border-border min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-4 flex-wrap">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              >
                {isSubmitting ? "Sending…" : "Send"}
              </Button>
              <Button type="button" variant="outline" onClick={openCalendly} className="font-bold">
                Or book a call instead
              </Button>
              <small className="text-xs text-muted-foreground">
                I typically respond within 1–2 business days.
              </small>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
