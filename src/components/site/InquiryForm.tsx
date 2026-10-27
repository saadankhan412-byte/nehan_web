import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import type { BusinessKey } from "@/data/company";
import { recipientsFor } from "@/data/company";
import { businessLabel, buildMailto, inquiryEndpoint, inquirySchema, inquiryTypes, type Inquiry } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "mail"; href: string }
  | { kind: "error"; message: string };

const field =
  "mt-1.5 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-ring/30";
const labelCls = "font-display text-xs font-semibold uppercase tracking-[0.12em] text-navy";

export function InquiryForm({
  defaultBusiness = "both",
  defaultType = "Machinery",
  defaultInterest = "",
  lockBusiness = false,
  idPrefix = "inq",
}: {
  defaultBusiness?: BusinessKey;
  defaultType?: (typeof inquiryTypes)[number];
  defaultInterest?: string;
  lockBusiness?: boolean;
  idPrefix?: string;
}) {
  const [errors, setErrors] = useState<Partial<Record<keyof Inquiry, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [business, setBusiness] = useState<BusinessKey>(defaultBusiness);
  const startedAt = useRef(Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    // Spam guards: hidden honeypot field and a minimum fill time.
    if (fd.get("website") || Date.now() - startedAt.current < 2500) {
      setStatus({ kind: "error", message: "Submission blocked. Please wait a moment and try again." });
      return;
    }
    const parsed = inquirySchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Partial<Record<keyof Inquiry, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Inquiry;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      setStatus({ kind: "error", message: "Please correct the highlighted fields." });
      return;
    }
    setErrors({});
    const data = parsed.data;

    if (!inquiryEndpoint) {
      setStatus({ kind: "mail", href: buildMailto(data) });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(inquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, businessName: businessLabel[data.business], recipients: recipientsFor(data.business) }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ kind: "sent" });
      form.reset();
    } catch {
      setStatus({ kind: "error", message: "We couldn't send your inquiry. Please try again or contact us by phone or email." });
    }
  }

  const err = (k: keyof Inquiry) =>
    errors[k] ? (
      <p id={`${idPrefix}-${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p>
    ) : null;
  const aria = (k: keyof Inquiry) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${idPrefix}-${k}-err` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>Website <input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-fullName`} className={labelCls}>Full name *</label>
        <input id={`${idPrefix}-fullName`} name="fullName" autoComplete="name" className={field} {...aria("fullName")} />
        {err("fullName")}
      </div>
      <div>
        <label htmlFor={`${idPrefix}-company`} className={labelCls}>Company name *</label>
        <input id={`${idPrefix}-company`} name="company" autoComplete="organization" className={field} {...aria("company")} />
        {err("company")}
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className={labelCls}>Email address *</label>
        <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor={`${idPrefix}-phone`} className={labelCls}>Phone number *</label>
        <input id={`${idPrefix}-phone`} name="phone" type="tel" autoComplete="tel" className={field} {...aria("phone")} />
        {err("phone")}
      </div>

      {lockBusiness ? (
        <input type="hidden" name="business" value={business} />
      ) : (
        <fieldset className="sm:col-span-2">
          <legend className={labelCls}>Business of interest *</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(["nehan", "cis", "both"] as BusinessKey[]).map((b) => (
              <label
                key={b}
                className={cn(
                  "cursor-pointer rounded-sm border px-3 py-2 text-sm transition",
                  business === b ? "border-brand bg-accent text-brand" : "border-input bg-card text-foreground",
                )}
              >
                <input
                  type="radio"
                  name="business"
                  value={b}
                  checked={business === b}
                  onChange={() => setBusiness(b)}
                  className="sr-only"
                />
                {businessLabel[b]}
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Will be addressed to: {recipientsFor(business).join(", ")}</p>
        </fieldset>
      )}

      <div>
        <label htmlFor={`${idPrefix}-inquiryType`} className={labelCls}>Inquiry type *</label>
        <select id={`${idPrefix}-inquiryType`} name="inquiryType" defaultValue={defaultType} className={field}>
          {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-interest`} className={labelCls}>Machine or part of interest</label>
        <input id={`${idPrefix}-interest`} name="interest" defaultValue={defaultInterest} className={field} placeholder="e.g. NE-3109 or a drawing reference" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${idPrefix}-message`} className={labelCls}>Message *</label>
        <textarea id={`${idPrefix}-message`} name="message" rows={5} className={field} {...aria("message")} />
        {err("message")}
      </div>

      <div className="sm:col-span-2" aria-live="polite">
        {status.kind === "error" && (
          <p className="mb-4 flex items-start gap-2 rounded-sm border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {status.message}
          </p>
        )}
        {status.kind === "sent" && (
          <p className="mb-4 flex items-start gap-2 rounded-sm border border-brand/40 bg-accent p-3 text-sm text-navy">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Thank you — your inquiry has been submitted. Our team will contact you.
          </p>
        )}
        {status.kind === "mail" && (
          <div className="mb-4 rounded-sm border border-brand/40 bg-accent p-4 text-sm text-navy">
            <p className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              Your details are ready. Online submission isn't active yet, so please send your inquiry from your email app — it has not been sent yet.
            </p>
            <Button asChild variant="brand" size="sm" className="mt-3 h-10 px-4">
              <a href={status.href}>Open email to send</a>
            </Button>
          </div>
        )}
        <Button type="submit" variant="brand" size="lg" disabled={status.kind === "sending"}>
          <Send /> {status.kind === "sending" ? "Sending…" : "Submit Inquiry"}
        </Button>
      </div>
    </form>
  );
}
