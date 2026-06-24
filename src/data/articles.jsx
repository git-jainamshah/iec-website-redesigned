import imgCard1 from '../assets/iec-stator-crane-01.jpg';
import imgCard2 from '../assets/iec-stator-front.jpg';
import imgCard3 from '../assets/iec-stator-crane-02.jpg';
import imgCard4 from '../assets/iec-taping-machine.jpg';
import imgFeatured from '../assets/iec-rotor-workshop.jpg';

export const articles = [
    {
        id: 1,
        slug: 'understanding-high-voltage-motor-maintenance',
        category: 'Maintenance',
        date: 'January 15, 2024',
        dateISO: '2024-01-15',
        readTime: '5 min',
        title: 'Understanding High Voltage Motor Maintenance',
        excerpt: 'Essential maintenance practices for HV motors to ensure optimal performance, prevent insulation failure, and extend service life across industrial applications.',
        img: imgCard1,
        heroImg: imgFeatured,
        sections: [
            {
                type: 'lead',
                text: 'High-voltage motors are the workhorses of India\'s industrial backbone. From 6.6kV squirrel-cage induction motors in cement plants to 11kV synchronous machines in power stations, these assets are expected to run continuously for years — often in harsh, high-temperature environments. When they fail, entire production lines stop.',
            },
            {
                type: 'h2',
                text: 'Why Proactive Maintenance Matters',
            },
            {
                type: 'p',
                text: 'The cost of an unplanned HV motor failure is rarely just the repair bill. Lost production, emergency crane mobilisation, expedited winding materials, and overtime labour can multiply the total cost by 5 to 10 times compared to a planned overhaul. Proactive maintenance is not a cost — it is insurance.',
            },
            {
                type: 'p',
                text: 'IEC\'s service records across 500+ annual repairs show that over 60% of catastrophic motor failures originate from three root causes: insulation degradation, bearing failure, and contamination ingress. All three are detectable — and preventable — with the right maintenance regimen.',
            },
            {
                type: 'pullquote',
                text: 'Over 60% of catastrophic motor failures originate from insulation degradation, bearing failure, or contamination ingress — all detectable before breakdown.',
            },
            {
                type: 'h2',
                text: 'Insulation Monitoring',
            },
            {
                type: 'p',
                text: 'Winding insulation is the most critical and most vulnerable element of any HV motor. Thermal cycling, moisture absorption, partial discharge, and mechanical vibration steadily erode insulation resistance over time. A motor that tests at 500 MΩ at commissioning may read below 10 MΩ after a decade of service — a level that signals imminent failure under operating voltage.',
            },
            {
                type: 'ul',
                heading: 'Recommended insulation checks:',
                items: [
                    'Megger (insulation resistance) test — annually at minimum, before every restart after extended outage',
                    'Polarisation Index (PI) test — ratio of 10-minute to 1-minute IR reading; PI below 2.0 warrants investigation',
                    'Hi-Pot (withstand voltage) test — post-rewind acceptance test per IEC 60034-18',
                    'Partial Discharge (PD) monitoring — online PD sensing for motors above 6.6kV in continuous-duty service',
                ],
            },
            {
                type: 'h2',
                text: 'Bearing Inspection Protocols',
            },
            {
                type: 'p',
                text: 'Bearing failure is the single most common cause of HV motor downtime. Large machines typically use sleeve (journal) bearings or rolling element bearings, each with distinct failure modes. Sleeve bearings require regular oil analysis and viscosity checks; rolling element bearings need vibration trend analysis and periodic grease replenishment.',
            },
            {
                type: 'p',
                text: 'Vibration analysis using accelerometers and an FFT spectrum analyser is the gold standard for rolling element bearing health. Signatures such as BPFO (ball pass frequency outer race) or BPFI (ball pass frequency inner race) peaks — even at low amplitude — indicate incipient defects weeks or months before audible noise develops.',
            },
            {
                type: 'ul',
                heading: 'Key bearing maintenance actions:',
                items: [
                    'Baseline vibration spectrum on commissioning — compare against at every subsequent survey',
                    'Oil analysis every 3 months for sleeve-bearing machines (viscosity, metal particle content, water contamination)',
                    'Rolling element bearing replacement at recommended TBO (Time Between Overhaul) — not just on failure',
                    'Shaft alignment check whenever the driven load is serviced or reconnected',
                ],
            },
            {
                type: 'h2',
                text: 'Thermal and Cooling System Checks',
            },
            {
                type: 'p',
                text: 'Every 10°C rise in winding temperature halves insulation life — a well-established rule in motor engineering. Ensuring adequate cooling is therefore as important as the electrical maintenance itself. Blocked air filters, damaged cooling fins, failed cooling fans, or fouled heat exchangers can silently drive winding temperatures above design limits.',
            },
            {
                type: 'p',
                text: 'IEC recommends thermal imaging surveys on all HV motors above 1000 kW during planned shutdowns. Hotspot differentials above 15°C compared to the frame or adjacent windings indicate a localised problem requiring immediate investigation.',
            },
            {
                type: 'h2',
                text: 'IEC\'s Recommended Maintenance Schedule',
            },
            {
                type: 'ul',
                heading: '',
                items: [
                    'Monthly: Visual inspection, cleanliness check, bearing temperature log, cooling system check',
                    'Quarterly: Vibration analysis, oil sampling (sleeve bearings), terminal box inspection',
                    'Annually: Full Megger and PI test, thermal imaging, coupling and alignment verification',
                    'Every 3–5 years: Full disassembly overhaul — recheck all clearances, rewinding assessment, bearing replacement',
                ],
            },
            {
                type: 'p',
                text: 'Following a structured maintenance schedule informed by condition monitoring data significantly reduces unplanned outages and extends asset life well beyond OEM design targets. IEC\'s workshop team is available to assist with scheduled overhauls, on-site testing, and technical consultation for any HV rotating machine in your plant.',
            },
        ],
    },
    {
        id: 2,
        slug: 'future-of-industrial-motor-repair-india',
        category: 'Industry',
        date: 'January 28, 2024',
        dateISO: '2024-01-28',
        readTime: '7 min',
        title: 'The Future of Industrial Motor Repair in India',
        excerpt: 'Emerging technologies and process improvements shaping how India\'s industrial sector approaches large rotating machine repair and refurbishment.',
        img: imgCard2,
        heroImg: imgCard2,
        sections: [
            {
                type: 'lead',
                text: 'India\'s industrial sector operates one of the largest installed bases of large rotating electrical machines in the world. From the 100+ GW of thermal and hydro generation assets to the vast fleets of HT motors in cement, steel, petrochemical, and process industries, the scale of equipment that must be maintained, repaired, and upgraded is enormous — and growing.',
            },
            {
                type: 'h2',
                text: 'A Market at an Inflection Point',
            },
            {
                type: 'p',
                text: 'For decades, the industrial repair sector in India operated largely on established workshop practices: strip the machine, rewind the stator, replace the bearings, reassemble, test. The quality of the outcome depended almost entirely on the skill of the individual technician. That model is changing — driven by tighter plant uptime requirements, increasing machine complexity, and the availability of new diagnostic technologies.',
            },
            {
                type: 'p',
                text: 'Plant operators who once accepted a 15-day repair turnaround are now specifying 5 days. Quality expectations that were once met with a Megger test and a run-up are now backed by hi-pot, surge, and partial discharge testing, with full documented traceability to ISO 9001 standards. The repair sector must evolve to meet these demands.',
            },
            {
                type: 'pullquote',
                text: 'Plant operators who once accepted a 15-day repair turnaround are now specifying 5 days — with full documented test traceability.',
            },
            {
                type: 'h2',
                text: 'Digital Diagnostics and Condition Monitoring',
            },
            {
                type: 'p',
                text: 'The most significant shift in large motor maintenance is the move from periodic inspection to continuous condition monitoring. Wireless vibration sensors, online partial discharge analysers, thermal cameras integrated with SCADA systems, and motor current signature analysis (MCSA) tools are all becoming standard in premium Indian plants.',
            },
            {
                type: 'p',
                text: 'For repair workshops, this creates both a challenge and an opportunity. Repair workshops that can interpret online monitoring data — and align their intervention recommendations with that data — become trusted partners rather than reactive service vendors. IEC has invested in diagnostic capability that complements the monitoring infrastructure increasingly found in client plants.',
            },
            {
                type: 'h2',
                text: 'Energy Efficiency as a Driver of Refurbishment',
            },
            {
                type: 'p',
                text: 'With industrial electricity costs rising and sustainability targets becoming board-level priorities, energy efficiency is now a key decision driver in motor maintenance. Many plants are evaluating whether to repair an aging motor to original specification, or upgrade the winding design to improve efficiency class. IE3 and IE4 efficiency upgrades through rewinding are technically feasible for many machine types and offer compelling ROI calculations over a 5–10 year operating horizon.',
            },
            {
                type: 'ul',
                heading: 'Refurbishment options with efficiency gains:',
                items: [
                    'Rewind with optimised copper fill to reduce I²R losses',
                    'Stator bore re-machining to reduce air-gap and improve power factor',
                    'Dynamic balancing to reduce vibration-induced losses and extend bearing life',
                    'Upgrade to premium-efficiency bearings (ceramic, hybrid) to cut friction losses',
                ],
            },
            {
                type: 'h2',
                text: 'The Skilled Workforce Challenge',
            },
            {
                type: 'p',
                text: 'The biggest constraint on the Indian motor repair industry is not technology — it is people. High-voltage coil winding, vacuum pressure impregnation, precision dynamic balancing, and HV testing require skills that take years to develop and are difficult to transfer. As senior technicians retire, workshops that have not invested in structured apprenticeship programs face serious capability gaps.',
            },
            {
                type: 'p',
                text: 'IEC has maintained a continuous apprenticeship program since its founding, with a strong proportion of the current workforce having been trained in-house from ITI and diploma entry-level. This internal talent pipeline is one of the company\'s most important competitive assets — and one that is increasingly difficult for smaller or newer workshops to replicate.',
            },
            {
                type: 'h2',
                text: 'What the Next Five Years Look Like',
            },
            {
                type: 'p',
                text: 'The consolidation of India\'s industrial motor repair sector will continue. Small general workshops without specialist HV capability, in-house machining, testing infrastructure, and quality certification will struggle to compete for contracts from sophisticated clients. The winners will be full-service facilities capable of handling the most complex machines, with documented quality systems and the ability to offer predictive maintenance partnerships rather than break-fix relationships.',
            },
            {
                type: 'p',
                text: 'IEC\'s strategic investment in workshop capacity, quality certification, and diagnostic technology positions it well for this transition. For Indian plant operators, partnering with a workshop that can grow with your reliability requirements is increasingly the right choice.',
            },
        ],
    },
    {
        id: 3,
        slug: 'easa-certification-what-it-means-for-your-equipment',
        category: 'Certification',
        date: 'January 8, 2024',
        dateISO: '2024-01-08',
        readTime: '4 min',
        title: 'EASA Certification: What It Means for Your Equipment',
        excerpt: 'How EASA membership and best-practice standards translate to better repair outcomes, longer machine life, and reduced downtime for plant operators.',
        img: imgCard3,
        heroImg: imgCard3,
        sections: [
            {
                type: 'lead',
                text: 'When you hand over a critical HV motor or generator for repair, how do you know the work will be done to a standard that preserves — or improves — the machine\'s original performance? The Electrical Apparatus Service Association (EASA) provides exactly that assurance through its internationally recognised repair standards and member accreditation programme.',
            },
            {
                type: 'h2',
                text: 'What is EASA?',
            },
            {
                type: 'p',
                text: 'EASA is a global trade organisation representing electrical motor service centres, with members in over 70 countries. Its best-practice standard — ANSI/EASA AR100 — defines the minimum requirements for the repair of rotating electrical apparatus. The standard covers rewind specifications, mechanical clearances, testing requirements, and quality documentation.',
            },
            {
                type: 'p',
                text: 'Critically, the EASA/AEMT Rewind Study — conducted jointly with the Association of Electrical and Mechanical Trades — demonstrated that rewinding to EASA AR100 standards does not reduce motor efficiency. This was a landmark finding that resolved a long-standing concern among plant operators about whether rewinding compromises performance.',
            },
            {
                type: 'pullquote',
                text: 'The EASA/AEMT Rewind Study proved that rewinding to EASA AR100 standards does not reduce motor efficiency — a landmark finding for plant operators.',
            },
            {
                type: 'h2',
                text: 'Key Elements of EASA AR100',
            },
            {
                type: 'ul',
                heading: '',
                items: [
                    'Core loss testing before and after stripping — to detect core damage and verify restoration',
                    'Winding data recording — turns, wire gauge, coil pitch, connection — for full traceability',
                    'Insulation system requirements — voltage class, thermal class, VPI specifications',
                    'Mechanical checks — shaft runout, bearing journal dimensions, air-gap uniformity',
                    'Final testing — no-load current, insulation resistance, hi-pot per IEC/IEEE standards',
                    'Documentation — test certificates issued with every completed repair',
                ],
            },
            {
                type: 'h2',
                text: 'What EASA Membership Means for You',
            },
            {
                type: 'p',
                text: 'When you send your motor to an EASA member workshop, you are engaging a facility that has committed to a global standard of repair practice. You receive documented test results, a repair report with before-and-after data, and a warranty backed by the repairer\'s quality system. For assets that are critical to your operations, this documentation also provides evidence for insurance, OEM warranty queries, and regulatory audits.',
            },
            {
                type: 'p',
                text: 'IEC\'s EASA membership reflects its commitment to internationally aligned repair quality. Every machine that passes through IEC\'s workshop is repaired and tested against EASA AR100 and IEC 60034 standards, with full documentation provided to the client.',
            },
            {
                type: 'h2',
                text: 'Beyond Certification: The Practical Difference',
            },
            {
                type: 'p',
                text: 'Certification and standards matter most when things go wrong. A motor that fails six months after repair — with no test records, no winding data, and no core loss measurements — leaves the plant operator with no recourse and no diagnostic data for the next repair. A motor repaired to EASA AR100, with full documentation, gives you a clear baseline for every future intervention and a contractual basis for warranty discussion.',
            },
            {
                type: 'p',
                text: 'For IEC\'s clients, EASA compliance is not a marketing claim — it is a working practice embedded in every repair job sheet, from intake inspection to final test sign-off.',
            },
        ],
    },
    {
        id: 4,
        slug: 'preventive-maintenance-strategies-large-generators',
        category: 'Maintenance',
        date: 'December 12, 2023',
        dateISO: '2023-12-12',
        readTime: '6 min',
        title: 'Preventive Maintenance Strategies for Large Generators',
        excerpt: 'Key strategies to prevent generator failures, extend equipment lifespan, and plan maintenance windows around your plant\'s production schedule.',
        img: imgCard4,
        heroImg: imgCard4,
        sections: [
            {
                type: 'lead',
                text: 'Large generators — whether in captive power plants, cogeneration systems, or standby diesel-alternator sets — represent one of the most capital-intensive assets in any industrial facility. Unlike production equipment that can sometimes be bypassed or run at reduced capacity, a generator failure typically means a complete halt to operations. The business case for preventive maintenance is therefore straightforward: the cost of a planned overhaul is almost always a fraction of an unplanned failure.',
            },
            {
                type: 'h2',
                text: 'Understanding Generator Failure Modes',
            },
            {
                type: 'p',
                text: 'Generator failures fall into two broad categories: electrical and mechanical. Electrical failures — stator winding insulation breakdown, rotor field winding faults, excitation system failures, and cooling system faults — are often progressive and detectable before complete failure. Mechanical failures — bearing seizure, shaft misalignment, brush gear wear, and vibration-induced fatigue — can be sudden but are equally amenable to preventive action.',
            },
            {
                type: 'ul',
                heading: 'Most common generator failure causes:',
                items: [
                    'Stator winding insulation failure (moisture ingress, thermal degradation, partial discharge)',
                    'Bearing failure (inadequate lubrication, misalignment, overloading)',
                    'Rotor field winding inter-turn short circuits',
                    'Cooling system blockage (clogged filters, damaged cooling fans)',
                    'Brush gear and slip ring wear (particularly in synchronous generators)',
                    'Vibration-induced fatigue at end-winding supports',
                ],
            },
            {
                type: 'h2',
                text: 'Inspection Schedule by Machine Size',
            },
            {
                type: 'p',
                text: 'The appropriate maintenance interval depends on machine rating, duty cycle, and operating environment. Generators in continuous-duty base load service accumulate operational hours quickly and require more frequent intervention than standby units that run only during grid failures. However, standby generators present their own risk: extended periods of inactivity allow moisture to accumulate in the windings and bearing lubricant to oxidise.',
            },
            {
                type: 'pullquote',
                text: 'Standby generators present their own risk: extended inactivity allows moisture to accumulate in windings and bearing lubricant to oxidise. Regular exercise runs are essential.',
            },
            {
                type: 'ul',
                heading: 'Recommended inspection regime for generators above 1 MVA:',
                items: [
                    'Weekly: Visual check, battery condition (for excitation/AVR), coolant levels, brush gear inspection',
                    'Monthly: Full exercise run under load, IR temperature check, oil level verification',
                    'Quarterly: Vibration analysis, oil sample, terminal torque check, AVR parameter verification',
                    'Annually: Full electrical test (IR, PI, hi-pot), bearing inspection, cooling system service, winding inspection via borescope where accessible',
                    'Every 4–6 years: Full disassembly overhaul, stator rewinding assessment, rotor retesting, bearing replacement',
                ],
            },
            {
                type: 'h2',
                text: 'Planning Maintenance Around Production',
            },
            {
                type: 'p',
                text: 'The largest challenge in generator maintenance is not technical — it is operational. Taking a critical machine offline for planned maintenance requires coordination across production planning, power distribution management, and the maintenance team. In facilities with a single captive generator, even a 48-hour planned outage may require purchasing grid power, arranging DG backup, or running at reduced output.',
            },
            {
                type: 'p',
                text: 'IEC works with plant maintenance managers to develop multi-year maintenance plans that align major generator overhauls with scheduled production shutdowns. This coordination typically allows a full overhaul to be completed within an annual shutdown window, eliminating the need for unplanned production interruptions.',
            },
            {
                type: 'h2',
                text: 'Condition-Based Maintenance: The Next Level',
            },
            {
                type: 'p',
                text: 'For generators in high-criticality applications, condition-based maintenance (CBM) offers significant advantages over calendar-based schedules. Online partial discharge monitoring, continuous vibration trending, oil particle counting, and thermal imaging during operation provide real-time health data that enables maintenance to be planned with much greater precision — intervening when the data indicates a problem is developing, rather than on a fixed schedule that may intervene either too early or too late.',
            },
            {
                type: 'p',
                text: 'IEC\'s engineering team can assist with CBM programme design, sensor selection, data interpretation, and integration with your existing CMMS or SCADA infrastructure. Contact our technical team to discuss how condition-based maintenance can reduce your generator downtime and extend asset life.',
            },
        ],
    },
];

export default articles;
