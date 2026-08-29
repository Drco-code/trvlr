# Pencil Spec — trvlr.pen (GG Travels & Tours)

> `.pen` files are binary/encrypted and only editable via Pencil MCP (`highagency.pencildev-0.6.66`).
> This document is the source-of-truth for generating `trvlr.pen` when Pencil is open in VS Code.
> In Build Mode, run `pencil_get_app_state({include_schema:true,include_canvas_design:true})` with `trvlr.pen` open to materialize.

## Tokens (PRD §6.1–6.2)
- Colors: Deep Navy #0B1E3A, Navy Soft #13294B, Gold #B8912F, Cream #F6F3EC, Neutral #E8E6E0
- Typography: Playfair Display (serif headlines, high-contrast editorial), Inter/Geist Sans (body/UI), consistent type scale
- Imagery: full-bleed high-res Unsplash placeholders, navy gradient overlay, consistent aspect ratios
- Components: primary CTA gold/navy, secondary ghost, shared card shadow/radius, thin line-icon set (custom Icon.tsx maps to names, no emoji)

## Pages to design in .pen
Home (§5.1) hero Ken Burns → Trust strip → Services (8 preview) → Destinations (8) → Tours (4) → Deals band → Why Choose Us → Testimonials carousel → Journal (3) → Final CTA
About (§5.2), Services (16 filter), Tours + [slug] (tabs + sticky Book), Destinations + [slug], Luxury, Corporate, Journal + [slug], Contact (form+map), Quote, FAQ (accordion), Legal template, 404

## Motion (PRD §7)
Hero fade-up stagger, header transparent→navy on scroll, gold underline hover, scroll reveal + stagger, card lift, carousel fade/slide, count-up, accordion, page fade, form success — all respect prefers-reduced-motion.

## Implementation in code
Tokens already mirrored in `app/globals.css:1` and `app/layout.tsx:1`. Icon set in `components/ui/Icon.tsx`.
