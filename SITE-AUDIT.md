# FaithTech.dev — Site audit & answers

## Does the form work? Where does it send email?

**No.** The form does **not** send anywhere today. On submit it only:
- Shows a toast: “Message sent! I'll get back to you within 1–2 business days.”
- Resets the form.

Submissions are **not** stored or emailed to you. The code comment says: *“In a real implementation, this would send to a backend.”*

**Fix added:** The contact form is now wired to **Formspree**. Add your Formspree form ID in `.env.local` as `VITE_FORMSPREE_FORM_ID=your_id` (see README). Submissions are then sent to Formspree and you receive emails. Without the env var, the form shows a “Form in demo mode” toast so you know to set it up.

---

## Does the “Book on Calendly” link work?

**Yes.** All “Book a strategy call” / “Free strategy call” / “Book on Calendly” buttons call `window.openCalendly()`, which:
1. Opens the **Calendly popup** for `https://calendly.com/alex-sung-youversion/30min` if the Calendly script has loaded.
2. Otherwise opens that same URL in a **new tab**.

So as long as that Calendly link is your live event, booking works.

---

## Bugs and missing pieces

| Issue | Severity | Notes |
|-------|----------|------|
| **Form doesn’t send** | High | Fixed via Formspree (you add your form ID). |
| **Selects use `defaultValue`** | Low | Can make dropdowns not reflect form reset; fixed to use `value={field.value}`. |
| **OG / Twitter image** | Low | Still points to Lovable’s image. Replace with a faithtech.dev image (e.g. in `public/og-image.png`) and update `index.html`. |
| **JSON-LD `logo`** | Low | Points to `/favicon.svg`; you use an inline favicon. Add a `public/favicon.svg` or remove/update the logo URL in `index.html`. |
| **apple-touch-icon.png** | Low | Referenced in HTML but missing from `public/`. Add or remove the link. |

---

## How would we structure it differently?

- **Keep:** Hero → Social proof → Services → Work (case studies) → CTA banner → About → Insights → Contact → Footer. Clear CTAs and one primary path: “Book a strategy call.”
- **Consider adding:**
  - **One short testimonial or quote** above or beside the contact section (e.g. from a church or ministry leader) to build trust.
  - **“What to expect on the call”** (3 bullet points) near the main Calendly CTA to reduce friction (e.g. “We’ll clarify your goals,” “No pitch,” “You’ll leave with next steps”).
  - **Dedicated “Who this is for”** section (church leaders, tech directors, Christian founders) with 2–3 sentences each so visitors see themselves quickly.
- **Optional:** A simple **“How we work”** (discovery call → scope → engagement) to set expectations. Could stay minimal to avoid clutter.

---

## Is it a good site to attract church tech consultant customers?

**Yes, with a few tweaks.**

**Strengths:**
- Clear audience: church leaders, faith tech teams, Christian entrepreneurs.
- Strong CTAs: “Book a free 30‑min strategy call” is repeated and prominent.
- Credibility: YouVersion, partner logos, case studies with metrics.
- Personal consultant angle: “You get a single point of contact,” first-person copy.
- Calendly reduces friction; form is secondary.

**To improve conversion:**
1. **Make the form real** (Formspree or similar) so you don’t lose leads who prefer email.
2. **Add one testimonial** (name, role, one sentence) to add social proof.
3. **Replace the OG image** with a FaithTech.dev image so shares look on-brand.
4. **Optional:** Add a short “What to expect” next to the main Calendly CTA.

Overall it’s already well aligned with attracting church tech consultant customers; the main functional gap was the form not sending, which is now addressed (once you add your Formspree ID).
