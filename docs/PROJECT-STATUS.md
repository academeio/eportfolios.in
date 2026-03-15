# eportfolios.in — Project Status

**Last updated:** 15-03-2026
**Live site:** https://eportfolios.in
**Repo:** https://github.com/academeio/eportfolios.in
**Local:** `~/Developer/eportfolios-website/`
**Stack:** Astro 5, Tailwind CSS v4, static output
**Hosting:** Vercel free tier, custom domain via Cloudflare DNS (proxy OFF)
**Contact email:** mail@academe.in
**Deploy command:** `npx vercel --prod --yes`

---

## What This Site Is

Marketing/credibility website for **Academe ePortfolios** — an open-source ePortfolio platform (forked from Mahara, GPL v3) for Indian medical colleges doing CBME.

**Audience priority:** Dean (P1) → Head of Department (P2) → MEU Head (P3)
**Funnel:** Build credibility via evidence/resources → Schedule a demo → Pilot deployment
**Tone:** Professional-editorial (BMJ/Lancet style). No SaaS jargon. No "free" (in India, "free" = worthless). No self-hosting emphasis — Academe Cloud is the go-to-market.

---

## Completed Phases

### Phase 1 — Knowledge Base (12-03-2026)

A comprehensive research document that serves as the source of truth for all marketing copy:

- **File:** `~/Developer/eportfolios/docs/12-03-2026-eportfolios-cbme-knowledge-base.md`
- 13 sections, 33 references
- Covers: company context, feature inventory, CBME explainer, EPAs, evidence base (systematic reviews + Indian studies), regulatory landscape (NMC/NBEMS/NAAC), market gap analysis, competitive landscape, feature-to-need mapping, case studies (SBV CoBALT model + AVMCH + international), adoption playbook, bibliography

### Phase 2 — Website Build & Deploy (12-03-2026 to 15-03-2026)

**10 pages:**

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Hero, social proof, problem/solution, evidence stats, audience cards, regulatory bar |
| Why ePortfolios | `/why-eportfolios` | Editorial evidence narrative, EPA explainer, comparison table, 9 references |
| For Medical Colleges | `/for-medical-colleges` | 14 feature-to-need cards, Dean/HoD/MEU sections, 6 FAQs, adoption roadmap |
| Implementation | `/implementation` | 4-phase process, advanced services (5 cards), ePortfolio Coordinator, team section |
| Case Studies | `/case-studies` | SBV featured (CoBALT, Prof. Ananthakrishnan quote), AVMCH, 3 international cases |
| Resources | `/resources` | 7 evidence summaries, 3 regulatory refs, placeholder cards for Phase 3 assets |
| About | `/about` | Platform info, Academe Research verticals, production stats, open source |
| Demo | `/demo` | FormSubmit.co form (8 fields) → mail@academe.in |
| Privacy | `/privacy` | Minimal privacy policy |
| 404 | `/404` | Custom error page |

**Components:** Header (sticky, responsive, 6 nav items + CTA, mobile hamburger), Footer (4-column dark), CTASection (light/dark variants), SocialProof (4,300+ users trust bar), SectionHeading, StatCard, Citation, FeatureCard, FAQItem, ResourceCard

**Key content highlights:**
- SBV CoBALT model with Prof. Ananthakrishnan N quote about NAAC distinctiveness
- AVMCH as second production deployment (710 users, since 2021)
- 2 NMJI papers (Ananthakrishnan 2019, 2023) cited prominently across 4 pages
- Implementation page: services by medical educationists, not IT staff
- Features: Departmental Activities (forums, noticeboards, case discussions), Dedicated Server (not shared hosting), Custom Plugin Development
- Brochure: 4-page print-ready HTML at `/assets/brochure-academe-eportfolios.html`

**Design spec:** `~/Developer/eportfolios/docs/superpowers/specs/12-03-2026-eportfolios-website-design.md`
**Implementation plan:** `~/Developer/eportfolios/docs/superpowers/plans/12-03-2026-eportfolios-website.md`

---

## Remaining Phases

### Phase 3 — Content Assets (next)

Create downloadable assets. The `/resources` page already has placeholder "Coming Soon" cards for these:

