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
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    tagline: "24/7 emergency plumbers across Mesa and the Phoenix metro",
    metaTitle: "24/7 Emergency Plumber Mesa AZ | Prestige Plumbing Company",
    metaDescription: "Emergency plumber in Mesa & Phoenix metro, available 24 hours. Burst pipes, sewage backups, water heater failures and gas leaks. Call (480) 215-0629 now.",
    image: "emergencyPlumbing",
    intro: [
      "A plumbing emergency does not schedule itself around business hours. Water travels fast, drywall absorbs it faster, and in Arizona's dry climate a hidden leak can quietly destroy framing and flooring long before you smell it. Prestige Plumbing Company has answered emergency calls across Mesa, Phoenix, Chandler, Gilbert, Tempe and Scottsdale, and we still answer the phone the same way we did on day one: with a licensed plumbing professional, not a call center.",
      "When you call our emergency line, the first thing we do is help you stop the damage. We walk you through locating your main shut-off valve, isolating an appliance supply line, or shutting the gas at the meter while a technician is already rolling toward your address. That first five minutes of guidance frequently saves thousands of dollars in restoration costs.",
      "Our emergency trucks are stocked as complete mobile workshops: replacement water heaters, PEX and copper repair stock, sewer cameras, drain machines, hydro jetting equipment, gas test gauges, and pumps. That inventory is the difference between a repair completed tonight and a tarp over your ceiling until a supply house opens on Monday.",
    ],
    benefits: [
      "24/7 immediate dispatch with no call centers",
      "Over-the-phone guidance to stop water damage while we are en route",
      "Fully stocked trucks capable of completing most repairs immediately",
      "Licensed, bonded and insured emergency technicians",
      "Flat-rate emergency pricing quoted before work begins",
      "Coordination with water mitigation and restoration teams if necessary",
    ],
    problems: [
      "Burst or ruptured interior supply lines",
      "Catastrophic water heater failure and flooding",
      "Sewer main backups into showers and ground-floor fixtures",
      "Gas leaks detected by smell or utility company tags",
      "Loss of all water pressure to the home",
      "Slab leaks surfacing rapidly through flooring",
    ],
    signs: [
      "Water pooling rapidly around appliances or under cabinets",
      "The smell of natural gas (rotten eggs) anywhere in the home",
      "Multiple drains backing up simultaneously",
      "Sewage emerging from a shower drain or cleanout",
      "The sound of running water inside walls when no fixtures are on",
      "A sudden, severe drop in water pressure",
    ],
    detail: [
      {
        heading: "Immediate Damage Control",
        body: [
          "The priority on an emergency call is stopping the progression of damage. We identify and isolate the source immediately, whether that means shutting down a localized zone or securing the main municipal supply to the property. Only once the property is safe from further damage do we pivot to diagnosis and repair.",
          "If the emergency involves extensive flooding, we will also advise on safe electrical practices and can coordinate directly with trusted local mitigation contractors to begin dry-out procedures while we complete the plumbing repair.",
        ],
      },
    ],
    steps: [
      { title: "Isolate", text: "We secure the water or gas supply to stop further damage immediately." },
      { title: "Diagnose", text: "We trace the failure to its source rather than just addressing the symptoms." },
      { title: "Quote", text: "You receive a firm, flat-rate price for the repair in writing before we begin." },
      { title: "Repair", text: "The repair is completed using professional-grade stock from our mobile inventory." },
    ],
    maintenance: [
      "Locate and test your whole-home shut-off valve annually",
      "Replace washing machine rubber hoses with steel braided lines",
      "Install a smart leak detector with an automatic shut-off valve",
      "Have your water heater inspected and flushed every year",
    ],
    faqs: [
      { q: "What should I do while waiting for the plumber?", a: "Shut off the water to the affected area or the whole house, turn off the breaker to any electrical appliances in standing water, and move valuables away from the leak path." },
      { q: "Do you charge extra for nights and weekends?", a: "We have specific emergency dispatch rates for after-hours calls, but the repair itself is still quoted flat-rate before we begin. We never charge by the hour." },
      { q: "Can you fix a burst pipe inside a wall tonight?", a: "Yes. Our trucks carry the necessary PEX, copper, and fittings to complete the vast majority of in-wall pipe repairs immediately." },
      { q: "Will you patch the drywall after the repair?", a: "We perform the necessary demolition to access the plumbing and make the repair. We do not patch drywall, but we can refer you to excellent local drywall contractors." },
    ],
    related: ["water-heaters", "drain-and-sewer", "leak-detection"],
  },
  {
    slug: "water-heaters",
    name: "Water Heater Services",
    tagline: "Expert repair, replacement and maintenance for traditional and tankless water heaters",
    metaTitle: "Water Heater Repair & Installation Mesa AZ | Prestige Plumbing",
    metaDescription: "Water heater repair, replacement and tankless installation in Mesa, AZ. We service all major brands. Flat-rate pricing. Call (480) 215-0629.",
    image: "waterHeaters",
    intro: [
      "Mesa's hard water is notoriously tough on water heaters. The high mineral content accelerates sediment buildup, degrading heating elements in electric models and insulating the burners in gas units. This environment turns a manufacturer's suggested twelve-year lifespan into an eight-year reality if the unit is not properly maintained.",
      "Prestige Plumbing Company provides comprehensive water heater services across the East Valley. We stock, repair and install traditional tank heaters, high-efficiency tankless systems, and heat pump water heaters. Whether you have a cold shower this morning or are proactively upgrading to continuous hot water, we have the expertise to execute the job correctly.",
      "We install both traditional tank heaters and high-efficiency tankless systems, and we are candid about which suits your home. Tankless delivers endless hot water and long service life, but only when gas supply, venting and water treatment are correct. If your home cannot support it without expensive infrastructure changes, we will say so.",
    ],
    benefits: [
      "Same-day replacement available for most standard tank sizes",
      "Expert diagnosis of ignition, heating element and thermostat failures",
      "Professional tankless water heater conversions and descaling",
      "Code-compliant installation including proper venting and expansion tanks",
      "Disposal and recycling of your old water heater included",
    ],
    problems: [
      "No hot water or hot water running out too quickly",
      "Leaking from the base of the tank or temperature pressure relief valve",
      "Popping or rumbling noises from inside the tank (sediment boiling)",
      "Rusty or discolored hot water",
      "Pilot light repeatedly going out on gas models",
    ],
    signs: [
      "Water pooling around the base of the heater",
      "A noticeable drop in hot water capacity during showers",
      "The heater is over ten years old in an Arizona home without a water softener",
      "Error codes flashing on newer gas or tankless models",
    ],
    detail: [
      {
        heading: "Repair vs. Replacement",
        body: [
          "Not every issue requires a new heater. We routinely replace faulty thermocouples, gas valves, and heating elements to restore function to units that still have years of structural integrity left. However, if the steel tank itself has fractured and is leaking, replacement is the only option.",
          "Where a unit is beyond economical repair, we present a replacement scope that corrects venting, gas sizing and isolation valves so the next unit reaches its full potential.",
        ],
      },
    ],
    steps: [
      { title: "Evaluate", text: "We test the electrical or gas components, check water pressure, and inspect the tank integrity." },
      { title: "Present Options", text: "We provide flat-rate pricing for repair, if viable, and options for replacement." },
      { title: "Execute", text: "Repairs are made with OEM-grade parts; replacements are installed to current plumbing code." },
      { title: "Commission", text: "We test the new system, verify proper drafting on gas units, and set the temperature safely." },
    ],
    maintenance: [
      "Flush the tank annually to remove hard water sediment",
      "Test the Temperature & Pressure (T&P) relief valve every year",
      "Inspect the anode rod every three years and replace if depleted",
      "Schedule professional descaling annually for tankless units",
    ],
    faqs: [
      { q: "Why is my water heater making a popping sound?", a: "That is the sound of water boiling under a thick layer of mineral sediment at the bottom of the tank. It means the unit urgently needs flushing, or the sediment has hardened and the heater's efficiency is permanently compromised." },
      { q: "How long should a water heater last in Arizona?", a: "With Mesa's hard water, a standard tank heater typically lasts 8 to 10 years without maintenance. With a water softener and annual flushing, 12 to 15 years is achievable." },
      { q: "Can you switch my house from a tank to a tankless heater?", a: "Usually, yes. It requires evaluating your current gas meter capacity, the gas line sizing to the heater location, and the venting pathway. We provide comprehensive quotes for the complete conversion." },
      { q: "Are tankless water heaters worth the cost?", a: "If you frequently run out of hot water, have a large family, or want to reclaim garage space, yes. However, they require annual descaling maintenance to maintain their warranty and efficiency." },
    ],
    related: ["emergency-plumbing", "residential-plumbing", "gas-line"],
  },
  {
    slug: "drain-and-sewer",
    name: "Drain & Sewer Services",
    tagline: "Professional drain cleaning, hydro jetting and sewer line repair",
    metaTitle: "Drain Cleaning & Sewer Repair Mesa AZ | Prestige Plumbing",
    metaDescription: "Drain cleaning, hydro jetting and sewer line repair in Mesa, AZ. Camera inspections and guaranteed clearing. Call (480) 215-0629.",
    image: "drainAndSewer",
    intro: [
      "A slow drain is an annoyance; a main sewer backup is a health hazard. The drainage system in your home relies entirely on gravity and proper slope. When roots intrude, grease accumulates, or soils shift beneath the house, that gravity flow stops, and wastewater reverses course into your lowest fixtures.",
      "Prestige Plumbing Company approaches drain clearing systematically. We don't just poke a hole in a blockage so it can fail again next month. We use commercial-grade cabling machines to cut through roots and scale, high-pressure hydro jetting trailers to scour pipes back to their original diameter, and high-resolution sewer cameras to visually verify the line is clear and structurally sound.",
      "Whether you have a single backed-up kitchen sink, a recurring main line issue requiring jetting, or a collapsed clay sewer line in an older neighborhood that needs full replacement, we provide the permanent solution.",
    ],
    benefits: [
      "Visual verification of blockages and clearing with fiber-optic cameras",
      "Hydro jetting capabilities for severe grease, scale, and root removal",
      "Precise location of buried lines to minimize yard disruption during repairs",
      "Trenchless and open-cut sewer line replacement options",
      "Preventative maintenance plans for high-use commercial kitchens",
    ],
    problems: [
      "Main sewer line backups affecting the entire house",
      "Tree roots breaking through older clay or cast-iron lines",
      "Heavy grease and soap scum buildup in kitchen and laundry branches",
      "Bellied or sagging pipes holding standing water and debris",
      "Collapsed lines requiring structural repair or replacement",
    ],
    signs: [
      "Gurgling sounds from the toilet when running the bathroom sink",
      "Water backing up into the shower when the washing machine drains",
      "Foul sewage odors persistent in the yard or lower bathrooms",
      "Multiple slow drains across different areas of the house",
    ],
    detail: [
      {
        heading: "Hydro Jetting vs. Cabling",
        body: [
          "Traditional cabling (snaking) is excellent for retrieving soft blockages and cutting through minor root intrusions. However, a cable only clears a path the width of its cutting head. For heavy grease, thick scale, or extensive root mats, hydro jetting is required.",
          "Hydro jetting uses highly pressurized water (up to 4000 PSI) directed through specialized nozzles to scour the entire interior circumference of the pipe. It doesn't just open the line; it cleans it, restoring the pipe to its original interior diameter and delaying the return of future blockages.",
        ],
      },
    ],
    steps: [
      { title: "Inspect", text: "We often begin with a camera inspection to identify the exact nature and location of the blockage." },
      { title: "Clear", text: "We select the appropriate tool — cable or jetter — to break through the obstruction." },
      { title: "Verify", text: "We camera the line again after clearing to ensure no secondary blockages remain." },
      { title: "Repair", text: "If the camera reveals structural damage, we provide a detailed quote for a permanent repair." },
    ],
    maintenance: [
      "Never pour cooking grease, fats or oils down the kitchen sink",
      "Use mesh strainers in shower drains to catch hair",
      "Have your main sewer line camera-inspected every five years",
      "Consider preventative jetting if you have older cast-iron plumbing",
    ],
    faqs: [
      { q: "Why does my toilet gurgle when the shower drains?", a: "Gurgling indicates a venting issue or a partial blockage downstream. As water struggles to pass the blockage, it pulls air through the easiest path — often the toilet trap." },
      { q: "Are chemical drain cleaners safe?", a: "No. Liquid drain cleaners rely on caustic chemical reactions that generate intense heat. They can deform PVC pipes, eat through older metal pipes, and they rarely clear a solid blockage completely." },
      { q: "Do you repair broken sewer lines under the yard?", a: "Yes. We locate the exact break point using a sonde transmitter, excavate locally, repair the damaged section to code, and restore the trench." },
      { q: "How much does a sewer camera inspection cost?", a: "We quote camera inspections flat-rate depending on the access point (cleanout vs. roof vent). If we find a repairable issue and you hire us for the repair, the inspection cost is often credited toward the work." },
    ],
    related: ["emergency-plumbing", "bathroom-plumbing", "kitchen-plumbing"],
  },
  {
    slug: "leak-detection",
    name: "Leak Detection & Slab Leaks",
    tagline: "Pinpointing hidden leaks behind walls and under concrete slabs",
    metaTitle: "Leak Detection & Slab Leak Repair Mesa AZ | Prestige Plumbing",
    metaDescription: "Professional leak detection and slab leak repair in Mesa and the East Valley. Acoustic equipment and thermal imaging to find hidden leaks. Call (480) 215-0629.",
    image: "leakDetection",
    intro: [
      "A hidden leak in a pressurized water line doesn't stop. It runs continuously, quietly destroying drywall, flooring, and cabinetry while your water meter spins. In the East Valley, where thousands of homes built between the 1970s and 2000s have copper supply lines routed directly through or beneath the concrete foundation, slab leaks are a common and destructive reality.",
      "Finding a leak under a concrete slab or inside a wall requires specialized technology, not guesswork. Prestige Plumbing Company uses sensitive acoustic listening devices, thermal imaging cameras, and precise line-tracing equipment to pinpoint the exact location of a pipe failure before a single hammer swings.",
      "Once located, we present you with the best repair options. We rarely advise breaking up large sections of your floor; instead, we specialize in rerouting the compromised line through the attic or walls using modern, durable PEX tubing, permanently bypassing the under-slab hazard.",
    ],
    benefits: [
      "Non-destructive leak locating protects your home from unnecessary damage",
      "Thermal and acoustic technology pinpoints leaks with inch-level accuracy",
      "Clear, upfront options for direct repair vs. overhead line rerouting",
      "Minimization of water damage and mold risk through rapid response",
      "Assistance with documentation for homeowner's insurance claims",
    ],
    problems: [
      "Pinhole leaks in under-slab copper piping (Slab Leaks)",
      "Slow leaks behind shower valves and in-wall manifolds",
      "Undetected irrigation or main water service line leaks in the yard",
      "Degraded polybutylene or older galvanized steel pipe failures",
    ],
    signs: [
      "An inexplicably high monthly water bill",
      "Warm or hot spots on hard surface flooring (tile or laminate)",
      "The sound of water running when all fixtures are turned off",
      "Baseboards swelling or pulling away from the wall",
      "A damp, musty odor or unexplained mold growth",
    ],
    detail: [
      {
        heading: "The Slab Leak Reroute",
        body: [
          "When a copper line fails beneath your foundation, repairing that specific spot (a 'spot repair') requires jackhammering the floor. While sometimes necessary, it is often a temporary fix, as the rest of the copper line remains buried and vulnerable to the same soil and water chemistry that caused the first leak.",
          "Our preferred and recommended solution is a reroute. We cap the failing line at both ends under the slab, abandoning it completely. We then run a new, flexible PEX line through the attic and drop it down the walls to feed the affected fixtures. This permanently removes the plumbing from the hostile under-slab environment.",
        ],
      },
    ],
    steps: [
      { title: "Test", text: "We pressure test the hot and cold systems to determine which side is losing pressure." },
      { title: "Locate", text: "Using acoustic and thermal gear, we trace the lines and pinpoint the exact source of the leak." },
      { title: "Plan", text: "We draft a repair plan — either a direct spot repair or an overhead line reroute." },
      { title: "Execute", text: "We complete the repair, restore water service, and verify the system holds pressure." },
    ],
    maintenance: [
      "Monitor your water bill monthly for unexplained spikes",
      "Check your water meter overnight to see if the dial moves when water is off",
      "Install a smart leak detection system that monitors flow anomalies",
      "Address abnormally high municipal water pressure with a PRV",
    ],
    faqs: [
      { q: "Does homeowner's insurance cover slab leaks?", a: "Insurance typically covers the damage caused by the water (drywall, flooring, cabinets) and the cost to access the pipe, but rarely the cost of the plumbing repair itself. We can provide the detailed documentation your adjuster needs." },
      { q: "Why do copper pipes leak under the slab?", a: "A combination of factors: aggressive mineral chemistry in Arizona water pitting the pipe from the inside, shifting soils rubbing the pipe against rocks or concrete, and poor initial installation practices." },
      { q: "How long does a slab leak reroute take?", a: "Most single-line reroutes are completed in one to two days. Your water is usually only turned off for a few hours during the actual tie-in phase." },
      { q: "Is PEX safe to use for a reroute?", a: "Yes. Cross-linked polyethylene (PEX) is the industry standard for repiping and reroutes. It is highly durable, expands instead of bursting if frozen, and is immune to the mineral scaling that destroys copper." },
    ],
    related: ["emergency-plumbing", "repiping", "residential-plumbing"],
  },
  {
    slug: "repiping",
    name: "Repiping & Pipe Repair",
    tagline: "Whole-home repiping and targeted pipe replacements for lasting reliability",
    metaTitle: "Whole Home Repiping & Pipe Repair Mesa AZ | Prestige Plumbing",
    metaDescription: "Expert whole-home repiping and pipe repair in Mesa. We replace failing polybutylene, galvanized, and copper pipes with durable PEX. Call (480) 215-0629.",
    image: "repiping",
    intro: [
      "The plumbing infrastructure inside your walls has a lifespan. Galvanized steel pipes rust from the inside out, choking water pressure and turning water brown. Early-generation copper suffers from pinhole pitting due to Arizona's hard water. Polybutylene piping (common in the 1980s and 90s) is famously prone to sudden, catastrophic failure at the fittings.",
      "When spot repairs become a monthly occurrence, or when you are remodeling a home with outdated plumbing, a whole-home repipe is the only financially sound decision. Prestige Plumbing Company specializes in full-scale repiping projects across the East Valley.",
      "We replace aging, compromised systems with modern, highly durable PEX (cross-linked polyethylene) tubing. PEX is immune to the internal corrosion that destroys metal pipes, flexes to accommodate water hammer, and installs with far fewer fittings, drastically reducing potential leak points.",
    ],
    benefits: [
      "Restoration of strong, consistent water pressure throughout the home",
      "Elimination of rusty, discolored, or bad-tasting water",
      "Peace of mind against sudden, catastrophic pipe bursts",
      "Increased home value and easier passage of buyer inspections",
      "Modern PEX systems that resist scale buildup and corrosion",
    ],
    problems: [
      "Frequent, recurring pinhole leaks in older copper systems",
      "Severely restricted water flow due to galvanized pipe corrosion",
      "The presence of high-risk polybutylene piping in the home",
      "Water that runs brown or yellow when a faucet is first turned on",
    ],
    signs: [
      "You cannot run the shower and the washing machine at the same time",
      "Your home was built before 1995 and still has its original plumbing",
      "You have repaired more than two separate leaks in the past year",
      "You notice a drop in pressure when flushing a toilet",
    ],
    detail: [
      {
        heading: "The Repiping Process",
        body: [
          "A whole-home repipe sounds intimidating, but our process is highly structured to minimize disruption. We do not tear down entire walls. We make strategic, minimal surgical cuts in the drywall to route the new PEX lines securely.",
          "During a typical repipe, your water is only shut off during the day while we are actively working. We restore your water service every evening so you can remain in your home comfortably throughout the project.",
        ],
      },
    ],
    steps: [
      { title: "Assess", text: "We map the existing plumbing layout and determine the most efficient routes for the new system." },
      { title: "Prep", text: "We lay down floor protection, seal off workspaces with plastic, and make precise drywall cuts." },
      { title: "Install", text: "New PEX lines are routed, secured, and connected to all fixtures using high-quality fittings." },
      { title: "Test", text: "The new system is pressure tested well above municipal supply levels to guarantee integrity." },
    ],
    maintenance: [
      "Ensure your home's water pressure regulator is functioning correctly",
      "Consider a whole-home water softener to protect new fixtures",
      "Familiarize yourself with the new main shut-off valve location",
    ],
    faqs: [
      { q: "How long does a whole-home repipe take?", a: "Most residential repipes take between 2 to 4 days, depending on the size of the home, the number of bathrooms, and the complexity of the routing." },
      { q: "Do you fix the holes in the drywall afterward?", a: "We make clean, square cuts to make patching as easy as possible, but we are plumbers, not drywall finishers. We leave the patching to specialized drywall contractors to ensure a seamless finish, and we are happy to provide referrals." },
      { q: "Why use PEX instead of copper?", a: "PEX is the superior choice for Arizona. It is highly resistant to the scale buildup and pitting that destroys copper here, it is more flexible (reducing water hammer noise), and it requires fewer fittings." },
      { q: "Is polybutylene pipe really that bad?", a: "Yes. Polybutylene reacts with the chlorine in municipal water, causing the pipe to become brittle and flake from the inside out. Failure is not a matter of if, but when, and it is usually sudden and severe." },
    ],
    related: ["leak-detection", "bathroom-plumbing", "kitchen-plumbing"],
  },
  {
    slug: "gas-line",
    name: "Gas Line Services",
    tagline: "Safe, code-compliant gas line installation, repair, and leak detection",
    metaTitle: "Gas Line Repair & Installation Mesa AZ | Prestige Plumbing",
    metaDescription: "Licensed gas line repair, leak detection, and new installation in Mesa, AZ. We run gas for stoves, fire pits, and pool heaters. Call (480) 215-0629.",
    image: "gasLine",
    intro: [
      "Natural gas is highly efficient and economical, but working with it requires absolute precision and strict adherence to safety codes. A poorly fitted water pipe causes property damage; a poorly fitted gas line threatens lives.",
      "Prestige Plumbing Company is fully licensed and qualified for all residential and commercial gas line work. Whether you are upgrading your kitchen to a gas range, running a new line to a backyard fire pit or barbecue, or need emergency repair for a red-tagged leak, we have the specialized equipment and training required.",
      "We handle everything from initial sizing calculations to ensure your appliances receive adequate BTU supply, to the final pressure testing and coordination with Southwest Gas for meter unlocks.",
    ],
    benefits: [
      "Rigorous pressure testing exceeding municipal code requirements",
      "Proper BTU load calculations to ensure all appliances function correctly",
      "Expertise in black iron, corrugated stainless steel tubing (CSST), and underground poly",
      "Rapid response and repair for utility-mandated shutoffs (red tags)",
      "Seamless coordination with city inspectors and utility providers",
    ],
    problems: [
      "Active natural gas leaks at appliance connections or in walls",
      "Undersized gas lines starving appliances (like tankless heaters) of fuel",
      "Corroded or damaged exterior gas lines exposed to the elements",
      "Appliances \"red-tagged\" and shut down by the utility company for safety",
    ],
    signs: [
      "The distinct odor of sulfur or rotten eggs anywhere on the property",
      "Hissing sounds near the gas meter or appliance connections",
      "Dead or dying vegetation over an underground gas line route",
      "Yellow or orange flames on a gas stove (should be crisp blue)",
    ],
    detail: [
      {
        heading: "Emergency Gas Leaks",
        body: [
          "If you smell gas, your first call should be to the utility provider (Southwest Gas) or 911 to have the supply secured. Once the property is safe and the utility has turned off the meter, your second call is to us.",
          "We use highly sensitive combustible gas detectors to pinpoint the leak, perform the necessary repairs to code, and pull the required permits. We then conduct a verified pressure test for the city inspector so the utility company will restore your service.",
        ],
      },
    ],
    steps: [
      { title: "Calculate", text: "For new installs, we calculate the total BTU demand to size the piping correctly." },
      { title: "Route", text: "We install the piping using approved materials (black iron, CSST, or poly) based on location." },
      { title: "Test", text: "The entire system is capped and pressurized with air to verify it holds pressure without dropping." },
      { title: "Inspect", text: "We coordinate with municipal inspectors to verify code compliance before the gas is turned on." },
    ],
    maintenance: [
      "Keep the area around your gas meter clear of debris and vegetation",
      "Have gas appliances serviced annually to ensure clean combustion",
      "Install carbon monoxide detectors near all sleeping areas",
      "Check flexible appliance connectors for kinks or wear periodically",
    ],
    faqs: [
      { q: "Can you run a gas line for my new outdoor kitchen?", a: "Yes. We regularly install underground PE (polyethylene) gas lines for outdoor kitchens, fire pits, and pool heaters, completely trenched and sized for the specific BTU load." },
      { q: "What is a 'red tag'?", a: "A red tag is a notice left by the utility company indicating they found a safety hazard (like a leak or improper venting) and have shut off the gas. You must hire a licensed plumber to fix the issue and pass an inspection to get service restored." },
      { q: "Why do you use air to test gas lines?", a: "Testing with compressed air is safer and more accurate. We pump the system to a specific pressure (usually much higher than standard gas pressure) and monitor a gauge. If the needle drops, there is a leak." },
      { q: "Can I switch my electric stove to a gas stove?", a: "Yes, if gas is available at your property. We can route a new line from your meter or attic manifold down into the kitchen wall to serve a new gas range." },
    ],
    related: ["emergency-plumbing", "water-heaters", "residential-plumbing"],
  },
  {
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing",
    tagline: "Toilet, shower, and sink repair and installation",
    metaTitle: "Bathroom Plumbing Repair & Install Mesa AZ | Prestige Plumbing",
    metaDescription: "Expert bathroom plumbing in Mesa, AZ. Toilet repair, shower valve replacement, sink installation, and remodel rough-ins. Call (480) 215-0629.",
    image: "bathroomPlumbing",
    intro: [
      "The bathroom sees the highest volume of water usage in your home, making it the most frequent site of plumbing failures. A constantly running toilet wastes thousands of gallons a month, a dripping shower valve accelerates hard water staining, and a poorly sealed tub drain can quietly destroy the subfloor.",
      "Prestige Plumbing Company handles all aspects of bathroom plumbing, from fast, reliable repairs of existing fixtures to complete rough-in plumbing for major renovations. We repair and replace toilets, install high-end shower valves and multi-head systems, and ensure vanity sinks drain perfectly.",
      "We understand that bathroom downtime is highly disruptive, so our trucks are stocked with universal rebuild kits for common valves (Moen, Delta, Kohler) and high-quality replacement fixtures to complete most repairs in a single visit.",
    ],
    benefits: [
      "Fast repair of running, leaking, or weakly flushing toilets",
      "Expert rebuilding or replacement of failing shower valves",
      "Precision installation of new vanity sinks and faucets",
      "Code-compliant drain and vent rough-ins for bathroom remodels",
      "Identification and repair of hidden leaks behind tile walls",
    ],
    problems: [
      "Toilets that run constantly, leak at the base, or fail to flush properly",
      "Shower valves that drip, lack hot water, or are incredibly stiff to turn",
      "Slow draining bathroom sinks clogged with hair and soap scum",
      "Water stains appearing on the ceiling below a second-story bathroom",
    ],
    signs: [
      "The sound of water trickling in the toilet tank long after a flush",
      "A spongy or soft feeling in the floor around the toilet or tub",
      "Low water pressure specifically isolated to the showerhead",
      "Sewer odors emanating from the sink or tub drain",
    ],
    detail: [
      {
        heading: "Shower Valve Replacement",
        body: [
          "When a shower valve fails and cannot be rebuilt with a new cartridge, replacing the entire brass body inside the wall is required. This used to mean destroying the custom tile work.",
          "Whenever possible, we perform valve replacements by accessing the plumbing from the drywall on the opposite side of the wet wall (e.g., from a hallway or closet). This preserves your expensive shower enclosure and leaves only a simple drywall patch.",
        ],
      },
    ],
    steps: [
      { title: "Diagnose", text: "We identify the root cause—whether a worn flapper, a calcified cartridge, or a venting issue." },
      { title: "Protect", text: "We lay down protective mats to keep your bathroom floors and vanities clean during work." },
      { title: "Repair", text: "We rebuild the fixture using OEM parts or install a high-quality replacement." },
      { title: "Test", text: "We test for proper flow, drainage, and absolute water-tightness before cleaning up." },
    ],
    maintenance: [
      "Replace toilet flappers every 3-5 years to prevent silent leaks",
      "Clean aerators on sink faucets quarterly to maintain pressure",
      "Never flush flushable wipes; they do not break down in the sewer",
      "Check the caulking around tubs and showers annually",
    ],
    faqs: [
      { q: "Why does my toilet keep running?", a: "The most common culprit is a deteriorated rubber flapper in the tank that fails to seal, or a fill valve that doesn't shut off when the water reaches the correct level." },
      { q: "Can you fix a dripping shower head?", a: "Yes. The issue is rarely the shower head itself; it is the cartridge inside the control valve behind the handle failing to shut the water off completely. We can usually rebuild the valve with a new cartridge." },
      { q: "My bathroom sink drains very slowly. Should I use Drano?", a: "No. Chemical cleaners damage pipes and rarely remove the entire blockage (usually a mat of hair and soap). We manually clear the p-trap and cable the branch line for a permanent fix." },
      { q: "Do you install customer-supplied fixtures?", a: "Yes. If you have purchased a faucet or toilet, we are happy to install it for you. We just ask that you ensure all parts are in the box." },
    ],
    related: ["drain-and-sewer", "residential-plumbing", "repiping"],
  },
  {
    slug: "kitchen-plumbing",
    name: "Kitchen Plumbing",
    tagline: "Garbage disposals, faucets, sinks, and dishwasher hookups",
    metaTitle: "Kitchen Plumbing & Disposal Repair Mesa AZ | Prestige Plumbing",
    metaDescription: "Kitchen plumbing services in Mesa. Garbage disposal repair, faucet replacement, sink installation and leak repair. Call (480) 215-0629.",
    image: "kitchenPlumbing",
    intro: [
      "The kitchen is the operational center of your home, and a plumbing failure here disrupts daily life immediately. A jammed garbage disposal, a leaking sink drain, or a failing refrigerator water line requires prompt, professional attention before it damages expensive cabinetry and flooring.",
      "Prestige Plumbing Company provides comprehensive kitchen plumbing services. We clear stubborn grease clogs, replace failing faucets with modern pull-down fixtures, install high-horsepower garbage disposals, and route new water lines for ice makers and dishwashers.",
      "We understand that modern kitchens feature complex, high-end fixtures. We take meticulous care working around granite countertops and custom cabinetry, ensuring every installation is perfectly aligned, sealed, and leak-free.",
    ],
    benefits: [
      "Upgrades to powerful, quiet continuous-feed garbage disposals",
      "Professional installation of touch-activated and commercial-style faucets",
      "Correction of improper under-sink drain geometry (illegal s-traps)",
      "Installation of dedicated shut-off valves for dishwashers and fridges",
      "Clearing of heavy grease and food blockages in kitchen branch lines",
    ],
    problems: [
      "Garbage disposals that hum but will not spin, or leak from the bottom",
      "Kitchen faucets that drip from the spout or leak around the base",
      "Slow-draining kitchen sinks caused by grease accumulation",
      "Water pooling inside the cabinet under the sink",
    ],
    signs: [
      "A foul, rotting odor coming from the garbage disposal",
      "Water backing up into the opposite sink basin when the disposal runs",
      "Low water pressure at the kitchen faucet but normal pressure elsewhere",
      "Mineral crust buildup around the base of the faucet",
    ],
    detail: [
      {
        heading: "Proper Disposal Usage",
        body: [
          "Most garbage disposal jams and kitchen sink backups are entirely preventable. Disposals are designed for residual food scraps, not large volumes of waste. Fibrous foods (celery, onion skins), expandable foods (pasta, rice), and coffee grounds should always go in the trash.",
          "When using the disposal, always run cold water before, during, and for several seconds after the grinding stops. Cold water keeps fats solid so they can be chopped up and flushed away, rather than melting and coating the inside of your pipes.",
        ],
      },
    ],
    steps: [
      { title: "Inspect", text: "We check the disposal, faucet, and all under-sink connections for leaks or wear." },
      { title: "Clear/Repair", text: "We unjam the disposal, replace the faucet cartridge, or clear the drain line." },
      { title: "Upgrade", text: "If replacing a fixture, we ensure proper mounting and secure, code-compliant connections." },
      { title: "Verify", text: "We run the disposal and faucet at full volume to check for drainage speed and leaks." },
    ],
    maintenance: [
      "Grind ice cubes and citrus peels monthly to clean disposal blades",
      "Periodically check the cabinet floor under the sink for dampness",
      "Never pour grease or cooking oil down the drain",
      "Soak faucet aerators in vinegar to remove mineral buildup",
    ],
    faqs: [
      { q: "Why is my garbage disposal humming but not working?", a: "The motor is receiving power, but the grinding plate is jammed by a hard object (like a bone or piece of glass). Turn it off immediately to prevent burning out the motor. We can usually extract the object and unjam the unit." },
      { q: "My dishwasher is not draining. Is that a plumbing issue?", a: "Often, yes. Dishwashers drain through the garbage disposal or sink tailpiece. If that connection is clogged with food debris, the dishwasher cannot empty. We clear these connection points regularly." },
      { q: "Can you install a new sink if I buy it?", a: "We install sinks in existing cutouts, but we do not cut granite or quartz countertops. If your new sink fits the existing hole, we can handle the mounting and all the plumbing connections." },
      { q: "Why does my kitchen faucet have low pressure?", a: "The aerator at the tip of the spout is likely clogged with calcium scale or debris from the water lines. Removing and cleaning or replacing the aerator usually restores full pressure." },
    ],
    related: ["drain-and-sewer", "residential-plumbing", "leak-detection"],
  },
  {
    slug: "residential-plumbing",
    name: "Residential Plumbing & Maintenance",
    tagline: "Whole-home plumbing care, inspections, and water quality solutions",
    metaTitle: "Residential Plumber Mesa AZ | Whole Home | Prestige Plumbing",
    metaDescription: "Comprehensive residential plumbing services in the East Valley. Whole-home inspections, maintenance, and water softeners. Call (480) 215-0629.",
    image: "residentialPlumbing",
    intro: [
      "Your home's plumbing is a complex, interconnected system. While we excel at fixing acute emergencies, our primary goal is helping homeowners prevent them. Proactive residential plumbing maintenance extends the life of your appliances, prevents catastrophic water damage, and lowers utility bills.",
      "Prestige Plumbing Company provides comprehensive whole-home plumbing services. Beyond basic repairs, we conduct thorough preventative inspections, evaluate water pressure issues, and install water quality systems (softeners and RO units) designed specifically to combat Arizona's notoriously hard water.",
      "Whether you are moving into a new home and want a baseline inspection, or you are ready to protect your investment with a whole-house filtration system, we provide the expertise to keep your residential plumbing operating flawlessly.",
    ],
    benefits: [
      "Comprehensive whole-home plumbing and safety inspections",
      "Installation and maintenance of water softeners and filtration systems",
      "Pressure reducing valve (PRV) testing and replacement",
      "Hose bibb (outdoor spigot) repair and replacement",
      "Preventative maintenance plans for peace of mind",
    ],
    problems: [
      "Excessively high water pressure damaging fixtures and pipes",
      "Severe hard water scaling on shower doors, dishes, and skin",
      "Leaking or frozen outdoor hose bibbs",
      "General aging of the plumbing system requiring a professional assessment",
    ],
    signs: [
      "Water hammering (loud banging noises in the pipes when valves close)",
      "White, chalky scale buildup forming rapidly on all faucets",
      "A drop in water pressure when multiple fixtures are used simultaneously",
      "You are purchasing a home older than 15 years",
    ],
    detail: [
      {
        heading: "The Importance of Water Pressure",
        body: [
          "Municipal water pressure often fluctuates, sometimes spiking well over 100 PSI (pounds per square inch). Residential plumbing fixtures, supply lines, and appliances are designed to operate safely between 50 and 75 PSI.",
          "When pressure is too high, it puts immense stress on the entire system, leading to blown washing machine hoses, ruptured water heaters, and constantly running toilets. We routinely test home pressure and install or replace Pressure Reducing Valves (PRVs) to protect the home from these invisible surges.",
        ],
      },
    ],
    steps: [
      { title: "Evaluate", text: "We assess the overall health of the system, including pressure, water quality, and age." },
      { title: "Report", text: "We provide a clear summary of our findings, highlighting urgent safety issues vs. long-term maintenance." },
      { title: "Recommend", text: "We suggest solutions like water softeners or PRVs only if the home genuinely requires them." },
      { title: "Service", text: "We perform the requested upgrades or maintenance with minimal disruption to your household." },
    ],
    maintenance: [
      "Have a professional plumbing inspection performed every two years",
      "Check and adjust your home's water pressure annually",
      "Keep salt tanks full if you have a water softening system",
      "Disconnect garden hoses from outdoor spigots during freezing weather",
    ],
    faqs: [
      { q: "What does a whole-home plumbing inspection cover?", a: "We test water pressure, check the water heater for signs of failure, inspect all visible supply and drain lines under sinks, test toilet mechanisms, check washing machine hoses, and evaluate the main shut-off valve." },
      { q: "Do I really need a water softener in Mesa?", a: "While not strictly required, it is highly recommended. Mesa water is very hard. A softener prevents scale buildup, which extends the life of your water heater, dishwasher, and faucets by years, while making cleaning easier." },
      { q: "Why do my pipes bang when the washing machine stops?", a: "That is called 'water hammer.' It happens when fast-closing valves suddenly stop the flow of water, sending a shockwave through the pipes. It is often a sign of high water pressure or failed water hammer arrestors." },
      { q: "Can you fix a leaking spigot in the backyard?", a: "Yes. We replace worn-out hose bibbs with modern, quarter-turn ball valve spigots that are much easier to operate and less prone to leaking." },
    ],
    related: ["water-heaters", "repiping", "leak-detection"],
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    tagline: "Reliable plumbing solutions for businesses, restaurants, and property managers",
    metaTitle: "Commercial Plumber Mesa AZ | Prestige Plumbing Company",
    metaDescription: "Commercial plumbing services in Mesa and Phoenix. Flushometer repair, commercial water heaters, grease traps, and preventative maintenance. Call (480) 215-0629.",
    image: "commercialPlumbing",
    intro: [
      "Commercial plumbing operates on a different scale than residential. A plumbing failure in a restaurant, retail space, or office building doesn't just cause water damage—it forces you to close your doors, costing you revenue and reputation by the minute.",
      "Prestige Plumbing Company understands the urgency of commercial service. We partner with property managers, restaurant owners, and facility directors across the Phoenix metro to provide rapid emergency response and structured preventative maintenance programs.",
      "Our technicians are equipped to handle high-capacity commercial water heaters, flushometer toilets and urinals, grease interceptor issues, and heavy-duty drain jetting, ensuring your facility remains compliant, operational, and open for business.",
    ],
    benefits: [
      "Priority dispatch for commercial emergencies to minimize downtime",
      "After-hours scheduling available to avoid disrupting your customers",
      "Expertise in commercial fixtures (Sloan valves, mop sinks, floor drains)",
      "High-pressure hydro jetting for commercial grease and sludge",
      "Consistent communication and invoicing for property managers",
    ],
    problems: [
      "Grease blockages shutting down restaurant kitchens",
      "Public restrooms with overflowing or continuously running flushometers",
      "Loss of hot water in high-demand commercial applications",
      "Foul odors emanating from floor sinks or dried-out p-traps",
    ],
    signs: [
      "Water backing up from floor drains in a commercial kitchen",
      "Urinals or commercial toilets that fail to trigger or won't stop flushing",
      "A drop in water pressure affecting multiple tenants in a building",
      "Noticeable sewage odors in public areas or retail floors",
    ],
    detail: [
      {
        heading: "Preventative Jetting Programs",
        body: [
          "In the restaurant and hospitality industry, waiting for a drain to clog is a failing strategy. Sinks, dishwashers, and floor drains constantly receive fats, oils, and grease (FOG), which coat the inside of the pipes and inevitably cause backups.",
          "We establish recurring preventative hydro jetting schedules for commercial kitchens—quarterly, semi-annually, or annually—scouring the lines entirely clean before a blockage can form and cause a health department violation or service interruption.",
        ],
      },
    ],
    steps: [
      { title: "Assess", text: "We quickly evaluate the emergency impact on your operations and isolate the issue." },
      { title: "Quote", text: "We provide clear, upfront pricing to the facility manager or owner for approval." },
      { title: "Resolve", text: "We execute the repair swiftly using commercial-grade parts and equipment." },
      { title: "Maintain", text: "We propose a maintenance plan to prevent the issue from recurring in the future." },
    ],
    maintenance: [
      "Establish a quarterly jetting schedule for commercial kitchen drains",
      "Ensure grease interceptors are pumped regularly by a certified service",
      "Check automatic flushometer sensors and batteries periodically",
      "Commercial water heater flush and anode service annually",
    ],
    faqs: [
      { q: "Can you work outside our business hours?", a: "Yes. Most commercial work is scheduled before opening, after closing or overnight so your operation is never interrupted." },
      { q: "Do you service restaurants and grease interceptors?", a: "Yes — jetting, floor sink and drain repair, and preventative programs built around your service calendar. (Note: we do not pump grease traps, but we service the lines leading to them)." },
      { q: "Can you handle multiple properties under one account?", a: "Absolutely. We provide consistent reporting and consolidated invoicing for property managers and multi-site operators." },
      { q: "How fast is your commercial emergency response?", a: "Commercial emergencies are dispatched immediately, 24 hours a day. We know an hour of downtime costs more than the repair." },
    ],
    related: ["drain-and-sewer", "emergency-plumbing", "gas-line"],
  },
];

export const services: Service[] = coreServices;

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
