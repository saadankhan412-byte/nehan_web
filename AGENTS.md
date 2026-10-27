<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Company facts (contacts, brands, mission) live in `src/data/company.ts`; machine content/specs in `src/data/machines.ts` — pages read from these so content stays in one place and matches the profile PDF.
- Inquiry forms post to `VITE_INQUIRY_ENDPOINT` when set, else fall back to a prefilled mailto; never show "sent" without a successful response.
- Profile images live in `src/assets/profile/` (extracted from the company PDF); don't substitute stock imagery for products.