| Asset | Audience | Status |
|-------|----------|--------|
| **PDF Brochure** (2-4 pages) | Deans, conference handout | HTML DONE at `public/assets/brochure-academe-eportfolios.html` — open in browser, Save as PDF |
| **Presentation Deck** — "CBME and ePortfolios" | Conference talks, MEU workshops | Not started |
| **Implementation Guide** whitepaper | Dean + PG Coordinator | Not started |
| **EPA Tracking Handbook** | HoDs | Not started |
| **NAAC Documentation Guide** | IQAC, NAAC coordinators | Not started |
| **SBV Case Study** (full PDF) | All audiences | Not started |

### Phase 4 — Integration

- Replace "Coming Soon" placeholder cards on `/resources` with download links
- Add email capture for gated content if desired
- Revisit website copy with any new evidence or institutions
- Add any new features or pages based on user feedback

---

## Pending Setup Tasks

- **Vercel GitHub auto-deploy:** Currently deploys manually via `npx vercel --prod --yes`. To enable auto-deploy on git push, connect GitHub at https://vercel.com/account/login-connections (one-time setup — add Login Connection for GitHub, authorize for academeio org)
- **Brochure PDF:** Open https://eportfolios.in/assets/brochure-academe-eportfolios.html → click "Save as PDF" or Cmd+P → generate final PDF

---

## Important Design Decisions (do not change without discussion)

1. **No "free"** — In India, "free" is perceived as worthless. Say "open source" or "open to use/modify/distribute"
2. **No self-hosting emphasis** — Academe Cloud is the go-to-market (turnkey managed service)
3. **Per-user fees apply** on Academe Cloud — say "affordable per-user pricing", not "no per-user fees"
4. **Cost messaging:** Emphasise eliminating paper logbook printing/storage/handling costs + being 80% less than proprietary alternatives
5. **Implementation by medical educationists** — not IT professionals. This is a key differentiator
6. **SBV naming:** "Sri Balaji Vidyapeeth" (no "University"), "Pondicherry" (not "Puducherry")
7. **Contact email:** mail@academe.in
8. **Brand name:** "Academe ePortfolios" (lowercase 'e', capital 'P')

---

## File Structure

```
eportfolios-website/
├── astro.config.mjs          # Astro config, Tailwind vite plugin, sitemap
├── vercel.json                # Vercel deployment config
├── public/
│   ├── assets/
│   │   └── brochure-academe-eportfolios.html  # Print-ready brochure
│   ├── favicon.svg
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── styles/
│   │   ├── global.css         # Tailwind v4 @theme (colors, fonts)
│   │   └── fonts.css          # Google Fonts (Inter + Merriweather)
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell, SEO meta, OG tags
│   ├── components/
│   │   ├── Header.astro       # Sticky nav, 6 items + demo CTA
│   │   ├── Footer.astro       # 4-column dark footer
│   │   ├── CTASection.astro   # Reusable CTA block
│   │   ├── SocialProof.astro  # Trust bar (4,300+ users)
│   │   ├── SectionHeading.astro
│   │   ├── StatCard.astro
│   │   ├── Citation.astro
│   │   ├── FeatureCard.astro
│   │   ├── FAQItem.astro
│   │   └── ResourceCard.astro
│   └── pages/
│       ├── index.astro
│       ├── why-eportfolios.astro
│       ├── for-medical-colleges.astro
│       ├── implementation.astro
│       ├── case-studies.astro
│       ├── resources.astro
│       ├── about.astro
│       ├── demo.astro
│       ├── privacy.astro
│       └── 404.astro
└── docs/
    └── PROJECT-STATUS.md      # This file
```

---

## Related Files (in eportfolios repo)

- **Knowledge base:** `~/Developer/eportfolios/docs/12-03-2026-eportfolios-cbme-knowledge-base.md`
- **Design spec:** `~/Developer/eportfolios/docs/superpowers/specs/12-03-2026-eportfolios-website-design.md`
- **Implementation plan:** `~/Developer/eportfolios/docs/superpowers/plans/12-03-2026-eportfolios-website.md`
- **SBV CoBALT paper (PDF):** `~/Developer/eportfolios/docs/resources/The SBV Comptency-Based Learning and Training Model - The National Medical Journal of India.pdf`
