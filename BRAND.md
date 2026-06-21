# IEC — Verified Facts (source of truth for content)

Use this file to check any factual claim before writing/editing copy. If a new fact isn't here, ask rather than inventing it.

## Company
- **Name:** Indian Engineering Company (IEC)
- **Incorporated:** 1998 (specific date from internal records / contact directory)
- **"40+ years in the electrical service industry"** (claim from live site, iecindia.co.in): treated as the founder/promoters' cumulative industry experience predating IEC's 1998 incorporation, NOT the company's age. Use phrasing like "backed by 40+ years of industry experience, established 1998" — never claim the company itself is 40+ years old. **Flagged: unverified specifics of pre-1998 history — ask client if this needs sourcing for a press-facing claim.**
- **Founder / Managing Director:** Mr. Anil Bhardwaj
- **Certifications:** ISO 9001:2008; EASA (Electrical Apparatus Service Association) member since 2014
- **Business type:** B2B heavy industrial repair/service workshop — NOT general electrical contracting or consumer-facing work.
- **One-line positioning:** Vadodara-based heavy industrial repair and rewinding specialist for high-voltage motors, generators, alternators, DC motors, cryogenic pumps, and related rotating-machine spares — built to keep factories and power plants running.

## Locations
- **HQ / Corporate Office:** Plot No. 613, GIDC Estate, Ranoli, Dist. Vadodara – 391350, Gujarat ("Ranoli Works")
- **Factory/Workshop:** Plot Survey No. 165/1, Opp. Ishan Equipment, Village Raika, NH 8, Vadodara ("Raika Works")
- **Facility size:** 300,000 sq.ft total land, 75,000 sq.ft shop floor, cranes 10–300 ton capacity, 5 MW captive power generation

## Scale & Capability (from live site context — use these, not generic claims)
- AC induction motor rewinding/repair: up to **20,000 HP**, voltage ratings up to **13.8 kV**
- Generators/alternators: up to large **MW-class** capacity
- Machine types served: squirrel cage, slip-ring/wound rotor, synchronous motors; hydro/turbo/gas/wind generators; DC motors; cryogenic pumps (e.g. Ebara-make 6.6kV cryogenic submersible pumps)
- No-load testing of HT motors up to **20 MW**; full-load motor testing up to **5 MW**; DC motor testing; centralized control room/testing bed
- Dynamic balancing capacity: up to **25-ton and 45-ton** rotors across workshop setups
- Heating ovens: **3 ovens**, max oven volume **3,000 cubic ft**
- Transport fleet: **19 vehicles** for material/equipment, **8 vehicles** for manpower/testing equipment
- Insulation/process techniques: resin-rich/resin-poor insulation, VPI (vacuum pressure impregnation), rotor rebarring/re-caging, synchronous field coil rewinding, pole piece rebuilding, stator core restacking, thermal imaging, dielectric testing, surge testing, hi-potential testing

## Geographic Reach
- ~95% of Gujarat's HV motor/generator repair industry served
- Also active in Maharashtra, Madhya Pradesh, Rajasthan, Karnataka, pan-India, and select overseas work

## Customers / Industries Served
Power generation companies, manufacturing plants, cement plants, petrochemical/chemical industries, hydro/turbo/gas generator operators, large machinery users — dams and power plants among them.

## Buyer personas (for content/CTA tone)
- Plant Maintenance Head — fast repair/rewinding of failed HV motors/generators
- Electrical Maintenance Engineer — testing, fault diagnosis, coil repair, insulation upgrades
- Mechanical Maintenance Engineer — shaft, bearing housing, rotor/stator, commutator repairs
- Power Plant / Utility Team — large generator, alternator, hydro/turbo/gas rotor repair
- Procurement/Purchase Team — vendor quote, technical capability validation, contact info
- Operations/Reliability Team — preventive maintenance, overhauling, refurbishment, emergency repair

## Key Contacts (verified — on Contact page)
| Role | Name | Phone |
|---|---|---|
| Founder/MD | Mr. Anil Bhardwaj | +91 98242 14839 |
| — | Mrs. Arpana Anil Bharadwaj | +91 97129 14839 |
| Technical | Mr. A.D. Kokje | +91 82383 36294 |
| Technical | Mr. K.H. Mehta | +91 96019 42325 |
| Technical | Mr. C.N. Dandiwala | +91 98243 48744 |
| Sales (Enquiry) | — | +91 98240 29088 |
| Sales | Mr. Jatin Shah | +91 98240 24839 |
| Sales | Mr. Jitu Shah | +91 98241 74989 |
| Purchase/Finance | Mrs. Purnima Sharma | +91 98246 84540 |
| Email | anil@iecindia.co.in |

## Services (real 5-category breakdown — replaces old generic 3-item list)
1. **Motor, Generator, Alternator & DC Motor Repair** — rewinding/repair of AC induction, synchronous, wound-rotor/slip-ring motors; hydro/turbo/gas/wind generators; DC motors. VPI, rotor rebarring/re-caging, field coil rewinding, pole piece rebuilding, stator core restacking, thermal imaging, dielectric/surge/hi-pot testing.
2. **Mechanical Repair** — shaft fabrication/replacement, shaft metalizing, bearing housing repair/manufacturing, stator/rotor core repair, commutator repair/replacement, sleeve bearing re-babbitting, spares fabrication (end shields, cooling fans, oil seals, brush holders, terminal studs, heat exchangers).
3. **Pumps** — including cryogenic submersible pumps (e.g. Ebara-make 6.6kV).
4. **Spares Fabrication** — rotor shafts, end shield covers, bearing housings/covers, heat exchangers, cooling fans/fan covers/grills, commutators.
5. **Preventive Maintenance / Overhauling** — at IEC's works or in-situ at client site, per requirement.

## Clients (logos in `src/assets/clientel-logos/`)
ABB, Ansaldo, BHEL, CG Power Group, Kirloskar Group, Marelli, Marathon Energy, TECO

## Keywords (for SEO copy)
High Voltage Motor Repair, HT Motor Rewinding, Generator Rewinding, Alternator Repair, DC Motor Repair, Rotating Machine Repair, Industrial Motor Overhauling, Synchronous Motor Repair, Rotor Dynamic Balancing, HV Coil Manufacturing, Cryogenic Pump Repair, Motor Testing Facility, Generator Testing Facility, Industrial Spare Fabrication, Heavy Electrical Repair Workshop, Vadodara Motor Repair, Gujarat Industrial Electrical Services.

## Open gaps (flagged, not fabricated)
- Homepage testimonials (`src/components/Clients.jsx`) previously had fabricated named individuals (e.g. "Sarah Jenkins, ABB Global", quotes attributed to Tata Motors/Reliance — neither a verified client) — replaced with role-only attribution against verified client logos (ABB, BHEL, Kirloskar Group). Still **not real quotes** — swap in actual client testimonials if/when the client provides them.
- Leadership page has 3 "Coming Soon" team slots beyond the founder — needs real names/bios from the client before publishing.
- No live domain decided yet for this premium rebuild — `index.html` canonical/OG currently point at `https://www.iecindia.co.in/`; update if this ships elsewhere.
- "40+ years" framing above is an editorial reconciliation, not a verified fact — confirm with client before using in press/legal contexts.
- Original live reference site could not be crawled from this build environment (network sandboxed to GitHub only) — content above was sourced via the client's own research, not direct scraping. If screenshots/more detail become available, fold them in here first.
