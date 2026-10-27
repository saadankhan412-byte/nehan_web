import { describe, expect, it } from "vitest";
import { recipientsFor } from "@/data/company";
import { inquirySchema } from "@/lib/inquiry";

describe("inquiry routing", () => {
  it("sends Nehan inquiries to Nehan's email only", () => {
    expect(recipientsFor("nehan")).toEqual(["nehanenterprises31@gmail.com"]);
  });
  it("sends Crescent inquiries to both Crescent emails", () => {
    expect(recipientsFor("cis")).toEqual(["crescentindservices1982@gmail.com", "ta.nizam52@gmail.com"]);
  });
  it("sends 'both' inquiries to all three emails", () => {
    expect(recipientsFor("both")).toHaveLength(3);
  });
  it("rejects an inquiry with an invalid email", () => {
    const r = inquirySchema.safeParse({ fullName: "Ali Khan", company: "ACME", email: "nope", phone: "+92 300 1234567", business: "cis", inquiryType: "Spare Parts", message: "Need ten knife blades" });
    expect(r.success).toBe(false);
  });
});
