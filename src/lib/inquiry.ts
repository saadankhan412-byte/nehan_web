import { z } from "zod";
import { companies, recipientsFor, type BusinessKey } from "@/data/company";

export const inquiryTypes = ["Machinery", "Spare Parts", "Technical Information", "Other"] as const;

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().min(2, "Please enter your company name").max(150),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30)
    .regex(/^[+\d][\d\s()-]{6,}$/, "Use digits, spaces, + ( ) or - only"),
  business: z.enum(["nehan", "cis", "both"]),
  inquiryType: z.enum(inquiryTypes),
  interest: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(10, "Please describe your requirement (min. 10 characters)").max(2000),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export const businessLabel: Record<BusinessKey, string> = {
  nehan: companies.nehan.name,
  cis: companies.cis.name,
  both: "Both companies",
};

/**
 * Optional online endpoint (e.g. a form service URL) set via VITE_INQUIRY_ENDPOINT.
 * When absent, the form falls back to opening the visitor's email app addressed to the
 * correct business — nothing is claimed as "sent" in that case.
 */
export const inquiryEndpoint: string | undefined = import.meta.env["VITE_INQUIRY_ENDPOINT"] || undefined;

export function buildMailto(data: Inquiry) {
  const to = recipientsFor(data.business).join(",");
  const subject = `${data.inquiryType} inquiry${data.interest ? ` – ${data.interest}` : ""} – ${data.company}`;
  const body = [
    `Name: ${data.fullName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Business: ${businessLabel[data.business]}`,
    `Inquiry type: ${data.inquiryType}`,
    `Machine / part of interest: ${data.interest || "-"}`,
    "",
    data.message,
  ].join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
