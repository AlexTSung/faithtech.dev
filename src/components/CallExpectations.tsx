import { Check } from "lucide-react";

const defaults = [
  "A clear read on the real problem (not just the requested feature)",
  "A recommended next engagement: Discovery Sprint, Build & Launch, or Grow",
  "Immediate next steps you can take even if we do not work together",
];

const prepDefaults = [
  "What outcome would make the next 90 days a win?",
  "Who are the real users (staff, members, donors, product users)?",
  "What have you already tried, and what stalled?",
  "Budget and timeline constraints you cannot move",
  "Whether you need validation, a build lead, or growth advisory",
];

type Props = {
  /** Audience-flavored intro under the heading */
  intro?: string;
  className?: string;
  showPrepChecklist?: boolean;
};

/**
 * Soft close above Calendly: outcomes of the call + optional prep checklist (light lead magnet).
 */
const CallExpectations = ({
  intro = "Thirty minutes. No pitch deck. You leave with clarity on what to build, in what order, and why.",
  className = "",
  showPrepChecklist = true,
}: Props) => {
  return (
    <div className={`mb-10 space-y-8 ${className}`}>
      <div>
        <h3 className="font-display text-xl font-semibold mb-2">What you&apos;ll get on the call</h3>
        <p className="text-muted-foreground mb-5 leading-relaxed max-w-2xl">{intro}</p>
        <ul className="space-y-3">
          {defaults.map((item) => (
            <li key={item} className="flex gap-2.5 items-start text-[0.95rem] text-foreground/90">
              <Check className="h-4 w-4 text-primary shrink-0 mt-1" strokeWidth={2.25} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {showPrepChecklist && (
        <div className="border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">
            Before the call
          </p>
          <h3 className="font-display text-lg font-semibold mb-2">
            Five questions that sharpen the conversation
          </h3>
          <p className="text-muted-foreground text-sm mb-5 max-w-2xl leading-relaxed">
            Skim these beforehand. Bring rough answers. This is the light prep most partners find
            useful, whether or not we engage after the call.
          </p>
          <ol className="space-y-3 list-none">
            {prepDefaults.map((q, i) => (
              <li key={q} className="grid grid-cols-[2rem_1fr] gap-2 text-sm text-foreground/85">
                <span className="font-display text-muted-foreground tabular-nums pt-0.5">
                  0{i + 1}
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default CallExpectations;
