import type { ImageKey } from "./images";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  image: ImageKey;
  intro: string[];
  benefits: string[];
  problems: string[];
  signs: string[];
  detail: { heading: string; body: string[] }[];
  steps: { title: string; text: string }[];
  maintenance: string[];
  faqs: ServiceFaq[];
  related: string[];
}

const coreServices: Service[] = [
  {
    slug: "emergency-plumber",
    name: "Emergency Plumbing",
    tagline: "24/7 emergency plumbers across Mesa and the Phoenix metro",
    metaTitle: "24/7 Emergency Plumber Mesa AZ | Prestige Plumbing Company",
    metaDescription:
      "Emergency plumber in Mesa & Phoenix metro, available 24 hours. Burst pipes, sewage backups, water heater failures and gas leaks. Call +1 (480) 215-0629 now.",
    image: "hero",
    intro: [
      "A plumbing emergency does not schedule itself around business hours. Water travels fast, drywall absorbs it faster, and in Arizona's dry climate a hidden leak can quietly destroy framing and flooring long before you smell it. Prestige Plumbing Company has answered emergency calls across Mesa, Phoenix, Chandler, Gilbert, Tempe and Scottsdale since 2005, and we still answer the phone the same way we did on day one: with a licensed plumbing professional, not a call center.",
      "When you call our emergency line, the first thing we do is help you stop the damage. We walk you through locating your main shut-off valve, isolating an appliance supply line, or shutting the gas at the meter while a technician is already rolling toward your address. That first five minutes of guidance frequently saves thousands of dollars in restoration costs.",
      "Our emergency trucks are stocked as complete mobile workshops: replacement water heaters, PEX and copper repair stock, sewer cameras, drain machines, hydro jetting equipment, gas test gauges, and pumps. That inventory is the difference between a repair completed tonight and a tarp over your ceiling until a supply house opens on Monday.",
    ],
    benefits: [
      "Live answer 24 hours a day, 365 days a year — including holidays",
      "Typical arrival within 60–90 minutes across the East Valley",
      "Immediate damage-control coaching over the phone while we drive",
      "Fully stocked trucks that complete most repairs on the first visit",
      "Flat-rate emergency pricing quoted before work begins",
      "Licensed, bonded and insured technicians with documented workmanship warranty",
    ],
    problems: [
      "Burst or split supply lines flooding a room",
      "Sewage backing up into tubs, showers or floor drains",
      "Water heater tank ruptures and scalding-hot relief valve discharge",
      "Slab leaks producing hot spots on flooring and skyrocketing water bills",
      "Frozen or thermally stressed exterior hose bibb failures",
      "Natural gas odors near appliances, fire pits or meters",
      "Overflowing toilets in single-bathroom homes",
      "Failed shut-off valves that will not close during a repair",
    ],
    signs: [
      "You can hear running water when every fixture is off",
      "Water is visibly spreading across flooring or dripping through ceilings",
      "Multiple drains gurgle or back up at the same time",
      "The smell of sewer gas or rotten eggs inside the home",
      "Your water meter dial spins with all fixtures closed",
      "Water pressure suddenly collapses house-wide",
    ],
    detail: [
      {
        heading: "What Counts As A Real Plumbing Emergency",
        body: [
          "Not every drip requires a midnight visit, and an honest plumber will tell you so. A slow faucet drip, a running toilet flapper, or a single slow-draining sink can usually wait for a scheduled appointment at standard pricing. What cannot wait is anything actively releasing water into your structure, anything releasing sewage into living space, and anything involving natural gas.",
          "The rule we give homeowners is simple: if shutting off a single fixture valve does not stop the problem, and you are reaching for the main shut-off, that is an emergency. Water that reaches subfloor, insulation, or cabinetry begins growing microbial contamination within 24 to 48 hours, and remediation costs escalate exponentially from that point forward.",
          "Gas is never a wait-and-see situation. If you smell sulfur or hear hissing near a line, leave the building, call your utility from outside, and then call us. We perform pressure testing, locate the compromised section, and repair or replace it under permit.",
        ],
      },
      {
        heading: "How We Stabilize A Flooding Property",
        body: [
          "The first technician on site performs containment before diagnosis. That means isolating the water source, relieving line pressure, and — where water has already spread — deploying extraction so the affected footprint stops growing. Only once the property is stable do we open walls or trace the failure.",
          "We then determine whether the failure is isolated or systemic. A single pinhole in a copper line in a 1990s Mesa home is often a symptom of pitting corrosion throughout the system, which changes the conversation from a patch to a planned repipe. We will show you the evidence, on camera or in hand, before recommending scope.",
          "Documentation matters if you intend to file an insurance claim. Our emergency technicians photograph the failure point, the affected area, and the completed repair, and provide an itemized invoice describing cause and remedy in language adjusters accept.",
        ],
      },
    ],
    steps: [
      { title: "Immediate Phone Triage", text: "A licensed professional answers, assesses severity, and guides you through shutting off water or gas while a truck is dispatched." },
      { title: "Rapid Dispatch", text: "The nearest technician is routed to you with confirmed ETA by text, so you know exactly when help arrives." },
      { title: "Containment First", text: "We stop the source, relieve pressure, and prevent the damaged area from expanding before any diagnostic work begins." },
      { title: "Diagnosis & Written Options", text: "Cameras, pressure tests and acoustic tools identify the true cause. You approve flat-rate pricing before repair starts." },
      { title: "Same-Visit Repair", text: "Most emergencies are resolved on the first visit thanks to fully stocked trucks carrying heaters, valves, pipe and fittings." },
      { title: "Verification & Documentation", text: "We re-pressurize, test every affected fixture, photograph the completed work, and register your warranty." },
    ],
    maintenance: [
      "Label your main water shut-off valve and exercise it twice a year so it turns freely under stress",
      "Replace braided washing machine and water heater supply lines every five to seven years",
      "Install a whole-home pressure regulator and keep incoming pressure between 55 and 70 PSI",
      "Add leak sensors under water heaters, sinks and behind washing machines",
      "Schedule an annual whole-home plumbing inspection to catch corrosion before it ruptures",
    ],
    faqs: [
      { q: "How fast can an emergency plumber reach my house?", a: "Most Mesa, Gilbert, Chandler and Tempe addresses see a technician within 60 to 90 minutes. Phoenix, Scottsdale, Glendale, Queen Creek and San Tan Valley are typically under two hours, and we give you a live ETA when we dispatch." },
      { q: "Do you charge more for after-hours emergency plumbing?", a: "Emergency response is quoted up front as a flat rate. You will know the number before we begin, and there are no hidden midnight or holiday surcharges added afterward." },
      { q: "What should I do before the plumber arrives?", a: "Shut off the main water valve, open a low fixture such as an outdoor hose bibb to drain pressure, cut power to any submerged electrical, and move valuables away from the water. Our dispatcher will walk you through each step." },
      { q: "Will you work with my insurance company?", a: "Yes. We photograph the failure and completed repair and issue an itemized invoice describing cause and remedy, which is what most adjusters require for a water damage claim." },
      { q: "Do you handle sewage backups?", a: "Absolutely. We clear the blockage, camera the line to confirm the cause, and advise whether hydro jetting or a sewer line repair is required to prevent recurrence." },
    ],
    related: ["water-heater-repair", "leak-detection", "drain-cleaning", "sewer-line-repair"],
  },
  {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    tagline: "Fast hot water restoration for tank and tankless systems",
    metaTitle: "Water Heater Repair Mesa AZ | Same-Day Hot Water | Prestige Plumbing",
    metaDescription:
      "Water heater repair in Mesa, Gilbert, Chandler & Phoenix. No hot water, leaking tank, pilot issues or sediment noise fixed same day. Call +1 (480) 215-0629.",
    image: "waterHeater",
    intro: [
      "A water heater rarely fails without warning — it just fails without warning that most homeowners recognize. Rumbling sounds, water that runs lukewarm halfway through a shower, rusty discoloration, or a damp ring around the base are all early signals that the appliance is asking for attention. Prestige Plumbing Company repairs tank, tankless, gas and electric water heaters throughout Mesa and the Phoenix metro, usually the same day you call.",
      "Arizona water is exceptionally hard. Dissolved calcium and magnesium precipitate out inside a hot tank and form a mineral crust across the bottom, which insulates the burner from the water it is supposed to heat. That single condition causes most of the failures we see: longer recovery times, popping noises, overheated tank bottoms, premature element burnout, and eventually a ruptured glass lining.",
      "Our diagnostic approach separates repairable faults from an appliance at the end of its service life. Replacing a thermocouple, gas control valve, heating element, thermostat, dip tube or anode rod is frequently a fraction of replacement cost and buys years of reliable service. We will tell you honestly which situation you are in.",
    ],
    benefits: [
      "Same-day diagnosis and repair on most tank and tankless systems",
      "All major brands serviced: Rheem, A.O. Smith, Bradford White, Navien, Rinnai, State",
      "Descaling and flush services engineered for Arizona's hard water",
      "Honest repair-versus-replace guidance with written numbers for both paths",
      "Gas and electric technicians licensed for combustion and venting work",
      "Warranty-registered parts and documented labor warranty",
    ],
    problems: [
      "No hot water at any fixture",
      "Hot water that runs out within minutes of starting a shower",
      "Popping, rumbling or kettling noises from the tank",
      "Water pooling around the base of the heater",
      "Rusty, metallic or sulfur-smelling hot water",
      "Pilot light or igniter that will not stay lit",
      "Tankless error codes and cold water sandwich behavior",
      "Temperature and pressure relief valve discharging",
    ],
    signs: [
      "Recovery time is noticeably slower than it was a year ago",
      "Energy bills have climbed without a change in usage",
      "The tank is more than eight years old and has never been flushed",
      "Discolored water appears only on the hot side",
      "You hear the burner cycling far more often than it used to",
    ],
    detail: [
      {
        heading: "Diagnosing Tank Water Heaters",
        body: [
          "On a gas tank heater, we start at the combustion side: burner condition, flame quality, thermocouple millivolt output, gas control valve response, and venting draft. A weak or sooty flame usually indicates a restricted burner or inadequate combustion air, and a failed draft test is a carbon monoxide concern that we address before anything else.",
          "On electric units we test both upper and lower elements for continuity and resistance, verify thermostat calibration, and inspect the high-limit reset. A single failed lower element produces exactly the complaint we hear most often: hot water that disappears after five minutes.",
          "Across both types we inspect the sacrificial anode rod. That rod is designed to corrode so the tank does not, and in hard Arizona water it can be consumed in three to four years. Replacing a depleted anode is inexpensive; replacing the tank it failed to protect is not.",
        ],
      },
      {
        heading: "Diagnosing Tankless Water Heaters",
        body: [
          "Tankless systems fail differently. Because they heat water on demand through a compact heat exchanger, scale accumulation restricts flow and triggers error codes long before any visible leak appears. We read the unit's diagnostic history, verify gas supply pressure under full fire, check inlet filters, and perform a descaling circulation with a food-grade solution.",
          "We also verify that the original installation supports the appliance. Undersized gas piping is the most common defect we find on tankless units installed by non-specialists — the heater simply cannot draw the BTUs it needs, so it modulates down and the homeowner blames the equipment.",
          "Where a tankless unit is beyond economical repair, we present a replacement scope that corrects venting, gas sizing and isolation valves so the next unit reaches its full twenty-year potential.",
        ],
      },
    ],
    steps: [
      { title: "Symptom Interview", text: "We ask about age, fuel type, recent changes and exact failure behavior so the technician arrives with the right parts on board." },
      { title: "Safety & Combustion Check", text: "Gas pressure, venting draft, and relief valve function are verified before any component testing." },
      { title: "Component Testing", text: "Elements, thermostats, thermocouples, gas valves, dip tubes and anode rods are individually tested rather than replaced by guesswork." },
      { title: "Repair Or Replace Recommendation", text: "You receive written pricing for the repair and for replacement, with expected remaining service life for each option." },
      { title: "Repair & Flush", text: "Approved repairs are completed and the tank is flushed to remove the sediment layer that caused the failure." },
      { title: "Performance Verification", text: "We measure recovery temperature at the fixture, confirm no leaks, and document the warranty." },
    ],
    maintenance: [
      "Flush the tank annually — twice yearly if you have no water softener",
      "Inspect the anode rod every three years in hard water areas like Mesa and Gilbert",
      "Set thermostat to 120°F for safety, efficiency and reduced scale formation",
      "Test the temperature and pressure relief valve once a year",
      "Descale tankless heat exchangers every 12 months",
      "Keep the area around a gas heater clear for combustion air",
    ],
    faqs: [
      { q: "Is it worth repairing a water heater or should I replace it?", a: "Under eight years old with a repairable component, repair almost always wins. Past twelve years, or with a leaking tank body, replacement is the responsible choice — a ruptured tank releases forty to eighty gallons into your home." },
      { q: "Why does my water heater make a popping sound?", a: "That is water flashing to steam beneath a hardened sediment layer on the tank floor. It signals overdue flushing and, left alone, overheats and weakens the tank lining." },
      { q: "How long does a water heater repair take?", a: "Most repairs are completed in one to two hours on site. Full flushes and tankless descaling add roughly an hour." },
      { q: "Can you repair a leaking water heater?", a: "If the leak is at a fitting, valve, or relief line, yes. If the tank body itself is leaking, the glass lining has failed and no repair is possible — replacement is required." },
      { q: "Do you service tankless water heaters?", a: "Yes, including Navien, Rinnai, Noritz and Rheem tankless systems: error code diagnosis, descaling, gas sizing correction, and venting repair." },
    ],
    related: ["water-heater-installation", "emergency-plumber", "leak-detection", "residential-plumbing"],
  },
  {
    slug: "water-heater-installation",
    name: "Water Heater Installation",
    tagline: "Code-compliant tank and tankless installation done right the first time",
    metaTitle: "Water Heater Installation Mesa AZ | Tank & Tankless | Prestige Plumbing",
    metaDescription:
      "Professional water heater installation in Mesa, Chandler, Gilbert & Phoenix. Tank, tankless, gas & electric. Free estimates. Call +1 (480) 215-0629.",
    image: "waterHeater",
    intro: [
      "Installing a water heater is not simply swapping a cylinder. It is a combustion appliance, a pressure vessel, and a code-regulated part of your home's mechanical system all at once. Prestige Plumbing Company installs tank and tankless water heaters across Mesa, Phoenix, Chandler, Gilbert and Scottsdale to full Arizona code, with permits pulled where jurisdictions require them.",
      "Sizing is where most installations go wrong. A four-bathroom home with a soaking tub and simultaneous laundry demand will exhaust a 40-gallon tank within one morning routine. Conversely, oversizing a tank means paying to keep water hot that nobody uses. We calculate first-hour rating against your actual peak demand rather than defaulting to whatever was there before.",
      "We install both traditional tank heaters and high-efficiency tankless systems, and we are candid about which suits your home. Tankless delivers endless hot water and twenty-year service life, but only when gas supply, venting and water treatment are correct. If your home cannot support it without expensive infrastructure changes, we will say so.",
    ],
    benefits: [
      "Proper first-hour-rating sizing based on your household's real demand",
      "Permits pulled and inspections coordinated where required",
      "New shut-off valves, flex connectors, expansion tank and drip pan included",
      "Correct venting, seismic strapping and combustion air verification",
      "Old unit hauled away and responsibly recycled",
      "Manufacturer warranty registered in your name",
    ],
    problems: [
      "Existing heater beyond its economical service life",
      "Chronically insufficient hot water for a growing household",
      "Improper venting or missing expansion tank from a prior install",
      "Heater located where a failure would flood finished space",
      "Rising energy costs from a low-efficiency legacy unit",
      "Undersized gas piping strangling a tankless appliance",
    ],
    signs: [
      "The unit is over ten years old",
      "Rust is visible on the tank shell or at the fittings",
      "You have repaired the same heater more than twice",
      "Hot water runs out during normal daily routines",
      "There is no drip pan or drain beneath a heater in living space",
    ],
    detail: [
      {
        heading: "Tank Versus Tankless In Arizona Homes",
        body: [
          "Tank heaters remain the cost-effective choice for most Mesa and Gilbert homes. Installation is faster, the appliance is inexpensive to replace, and a properly maintained 50-gallon unit comfortably serves a family of four. Their weakness is standby loss and a finite reservoir.",
          "Tankless systems heat water only as it flows, eliminating standby loss and delivering unlimited duration. In practice their advantage in Arizona depends on water treatment: without softening or annual descaling, hard water shortens heat exchanger life considerably. When we install tankless, we include isolation valves so annual descaling takes minutes instead of hours.",
          "Hybrid heat pump water heaters are a third option worth considering in garages, where they harvest ambient heat and cut electric operating costs substantially. They require adequate air volume and a condensate drain, both of which we assess during the estimate.",
        ],
      },
      {
        heading: "What A Correct Installation Includes",
        body: [
          "Every installation we perform includes new brass shut-off valves, code-approved flexible connectors, a thermal expansion tank where a check valve or pressure regulator exists, a properly plumbed temperature and pressure relief discharge line terminating safely, and a drip pan with drain when the appliance sits above or near finished space.",
          "For gas units, we verify manifold pressure, confirm draft on atmospheric vents or install proper concentric venting on direct-vent models, and check combustion air volume in closets and garages. For electric units we confirm breaker sizing and conductor rating.",
          "We finish by setting the thermostat to 120°F, purging air from the lines, testing every fixture, and documenting model and serial numbers on your invoice for warranty purposes.",
        ],
      },
    ],
    steps: [
      { title: "In-Home Assessment", text: "We measure demand, inspect gas and electrical capacity, evaluate venting, and review space constraints." },
      { title: "Written Proposal", text: "You receive clear options — tank, tankless, hybrid — with equipment, labor, permits and warranty spelled out." },
      { title: "Permitting", text: "Where the jurisdiction requires it, we pull the permit and schedule inspection on your behalf." },
      { title: "Removal & Disposal", text: "The old unit is drained, disconnected safely, removed and recycled without damage to your flooring." },
      { title: "Professional Installation", text: "New valves, connectors, expansion tank, pan, venting and relief piping installed to code with clean, serviceable workmanship." },
      { title: "Commissioning", text: "We fill, purge, fire the unit, verify temperature rise, check for leaks, and walk you through operation and maintenance." },
    ],
    maintenance: [
      "Flush the new tank annually to protect the warranty",
      "Descale tankless units every 12 months using the installed isolation valves",
      "Verify expansion tank pressure matches incoming water pressure yearly",
      "Keep manufacturer registration documents with your home records",
      "Consider a water softener to extend equipment life in hard-water zip codes",
    ],
    faqs: [
      { q: "How long does water heater installation take?", a: "A straightforward tank replacement takes three to four hours. Tankless conversions typically require six to eight hours because of venting and gas line work." },
      { q: "What size water heater do I need?", a: "One to two people are usually served by 40 gallons, three to four by 50, and five or more by 75 gallons or a tankless system. We size using first-hour rating against your peak demand rather than a rule of thumb." },
      { q: "Is a permit required to replace a water heater in Mesa?", a: "Most Valley jurisdictions require a permit for water heater replacement. We handle the paperwork and inspection scheduling as part of the job." },
      { q: "Will a tankless water heater save me money?", a: "It eliminates standby loss and typically lasts twice as long as a tank, but savings depend on usage and maintenance. We will show you realistic numbers for your household rather than a marketing claim." },
      { q: "Do you offer financing on water heater replacement?", a: "Yes. Financing options are available so a failed heater does not have to wait for payday. Ask when you call for your free estimate." },
    ],
    related: ["water-heater-repair", "residential-plumbing", "gas-line-installation", "emergency-plumber"],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    tagline: "Professional drain clearing that solves the cause, not just the symptom",
    metaTitle: "Drain Cleaning Mesa AZ | Clogged Drain Repair | Prestige Plumbing",
    metaDescription:
      "Drain cleaning and unclogging in Mesa, Tempe, Chandler & Phoenix. Cabling, camera inspection and hydro jetting. Free estimates. Call +1 (480) 215-0629.",
    image: "drain",
    intro: [
      "A slow drain is a warning; a backed-up drain is the consequence of ignoring it. Prestige Plumbing Company clears kitchen, bathroom, laundry and main line drains throughout Mesa and the Phoenix metro using professional cabling machines, camera inspection and, where appropriate, high-pressure hydro jetting.",
      "The difference between a real drain cleaning and a temporary poke through the blockage is what happens afterward. Punching a small hole through a grease ring restores flow for a few weeks. Removing the accumulation from the full pipe wall restores the drain to its original diameter and keeps it working for years. We do the second one.",
      "We also refuse to guess. When a drain has backed up more than once, we camera the line before quoting a repair. Roots, bellied pipe, offset joints, scale buildup and collapsed clay all look identical from the fixture — and each requires a different remedy.",
    ],
    benefits: [
      "Camera inspection included on recurring or main-line blockages",
      "Professional cabling and hydro jetting rather than caustic chemicals",
      "Full-diameter restoration, not a temporary channel through the clog",
      "Protection for cabinets, flooring and finishes on every visit",
      "Flat-rate pricing quoted before the machine comes off the truck",
      "Honest recommendations when a pipe repair, not another cleaning, is the answer",
    ],
    problems: [
      "Kitchen sinks slowed by hardened grease and food debris",
      "Shower and tub drains restricted by hair and soap scum",
      "Toilets that rise and drain sluggishly",
      "Laundry standpipes overflowing during the drain cycle",
      "Multiple fixtures backing up simultaneously — a main line signal",
      "Gurgling drains and sewer odor from dry or blocked vents",
    ],
    signs: [
      "Water pools around your feet in the shower",
      "Drains gurgle when a nearby fixture is used",
      "You are plunging the same fixture repeatedly",
      "Fruit flies or drain flies appear near a sink",
      "A persistent musty or sewage odor near a floor drain",
    ],
    detail: [
      {
        heading: "Why Chemical Drain Cleaners Cause More Damage Than They Fix",
        body: [
          "Store-bought drain chemicals generate heat and caustic reaction to dissolve organic material. In older ABS or cast iron they can soften joints and accelerate corrosion, and in a fully blocked line the chemical simply sits against the pipe wall for hours doing damage without reaching the obstruction.",
          "They also create a hazard for the technician who eventually opens the line. We ask customers to tell us if chemicals were poured, so we can protect against splash-back.",
          "Mechanical clearing removes material rather than partially dissolving it, which is why a professional cabling or jetting service lasts dramatically longer than repeated chemical treatments.",
        ],
      },
      {
        heading: "Cabling Versus Hydro Jetting",
        body: [
          "Cabling — running a rotating steel snake with a cutting head — is ideal for soft blockages, hair, and isolated obstructions in branch lines. It is fast, economical, and the right tool for the majority of single-fixture clogs.",
          "Hydro jetting uses water at up to 4,000 PSI to scour the entire interior circumference of the pipe. It is the correct choice for grease-laden kitchen lines, scale in older cast iron, root intrusion in main sewers, and any line that has been cabled repeatedly without lasting improvement.",
          "We recommend based on evidence from the camera, not on price. If cabling will genuinely solve your problem, we will not sell you a jetting service.",
        ],
      },
    ],
    steps: [
      { title: "Fixture Assessment", text: "We identify which fixtures are affected to determine whether the blockage is in a branch line or the main." },
      { title: "Access & Protection", text: "Cleanouts are located and the work area is covered to protect cabinets, tile and flooring." },
      { title: "Mechanical Clearing", text: "The correct cable and cutting head are selected for the pipe diameter and material, and the line is cleared to full flow." },
      { title: "Camera Verification", text: "On recurring or main-line clogs, we send a camera to confirm the cause and record the pipe's condition." },
      { title: "Flow Testing", text: "We run substantial volume through the line to confirm the restoration is genuine, not marginal." },
      { title: "Prevention Plan", text: "You receive specific guidance — and, when warranted, a jetting or repair recommendation — to stop the problem returning." },
    ],
    maintenance: [
      "Never pour grease, oil or coffee grounds down a kitchen drain",
      "Fit hair catchers in every shower and tub",
      "Run hot water for thirty seconds after each dishwashing session",
      "Flush rarely used drains monthly to keep P-traps sealed",
      "Schedule preventative jetting annually on restaurant and multi-family lines",
    ],
    faqs: [
      { q: "How much does drain cleaning cost?", a: "We quote flat-rate pricing before starting, based on the fixture and access. Branch line clearing is the most economical service; main line and jetting services are priced separately and always quoted up front." },
      { q: "How often should drains be professionally cleaned?", a: "Most homes benefit from a main line cleaning every 18 to 24 months. Homes with mature trees, cast iron piping, or a history of backups should be on an annual schedule." },
      { q: "Can a clogged drain damage my pipes?", a: "Standing waste accelerates corrosion in metal pipes and puts pressure on joints. Repeated blockages in one location almost always indicate a physical defect worth investigating with a camera." },
      { q: "Do you clean drains for restaurants and commercial buildings?", a: "Yes. We service grease interceptors, commercial kitchen lines and multi-tenant main lines, and we schedule around your operating hours." },
      { q: "Will you camera my line?", a: "Camera inspection is included on recurring and main-line blockages so you see exactly what we see before approving any repair." },
    ],
    related: ["hydro-jetting", "sewer-line-repair", "emergency-plumber", "kitchen-plumbing"],
  },
  {
    slug: "hydro-jetting",
    name: "Hydro Jetting",
    tagline: "High-pressure pipe scouring that restores lines to full diameter",
    metaTitle: "Hydro Jetting Mesa AZ | Sewer & Drain Jetting | Prestige Plumbing",
    metaDescription:
      "Hydro jetting in Mesa, Phoenix, Gilbert & Chandler. Remove grease, scale and roots and restore full pipe diameter. Call +1 (480) 215-0629 for a free quote.",
    image: "drain",
    intro: [
      "Hydro jetting is the most thorough drain cleaning method available to a residential or commercial property. Rather than boring a channel through a blockage, a specialized nozzle propels water at pressures up to 4,000 PSI in a controlled backward spray pattern, stripping grease, scale, sludge and root hair from the entire inner circumference of the pipe.",
      "Prestige Plumbing Company has jetted thousands of feet of line across Mesa, Phoenix, Tempe, Chandler and Scottsdale — residential main sewers, restaurant kitchen lines, HOA laterals and commercial risers. The results are visible on camera: pipe that looked lined with mortar returns to smooth, full-diameter flow.",
      "Jetting is not appropriate for every line, and any company that recommends it without inspecting first is guessing with your money. Deteriorated cast iron, collapsed clay, and severely offset joints require repair rather than pressure. That is why every jetting job we perform begins with a camera.",
    ],
    benefits: [
      "Removes buildup completely instead of punching a hole through it",
      "Restores original pipe diameter and flow capacity",
      "Cuts through root hair and fine intrusion in sewer laterals",
      "Chemical-free and safe for properly maintained municipal systems",
      "Dramatically extends the interval between service calls",
      "Camera verification before and after so you see the result",
    ],
    problems: [
      "Grease-saturated commercial kitchen and restaurant lines",
      "Recurring main line backups that cabling cannot resolve",
      "Mineral scale narrowing older cast iron drainage",
      "Fine root intrusion at joints in clay or older sewer pipe",
      "Sludge accumulation in low-slope or bellied line sections",
      "Slow drainage across an entire building despite repeated snaking",
    ],
    signs: [
      "You have had the same line cabled two or more times in a year",
      "Camera footage shows narrowed pipe walls rather than a discrete clog",
      "Multiple fixtures drain slowly at once",
      "Sewage odor persists after a standard drain cleaning",
      "A commercial kitchen line backs up during peak service hours",
    ],
    detail: [
      {
        heading: "How Hydro Jetting Works",
        body: [
          "A high-pressure pump feeds a flexible hose fitted with a specialized nozzle. Most of the water exits through rear-facing jets, which both propel the hose forward through the line and blast accumulated material off the pipe wall behind the nozzle. Forward jets cut through the obstruction itself.",
          "Nozzle selection is the craft in this work. Penetrating nozzles open a hardened blockage, chain and root-cutting heads shear intrusion, and flushing heads carry debris downstream. Using the wrong head at the wrong pressure on aged pipe is how amateurs cause damage.",
          "Because jetting evacuates material rather than compacting it, the debris is carried into the municipal main and away from your property, leaving a line that is genuinely clean rather than temporarily open.",
        ],
      },
      {
        heading: "When We Recommend Jetting — And When We Do Not",
        body: [
          "We recommend jetting for grease-laden kitchen lines, scale in cast iron, root hair intrusion, and any line with a documented history of repeat blockage. In commercial settings, scheduled quarterly or semi-annual jetting is far cheaper than an emergency closure during service hours.",
          "We do not jet pipe that the camera shows to be structurally compromised — heavily corroded cast iron with visible channeling, cracked or collapsed clay, or badly offset joints. In those cases pressure would worsen the defect, and the correct remedy is spot repair, lining or replacement.",
          "This honesty occasionally costs us a jetting sale and consistently earns us the repair work and the referral that follows.",
        ],
      },
    ],
    steps: [
      { title: "Pre-Jetting Camera Inspection", text: "We record the line's condition to confirm jetting is safe and identify the exact nature of the buildup." },
      { title: "Cleanout Access", text: "The proper cleanout is located and opened, with containment placed to keep the work area clean." },
      { title: "Nozzle & Pressure Selection", text: "Head type and PSI are matched to pipe material, diameter and blockage type." },
      { title: "Progressive Jetting Passes", text: "The line is worked in stages from downstream to upstream, cutting and flushing debris to the municipal main." },
      { title: "Post-Jetting Camera Verification", text: "A second camera run documents restored pipe wall and full diameter — footage we share with you." },
      { title: "Service Interval Recommendation", text: "Based on what we found, we advise how often this line should be jetted to prevent recurrence." },
    ],
    maintenance: [
      "Install and maintain a grease interceptor in commercial kitchens",
      "Schedule quarterly jetting for restaurants, semi-annual for multi-family",
      "Keep root-producing trees away from sewer lateral routes",
      "Annual camera inspection on properties over thirty years old",
      "Avoid flushing wipes, hygiene products and paper towels",
    ],
    faqs: [
      { q: "Is hydro jetting safe for my pipes?", a: "For sound pipe, yes — pressure and nozzle are calibrated to the material. We camera every line first specifically to confirm the pipe can safely accept jetting." },
      { q: "How long does hydro jetting take?", a: "A residential main line typically takes two to three hours including camera work. Commercial systems depend on length and severity." },
      { q: "How is jetting different from snaking?", a: "A snake bores a hole through the blockage; jetting scours the entire pipe wall and flushes the material away. Jetting lasts far longer and prevents rapid recurrence." },
      { q: "How often should a commercial kitchen be jetted?", a: "Most kitchens should be jetted quarterly. Heavy fryer operations sometimes need it every two months to stay ahead of grease." },
      { q: "Can jetting remove tree roots?", a: "Root-cutting nozzles shear fine and moderate intrusion effectively. Heavy structural root damage requires sewer line repair or replacement, which we will show you on camera." },
    ],
    related: ["drain-cleaning", "sewer-line-repair", "commercial-plumbing", "emergency-plumber"],
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    tagline: "Non-invasive location of slab, wall and underground leaks",
    metaTitle: "Leak Detection Mesa AZ | Slab Leak Specialists | Prestige Plumbing",
    metaDescription:
      "Non-invasive leak detection in Mesa, Gilbert, Chandler & Phoenix. Slab leaks, hidden pipe leaks and pool line leaks located precisely. Call +1 (480) 215-0629.",
    image: "leak",
    intro: [
      "The most expensive plumbing leaks are the ones you never see. Water escaping beneath a concrete slab, inside a wall cavity, or under a landscaped yard can run for months, inflating water bills, undermining soil, and saturating structure before a single visible sign appears. Prestige Plumbing Company locates those leaks precisely, without demolishing your home to find them.",
      "Arizona's expansive soils and post-tension slab construction make slab leaks a genuine regional issue. Copper lines run through or beneath the slab, and decades of abrasion, aggressive water chemistry, and soil movement eventually produce pinholes. Finding the exact failure point instead of opening an entire floor is what separates a $500 repair from a $15,000 renovation.",
      "Our technicians use acoustic listening equipment, thermal imaging, tracer gas, line tracing and hydrostatic pressure isolation. Most leaks are pinpointed to within inches, which means the smallest possible access opening and the fastest possible restoration.",
    ],
    benefits: [
      "Pinpoint accuracy that minimizes demolition and restoration cost",
      "Acoustic, thermal, tracer gas and hydrostatic methods used together",
      "Full-system isolation testing to identify which line has failed",
      "Written findings and photographs suitable for insurance claims",
      "Repair, reroute and repipe options presented with honest cost comparison",
      "Same-day availability for active, damaging leaks",
    ],
    problems: [
      "Slab leaks under flooring in Mesa and Gilbert homes",
      "Pinhole leaks in aging copper supply lines",
      "Leaking irrigation and pool supply lines beneath landscaping",
      "Concealed drain leaks inside wall cavities",
      "Failed shower pans and second-floor bathroom leaks",
      "Underground main line leaks between the meter and the house",
    ],
    signs: [
      "A water bill that jumped without a change in habits",
      "Warm spots on tile or hardwood flooring",
      "The sound of running water when everything is shut off",
      "Cracks appearing in drywall, tile grout or the foundation",
      "Musty odor, buckling floors or unexplained mold growth",
      "Persistently damp soil or unusually green grass in one patch of yard",
    ],
    detail: [
      {
        heading: "How We Find A Leak Without Tearing Up Your Home",
        body: [
          "We begin with a meter test. With every fixture closed, a moving meter dial confirms an active supply-side leak and gives us a rough loss rate. We then isolate zones — hot side, cold side, irrigation, pool fill — by closing valves in sequence to narrow the failure to a single circuit.",
          "Acoustic equipment amplifies the distinctive high-frequency hiss of pressurized water escaping a pipe, which travels through concrete and soil. An experienced technician can localize that sound to within a few inches. Thermal imaging then confirms the finding by revealing the temperature anomaly created by a hot-line leak beneath flooring.",
          "For drain-side and non-pressurized leaks we use tracer gas: a safe hydrogen-nitrogen blend introduced into the line escapes at the failure point and is detected at the surface by a sensitive probe. Pool and irrigation lines are pressure-isolated and tested the same way.",
        ],
      },
      {
        heading: "Slab Leak Repair Options",
        body: [
          "Once located, a slab leak can be addressed three ways. A spot repair opens a small section of slab, replaces the failed segment, and restores the floor — the least expensive option when the rest of the piping is sound.",
          "A reroute abandons the under-slab section entirely and runs new PEX through walls and attic space. This avoids concrete work altogether and is often the smarter choice when the leak is in a difficult location or the line has already failed once.",
          "A whole-home repipe replaces all supply piping. When we find a home with multiple pinhole failures — a classic pattern in certain 1980s and 1990s Valley builds — repiping ends the cycle permanently rather than funding a leak repair every eighteen months.",
        ],
      },
    ],
    steps: [
      { title: "Meter & Pressure Test", text: "We confirm an active leak, measure loss rate, and check static system pressure." },
      { title: "Zone Isolation", text: "Valves are sequenced to determine whether the leak is on the hot side, cold side, irrigation, or pool circuit." },
      { title: "Acoustic Localization", text: "Ground microphones and amplifiers trace the escape sound to a precise location." },
      { title: "Thermal & Tracer Confirmation", text: "Infrared imaging or tracer gas verifies the finding before any floor or wall is opened." },
      { title: "Marked Findings & Written Report", text: "The location is physically marked and documented with photographs for your records or insurer." },
      { title: "Repair Recommendation", text: "Spot repair, reroute, or repipe options are quoted with pros, cons and expected longevity for each." },
    ],
    maintenance: [
      "Read your water meter monthly with all fixtures off",
      "Keep static pressure between 55 and 70 PSI with a functioning regulator",
      "Install smart leak sensors near water heaters, laundry and under sinks",
      "Investigate any unexplained bill increase immediately rather than waiting",
      "Have homes over twenty-five years old inspected for copper pitting",
    ],
    faqs: [
      { q: "How accurate is electronic leak detection?", a: "In most cases we pinpoint the failure to within a few inches, which means a small access opening rather than exploratory demolition." },
      { q: "How much does leak detection cost?", a: "We quote a flat detection fee up front, and it is credited toward the repair when you have us perform the work." },
      { q: "What is a slab leak?", a: "A leak in a water line running beneath or within your concrete foundation. Warm floor spots, running-water sounds, and high bills are the classic symptoms." },
      { q: "Does homeowners insurance cover slab leaks?", a: "Many policies cover resulting damage and access costs even when the pipe itself is excluded. Our written report and photographs are prepared with claims in mind." },
      { q: "Can you find pool and irrigation leaks?", a: "Yes. We pressure-isolate pool supply, return and irrigation lines and locate underground failures without excavating the whole yard." },
    ],
    related: ["pipe-repair", "emergency-plumber", "residential-plumbing", "sewer-line-repair"],
  },
  {
    slug: "pipe-repair",
    name: "Pipe Repair",
    tagline: "Repair, reroute and repipe solutions for failing water lines",
    metaTitle: "Pipe Repair & Repiping Mesa AZ | Burst & Pinhole Leaks | Prestige Plumbing",
    metaDescription:
      "Pipe repair and whole-home repiping in Mesa, Phoenix & the East Valley. Burst pipes, pinhole leaks, low pressure and corroded galvanized lines. Call +1 (480) 215-0629.",
    image: "hero",
    intro: [
      "Pipes fail for reasons that are entirely predictable: age, water chemistry, excessive pressure, poor original workmanship, and soil movement. Prestige Plumbing Company repairs and replaces water supply and drain piping throughout Mesa, Phoenix, Tempe, Chandler and Scottsdale — from a single failed section to a complete whole-home repipe.",
      "The critical judgment in pipe work is scope. A homeowner with one pinhole leak wants a patch, and sometimes a patch is genuinely correct. But when copper begins pitting from the inside, one pinhole is a preview. We inspect the surrounding piping and tell you honestly whether you are looking at an isolated event or the beginning of a pattern.",
      "We work in copper, PEX, CPVC, ABS, PVC and cast iron, and we know which material belongs in which application under Arizona code. PEX has transformed residential repiping — flexible, freeze-tolerant, corrosion-immune and installable with far less demolition than rigid copper.",
    ],
    benefits: [
      "Accurate assessment of isolated repair versus systemic replacement",
      "Minimal-demolition PEX rerouting through walls and attic space",
      "Copper, PEX, CPVC, PVC, ABS and cast iron expertise",
      "Pressure regulation correction to prevent repeat failures",
      "Drywall coordination so your home is put back together properly",
      "Written warranty on all pipe repair and repipe workmanship",
    ],
    problems: [
      "Burst supply lines and split fittings",
      "Pinhole leaks in copper caused by pitting corrosion",
      "Corroded, flow-restricted galvanized steel piping in older homes",
      "Low water pressure from internal scale accumulation",
      "Cracked or separated drain lines under slabs and in walls",
      "Failed polybutylene piping still present in some 1980s builds",
    ],
    signs: [
      "Discolored or rusty water at multiple fixtures",
      "Weak pressure that has declined gradually over years",
      "Repeated leaks in different locations within the same year",
      "Visible green or white corrosion on exposed copper",
      "Banging or hammering sounds when valves close",
    ],
    detail: [
      {
        heading: "Understanding Pipe Failure In Arizona Homes",
        body: [
          "Valley water is hard and mineral-rich. In copper systems, aggressive chemistry combined with high velocity from excessive pressure erodes the protective interior oxide layer, and pitting begins. The result is a pinhole that sprays a fine, high-pressure mist — often into a wall cavity where it goes unnoticed for weeks.",
          "Galvanized steel, common in pre-1970 homes, corrodes from the inside outward. The tuberculation that builds up inside progressively strangles flow until a three-quarter-inch pipe carries the volume of a straw. No amount of fixture replacement fixes that; the pipe itself must go.",
          "Excessive incoming pressure accelerates every one of these failure modes. We check static pressure on every service call, and where it exceeds 80 PSI we recommend a pressure reducing valve — the single cheapest insurance policy in residential plumbing.",
        ],
      },
      {
        heading: "Repair, Reroute Or Repipe",
        body: [
          "A spot repair replaces the failed section with new material and proper transition fittings. It is correct when the failure has an identifiable external cause — a nail strike, physical damage, a bad solder joint — rather than systemic corrosion.",
          "A reroute abandons a problematic run, typically under-slab, and installs a new PEX line through accessible space. It costs more than a patch but far less than concrete work, and it permanently removes the section that keeps failing.",
          "A whole-home repipe replaces all supply piping, usually in three to six days depending on home size. We stage the work so your water is restored each evening, protect finishes, and coordinate drywall repair. The result is a system with a fresh fifty-year clock, better pressure, and no more leak anxiety.",
        ],
      },
    ],
    steps: [
      { title: "Full System Evaluation", text: "We inspect accessible piping, test static and working pressure, and evaluate water quality and pipe material." },
      { title: "Leak Location", text: "Where the failure is concealed, acoustic and thermal detection pinpoint it before anything is opened." },
      { title: "Scope Recommendation", text: "You receive written pricing for repair, reroute and repipe with expected service life for each path." },
      { title: "Protected Access", text: "Openings are cut precisely, with containment and dust control protecting your furnishings." },
      { title: "Installation & Pressure Test", text: "New piping is installed to code, then pressure-tested and held before anything is closed up." },
      { title: "Restoration & Warranty", text: "Access points are patched, the site is cleaned, and your workmanship warranty is documented." },
    ],
    maintenance: [
      "Install and service a pressure reducing valve to hold 55–70 PSI",
      "Add water hammer arrestors on quick-closing appliance valves",
      "Insulate exposed exterior piping before Valley cold snaps",
      "Consider a softener to slow scale and corrosion in hard-water areas",
      "Have supply piping inspected every three years on homes over twenty-five years old",
    ],
    faqs: [
      { q: "How long does a whole-home repipe take?", a: "Typically three to six days depending on home size and access. We restore water service each evening so you are never without it overnight." },
      { q: "Is PEX better than copper?", a: "For residential repiping in Arizona, generally yes. PEX resists corrosion and scale, tolerates freezing better, and requires far less demolition to install. Copper remains excellent for exposed and mechanical applications." },
      { q: "Can one pinhole leak be patched?", a: "Sometimes. If the cause is external damage, a patch is appropriate. If the copper is pitting from within, expect more failures — we will show you the pipe condition so you can decide with real information." },
      { q: "Do you repair the drywall afterward?", a: "Yes. We patch access openings and coordinate texture and paint matching so your home is not left with holes in the wall." },
      { q: "What causes low water pressure throughout my house?", a: "Most often internal scale in galvanized piping, a failing pressure regulator, or a partially closed main valve. We diagnose before recommending anything." },
    ],
    related: ["leak-detection", "residential-plumbing", "emergency-plumber", "bathroom-plumbing"],
  },
  {
    slug: "gas-line-installation",
    name: "Gas Line Installation",
    tagline: "Permitted gas piping for appliances, fire pits and outdoor kitchens",
    metaTitle: "Gas Line Installation Mesa AZ | Fire Pit & Grill Lines | Prestige Plumbing",
    metaDescription:
      "Licensed gas line installation in Mesa, Gilbert, Chandler & Scottsdale. Appliance lines, fire pits, outdoor grills and gas leak repair. Call +1 (480) 215-0629.",
    image: "gasLine",
    intro: [
      "Gas work is the least forgiving discipline in plumbing. A drain mistake makes a mess; a gas mistake endangers a family. Prestige Plumbing Company installs, extends, repairs and pressure-tests natural gas and propane piping across Mesa, Gilbert, Chandler, Tempe and Scottsdale — always permitted, always tested, always to code.",
      "Outdoor living has transformed Valley backyards, and gas is at the center of it. We run dedicated lines for fire pits, built-in grills, outdoor kitchens, patio heaters, pool heaters, generators, ranges, dryers and tankless water heaters. Each of those appliances has a specific BTU demand, and the piping must be sized to deliver it under simultaneous load.",
      "Undersized piping is the defect we correct most often. A grill teed off an existing quarter-inch line may light beautifully alone and starve the moment the water heater fires. We perform a full load calculation for every installation so every appliance performs at rated output.",
    ],
    benefits: [
      "Permitted installations with inspection coordinated on your behalf",
      "Complete BTU load calculation and correct pipe sizing",
      "Black iron, CSST and polyethylene underground installation",
      "Dedicated shut-off valves and sediment traps at every appliance",
      "Pressure testing and leak verification before the system is energized",
      "Clean trenching and full restoration of landscaping and hardscape",
    ],
    problems: [
      "Adding a gas line for a new range, dryer or tankless heater",
      "Backyard fire pit and outdoor kitchen gas supply",
      "Built-in grill and patio heater connections",
      "Pool heater and standby generator gas piping",
      "Gas odor, corroded piping and failed appliance connectors",
      "Existing undersized lines starving appliances at full load",
    ],
    signs: [
      "A sulfur or rotten-egg odor near appliances or the meter",
      "Hissing sounds along a gas line",
      "Yellow rather than blue burner flames",
      "Appliances that underperform when others run simultaneously",
      "Visible rust or corrosion on exterior gas piping",
      "Dead or discolored vegetation over an underground gas run",
    ],
    detail: [
      {
        heading: "Sizing And Materials Done Properly",
        body: [
          "Every gas installation begins with a load calculation. We total the BTU demand of all connected appliances, measure the developed length of pipe from the meter to the furthest appliance, and size each segment so pressure drop remains within code limits at maximum simultaneous demand.",
          "Material selection follows application. Black iron pipe remains the standard for interior and exposed runs. CSST offers flexibility for retrofits through finished spaces and must be bonded properly to the electrical grounding system — a step frequently skipped by unqualified installers. Underground runs use coated polyethylene with a tracer wire and correct burial depth.",
          "Each appliance receives its own accessible shut-off valve and, where required, a sediment trap to catch debris and moisture before it reaches a control valve.",
        ],
      },
      {
        heading: "Outdoor Fire Features And Kitchens",
        body: [
          "Fire pits and outdoor grills are among our most requested installations, and they demand careful planning. We coordinate the stub-out location with your hardscape design, size for the burner's actual BTU rating, and install an accessible emergency shut-off outside the fire feature enclosure as code requires.",
          "Underground runs are trenched to depth, bedded properly, marked with tracer wire, and pressure-tested before backfill. We photograph the trench route so future landscaping work can avoid it.",
          "For outdoor kitchens serving a grill, side burner, and sometimes a heater, we run a manifold sized for full simultaneous use — because nobody wants their grill to lose flame when the patio heater kicks on during a December dinner.",
        ],
      },
    ],
    steps: [
      { title: "Appliance & Load Review", text: "We document every appliance's BTU rating and future plans, then calculate total and simultaneous demand." },
      { title: "Route Design", text: "The most direct, serviceable and code-compliant route is planned, including trenching and penetrations." },
      { title: "Permit Application", text: "We pull the required permit with the city or county and schedule inspection." },
      { title: "Installation", text: "Piping is installed with correct material, supports, shut-offs, sediment traps and CSST bonding." },
      { title: "Pressure Test & Inspection", text: "The system is pressure-tested and held, then presented for municipal inspection before energizing." },
      { title: "Appliance Connection & Restoration", text: "Appliances are connected, flames verified, leaks checked with detection solution, and the site fully restored." },
    ],
    maintenance: [
      "Never store combustibles near gas appliances or the meter",
      "Have exterior gas piping inspected for corrosion every two years",
      "Replace flexible appliance connectors when relocating any appliance",
      "Verify blue, stable burner flames on all gas appliances seasonally",
      "Call for immediate service at the first hint of gas odor",
    ],
    faqs: [
      { q: "Do I need a permit for a gas line in Mesa?", a: "Yes. New gas lines and extensions require a permit and inspection in virtually every Valley jurisdiction. We handle the entire process for you." },
      { q: "How long does gas line installation take?", a: "A simple appliance extension takes half a day. Fire pits, outdoor kitchens and underground runs typically take one to two days plus inspection scheduling." },
      { q: "Can you run a gas line for my fire pit and grill?", a: "Yes — fire pits, built-in grills, side burners, patio heaters and pool heaters, all sized for simultaneous operation with a code-required emergency shut-off." },
      { q: "What should I do if I smell gas?", a: "Leave the building immediately without operating switches, call your gas utility from outside, and then call us at +1 (480) 215-0629 for repair once the area is safe." },
      { q: "Do you work with propane as well as natural gas?", a: "Yes. We install and service both natural gas and LP systems, including appliance conversion where the manufacturer supports it." },
    ],
    related: ["emergency-plumber", "water-heater-installation", "residential-plumbing", "commercial-plumbing"],
  },
  {
    slug: "sewer-line-repair",
    name: "Sewer Line Repair",
    tagline: "Camera-verified sewer diagnosis, spot repair and full replacement",
    metaTitle: "Sewer Line Repair Mesa AZ | Camera Inspection | Prestige Plumbing",
    metaDescription:
      "Sewer line repair and replacement in Mesa, Phoenix & the East Valley. Root intrusion, collapsed pipe and bellied lines. Camera inspection. Call +1 (480) 215-0629.",
    image: "commercial",
    intro: [
      "Your sewer lateral is the single pipe carrying everything your household discharges to the municipal main. When it fails, nothing else in the plumbing system matters. Prestige Plumbing Company diagnoses, repairs and replaces sewer lines across Mesa, Phoenix, Tempe, Chandler and Queen Creek, always beginning with camera inspection so you see the evidence before spending a dollar.",
      "Older Valley neighborhoods contain clay, cast iron, Orangeburg and early ABS laterals, each with distinct failure modes. Clay cracks and admits roots at every joint. Cast iron corrodes and channels along the bottom. Orangeburg, essentially compressed fiber, deforms into an oval and collapses. Recognizing the material tells us most of what we need to know before the camera even goes in.",
      "We are equally direct about what does not need replacing. Plenty of homeowners have been quoted a full sewer replacement when the actual problem was a single root-invaded joint or a grease-choked section that jetting would clear. Our camera footage belongs to you, and we walk you through it frame by frame.",
    ],
    benefits: [
      "High-definition camera inspection with locating transmitter",
      "Footage reviewed with you before any repair is recommended",
      "Spot repair, trenchless options and full replacement all available",
      "Accurate depth and location marking to minimize excavation",
      "Coordination with municipal requirements and permits",
      "Complete landscape and hardscape restoration after excavation",
    ],
    problems: [
      "Tree root intrusion at joints in clay and older sewer pipe",
      "Collapsed or crushed sections under driveways and yards",
      "Bellied line sections holding standing waste",
      "Offset joints from soil movement and settling",
      "Corroded cast iron with channeling along the pipe invert",
      "Recurring whole-house backups affecting every fixture",
    ],
    signs: [
      "Multiple fixtures backing up at the same time",
      "Sewage odor in the yard or around a cleanout",
      "Unusually lush green patches or soggy soil above the line",
      "Gurgling toilets when the washing machine drains",
      "Foundation or driveway settling above the sewer route",
      "Repeated main line clogs despite professional clearing",
    ],
    detail: [
      {
        heading: "Camera Inspection: The Non-Negotiable First Step",
        body: [
          "We insert a self-leveling camera through an accessible cleanout and travel the full length of the lateral to the municipal connection. The camera head carries a sonde transmitter, so as we identify a defect we locate it precisely at the surface and mark both position and depth.",
          "What we look for: root mass and where it enters, standing water indicating a belly, longitudinal cracks, offset joints, wall loss in cast iron, foreign obstructions, and any prior repair performed with mismatched materials.",
          "You receive the recording. Whether you hire us or take that footage to another contractor, the evidence is yours — that is how a homeowner makes a fifteen-thousand-dollar decision with confidence.",
        ],
      },
      {
        heading: "Repair Methods Explained",
        body: [
          "Spot repair excavates a limited area to replace a defective section. It is the right approach when the camera shows a single localized defect and the remainder of the pipe is structurally intact.",
          "Trenchless methods — pipe bursting and cured-in-place lining — replace or reline the lateral with minimal surface disruption. Bursting pulls a new HDPE pipe through the old one while fragmenting it outward, and lining creates a jointless structural sleeve inside the existing host pipe. Both preserve driveways, patios and mature landscaping, and both require the right conditions, which the camera tells us.",
          "Full open-cut replacement remains the correct answer for collapsed lines, severe bellies requiring re-grading, and situations where the lateral must be re-routed. We restore the excavation properly — compacted backfill, matched hardscape, and re-established landscaping.",
        ],
      },
    ],
    steps: [
      { title: "Cleanout Access & Camera Run", text: "The full lateral is inspected on camera from the house to the municipal connection." },
      { title: "Defect Locating", text: "A sonde transmitter marks exact position and depth of every defect at the surface." },
      { title: "Footage Review", text: "We watch the recording with you and explain each finding in plain language." },
      { title: "Written Options", text: "Spot repair, trenchless and replacement options are priced with the pros and cons of each." },
      { title: "Permitted Execution", text: "Work is performed under permit with proper shoring, bedding, slope and materials." },
      { title: "Verification & Restoration", text: "A post-repair camera run confirms flow and grade, and the site is fully restored." },
    ],
    maintenance: [
      "Camera inspect the lateral every three to five years on older properties",
      "Always inspect before purchasing a home built before 1990",
      "Keep ficus, palm and mesquite roots away from the sewer route",
      "Never flush wipes, hygiene products or paper towels",
      "Schedule preventative jetting where roots have previously intruded",
    ],
    faqs: [
      { q: "How much does sewer line repair cost?", a: "Spot repairs are the most economical; trenchless and full replacement scale with length, depth and surface restoration. We quote in writing after camera inspection — never before." },
      { q: "What is trenchless sewer repair?", a: "Pipe bursting or cured-in-place lining replaces the lateral through small access pits instead of an open trench, preserving driveways, patios and landscaping." },
      { q: "How do I know if roots are in my sewer line?", a: "Repeated main line clogs, gurgling fixtures, and yard odor are strong indicators. Camera inspection confirms it definitively and shows exactly where roots enter." },
      { q: "How long does a sewer replacement take?", a: "Trenchless work is often completed in one to two days. Open-cut replacement typically takes two to four days including restoration." },
      { q: "Do you handle the permits?", a: "Yes. Sewer work requires permitting and inspection in Valley jurisdictions, and we manage the entire process." },
    ],
    related: ["hydro-jetting", "drain-cleaning", "emergency-plumber", "commercial-plumbing"],
  },
  {
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing",
    tagline: "Fixture installation, repairs and full remodel rough-in",
    metaTitle: "Bathroom Plumbing Mesa AZ | Remodel & Fixture Install | Prestige Plumbing",
    metaDescription:
      "Bathroom plumbing in Mesa, Gilbert & Chandler. Toilet, faucet, shower and tub installation plus complete remodel rough-in. Call +1 (480) 215-0629.",
    image: "bathroom",
    intro: [
      "Bathrooms concentrate more plumbing into less square footage than any other room in the house, which is why small mistakes there produce large consequences. Prestige Plumbing Company handles everything from a leaking shower valve to complete remodel rough-in across Mesa, Gilbert, Chandler, Tempe and Scottsdale.",
      "Homeowners investing in a beautiful bathroom deserve plumbing that matches the finish quality. That means valves accessible for future service, drains sloped correctly, shower pans tested before tile, and fixtures anchored so they never loosen. The parts nobody sees determine whether the parts everybody sees stay perfect.",
      "We work alongside contractors, tile setters and designers on remodels, and we handle single-fixture service calls with the same care. Either way, the water is off for the minimum time possible and the space is left clean.",
    ],
    benefits: [
      "Complete remodel rough-in coordinated with your contractor's schedule",
      "Toilet, faucet, shower valve, tub and vanity installation",
      "Pressure-balanced and thermostatic valve upgrades for scald protection",
      "Shower pan and drain assemblies water-tested before tile is set",
      "ADA-height and comfort-height fixture options",
      "Existing supply and drain lines evaluated before new finishes go in",
    ],
    problems: [
      "Running or constantly refilling toilets",
      "Leaking or dripping shower and tub valves",
      "Slow bathroom sink and shower drains",
      "Loose, rocking toilets and failed wax seals",
      "Low pressure at bathroom fixtures only",
      "Failed shower pans leaking into ceilings below",
      "Corroded angle stops that will not shut off",
    ],
    signs: [
      "Water stains on the ceiling beneath an upstairs bathroom",
      "Persistent musty smell around the vanity or tub",
      "Grout and caulk failing repeatedly at the same joint",
      "Water bill climbing with a toilet that runs intermittently",
      "Temperature swinging when another fixture is used",
    ],
    detail: [
      {
        heading: "Remodel Rough-In Done Correctly",
        body: [
          "Bathroom remodels fail at the rough-in stage, not the finish stage. Drain lines must be vented properly or fixtures will gurgle and traps will siphon. Shower drains need correct slope toward the trap and a pan that has held water for twenty-four hours before a single tile goes down.",
          "Valve placement matters for the life of the room. A pressure-balanced or thermostatic valve set at proper depth and orientation for the finished wall thickness gives you a fixture that installs cleanly and can actually be serviced later without opening tile.",
          "We coordinate with the tile setter and contractor on blocking for grab bars, niche locations relative to plumbing, and fixture heights, so nothing has to be reworked after finishes are installed.",
        ],
      },
      {
        heading: "Fixture Repairs And Upgrades",
        body: [
          "Most bathroom service calls involve a handful of predictable failures: worn toilet flappers and fill valves, cartridge failures in shower valves, corroded angle stops, and wax rings that have compressed and allowed seepage around a toilet base.",
          "These are inexpensive repairs when addressed early. Ignored, a rocking toilet destroys subfloor and a seeping shower valve rots the framing behind the tile. Our technicians check the surrounding condition, not just the reported complaint.",
          "Upgrades we frequently recommend include comfort-height toilets with strong flush performance, thermostatic shower valves for consistent temperature, and quarter-turn angle stops that will actually close when you need them to.",
        ],
      },
    ],
    steps: [
      { title: "Scope Walkthrough", text: "We review the fixtures, layout and finishes with you and identify any code or venting issues before work begins." },
      { title: "Protection & Isolation", text: "Flooring is protected, water is isolated at the smallest possible zone, and the work area is contained." },
      { title: "Rough-In Or Repair", text: "Supply and drain work is executed to code with serviceable valve placement and correct drain slope." },
      { title: "Water Testing", text: "Shower pans and drain assemblies are water-tested and held before any tile or finish work proceeds." },
      { title: "Finish Fixture Setting", text: "Toilets, faucets, valves and trim are installed and sealed to manufacturer specification." },
      { title: "Final Inspection & Cleanup", text: "Every fixture is run, checked for leaks and drainage, and the bathroom is left clean." },
    ],
    maintenance: [
      "Replace toilet flappers every three to five years",
      "Exercise angle stops annually so they close when needed",
      "Re-caulk tub and shower joints at the first sign of separation",
      "Clean pop-up drain assemblies quarterly to prevent hair buildup",
      "Run the exhaust fan for twenty minutes after showering to protect finishes",
    ],
    faqs: [
      { q: "Can you install fixtures I purchased myself?", a: "Yes. We install customer-supplied fixtures and will flag anything incompatible with your rough-in before installation day." },
      { q: "How long does bathroom remodel plumbing take?", a: "Rough-in typically takes one to three days depending on layout changes, with a return visit for finish fixture setting after tile and cabinetry." },
      { q: "Do I need a permit for a bathroom remodel?", a: "If you are relocating drains or supply lines, yes. Like-for-like fixture replacement generally does not require one. We advise during the estimate." },
      { q: "Why does my toilet keep running?", a: "Almost always a worn flapper or a fill valve out of adjustment. It is an inexpensive repair that can save thousands of gallons a year." },
      { q: "Can you move a toilet or shower drain?", a: "Yes, though it requires opening the slab or working from below. We assess feasibility and cost during the walkthrough." },
    ],
    related: ["kitchen-plumbing", "residential-plumbing", "pipe-repair", "drain-cleaning"],
  },
  {
    slug: "kitchen-plumbing",
    name: "Kitchen Plumbing",
    tagline: "Sinks, faucets, disposals, ice makers and kitchen drain lines",
    metaTitle: "Kitchen Plumbing Mesa AZ | Disposals, Faucets & Drains | Prestige Plumbing",
    metaDescription:
      "Kitchen plumbing services in Mesa, Chandler & Gilbert. Faucet and sink installation, garbage disposals, dishwasher lines and drain repair. Call +1 (480) 215-0629.",
    image: "hero",
    intro: [
      "The kitchen is the hardest-working plumbing zone in any home. Between the sink, dishwasher, garbage disposal, ice maker and pot filler, more connections and more grease pass through this room than anywhere else. Prestige Plumbing Company services and installs kitchen plumbing across Mesa, Phoenix, Gilbert, Chandler and Tempe.",
      "Kitchen drains fail for one dominant reason: fats, oils and grease cool inside the pipe and adhere to the wall, catching food particles until the passage narrows to nothing. That process is invisible until it is severe, which is why we camera recurring kitchen backups and typically recommend jetting rather than another temporary clearing.",
      "On the supply side, we install faucets, filtration, instant hot water dispensers, dishwasher and ice maker lines with proper shut-offs and connectors, so the next service call — or appliance swap — is a fifteen-minute job instead of a project.",
    ],
    benefits: [
      "Faucet, sink, disposal and filtration installation done cleanly",
      "Dishwasher and ice maker line installation with proper shut-offs",
      "Grease-clogged drain clearing and hydro jetting",
      "Under-sink leak repair before cabinets are destroyed",
      "Instant hot water dispenser and pot filler installation",
      "Cabinet-safe work practices with full protection and cleanup",
    ],
    problems: [
      "Slow or fully blocked kitchen sink drains",
      "Garbage disposals that hum, jam or leak",
      "Dripping and loose kitchen faucets",
      "Leaks under the sink damaging cabinet floors",
      "Dishwashers that will not drain or back up into the sink",
      "Ice maker lines that leak behind the refrigerator",
    ],
    signs: [
      "Standing water in the sink after running the disposal",
      "A sour odor rising from the drain",
      "Warped or stained cabinet base beneath the sink",
      "Dishwasher leaving standing water at the end of a cycle",
      "Reduced flow from the kitchen faucet specifically",
    ],
    detail: [
      {
        heading: "Garbage Disposals: Repair Or Replace",
        body: [
          "A disposal that hums without turning has a jammed impeller — often clearable with a hex wrench from below and a reset. A disposal that does nothing at all is usually a tripped internal breaker or a failed motor. A disposal leaking from the body shell is finished; the housing has corroded through and no repair exists.",
          "When replacing, horsepower matters less than build quality. A well-built three-quarter horsepower unit with stainless components outlasts a cheap one-horsepower model by years. We install with new mounting hardware and a properly sloped discharge, and we correct dishwasher drain connections where the knockout plug was never removed — a surprisingly common cause of dishwasher backups.",
        ],
      },
      {
        heading: "Protecting Your Kitchen Drain Line",
        body: [
          "Even with a disposal, fibrous material like celery, onion skins and coffee grounds should go in the trash. Grease should never enter the drain at any temperature — hot water only carries it a few feet further down the pipe before it congeals.",
          "For homes that entertain heavily or have older cast iron drainage, we recommend a preventative jetting of the kitchen line every twelve to eighteen months. It costs a fraction of an emergency call during a holiday dinner.",
          "Under-sink leaks deserve immediate attention. Cabinet particleboard absorbs water and swells permanently, and the enclosed space is an ideal environment for mold. A five-minute supply connector replacement prevents a cabinet replacement.",
        ],
      },
    ],
    steps: [
      { title: "Inspection", text: "We evaluate supply connections, drain assembly, disposal, dishwasher line and cabinet condition together, not just the reported issue." },
      { title: "Cabinet Protection", text: "The cabinet interior and flooring are protected before any connection is broken." },
      { title: "Repair Or Installation", text: "Faucets, disposals, drain assemblies and appliance lines are installed with new connectors and quality shut-offs." },
      { title: "Drain Clearing", text: "Where flow is restricted, the line is cabled or jetted based on what the blockage actually is." },
      { title: "Leak & Flow Testing", text: "Every joint is run and inspected under load, including a full dishwasher cycle where relevant." },
      { title: "Cleanup & Guidance", text: "The area is cleaned and you receive practical advice for keeping the kitchen line clear." },
    ],
    maintenance: [
      "Collect grease in a container and discard it in the trash",
      "Run cold water before, during and after using the disposal",
      "Grind citrus peels monthly to control odor",
      "Check under-sink connections for moisture every few months",
      "Schedule preventative kitchen line jetting every 12–18 months",
    ],
    faqs: [
      { q: "Why does my kitchen sink keep clogging?", a: "Almost always grease accumulation on the pipe wall. Repeated clearing treats the symptom; jetting the line restores full diameter and solves it." },
      { q: "Can I install a garbage disposal myself?", a: "It is possible, but improper electrical connection, missing dishwasher knockout, and poorly sloped discharge cause most of the disposal failures we service. Professional installation is inexpensive insurance." },
      { q: "How long does faucet installation take?", a: "Usually under an hour, plus additional time if corroded angle stops need replacement — which we recommend doing while we are already under the sink." },
      { q: "My dishwasher backs up into the sink. Why?", a: "Typically a clogged shared drain line, a missing high loop or air gap, or a disposal knockout plug that was never removed during installation." },
      { q: "Do you install water filtration and instant hot water?", a: "Yes — under-sink filtration, reverse osmosis systems, instant hot dispensers and pot fillers are all part of our kitchen work." },
    ],
    related: ["drain-cleaning", "hydro-jetting", "bathroom-plumbing", "residential-plumbing"],
  },
  {
    slug: "residential-plumbing",
    name: "Residential Plumbing",
    tagline: "Complete home plumbing service, repair and maintenance",
    metaTitle: "Residential Plumbing Mesa AZ | Home Plumber | Prestige Plumbing Company",
    metaDescription:
      "Residential plumbing in Mesa, Gilbert, Chandler, Tempe & Phoenix. Repairs, repipes, fixtures, water heaters and whole-home inspections. Call +1 (480) 215-0629.",
    image: "van",
    intro: [
      "Prestige Plumbing Company has been the family plumber for East Valley households since 2005. Residential plumbing is our foundation: the leaking faucet, the failed water heater, the repipe, the remodel, and the annual inspection that catches the problem before it becomes an emergency.",
      "Arizona homes present a specific set of challenges. Hard water shortens the life of every water-using appliance. Expansive soils shift foundations and stress under-slab piping. Summer heat degrades exterior components and drives water pressure up. Homes built during the 1980s and 1990s boom often share the same construction-era plumbing weaknesses, and after twenty years here we know exactly what to look for on each vintage.",
      "Whether you own a 1970s Mesa ranch, a 1990s Gilbert two-story, or a new-build in Queen Creek, we service the whole system rather than isolated symptoms — because a plumber who only fixes the thing you called about will be back next month for the thing you did not know to call about.",
    ],
    benefits: [
      "One trusted company for every plumbing need in the home",
      "Whole-home inspection reports with photographs and priorities",
      "Flat-rate pricing approved before any work starts",
      "Clean, background-checked technicians who respect your home",
      "Same-day service on most repairs and 24/7 emergency coverage",
      "Documented workmanship warranty on all residential work",
    ],
    problems: [
      "Dripping faucets, running toilets and failing angle stops",
      "Low water pressure throughout the house",
      "Water heater failures and inadequate hot water",
      "Slow drains, recurring clogs and sewer backups",
      "Hidden slab and wall leaks",
      "Corroded galvanized or pitting copper supply piping",
      "Water quality issues including hardness, taste and staining",
    ],
    signs: [
      "Water bills rising without a change in usage",
      "Multiple small plumbing repairs within a single year",
      "Fluctuating water temperature or pressure",
      "Discoloration or sediment at fixtures",
      "Plumbing in the home has never been professionally inspected",
    ],
    detail: [
      {
        heading: "The Whole-Home Plumbing Inspection",
        body: [
          "Our whole-home inspection is the single most valuable service we offer, and most homeowners have never had one. We test static and working pressure, examine all accessible supply and drain piping, evaluate the water heater's age and condition, check every fixture and shut-off, inspect the main shut-off and pressure regulator, and camera the sewer lateral where age warrants it.",
          "You receive a written report with photographs, organized into what needs attention now, what should be planned within a year, and what is simply worth monitoring. There is no obligation attached — plenty of our inspection customers do the small items themselves.",
          "Homebuyers use this inspection routinely before closing. A standard home inspection glances at plumbing; ours puts a camera in the sewer and a gauge on the system.",
        ],
      },
      {
        heading: "Preventative Maintenance That Actually Pays",
        body: [
          "The highest-value maintenance items in an Arizona home are straightforward: flush the water heater annually, keep incoming pressure regulated below 70 PSI, replace braided supply connectors on a schedule rather than after they fail, and clear the sewer lateral before it clogs rather than after.",
          "Water treatment deserves consideration in this valley. A softener meaningfully extends the life of water heaters, dishwashers, washing machines and faucet cartridges, and reduces the scale that eventually restricts flow in supply piping.",
          "We offer a preventative maintenance plan covering annual inspection, water heater service, and priority emergency scheduling — designed for homeowners who prefer to prevent the 2am phone call rather than survive it.",
        ],
      },
    ],
    steps: [
      { title: "Schedule At Your Convenience", text: "Book by phone or WhatsApp with an arrival window that works around your day, including evenings." },
      { title: "Arrival & Protection", text: "Marked vehicle, uniformed technician, shoe covers and drop cloths before anything is touched." },
      { title: "Genuine Diagnosis", text: "We test rather than guess, and we look at the surrounding system, not just the reported symptom." },
      { title: "Written Options", text: "Flat-rate pricing with good, better and best paths where they exist, explained plainly." },
      { title: "Quality Repair", text: "Premium parts, code-compliant methods, and workmanship we are willing to warranty." },
      { title: "Walkthrough & Follow-Up", text: "We show you what was done, share maintenance guidance, and follow up to confirm satisfaction." },
    ],
    maintenance: [
      "Annual water heater flush and anode inspection",
      "Keep house pressure between 55 and 70 PSI",
      "Exercise the main shut-off valve twice yearly",
      "Replace washing machine hoses every five years",
      "Book a whole-home plumbing inspection every two to three years",
    ],
    faqs: [
      { q: "Do you charge for estimates?", a: "Estimates on replacement work such as water heaters, repipes and sewer lines are free. Diagnostic visits carry a flat fee that is credited toward the repair when you proceed." },
      { q: "Can I get same-day residential service?", a: "Yes, most days. Emergencies are always prioritized, and we run extended dispatch hours across Mesa and the East Valley." },
      { q: "Do you offer a maintenance plan?", a: "We do. It includes annual inspection, water heater service, priority scheduling and member pricing on repairs." },
      { q: "What brands of fixtures do you install?", a: "Moen, Delta, Kohler, American Standard, Rheem, A.O. Smith, Bradford White and more — plus customer-supplied fixtures." },
      { q: "Are your technicians background checked?", a: "Every technician is background checked, uniformed, and arrives in a marked company vehicle." },
    ],
    related: ["emergency-plumber", "water-heater-repair", "bathroom-plumbing", "leak-detection"],
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    tagline: "Plumbing service and installation that respects your operating hours",
    metaTitle: "Commercial Plumbing Mesa AZ | Restaurants & Retail | Prestige Plumbing",
    metaDescription:
      "Commercial plumbing in Mesa, Phoenix, Tempe & Chandler. Restaurants, retail, offices and multi-family. Grease lines, jetting, backflow & installs. Call +1 (480) 215-0629.",
    image: "commercial",
    intro: [
      "Commercial plumbing failures cost revenue, not just repair dollars. A restaurant with a backed-up kitchen line stops serving. An office with a failed restroom sends staff home. A multi-family property with a riser leak faces angry tenants and liability. Prestige Plumbing Company services commercial properties across Mesa, Phoenix, Tempe, Chandler and Scottsdale with the response speed that reality requires.",
      "We work with restaurants, retail centers, medical and dental offices, warehouses, churches, schools, HOAs and multi-family properties. Each has different code requirements, different fixture loads, and different tolerance for downtime, and we plan around all three.",
      "Scheduling is part of the service. We perform jetting, repairs and installations before opening, after closing, and overnight so your customers never see a wet floor sign. For property managers, we provide documented service records, photographic reporting, and consistent invoicing across multiple sites.",
    ],
    benefits: [
      "Off-hours and overnight scheduling to protect your operations",
      "Restaurant grease line jetting and interceptor service",
      "Multi-family and HOA main line and riser expertise",
      "Commercial water heater and booster system service",
      "Backflow testing, repair and certification coordination",
      "Documented reporting and consistent multi-site invoicing",
    ],
    problems: [
      "Grease-blocked commercial kitchen drain lines",
      "Restroom fixture failures, flushometer issues and leaks",
      "Commercial water heater and recirculation system failures",
      "Multi-tenant main line backups affecting several units",
      "Backflow preventer failures and testing deadlines",
      "Tenant improvement rough-in on a compressed schedule",
    ],
    signs: [
      "Kitchen drains slow during peak service hours",
      "Recurring restroom odors or floor drain backups",
      "Inconsistent hot water across a building",
      "Water pressure complaints from upper floors",
      "Rising utility costs suggesting an unseen leak",
    ],
    detail: [
      {
        heading: "Restaurants And Food Service",
        body: [
          "Commercial kitchens generate grease volumes no residential line ever sees, and health inspectors have opinions about how you manage it. We service and pump grease interceptors, jet kitchen waste lines on a preventative schedule, and repair the floor sinks, floor drains and pre-rinse assemblies that take daily abuse.",
          "Our preventative jetting programs are built around your service calendar. Most kitchens are best served quarterly; high-volume fryer operations sometimes need attention every two months. The cost is trivial compared to closing a dining room on a Friday night.",
          "We also handle equipment connections — dishwashers, ice machines, steamers, combi ovens — with proper backflow protection and code-compliant indirect waste.",
        ],
      },
      {
        heading: "Multi-Family, Retail And Office",
        body: [
          "In multi-family buildings, the difficult work is isolation: shutting down one stack without taking the entire building offline. We map the system, coordinate notice to residents, and stage repairs so disruption is measured in hours rather than days.",
          "Retail and office properties depend on restrooms functioning invisibly. We service flushometers, sensor faucets, tankless and commercial storage water heaters, recirculation pumps, and the ADA fixture requirements that inspectors check.",
          "For tenant improvements we work directly with general contractors on rough-in, top-out and trim, hitting inspection dates so the tenant opens on schedule.",
        ],
      },
    ],
    steps: [
      { title: "Site Assessment", text: "We walk the property, map the system, and document existing conditions and risk points." },
      { title: "Scheduling Around Operations", text: "Work windows are set for before opening, after closing or overnight to eliminate customer impact." },
      { title: "Written Scope & Pricing", text: "Property managers receive detailed scope, pricing and timeline suitable for owner approval." },
      { title: "Execution With Minimal Isolation", text: "Shutdowns are scoped as narrowly as possible with advance notice to tenants." },
      { title: "Documentation", text: "Photographic before-and-after reporting and camera footage are provided for your records." },
      { title: "Preventative Program", text: "We propose a jetting and maintenance calendar to prevent the failure from recurring." },
    ],
    maintenance: [
      "Quarterly grease line jetting for food service operations",
      "Scheduled grease interceptor pumping and record keeping",
      "Annual backflow preventer testing and certification",
      "Semi-annual camera inspection of building main lines",
      "Commercial water heater flush and anode service annually",
    ],
    faqs: [
      { q: "Can you work outside our business hours?", a: "Yes. Most commercial work is scheduled before opening, after closing or overnight so your operation is never interrupted." },
      { q: "Do you service restaurants and grease interceptors?", a: "Yes — jetting, interceptor service, floor sink and drain repair, and preventative programs built around your service calendar." },
      { q: "Can you handle multiple properties under one account?", a: "Absolutely. We provide consistent reporting and consolidated invoicing for property managers and multi-site operators." },
      { q: "Do you perform backflow testing?", a: "Yes, including testing, repair and coordination of certification with the local water authority." },
      { q: "How fast is your commercial emergency response?", a: "Commercial emergencies are dispatched immediately, 24 hours a day. We know an hour of downtime costs more than the repair." },
    ],
    related: ["hydro-jetting", "sewer-line-repair", "emergency-plumber", "gas-line-installation"],
  },
];

import { extraServices } from "./services-extra";

export const services: Service[] = [...coreServices, ...extraServices];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
