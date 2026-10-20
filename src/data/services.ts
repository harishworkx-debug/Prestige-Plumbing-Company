import type { ImageKey } from "./images";
import { extraServices } from "./services-extra";

export interface ServiceDiagnosticOption {
  title: string;
  description: string;
  recommendation: string;
}

export interface ServicePricingPolicy {
  estimateType: string;
  pricingModel: string;
  warranty: string;
  details: string;
}

export interface ServiceCaseStudy {
  title: string;
  location: string;
  technician: string;
  challenge: string;
  solution: string;
  outcome: string;
  testimonialSnippet: string;
  customerName: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceInternalLink {
  slug: string;
  anchor: string;
  description?: string;
}

export interface Service {
  slug: string;
  name: string;
  h1: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  image: ImageKey;
  intro: string[];
  benefits: string[];
  problems: string[];
  signs: string[];
  detail: { heading: string; body: string[] }[];
  diagnosticHeading?: string;
  diagnosticOptions: ServiceDiagnosticOption[];
  pricingPolicy: ServicePricingPolicy;
  caseStudy: ServiceCaseStudy;
  stepsHeading?: string;
  steps: { title: string; text: string }[];
  maintenanceHeading?: string;
  maintenance: string[];
  faqs: ServiceFaq[];
  related: string[];
  relatedLinks?: ServiceInternalLink[];
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonLabel?: string;
}

const coreServices: Service[] = [
  {
    slug: "emergency-plumbing-mesa-az",
    name: "Emergency Plumbing",
    h1: "Emergency Plumbing in Mesa, AZ",
    tagline: "Rapid 24/7 emergency dispatch across Mesa and the East Valley by licensed master plumbers (AZ ROC #347689)",
    metaTitle: "Emergency Plumber in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Need emergency plumbing help in Mesa, AZ? Learn what to do about burst pipes, active leaks, overflowing toilets and sewer backups, and request service.",
    image: "emergencyPlumbing",
    intro: [
      "Unexpected plumbing problems can interrupt your day and put your Mesa home at risk of water damage. A burst pipe, overflowing toilet, leaking water heater or backed-up sewer drain may need prompt attention to prevent the problem from getting worse.",
      "Prestige Plumbing Company helps Mesa homeowners explore plumbing assistance for urgent leaks, drainage problems and other plumbing failures. The right response depends on where the problem starts, how severe it is and whether water or wastewater is actively affecting your home.",
      "Whether you have discovered water under a sink or several drains have stopped working, identifying the source of the problem is the first step toward choosing an appropriate repair.",
    ],
    benefits: [
      "24/7 on-call emergency dispatch across Mesa and the East Valley",
      "Over-the-phone shut-off guidance to mitigate water damage immediately",
      "Fully stocked mobile workshops carrying brass fittings, PEX, and pumps",
      "AZ ROC #347689 licensed, bonded, and insured plumbing contractors",
      "Upfront flat-rate emergency pricing quoted in writing before work begins",
      "Direct coordination with certified water damage mitigation teams",
    ],
    problems: [
      "A burst or visibly leaking water supply pipe",
      "Water spreading across floors, walls or ceilings",
      "An overflowing toilet that will not stop",
      "Multiple drains backing up at the same time",
      "A water heater leaking from its tank or connections",
      "A sudden loss of water that may be linked to a plumbing failure",
    ],
    signs: [
      "Water pooling rapidly around appliances, water heaters, or baseboards",
      "Multiple fixtures gurgling or backing up sewage simultaneously",
      "The sound of running water behind walls when all faucets are shut off",
      "Sudden hot spots on tile, laminate, or carpet flooring (slab leak)",
      "Unexplained dramatic spikes in your municipal water consumption bill",
      "The distinct odor of rotten eggs indicating a suspected gas leak",
    ],
    detail: [
      {
        heading: "When Should You Request Emergency Plumbing Help?",
        body: [
          "Some plumbing problems can wait for a scheduled appointment. Others need immediate attention, especially when water is actively escaping, wastewater is entering the home or a plumbing failure is affecting essential fixtures.",
          "Our licensed plumbers arrive prepared to locate the source of active flooding, isolate the damaged pipe branch or fixture, and perform code-compliant repairs that protect your home from long-term structural moisture damage.",
        ],
      },
      {
        heading: "Important Safety Warning: Suspected Gas Leaks",
        body: [
          "If the issue involves a suspected natural gas leak, leave the area immediately and call 911 and your gas utility (Southwest Gas) from a safe location. Do not operate electrical switches or use a phone near the suspected leak.",
          "Once the utility or fire department has secured the perimeter, Prestige Plumbing Company (AZ ROC #347689) provides certified gas pipe leak location, mechanical pressure testing, and permanent code-compliant gas line repairs.",
        ],
      },
      {
        heading: "Immediate Damage Containment & Code-Compliant Repairs",
        body: [
          "Our first objective upon arrival is stopping active water ingress and ensuring electrical circuits are safe from standing water. We isolate the damaged zone at the manifold or curb stop, verify static pressure, and assess structural integrity.",
          "All emergency work is backed by our comprehensive 1-year workmanship warranty and supported by verified documentation for your homeowner's insurance claims.",
        ],
      },
    ],
    diagnosticHeading: "Emergency Plumbing Problems We Can Help Assess",
    diagnosticOptions: [
      {
        title: "Burst Pipes and Active Water Leaks",
        description: "A damaged pipe or failed connection can release water into cabinets, walls, ceilings and flooring. If it is safe to do so, shut off the nearest water valve or the home's main water supply. Keep away from electrical equipment or outlets affected by water.",
        recommendation: "A professional assessment can help determine whether the damage involves a fitting, supply line, fixture connection or a larger section of pipe.",
      },
      {
        title: "Overflowing Toilets and Sewer Backups",
        description: "A toilet that continues to overflow or wastewater backing up into a shower or floor drain may indicate a blockage or drainage-system problem. Stop using affected fixtures until the cause is understood.",
        recommendation: "When multiple fixtures back up together, the problem may be farther downstream than an individual sink or toilet.",
      },
      {
        title: "Water Heater Leaks",
        description: "Water collecting around a water heater can come from a supply connection, drain valve, temperature-and-pressure relief system or the tank itself.",
        recommendation: "The source must be identified before deciding whether a repair or replacement is appropriate.",
      },
      {
        title: "Loss of Water Pressure",
        description: "A sudden drop in pressure may have several causes, including a fixture problem, a pipe leak or an issue with the property's water supply.",
        recommendation: "The location and timing of the pressure change can help narrow down the possible causes.",
      },
    ],
    pricingPolicy: {
      estimateType: "Upfront Written Emergency Quote",
      pricingModel: "Firm Flat-Rate Pricing — No unexpected billing surprises",
      warranty: "1-Year Written Workmanship Guarantee",
      details: "Our technician diagnoses the emergency, clearly explains the required scope of repair, and provides a firm flat-rate quote in writing before any tool touches your plumbing. What we quote is what you pay.",
    },
    caseStudy: {
      title: "Midnight Burst Main Water Supply Line Recovery",
      location: "East Mesa, AZ (Near Superstition Springs)",
      technician: "Jesse Leyva (Master Plumber, AZ ROC #347689)",
      challenge: "A pressurized 1-inch copper main supply line ruptured under 90 PSI municipal pressure at 11:30 PM, flooding the front garage and threatening interior drywall.",
      solution: "Jesse arrived in 32 minutes, guided the homeowner through isolation, excavated the ruptured copper fitting, and installed a heavy-duty brass coupling and expansion loop.",
      outcome: "Water service was safely restored by 1:15 AM with full static pressure test passing at 68 PSI. Zero interior drywall damage occurred.",
      testimonialSnippet: "Prestige responded when other companies went to voicemail. Jesse was calm, skilled, and charged exactly what was quoted over the phone.",
      customerName: "Marcus D.",
    },
    stepsHeading: "Our Plumbing Assessment Process",
    steps: [
      {
        title: "1. Describe the problem",
        text: "Explain what happened, when it started and which fixtures are affected.",
      },
      {
        title: "2. Identify the likely source",
        text: "A plumbing professional can inspect the affected area and determine what further testing may be needed.",
      },
      {
        title: "3. Review repair options",
        text: "The proposed work should explain the problem, the recommended solution and the applicable price before work proceeds.",
      },
      {
        title: "4. Check the repair",
        text: "After the work, affected fixtures and connections should be checked for proper operation and signs of leakage.",
      },
    ],
    maintenanceHeading: "What to Do Before Plumbing Help Arrives",
    maintenance: [
      "1. Stop using the affected fixture.",
      "2. Shut off the water supply if you can identify the correct valve and operate it safely.",
      "3. Keep people away from wet electrical equipment.",
      "4. Move valuables away from water if doing so is safe.",
      "5. Take photos of visible damage for your records.",
      "Safety Alert: Do not enter areas where standing water may have made electrical systems unsafe.",
    ],
    faqs: [
      {
        q: "How do I know whether a plumbing issue is an emergency?",
        a: "Active flooding, a burst supply pipe, an overflowing fixture that cannot be controlled or a sewage backup into living areas generally needs prompt attention. A minor drip may be less urgent if it can be safely contained.",
      },
      {
        q: "Should I turn off the main water supply?",
        a: "If water is actively leaking and you can safely reach the main shut-off valve, shutting off the supply may reduce further damage. Do not approach electrical hazards or unsafe areas to reach it.",
      },
      {
        q: "Can every plumbing emergency be repaired on the first visit?",
        a: "Not necessarily. The outcome depends on the failure, access to the damaged components, required parts and whether additional repairs are needed.",
      },
      {
        q: "Does Prestige Plumbing Company provide 24-hour emergency service?",
        a: "Prestige Plumbing Company provides emergency plumbing response across Mesa and the East Valley. Please call our direct line at (480) 681-3808 to confirm current service availability and estimated dispatch time for your specific address.",
      },
    ],
    related: [
      "leak-detection-mesa-az",
      "drain-and-sewer-mesa-az",
      "water-heaters-mesa-az",
      "residential-plumbing-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "leak-detection-mesa-az",
        anchor: "Hidden Leak Detection in Mesa",
        description: "Acoustic line testing and thermal imaging for slab leaks and concealed pipe failures.",
      },
      {
        slug: "drain-and-sewer-mesa-az",
        anchor: "Drain Cleaning and Sewer Repair",
        description: "Motorized cabling augers and hydro jetting for overflowing toilets and backed-up main lines.",
      },
      {
        slug: "water-heaters-mesa-az",
        anchor: "Water Heater Repair in Mesa",
        description: "Rapid diagnosis and replacement for leaking water heater tanks, failed elements, and valves.",
      },
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Maintenance",
        description: "Whole-home pressure regulation and valve testing to prevent future emergency pipe bursts.",
      },
    ],
    ctaTitle: "Request Emergency Plumbing Help in Mesa",
    ctaText: "Describe the plumbing problem affecting your home and ask about service availability, assessment and the next steps for arranging an appropriate repair.",
    ctaButtonLabel: "Request Emergency Plumbing Service",
  },
  {
    slug: "water-heaters-mesa-az",
    name: "Water Heater Services",
    h1: "Water Heater Repair and Replacement in Mesa, AZ",
    tagline: "Expert diagnosis, tank replacement, and Navien tankless conversions backed by AZ ROC #347689",
    metaTitle: "Water Heater Repair & Replacement in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Water heater repair and replacement in Mesa, AZ. Tank & tankless water heater installation, hard water flush & upfront estimates. Call (480) 681-3808.",
    image: "waterHeaters",
    intro: [
      "Reliable hot water makes everyday tasks easier, from taking a shower to washing dishes and doing laundry. When a water heater stops producing hot water, leaks or struggles to meet household demand, it is important to find out what is causing the problem.",
      "Prestige Plumbing Company helps Mesa homeowners explore water heater service options for traditional storage-tank systems and tankless units. Depending on the equipment and the symptoms, the right solution may involve repairing a component, correcting a connection issue, servicing the system or replacing an aging unit.",
      "The best next step depends on the water heater's condition, available fuel or electrical supply, installation requirements and the household's hot water needs.",
    ],
    benefits: [
      "Same-day repair and replacement for tank and tankless water heaters",
      "Accurate diagnosis of thermocouples, heating elements, and gas control valves",
      "Expert tank-to-tankless conversions sizing gas supply lines correctly",
      "Code-compliant installation including thermal expansion tanks and seismic strapping",
      "Full haul-away and responsible environmental recycling of your old unit",
      "Manufacturer tank warranties from 6 to 12 years plus our 1-year labor guarantee",
    ],
    problems: [
      "No hot water from electric heating elements or gas control issues",
      "Hot water running out too quickly during normal household demand",
      "Water pooling around the base, drain valve, or tank connections",
      "Popping or rumbling sounds caused by sediment buildup in the tank",
      "Rust-coloured water, fluctuating temperature, or recurring interruptions",
    ],
    signs: [
      "Water pooling around the base of the heater or in the drip pan",
      "Hot water supply runs out noticeably faster during normal family showers",
      "The water heater is over 8–10 years old in an Arizona home without a water softener",
      "Visible corrosion or white crust around copper inlet/outlet connections",
      "Discolored pilot flame or noisy rumbling from internal sediment",
    ],
    detail: [
      {
        heading: "Water Heater Repair or Replacement?",
        body: [
          "Repair may be suitable when the tank remains sound and the failure is limited to a repairable component. Replacement may be more appropriate when the tank is leaking, corrosion is extensive or repeated repairs no longer make practical sense.",
          "Before selecting a new unit, consider household hot water demand, available installation space, existing gas or electrical capacity, venting and drainage requirements, and equipment purchase, installation and future maintenance costs.",
          "A tankless water heater is not automatically the best option for every home. A proper comparison should account for capacity, installation changes, operating needs and the manufacturer's maintenance requirements.",
        ],
      },
      {
        heading: "Mesa's Water Conditions and Your Water Heater",
        body: [
          "The City of Mesa reports water hardness ranging from approximately 12 to 22 grains per gallon, depending on the water source serving an area. Hard water can leave mineral deposits on fixtures and contribute to scale buildup in equipment.",
          "The amount of buildup and its effect on a particular water heater depend on the system and its maintenance history. Follow the manufacturer's maintenance guidance, and ask a qualified service professional whether inspection, flushing or descaling is appropriate for your unit.",
          "For more information, homeowners can consult the City of Mesa's water-quality guidance (https://www.mesaaz.gov/Utilities/Water-Wastewater/Water-Quality/Common-Water-Quality-Concerns).",
        ],
      },
    ],
    diagnosticHeading: "Water Heater Problems to Look Out For",
    diagnosticOptions: [
      {
        title: "No Hot Water",
        description: "An electric water heater may have a power supply or heating-element problem. A gas unit may have an ignition, gas-supply or control issue.",
        recommendation: "The equipment should be assessed before replacing components.",
      },
      {
        title: "Hot Water Runs Out Too Quickly",
        description: "The tank may be undersized for household demand, a heating component may not be functioning properly, or sediment and other system conditions may be affecting performance.",
        recommendation: "Tankless systems can also struggle if demand exceeds their rated capacity.",
      },
      {
        title: "Water Around the Water Heater",
        description: "Water at the base of the unit should be investigated promptly. A leak may come from a connection, a valve or the tank itself.",
        recommendation: "If the tank has failed, component repair may not be a practical solution.",
      },
      {
        title: "Popping or Rumbling Sounds",
        description: "Sediment buildup can contribute to noise in a storage-tank water heater.",
        recommendation: "Noise alone does not establish the cause, so an inspection is preferable to assuming the unit needs replacement.",
      },
      {
        title: "Rust-Coloured Water or Inconsistent Temperature",
        description: "Discolouration, fluctuating temperature or repeated interruptions in hot water should be investigated.",
        recommendation: "The cause may be related to the heater or other parts of the household plumbing system.",
      },
    ],
    pricingPolicy: {
      estimateType: "Free Written Replacement Estimates",
      pricingModel: "All-Inclusive Flat-Rate Pricing (Unit, Labor, Haul-Away & Permits Included)",
      warranty: "6–12 Year Manufacturer Tank Warranty + 1-Year Workmanship Guarantee",
      details: "Our replacement quotes include everything: code-required thermal expansion tank, brass shut-off valve, heavy-duty drip pan, seismic strapping, city permit fee, and complete haul-away of your old water heater.",
    },
    caseStudy: {
      title: "Tankless Water Heater Conversion in Lehi District",
      location: "Mesa, AZ",
      technician: "Raul (Lead Estimator & Certified Installer)",
      challenge: "A 12-year-old 50-gallon tank ruptured from 18 grains/gal hard water sediment, leaving a family of 5 with zero hot water.",
      solution: "Raul evaluated gas line sizing, upgraded the 1/2\" line to a dedicated 3/4\" supply, and installed a Navien NPE-240A2 condensing tankless unit with built-in recirculation pump.",
      outcome: "Instant endless hot water across all 3 bathrooms, $28/month lower gas utility costs, and 12 square feet of reclaimed garage storage.",
      testimonialSnippet: "Raul gave us multiple options without high-pressure sales. The tankless installation looks like a work of art and runs whisper quiet.",
      customerName: "John S. & Family",
    },
    stepsHeading: "What to Expect During a Water Heater Assessment",
    steps: [
      {
        title: "1. Inspect",
        text: "Identify the unit type, visible leaks, connections, controls and reported symptoms.",
      },
      {
        title: "2. Diagnose",
        text: "Determine which components or operating conditions may be contributing to the problem.",
      },
      {
        title: "3. Compare options",
        text: "Discuss repair and replacement where both are viable, with scope and pricing explained before work begins.",
      },
      {
        title: "4. Verify operation",
        text: "After approved work, check the applicable connections, controls and operating conditions.",
      },
    ],
    maintenance: [
      "Flush the tank once a year to purge hard water sediment and mineral buildup",
      "Inspect the sacrificial anode rod every 3 years and replace when heavily depleted",
      "Test the Temperature & Pressure (T&P) relief valve annually for smooth operation",
      "Schedule professional descaling annually for all residential tankless water heaters",
    ],
    faqs: [
      {
        q: "Should I repair or replace my water heater?",
        a: "It depends on the type of failure, the condition of the tank, age, parts availability and the relative cost of repair compared with replacement.",
      },
      {
        q: "Are tankless water heaters suitable for Mesa homes?",
        a: "They may suit some households, but the choice depends on hot water demand, gas or electrical capacity, venting, installation costs and maintenance requirements.",
      },
      {
        q: "Does hard water affect a water heater?",
        a: "Mineral deposits can accumulate in equipment over time. Appropriate maintenance can help manage scale, but the recommended service depends on the unit and manufacturer instructions.",
      },
      {
        q: "What should I do if my water heater is leaking?",
        a: "Avoid touching wet electrical components or attempting a gas-appliance repair. If safe, limit water flow using an accessible shut-off valve and arrange an assessment. If you suspect a gas leak, leave the area and call 911 and the gas utility from a safe location.",
      },
    ],
    related: [
      "residential-plumbing-mesa-az",
      "repiping-mesa-az",
      "emergency-plumbing-mesa-az",
      "leak-detection-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Maintenance",
        description: "Preventive maintenance, water softener care, and pressure regulation to prolong water heater life.",
      },
      {
        slug: "repiping-mesa-az",
        anchor: "Pipe Repair and Repiping",
        description: "Upgraded Uponor PEX-A and copper supply lines to replace corroded water heater tie-ins.",
      },
      {
        slug: "emergency-plumbing-mesa-az",
        anchor: "Emergency Plumbing Help in Mesa",
        description: "Urgent response for burst tanks, major supply line ruptures, and severe basement or garage flooding.",
      },
      {
        slug: "leak-detection-mesa-az",
        anchor: "Hidden Water Leak Detection",
        description: "Pinpointing concealed hot water supply leaks running beneath concrete slab foundations.",
      },
    ],
    ctaTitle: "Get Water Heater Service Information in Mesa",
    ctaText: "Explain whether your unit has no hot water, fluctuating temperature, unusual noises or a visible leak so that the appropriate next step can be discussed.",
    ctaButtonLabel: "Request Water Heater Service",
  },
  {
    slug: "drain-and-sewer-mesa-az",
    name: "Drain & Sewer Services",
    h1: "Drain Cleaning and Sewer Repair in Mesa, AZ",
    tagline: "Motorized cabling, high-pressure hydro jetting, and HD sewer camera inspections in Mesa, AZ",
    metaTitle: "Drain Cleaning & Sewer Repair in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Looking for drain cleaning in Mesa, AZ? Learn about clogged sinks, slow drains, sewer backups, drain inspections and sewer line repair options.",
    image: "drainAndSewer",
    intro: [
      "Slow drains, recurring clogs and sewer backups can interfere with daily life and may indicate a problem deeper in the drainage system. Identifying the location and cause of a blockage helps determine the most appropriate way to restore drainage.",
      "Prestige Plumbing Company helps Mesa homeowners explore plumbing service options for clogged sinks, shower drains, toilet drainage problems and sewer line concerns. Some blockages are limited to one fixture, while others affect multiple drains and require a more detailed investigation.",
      "Instead of treating every clog the same way, the objective should be to identify the cause and select a solution suited to the condition of the pipe.",
    ],
    benefits: [
      "High-definition video sewer camera inspection with depth and location locating",
      "High-pressure hydro jetting scours pipe walls clean of grease, scale, and roots",
      "Heavy-duty motorized cabling augers for immediate soft clog clearing",
      "Spot repairs and trenchless sewer pipe lining options to protect your landscaping",
      "Clean, respectful technicians who use floor protection and shoe covers",
      "AZ ROC #347689 licensed, bonded, and insured plumbing contractors",
    ],
    problems: [
      "Slow kitchen and bathroom sinks, shower drains, and tub lines",
      "Repeated toilet clogs requiring frequent plunging without lasting results",
      "Multiple drains backing up wastewater simultaneously",
      "Gurgling sounds, slow drainage, and persistent foul sewer odours",
      "Tree root intrusion and structural pipe displacements in main sewer lines",
    ],
    signs: [
      "Water draining sluggishly from kitchen sinks and bathtubs",
      "Gurgling sounds from toilets when laundry runs or sinks drain",
      "Unpleasant sewer gas odors near cleanouts or inside bathrooms",
      "Toilets that clog repeatedly during normal daily use",
      "Water backing up into the lowest shower or floor drain",
    ],
    detail: [
      {
        heading: "Drain Cleaning and Sewer Repair Options",
        body: [
          "The right service depends on the obstruction, pipe material, access and condition of the drainage system.",
          "Drain clearing: Used to address an obstruction in an individual fixture line or an accessible branch drain.",
          "Drain camera inspection: A suitable camera inspection can help identify blockages, root intrusion, pipe damage or other visible conditions inside an accessible sewer line.",
          "Hydro jetting: High-pressure water cleaning may be appropriate for certain lines and types of buildup. Pipe condition and the nature of the blockage should be assessed before this method is selected.",
          "Sewer line repair: If the pipe is cracked, displaced, damaged or otherwise structurally compromised, clearing the blockage alone may not resolve the underlying issue.",
          "Repair methods and available equipment should be confirmed for the specific job.",
        ],
      },
    ],
    diagnosticHeading: "Common Drain and Sewer Problems",
    diagnosticOptions: [
      {
        title: "Slow Kitchen and Bathroom Drains",
        description: "Food debris, grease, hair, soap residue and other materials can accumulate inside drain lines.",
        recommendation: "A recurring blockage may indicate a deeper restriction that ordinary surface cleaning will not resolve.",
      },
      {
        title: "Repeated Toilet Clogs",
        description: "A toilet that clogs repeatedly may have an obstruction in the toilet trap or farther along the drainage line.",
        recommendation: "Frequent plunging without a lasting result is a reason to investigate further.",
      },
      {
        title: "Multiple Drains Backing Up",
        description: "When toilets, showers and sinks are affected at the same time, the issue may involve a shared drain or the main sewer line.",
        recommendation: "Stop using affected fixtures until the cause is understood, particularly when wastewater is backing up into the home.",
      },
      {
        title: "Gurgling Sounds and Sewer Odours",
        description: "Gurgling, slow drainage and unpleasant odours can arise from several causes, including partial blockages, venting issues or drainage-system defects.",
        recommendation: "These symptoms should be evaluated rather than assumed to have one particular cause.",
      },
    ],
    pricingPolicy: {
      estimateType: "Upfront Flat-Rate Drain Clearing",
      pricingModel: "Clear Flat Rates — Free Camera Verification with Main Drain Clearing",
      warranty: "30-Day Clog-Free Guarantee / 10-Year Sewer Line Replacement Warranty",
      details: "We quote the drain clearing price upfront before starting work. If secondary camera inspection identifies structural root damage or pipe collapse, we provide a detailed written proposal before performing any excavation.",
    },
    caseStudy: {
      title: "Under-Slab Sewer Collapse Recovery",
      location: "Mesa, AZ",
      technician: "Raul (Field Operations Specialist)",
      challenge: "An old sewer pipe collapsed beneath the home foundation, leaving the resident with an emergency backup and an unaffordable estimate from another company.",
      solution: "Raul camera-inspected the line, accurately pinpointed the 4-foot collapsed section, saw-cut concrete with dust containment, and replaced it with Schedule 40 PVC.",
      outcome: "Drainage was fully restored in 2 days with an honest, affordable price and spotless clean-up of the home.",
      testimonialSnippet: "Prestige Plumbing Company came in with an estimate that was fair and thorough. They explained every step and never tried to talk me into anything unnecessary.",
      customerName: "D Chavez",
    },
    steps: [
      { title: "Arrival & Cleanout Access", text: "We locate your main exterior cleanout, lay down protective drop cloths, and test the drainage flow." },
      { title: "HD Camera Diagnosis", text: "We inspect the interior of the line using our digital camera to identify the obstruction's cause and location." },
      { title: "Mechanical Clearing / Hydro Jetting", text: "We select the appropriate tool—cabling blades or high-pressure jetting—to eliminate the clog completely." },
      { title: "Final Camera Verification", text: "We run the camera a second time to show you the pristine, free-flowing pipe interior and sign off on warranty." },
    ],
    maintenanceHeading: "How to Reduce Recurring Drain Problems",
    maintenance: [
      "Keep cooking grease, oils and food scraps out of sink drains.",
      "Use suitable strainers to collect hair and other debris.",
      "Dispose of wipes and hygiene products in the rubbish rather than flushing them.",
      "Pay attention to slow drainage that repeatedly returns after cleaning.",
      "Investigate recurring sewer odours, gurgling or multiple blocked fixtures.",
      "Safety Guidance: Avoid combining chemical drain cleaners or using them repeatedly without understanding the blockage. Follow product safety instructions, and inform the plumber about any chemicals used before requesting service.",
    ],
    faqs: [
      { q: "Why does my toilet bubble or gurgle when the shower is running?", a: "Gurgling indicates a downstream sewer line restriction or a clogged roof vent stack. As wastewater pushes down the line, trapped air cannot vent properly, so it bubbles back up through the easiest open water seal in your toilet bowl." },
      { q: "Are store-bought liquid drain chemicals safe for my pipes?", a: "No. Caustic chemical drain cleaners rely on exothermic chemical reactions that generate extreme heat. This heat can soften and warp PVC pipes or accelerate corrosion in older cast iron, creating leaks inside walls." },
      { q: "How much does a sewer camera inspection cost?", a: "We provide upfront flat-rate pricing for video camera inspections. If your line is currently backed up, we clear the obstruction first so the camera lens has clear visibility." },
      { q: "Can you fix a broken sewer pipe under my driveway without tearing it all up?", a: "Yes. When structural conditions permit, we utilize trenchless pipe relining (CIPP) or directional boring to repair damaged sewer sections without destroying your concrete driveway or expensive landscaping." },
    ],
    related: [
      "bathroom-plumbing-mesa-az",
      "kitchen-plumbing-mesa-az",
      "emergency-plumbing-mesa-az",
      "residential-plumbing-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "bathroom-plumbing-mesa-az",
        anchor: "Bathroom Drain and Toilet Repairs",
        description: "Clearing stubborn toilet clogs, shower backups, and addressing bathroom ventilation issues.",
      },
      {
        slug: "kitchen-plumbing-mesa-az",
        anchor: "Kitchen Drain and Sink Plumbing",
        description: "Resolving kitchen sink clogs, grease buildup, and garbage disposal drainage problems.",
      },
      {
        slug: "emergency-plumbing-mesa-az",
        anchor: "Emergency Plumbing Help in Mesa",
        description: "Rapid dispatch when multiple drains back up or raw sewage threatens living areas.",
      },
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Inspections",
        description: "Whole-home multi-point drainage and supply evaluations for East Valley homeowners.",
      },
    ],
    ctaTitle: "Request Drain Cleaning & Sewer Help in Mesa",
    ctaText: "Describe the drainage problem affecting your home and ask about drain clearing, camera inspection, and repair options.",
    ctaButtonLabel: "Request Drain & Sewer Service",
  },
  {
    slug: "leak-detection-mesa-az",
    name: "Leak Detection & Slab Leaks",
    h1: "Acoustic Leak Detection & Slab Leak Repair in Mesa, AZ",
    tagline: "Non-invasive electronic acoustic detection and overhead PEX reroutes by licensed Mesa contractors",
    metaTitle: "Leak Detection & Slab Leak Repair in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Leak detection and slab leak repair in Mesa, AZ. Non-invasive acoustic line tracing, thermal imaging & overhead PEX reroutes. Call (480) 681-3808 for an estimate.",
    image: "leakDetection",
    intro: [
      "A pressurized water leak running continuously beneath your concrete foundation is one of the most destructive plumbing issues an Arizona homeowner can face. Thousands of homes across Mesa, Gilbert, Chandler, and Phoenix built between the 1970s and 2000s feature soft copper supply lines embedded directly into caliche soil beneath concrete slabs. Over time, aggressive mineral friction, soil shifting, and thermal expansion wear pinholes into the copper.",
      "Prestige Plumbing Company uses cutting-edge non-invasive acoustic listening sensors, digital pressure isolation manifolds, and FLIR thermal infrared imaging to locate hidden slab leaks with pinpoint accuracy—without unnecessary demolition.",
      "Once the leak is pinpointed, our licensed master plumbers (AZ ROC #347689) present clear repair options, specializing in long-term overhead PEX-A attic reroutes that permanently eliminate the compromised line from beneath your foundation.",
    ],
    benefits: [
      "Non-destructive acoustic and thermal leak detection protects your flooring",
      "Ultrasonic ground microphones pinpoint leaks within a 1-foot radius",
      "Overhead Uponor PEX-A attic rerouting avoids breaking your concrete foundation",
      "Prevents catastrophic foundation settling, floor buckling, and toxic mold growth",
      "Licensed and bonded technicians experienced in Arizona slab construction",
      "Complete technical documentation and photos provided for insurance adjusters",
    ],
    problems: [
      "Pinhole leaks in soft copper water lines beneath the concrete slab",
      "Concealed pressurized leaks inside wall cavities and behind shower valves",
      "Underground irrigation main line and municipal yard service line ruptures",
      "Deteriorated polybutylene or corroded galvanized steel water pipe breaks",
      "Sudden unexplained spikes in monthly water utility bills",
    ],
    signs: [
      "Unexplained hot or warm spots on tile, wood, or vinyl flooring",
      "The sound of rushing water inside walls when all faucets are shut tight",
      "Water meter flow indicator dial spinning continuously when no water is running",
      "Baseboards warping, discoloring, or separating from the drywall",
      "Musty, damp odors or unexplained humidity in carpeted bedrooms and closets",
      "A sudden $100+ jump in your municipal water consumption bill",
    ],
    detail: [
      {
        heading: "Non-Invasive Diagnostic Technology",
        body: [
          "Breaking up tile or hardwood flooring to find a leak is outdated and costly. We connect precision digital pressure gauges to your plumbing manifolds, isolate hot and cold lines independently, and trace pressurized acoustic vibrations with ground sensors.",
          "FLIR thermal imaging cameras visually highlight hot water thermal plumes migrating beneath the concrete slab, confirming the exact leak position before any repair work commences.",
        ],
      },
      {
        heading: "Overhead PEX-A Reroute vs. Concrete Jackhammering",
        body: [
          "Direct slab repairs require jackhammering concrete inside your home, generating heavy dust and leaving the remaining 20-year-old copper pipe vulnerable to future leaks just inches away.",
          "Our recommended solution is an overhead PEX-A attic reroute. We abandon the compromised underground line completely and route seamless, corrosion-proof Uponor PEX-A tubing through your attic space and down interior walls. Your foundation remains undisturbed, and the repair is permanent.",
        ],
      },
    ],
    diagnosticOptions: [
      {
        title: "Digital Pressure Decay Testing",
        description: "Isolating the hot and cold water systems to determine which loop is losing pressure down to 0.1 PSI accuracy.",
        recommendation: "First step on every leak detection call.",
      },
      {
        title: "Acoustic Ground Microphone Profiling",
        description: "Listening through concrete slabs to detect high-frequency pipe hiss and water cavitation.",
        recommendation: "Used to pinpoint the exact leak location beneath floors.",
      },
      {
        title: "FLIR Thermal Infrared Imaging",
        description: "Scanning floors and walls to visually map temperature differentials created by escaping hot water.",
        recommendation: "Essential for hot water slab leaks and hidden in-wall pipe bursts.",
      },
      {
        title: "Overhead PEX-A Attic Reroute (Permanent Fix)",
        description: "Bypassing the underground copper pipe completely with clean overhead Uponor PEX-A lines.",
        recommendation: "Highly recommended over slab demolition; permanently protects your home.",
      },
    ],
    pricingPolicy: {
      estimateType: "Flat-Rate Non-Invasive Leak Detection",
      pricingModel: "Transparent Detection Fee with Repair Credit Options",
      warranty: "1-Year Warranty on Direct Spot Repairs / 10-Year on Overhead PEX Reroutes",
      details: "We charge a clear, flat-rate fee to non-invasively locate the leak. Once found, we present a written estimate detailing your options—spot repair versus overhead reroute—before you commit to the repair.",
    },
    caseStudy: {
      title: "Hot Water Slab Leak Pinpoint & Overhead Reroute",
      location: "East Valley / Mesa, AZ",
      technician: "Jesse Leyva (Master Plumber, AZ ROC #347689)",
      challenge: "Homeowner experienced burning hot tile in the master bathroom and a $240 monthly water bill spike with zero visible moisture.",
      solution: "Jesse performed digital pressure isolation, used acoustic microphones to pinpoint a pinhole copper rupture, and engineered a seamless overhead PEX-A attic reroute.",
      outcome: "Zero damage was done to high-end Italian bathroom tile; water was restored by 4:00 PM with static pressure holding at 65 PSI.",
      testimonialSnippet: "Jesse found the leak in less than an hour without damaging my floors. Their craftsmanship and honesty were remarkable.",
      customerName: "Laurie Suprock",
    },
    steps: [
      { title: "Pressure Isolation & System Test", text: "We connect digital gauges at the water heater and manifold to verify pressure decay and isolate the leaking zone." },
      { title: "Acoustic & Thermal Pinpointing", text: "We use ground microphones and thermal imaging to mark the exact footprint of the leak." },
      { title: "Written Repair Scope", text: "We explain your options (overhead PEX reroute vs. direct spot repair) with upfront flat-rate pricing." },
      { title: "Clean Execution & Pressure Validation", text: "We complete the reroute or repair, pressure-test the system, and restore clean water service." },
    ],
    maintenance: [
      "Check your water meter monthly: ensure the leak indicator triangle is stationary when all valves are closed",
      "Monitor monthly water consumption for unexpected spikes in hundreds of gallons",
      "Test household water pressure annually: pressure above 80 PSI drastically accelerates copper pinholes",
      "Install a smart leak detection shutoff valve (such as Moen Flo) for automatic emergency shutoff",
    ],
    faqs: [
      { q: "Does homeowner's insurance cover slab leak repairs in Arizona?", a: "Most Arizona homeowner policies cover the 'tear out' and resulting water damage (drywall, subflooring, baseboards), but rarely cover the plumbing pipe repair itself. We provide comprehensive photo documentation and detailed invoices to make your insurance claim seamless." },
      { q: "Why do copper pipes develop pinhole leaks under concrete slabs in Mesa?", a: "Three main factors converge in Arizona: aggressive mineral chemistry in hard tap water, soil shifting that rubs pipes against abrasive aggregate, and electrolytic corrosion where copper touches concrete without proper protective sleeving." },
      { q: "Why is an overhead attic reroute better than breaking the concrete slab?", a: "Jackhammering concrete is noisy, creates silica dust, damages expensive tile or hardwood flooring, and only fixes one tiny spot on an aging copper pipe. An overhead PEX reroute abandons the failing pipe completely and installs modern, non-corroding PEX-A through your attic with minimal drywall openings." },
      { q: "How fast can you locate and fix my slab leak?", a: "We offer same-day electronic leak detection. Most single-line overhead PEX reroutes are completed within 1 to 2 days, with domestic water service restored to your home every evening." },
    ],
    related: [
      "repiping-mesa-az",
      "emergency-plumbing-mesa-az",
      "residential-plumbing-mesa-az",
      "water-heaters-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "repiping-mesa-az",
        anchor: "Whole-Home Repiping Options",
        description: "Overhead Uponor PEX-A attic reroutes to permanently bypass deteriorating under-slab copper lines.",
      },
      {
        slug: "emergency-plumbing-mesa-az",
        anchor: "Emergency Plumbing Help in Mesa",
        description: "Immediate isolation and containment for active pipe bursts and pressurized flooding.",
      },
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Inspections",
        description: "Checking static line pressure, shutoff valves, and hidden moisture across all household fixtures.",
      },
      {
        slug: "water-heaters-mesa-az",
        anchor: "Water Heater Repair in Mesa",
        description: "Evaluating hot-water expansion systems, pressure relief valves, and storage tanks for pinhole leaks.",
      },
    ],
  },
  {
    slug: "repiping-mesa-az",
    name: "Repiping & Pipe Repair",
    h1: "Whole-Home Repiping & PEX Replacement in Mesa, AZ",
    tagline: "Replace failing copper, polybutylene, and galvanized pipes with Uponor PEX-A by licensed master plumbers",
    metaTitle: "Whole-Home Repiping in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Whole-home repiping in Mesa, AZ. Replace aging copper & polybutylene pipes with Uponor PEX-A. 25-yr warranty & upfront pricing. Call (480) 681-3808.",
    image: "repiping",
    intro: [
      "Plumbing supply systems have finite lifespans. In the East Valley, homes built prior to 1970 often have galvanized steel pipes that are severely choked with internal rust and mineral scale. Homes constructed from the late 1970s through 1990s frequently contain defective polybutylene (Quest) piping or soft copper lines that suffer from recurring pinhole leaks due to Arizona's aggressive water chemistry.",
      "When spot repairs become an annual headache, a whole-home repipe is the smartest long-term investment you can make in your property. Prestige Plumbing Company specializes in whole-home repiping using industry-leading Uponor PEX-A expansion piping.",
      "Our licensed and bonded master plumbers (AZ ROC #347689) execute repiping projects with surgical precision, keeping wall openings minimal and ensuring your household has running water at the end of every work day.",
    ],
    benefits: [
      "Restores full, balanced water pressure across all household fixtures simultaneously",
      "Completely eliminates rusty, discolored water and metallic tastes",
      "Uponor PEX-A expansion tubing is immune to internal corrosion, scaling, and pinholes",
      "Permanently eliminates the threat of catastrophic hidden slab leaks and in-wall floods",
      "Increases property value and ensures clean passage of home buyer inspections",
      "25-year manufacturer pipe warranty plus our comprehensive 10-year workmanship warranty",
    ],
    problems: [
      "Recurring pinhole leaks in aging copper lines requiring frequent drywall repairs",
      "Presence of known defective polybutylene (Quest) piping with plastic acetal fittings",
      "Severe water pressure drop when a shower and washing machine run simultaneously",
      "Brown, orange, or yellow water emerging from faucets after sitting idle",
      "Corroded galvanized steel pipes restricted by internal calcification and rust",
    ],
    signs: [
      "Your home was constructed between 1970 and 1998 and still has original pipework",
      "You have repaired two or more pipe leaks in the past 12 months",
      "Water pressure drops dramatically whenever someone flushes a toilet",
      "Visible greenish corrosion or pitting along exposed copper water lines",
      "Insurance carriers threaten to drop or deny coverage due to plumbing pipe age",
    ],
    detail: [
      {
        heading: "Why Uponor PEX-A Is the Superior Material for Arizona",
        body: [
          "Copper is rigid and vulnerable to the corrosive minerals found in Mesa's hard water. Uponor PEX-A (cross-linked polyethylene) is flexible, highly durable, and chemically inert, making it completely immune to scale buildup and pitting.",
          "PEX-A uses shape-memory ProPEX expansion fittings that actually grow tighter over time, eliminating rubber O-rings and crimp rings that can leak. It also dampens water hammer noise and expands without splitting if temperatures drop.",
        ],
      },
      {
        heading: "Our Surgical, Clean Repiping Process",
        body: [
          "Many homeowners delay repiping because they fear their home will be torn apart. We use a surgical process: laying down protective drop cloths, masking work zones, and making small, precise drywall access cuts.",
          "Our crew typically completes a full single-family repipe in 2 to 3 days, and we always restore water service by the end of every workday so your family remains comfortable at home.",
        ],
      },
    ],
    diagnosticOptions: [
      {
        title: "Pipe Material & Flow Assessment",
        description: "Inspecting attic runs, crawl spaces, and fixture connections to identify pipe composition and measure dynamic flow rates.",
        recommendation: "Essential first step to confirm whether repiping is necessary.",
      },
      {
        title: "Complete Uponor PEX-A Whole-Home Repipe",
        description: "Replacing all hot and cold potable supply lines from the main shut-off valve to every fixture with PEX-A expansion tubing and brass quarter-turn stops.",
        recommendation: "The gold standard permanent solution for aging copper or polybutylene homes.",
      },
      {
        title: "Targeted Manifold or Branch Repipe",
        description: "Replacing a single problematic wing or bathroom supply run when the rest of the home's plumbing is modern and intact.",
        recommendation: "Economical option for homes with localized remodeling or additions.",
      },
    ],
    pricingPolicy: {
      estimateType: "Free In-Home Assessment & Written Proposal",
      pricingModel: "All-Inclusive Turnkey Project Pricing",
      warranty: "25-Year Manufacturer Pipe Warranty + 10-Year Workmanship Warranty",
      details: "Our whole-home repiping quotes include all new supply piping, brass quarter-turn shut-off valves, braided stainless supply lines, new pressure reducing valve (PRV), whole-home shutoff valve, and city permit fees.",
    },
    caseStudy: {
      title: "1980s Polybutylene Whole-Home Repipe",
      location: "Dobson Ranch, Mesa, AZ",
      technician: "Jesse Leyva & Raul",
      challenge: "A homeowner suffered two polybutylene fitting bursts within 6 months, causing insurance cancellation threats and constant anxiety over water damage.",
      solution: "Our 2-man crew repiped the entire 2,200 sq ft, 2.5-bath home with Uponor PEX-A expansion tubing, installed new brass quarter-turn stops, and replaced the main PRV.",
      outcome: "Completed in 3 days with clean surgical wall cuts, water back on by 5:00 PM every night, and full city inspection approval.",
      testimonialSnippet: "Jesse and Raul were extraordinarily clean and professional. Our water pressure is better than it has ever been and we finally have peace of mind.",
      customerName: "David K.",
    },
    steps: [
      { title: "Detailed In-Home Mapping", text: "We map out your home's fixture layout, identify manifold locations, and plan the most efficient pipe routing through your attic." },
      { title: "Home Protection & Surgical Access", text: "We mask flooring and furniture with heavy drop cloths and make small, strategic drywall cuts." },
      { title: "PEX-A Installation & Fixture Connections", text: "We route continuous PEX-A lines, install brass quarter-turn ball valves, and connect all fixtures." },
      { title: "Pressure Testing & City Inspection", text: "We pressure-test the system, coordinate municipal inspection sign-offs, and certify your 10-year warranty." },
    ],
    maintenance: [
      "Ensure your home's Pressure Reducing Valve (PRV) maintains water pressure between 55 and 70 PSI",
      "Pair your new PEX plumbing with a whole-home water softener to protect luxury fixtures",
      "Familiarize all household members with the location of the new main quarter-turn shutoff valve",
      "Operate fixture angle stops once a year to ensure smooth, unhindered operation",
    ],
    faqs: [
      { q: "How long does a whole-home repipe take, and will I be without water?", a: "Most residential repiping projects take between 2 to 4 days, depending on home size and number of bathrooms. Crucially, your water is only turned off during active working hours—we always reconnect and test your water system so you have full domestic water every evening." },
      { q: "Why is Uponor PEX-A better than copper in Arizona?", a: "Arizona's municipal water has high total dissolved solids (TDS) and mineral hardness, which corrodes copper pipes and causes pinhole leaks. PEX-A is flexible, completely immune to mineral corrosion, expands without bursting in sudden freezes, and carries a 25-year manufacturer warranty." },
      { q: "Will a whole-home repipe improve my water pressure?", a: "Yes, significantly. If your home has old galvanized steel pipes with heavy internal rust constriction, repiping with smooth-interior PEX-A restores original design volume and balanced water pressure across all fixtures." },
      { q: "Do you handle city building permits for repiping?", a: "Yes. Prestige Plumbing Company is an active AZ ROC #347689 contractor. We file all required municipal permits with the City of Mesa or your local jurisdiction and coordinate the final building inspector sign-off." },
    ],
    related: [
      "leak-detection-mesa-az",
      "residential-plumbing-mesa-az",
      "water-heaters-mesa-az",
      "emergency-plumbing-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "leak-detection-mesa-az",
        anchor: "Hidden Leak and Pipe Leak Detection",
        description: "Non-destructive acoustic testing to verify whether pinpoint repairs or whole-home repiping is best.",
      },
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Inspections",
        description: "Systematic assessments of pipe corrosion, water pressure regulator health, and fixture wear.",
      },
      {
        slug: "water-heaters-mesa-az",
        anchor: "Water Heater Maintenance and Repair",
        description: "Connecting modern high-capacity water heaters with clean, scale-free PEX supply lines.",
      },
      {
        slug: "emergency-plumbing-mesa-az",
        anchor: "Emergency Plumbing Help in Mesa",
        description: "Emergency support for brittle galvanized or polybutylene pipe ruptures.",
      },
    ],
  },
  {
    slug: "gas-line-mesa-az",
    name: "Residential Gas Line Services",
    h1: "Gas Line Repair & Appliance Installation in Mesa, AZ",
    tagline: "Licensed gas pipe repair, electronic leak detection, and appliance installation (AZ ROC #347689)",
    metaTitle: "Gas Line Repair & Installation in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Gas line repair and installation in Mesa, AZ. Licensed gas plumbers for leak detection, appliance hookups, fire pits & pool heaters. Call (480) 681-3808.",
    image: "gasLine",
    intro: [
      "Natural gas is an efficient, reliable energy source for heating, cooking, and outdoor living in Arizona. However, because natural gas is combustible and pressurized, working on gas piping requires rigorous adherence to Arizona Registrar of Contractors standards and municipal mechanical codes. Faulty pipe joints, undersized sizing, or improper materials pose severe safety hazards.",
      "Prestige Plumbing Company provides licensed, bonded gas line repair, installation, and leak detection services across Mesa and the East Valley. Whether you need an emergency repair after Southwest Gas has red-tagged your meter, want to route a new gas line for a kitchen range, or are building an outdoor kitchen with fire pits and pool heaters, our master plumbers deliver safe, code-compliant workmanship.",
      "We calculate exact BTU appliance demands, use approved black iron, CSST, and underground polyethylene piping, and verify every joint with digital combustible gas detectors and high-pressure manometer testing.",
    ],
    benefits: [
      "Licensed and bonded master plumbers certified for natural gas and propane piping",
      "Electronic combustible gas sniffer detection pinpoints leaks down to PPM",
      "Accurate BTU load calculations ensure appliances receive proper fuel volume",
      "Rapid emergency dispatch for utility red-tagged meters and active gas leaks",
      "Underground poly gas lines and anodeless risers for BBQ islands and fire pits",
      "Full coordination with Southwest Gas and municipal city mechanical inspectors",
    ],
    problems: [
      "Active natural gas leaks detected by sulfur smell or hissing sounds",
      "Gas service locked off or 'red-tagged' by Southwest Gas due to system failure",
      "Undersized gas lines starving tankless water heaters or pool heaters of fuel",
      "Corroded exterior black iron gas lines exposed to soil moisture",
      "Improper or degraded flexible appliance connectors leaking behind stoves or dryers",
    ],
    signs: [
      "The distinct odor of rotten eggs (mercaptan) inside or outside the home",
      "A whistling or hissing sound near the gas meter, manifold, or appliance connections",
      "Dead, discolored patches of grass or vegetation along an underground gas line run",
      "Gas stove burners burning weak yellow or flickering orange instead of steady blue",
      "Physical symptoms such as unexplained dizziness, nausea, or headaches indoors",
    ],
    detail: [
      {
        heading: "Emergency Red-Tag Resolution & Utility Reconnection",
        body: [
          "If Southwest Gas detects a leak, they shut off your gas meter and place a 'red tag' on the service. The utility cannot legally restore gas until a licensed plumbing contractor performs the repair, passes a mechanical pressure decay test, and provides documentation.",
          "We respond rapidly to red-tagged emergencies. We pressurize the system with compressed air/nitrogen, use digital manometers to locate the pressure drop, repair the pipework to code, and coordinate the required city permit and utility turn-on.",
        ],
      },
      {
        heading: "Outdoor Living Gas Lines: BBQs, Fire Pits & Pool Heaters",
        body: [
          "Arizona outdoor living revolves around patio entertainment. Adding a 400,000 BTU pool heater, outdoor kitchen range, or gas fire bowl requires precise pipe sizing to avoid starving interior furnaces and water heaters.",
          "We install yellow medium-density polyethylene (MDPE) gas pipe buried to required code depths, utilizing tracer wire, poly-to-steel anodeless risers, and shut-off valves for decades of leak-free outdoor enjoyment.",
        ],
      },
    ],
    diagnosticOptions: [
      {
        title: "Digital Combustible Gas Sniffer Detection",
        description: "Scanning every pipe fitting, regulator, and appliance connection with electronic sensors sensitive to parts per million.",
        recommendation: "Standard diagnostic procedure on any suspected gas odor call.",
      },
      {
        title: "High-Pressure Manometer Decay Testing",
        description: "Isolating the gas system and charging lines with 15 PSI of air to verify absolute pressure containment over time.",
        recommendation: "Required by code for city permits and utility reconnection sign-offs.",
      },
      {
        title: "BTU Load Calculation & Line Sizing",
        description: "Calculating cumulative fuel requirements and pipe friction loss to determine correct pipe diameter.",
        recommendation: "Essential before installing tankless heaters, pool heaters, or outdoor fire pits.",
      },
    ],
    pricingPolicy: {
      estimateType: "Upfront Written Estimate & Clear Permit Fees",
      pricingModel: "Flat-Rate Gas Line Pricing",
      warranty: "1-Year Workmanship Warranty + ROC Code Compliance Guarantee",
      details: "We handle complete utility coordination, pressure testing gauge sign-offs, and Southwest Gas reconnection documentation. All pricing is confirmed before work begins.",
    },
    caseStudy: {
      title: "Whole-Home Gas Line Replacement & Landscaping Restoration",
      location: "Mesa, AZ",
      technician: "Jesse Leyva & Raul",
      challenge: "Southwest Gas red-tagged and locked out the home's rusted exterior gas supply line after a neighbor reported a gas smell. The family was without hot water and stove.",
      solution: "Jesse and Raul coordinated emergency trenching, replaced the underground lines with poly gas pipe and anodeless risers, pressure-tested the system at 15 PSI, and restored all trench landscaping.",
      outcome: "Passed city mechanical inspection on the first pass; gas service was safely reconnected by the utility within 48 hours.",
      testimonialSnippet: "Jessie and Raul were great to work with as they had to replace the majority of our gas lines. Professional, honest, on time, and they did an awesome job of cleaning up my landscaping after trenching.",
      customerName: "Chad Barth & Christine Aguilar-Barth",
    },
    steps: [
      { title: "Emergency Safety Isolation & Sniffer Scan", text: "We verify safety, turn off appliance shutoffs, and trace lines using electronic combustible gas sniffers." },
      { title: "Pressure Decay Manometer Test", text: "We pressurize the isolated gas piping with air to measure exact pressure loss and pinpoint hidden leaks." },
      { title: "Code-Compliant Repair or New Pipe Routing", text: "We replace defective pipe sections or route new lines using black iron, CSST, or underground polyethylene." },
      { title: "Permit Inspection & Utility Reconnection", text: "We coordinate with city mechanical inspectors and Southwest Gas to restore your fuel service safely." },
    ],
    maintenance: [
      "Keep the area surrounding your gas meter clear of debris, overgrown shrubs, and soil contact",
      "Install UL-listed combination Carbon Monoxide (CO) and gas alarms near all bedrooms",
      "Inspect flexible stainless steel appliance gas connectors every 5 years for signs of corrosion or kinks",
      "Never attempt DIY gas line installations; always hire a licensed, bonded ROC contractor",
    ],
    faqs: [
      { q: "What should I do if Southwest Gas red-tags my gas meter?", a: "Do not attempt to turn the meter back on yourself—it is locked by the utility for safety. Call Prestige Plumbing Company at (480) 681-3808. We will diagnose the leak, perform a pressure decay test, complete the code-compliant repair, pull the necessary city permit, and coordinate with Southwest Gas to get your service re-established quickly." },
      { q: "Can you run a new underground gas line to my backyard BBQ or fire pit?", a: "Yes. We install underground medium-density polyethylene (MDPE) gas lines designed specifically for outdoor burial. We pull permits, dig trenches to required code depth, install anodeless steel risers, and install shut-off valves at your appliances." },
      { q: "Why do plumbers test gas lines with compressed air instead of natural gas?", a: "Testing with compressed air or inert nitrogen at 15 PSI allows us to test lines at far higher pressure than normal operating gas pressure (which is under 0.5 PSI). This guarantees that even the most microscopic pinhole or loose fitting will be detected without introducing flammable gas." },
      { q: "Can I convert my electric kitchen range to a natural gas stove?", a: "Yes, provided your home has natural gas service from the street. We calculate your home's total BTU demand, run a dedicated gas line from the manifold or meter into your kitchen, and install a code-compliant shut-off valve and appliance flex connector." },
    ],
    related: [
      "kitchen-plumbing-mesa-az",
      "emergency-plumbing-mesa-az",
      "water-heaters-mesa-az",
      "residential-plumbing-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "kitchen-plumbing-mesa-az",
        anchor: "Kitchen Plumbing and Appliance Connections",
        description: "Dedicated gas lines and water supply hookups for cooktops, ranges, and kitchen renovations.",
      },
      {
        slug: "emergency-plumbing-mesa-az",
        anchor: "Emergency Plumbing Help in Mesa",
        description: "Immediate safety response and code-compliant isolation for suspected gas line leaks.",
      },
      {
        slug: "water-heaters-mesa-az",
        anchor: "Water Heater Repair in Mesa",
        description: "Gas control valve diagnostics, pilot assembly service, and gas line sizing for tankless units.",
      },
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Maintenance",
        description: "Annual valve inspections, manometer testing, and preventive whole-home plumbing reviews.",
      },
    ],
  },
  {
    slug: "bathroom-plumbing-mesa-az",
    name: "Bathroom Plumbing",
    h1: "Bathroom Plumbing Repair & Fixture Installation in Mesa, AZ",
    tagline: "Shower valve rebuilds, running toilet repairs, and remodel rough-in plumbing by licensed Mesa plumbers",
    metaTitle: "Bathroom Plumbing Repair & Installation in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Bathroom plumbing repair in Mesa, AZ. Shower valves, toilet repairs, faucet leaks & bathroom remodel rough-ins by Prestige Plumbing. Call (480) 681-3808.",
    image: "bathroomPlumbing",
    intro: [
      "The bathroom accounts for over 50% of your household's total daily water consumption. Between high-frequency toilet flushes, hot morning showers, and vanity faucet usage, bathroom fixtures experience heavy mechanical wear. When combined with Mesa's aggressive hard water mineral scaling, rubber seals deteriorate, brass cartridges seize, and hidden supply line leaks develop inside walls.",
      "Prestige Plumbing Company provides full-service bathroom plumbing repair, fixture replacement, and remodel rough-ins across Mesa and the East Valley. Whether you have a toilet that runs non-stop, a dripping shower valve, or are planning a complete luxury master bathroom renovation, our licensed master plumbers (AZ ROC #347689) deliver clean, dependable craftsmanship.",
      "We install commercial-grade components from trusted manufacturers like Kohler, Moen, Delta, and TOTO, ensuring every installation operates smoothly and complies with Arizona plumbing codes.",
    ],
    benefits: [
      "Prompt repair for running, leaking, or rocking toilets",
      "Expert pressure-balanced and thermostatic shower valve cartridge rebuilds",
      "Clean installation of modern vanity sinks, faucets, and pop-up drains",
      "Code-compliant drain and water rough-ins for tub-to-shower conversions",
      "Non-invasive detection of hidden water leaks behind tile enclosures and subfloors",
      "AZ ROC #347689 licensed, bonded, and insured plumbing contractors",
    ],
    problems: [
      "Toilets that run continuously, ghost-flush, or leak clean water onto the floor",
      "Shower valves that drip continuously or fail to produce hot water",
      "Sluggish bathroom sink and shower drains choked with hair and soap scum",
      "Water stains or damp spots on ceilings below upstairs bathrooms",
      "Loose, rocking toilets with failed wax ring seals causing subfloor rot",
    ],
    signs: [
      "The sound of running water trickling into your toilet bowl between flushes",
      "A soft, spongy feeling in the bathroom floor around the base of the toilet",
      "Low water pressure restricted specifically to a single showerhead or faucet",
      "Damp, musty odors or mold growth appearing along baseboards near tub enclosures",
      "Temperature scalds or drops whenever another household faucet is turned on",
    ],
    detail: [
      {
        heading: "Shower Valve Rebuilds Without Damaging Your Tile",
        body: [
          "When a showerhead drips or you lose hot water, the internal pressure-balancing cartridge has failed from mineral scaling. In most cases, our plumbers can rebuild the valve by extracting the seized cartridge and cleaning the brass valve body from the front.",
          "If the entire valve body must be replaced, we often access the plumbing from the drywall on the opposite side of the wall (such as a bedroom closet), preserving your custom shower tile.",
        ],
      },
      {
        heading: "Tub-to-Shower Remodel Conversions & Proper Drain Sizing",
        body: [
          "Converting an old bathtub into a walk-in shower is one of the most popular home renovations in Arizona. However, plumbing code requires a 2-inch drain pipe for walk-in showers, whereas standard bathtubs use a 1.5-inch drain.",
          "We properly upsize the underground drain pipe, set code-compliant slope, install pre-pitch shower pans, and install modern thermostatic valves for a trouble-free shower.",
        ],
      },
    ],
    diagnosticOptions: [
      {
        title: "Shower Cartridge & Pressure Balance Diagnostic",
        description: "Testing Moen, Delta, and Kohler valves for cartridge blowouts, mineral calcification, and thermal scald failure.",
        recommendation: "First step for dripping showerheads and temperature fluctuation issues.",
      },
      {
        title: "Toilet Subfloor & Wax Ring Inspection",
        description: "Checking closet flange bolts, wax seal integrity, and subfloor moisture levels on rocking or leaking toilets.",
        recommendation: "Essential before minor toilet leaks cause subfloor wood rot.",
      },
      {
        title: "Remodel Rough-In & Drain Geometry Sizing",
        description: "Upsizing bathtub drains to 2-inch shower drains, installing freestanding tub rough-in boxes, and routing PEX lines.",
        recommendation: "Required for bathroom remodels, additions, and tub-to-shower conversions.",
      },
    ],
    pricingPolicy: {
      estimateType: "Free Estimates on Fixture Replacements & Remodels",
      pricingModel: "Upfront Flat-Rate Repair Pricing",
      warranty: "1-Year Workmanship Warranty on All Installs & Rebuilds",
      details: "We supply commercial-grade brass fixtures or install customer-supplied high-end vanities with full warranty on our plumbing connections. All quotes are delivered in writing before work begins.",
    },
    caseStudy: {
      title: "Complex Master Bath Remodel Plumbing Rescue",
      location: "Mesa, AZ",
      technician: "Raul (Field Operations)",
      challenge: "A homeowner began a master bath remodel when the original contractor abandoned the project, claiming the dual-showerhead and freestanding tub drain was 'too complicated'.",
      solution: "Raul arrived the next morning, redesigned the 2-inch shower drain slope, routed PEX lines for thermostatic balance valves, and installed the freestanding tub rough-in box.",
      outcome: "Passed plumbing rough-in inspection with zero delays; project completed smoothly.",
      testimonialSnippet: "Professional, punctual, and polite. Raul helped us when the original plumber said it was too complicated. He was available right through to project sign-off.",
      customerName: "Verified Mesa Homeowner",
    },
    steps: [
      { title: "Precise Diagnosis & Fixture Inspection", text: "We inspect your fixtures, test water valves, check for hidden leaks, and determine the exact component failure." },
      { title: "Work Area Protection", text: "We lay down protective mats over bathroom tile, counters, and nearby hallways to keep your home clean." },
      { title: "Expert Repair or Code-Compliant Installation", text: "We replace cartridges, rebuild valve assemblies, install new toilets, or rough-in remodel plumbing." },
      { title: "Full Pressure & Drain Flow Testing", text: "We test fixtures under full dynamic pressure, verify drain slope, check for leaks, and clean up." },
    ],
    maintenance: [
      "Replace toilet tank flappers and fill valves every 4–5 years to prevent silent leaks",
      "Clean aerator screens on bathroom sink faucets quarterly to remove hard water scale",
      "Never flush so-called flushable wipes, paper towels, or dental floss down toilets",
      "Inspect and reseal silicone caulking around bathtubs, showers, and vanity backsplashes annually",
    ],
    faqs: [
      { q: "Why does my toilet constantly run or randomly flush itself?", a: "Ghost-flushing occurs when water slowly leaks out of the toilet tank into the bowl. This is almost always caused by a warped, worn, or mineral-encrusted rubber flapper. Replacing the flapper and fill valve assembly permanently cures the problem and stops water waste." },
      { q: "Can you replace a leaking shower valve without destroying my tile wall?", a: "Yes. In the majority of cases, we can rebuild the valve by replacing the internal cartridge from the front. If the brass valve body itself must be replaced, we can often cut a small access opening through the drywall from the room behind the shower, leaving your tile intact." },
      { q: "Why is my bathroom sink draining so slowly?", a: "Bathroom sink drains collect a dense mixture of hair, soap residue, toothpaste, and hard water minerals inside the p-trap and pop-up assembly. We manually clear and sanitize the trap and linkage to restore free-flowing drainage." },
      { q: "Do your plumbers install customer-supplied bathroom vanities and fixtures?", a: "Yes. Many homeowners purchase custom vanities, freestanding bathtubs, and designer faucets from specialty showrooms. Our licensed plumbers expertly connect and warranty all plumbing supply and drain connections." },
    ],
    related: [
      "drain-and-sewer-mesa-az",
      "residential-plumbing-mesa-az",
      "water-heaters-mesa-az",
      "leak-detection-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "drain-and-sewer-mesa-az",
        anchor: "Drain Cleaning and Sewer Services",
        description: "Clearing recurring toilet obstructions, shower drain hair buildup, and main sewer branch lines.",
      },
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Maintenance",
        description: "Routine inspections of angle stop valves, toilet fill mechanisms, and pressure regulators.",
      },
      {
        slug: "water-heaters-mesa-az",
        anchor: "Water Heater Repair in Mesa",
        description: "Ensuring consistent, adequate hot water volume for showers, bathtubs, and bathroom sinks.",
      },
      {
        slug: "leak-detection-mesa-az",
        anchor: "Hidden Water Leak Detection",
        description: "Acoustic detection for concealed leaks behind shower walls and underneath bathroom tile floors.",
      },
    ],
  },
  {
    slug: "kitchen-plumbing-mesa-az",
    name: "Kitchen Plumbing",
    h1: "Kitchen Plumbing Repair and Installation in Mesa, AZ",
    tagline: "Garbage disposal replacements, kitchen faucet repairs, and under-sink plumbing in Mesa, AZ",
    metaTitle: "Kitchen Plumbing Repair in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Need kitchen plumbing in Mesa, AZ? Explore sink and faucet repairs, garbage disposal problems, dishwasher drain issues and kitchen fixture installation.",
    image: "kitchenPlumbing",
    intro: [
      "A kitchen sink, faucet, garbage disposal and dishwasher all rely on working supply and drainage connections. When one of these components leaks, clogs or stops operating properly, everyday cooking and cleaning can become difficult.",
      "Prestige Plumbing Company helps Mesa homeowners explore kitchen plumbing service options for sinks, faucets, disposal units, dishwasher connections and related plumbing. The appropriate repair depends on whether the issue originates in the fixture, the appliance connection or the drainage line.",
      "Identifying the source before replacing equipment can help avoid unnecessary expense and repeated problems.",
    ],
    benefits: [
      "Same-day garbage disposal repair and replacement (InSinkErator & Moen)",
      "Expert installation of modern pull-down, touchless, and commercial-style faucets",
      "Correction of improper under-sink drain geometry and unvented S-traps",
      "Dedicated water line installations for refrigerators, ice makers, and RO systems",
      "Safe clearing of heavy grease accumulations from residential kitchen branches",
      "AZ ROC #347689 licensed, bonded, and insured plumbing contractors",
    ],
    problems: [
      "Water leaking under the sink or around the garbage disposal",
      "A dripping kitchen faucet, loose handle, or inconsistent flow",
      "A garbage disposal that jams, hums, or fails to operate",
      "A dishwasher failing to fill, leaking, or backing up into the sink",
      "Refrigerator ice maker or water dispenser supply line leaks",
      "Relocating supply lines and drains during kitchen remodel projects",
    ],
    signs: [
      "Dampness, mold, or pooling water inside the kitchen sink base cabinet",
      "A humming electrical sound when you switch on the garbage disposal",
      "Discolored water backing up into the sink when the dishwasher runs",
      "Low water pressure restricted specifically to the kitchen pull-out sprayer",
      "White mineral crust forming around faucet handles and under-sink shutoff valves",
    ],
    detail: [
      {
        heading: "Kitchen Plumbing for Remodels and Fixture Upgrades",
        body: [
          "A kitchen update may involve a new sink, faucet, disposal, dishwasher or refrigerator water connection. When the layout changes, the work may also require moving water supplies or drainage connections.",
          "Plumbing installation should be coordinated with the other trades involved in a remodel, especially when cabinets, counters or finished walls may limit access.",
        ],
      },
    ],
    diagnosticHeading: "Kitchen Plumbing Services",
    diagnosticOptions: [
      {
        title: "Kitchen Sink Repair",
        description: "Water under the sink may come from a supply connection, faucet, drain fitting or disposal connection.",
        recommendation: "Damp cabinet materials should be checked promptly because moisture can cause damage over time.",
      },
      {
        title: "Faucet Repair and Replacement",
        description: "A dripping kitchen faucet, loose handle, inconsistent flow or a leak around the base may indicate a worn internal component or connection issue.",
        recommendation: "When replacing the fixture, compatibility with the existing sink opening and supply connections should be confirmed.",
      },
      {
        title: "Garbage Disposal Service",
        description: "A disposal that jams, leaks or fails to operate may need inspection. Turn the unit off if it jams or behaves unusually. Never place your hand inside the disposal, even when it is switched off.",
        recommendation: "Electrical isolation, troubleshooting and any repair must follow the manufacturer's safety instructions and be performed by someone qualified for the work.",
      },
      {
        title: "Dishwasher Water and Drain Connections",
        description: "A dishwasher may fail to fill, leak or drain properly because of an appliance problem, hose issue, connection fault or restriction in the connected drainage route.",
        recommendation: "Check for visible kinks or leaks only where safe, and consult the appliance instructions. Persistent issues may need assessment of the plumbing connection or the appliance itself.",
      },
      {
        title: "Refrigerator Water Line Connections",
        description: "Refrigerator ice makers and water dispensers may use a dedicated water supply line.",
        recommendation: "A leaking or damaged line should be identified and corrected using compatible connections suitable for the installation.",
      },
    ],
    pricingPolicy: {
      estimateType: "Transparent Flat-Rate Kitchen Repairs",
      pricingModel: "Clear Pricing Before Work Starts",
      warranty: "1-Year Parts & Labor Workmanship Warranty",
      details: "All disposal replacements include heavy-duty sound insulation units, new splash guards, brass strainers, and testing under full dynamic flow. No hidden fees.",
    },
    caseStudy: {
      title: "Under-Sink Drain Rebuild & Commercial Disposal Upgrade",
      location: "Gilbert / Mesa border",
      technician: "Jesse Leyva (Founder & Master Plumber)",
      challenge: "Frequent kitchen sink clogs and cabinet wood rot caused by poor DIY drain slope and an undersized builder-grade 1/3 HP disposal.",
      solution: "Jesse re-piped the tubular slip-joints with Schedule 40 PVC, installed an InSinkErator Pro 750 (3/4 HP with multi-stage grind), and added quarter-turn stainless steel angle stops.",
      outcome: "Zero leaks, whisper-quiet disposal operation, and high-volume grease-free drainage.",
      testimonialSnippet: "Jesse took the mess under our kitchen sink and turned it into perfection. Fast, clean, and reasonably priced!",
      customerName: "Sarah & Brian M.",
    },
    steps: [
      { title: "Under-Sink Inspection", text: "We inspect the faucet, supply valves, disposal, and drain connections for leaks, corrosion, or improper slope." },
      { title: "Cabinet & Counter Protection", text: "We lay down waterproof mats to protect your cabinetry and surround the workspace cleanly." },
      { title: "Precision Repair or Replacement", text: "We rebuild faucet cartridges, replace disposals, or re-pipe the drainage system with code-compliant parts." },
      { title: "Dynamic Flow & Leak Testing", text: "We fill both sink basins, release the water under full head pressure, and check every joint for complete watertightness." },
    ],
    maintenanceHeading: "What to Confirm Before a Kitchen Plumbing Project",
    maintenance: [
      "The new fixture dimensions and sink compatibility.",
      "Existing supply and drain locations.",
      "Appliance manufacturer requirements.",
      "Access to shut-off valves and connections.",
      "Whether the project includes countertop or cabinet modifications.",
      "Any applicable approval requirements for altered plumbing.",
      "Coordination Reminder: Plumbing installation should be coordinated with the other trades involved in a remodel, especially when cabinets, counters or finished walls may limit access.",
    ],
    faqs: [
      {
        q: "Why is there water under my kitchen sink?",
        a: "Possible causes include a leaking supply line, faucet connection, sink drain or disposal connection. Dry the area if safe and observe where moisture returns rather than assuming the drain is responsible.",
      },
      {
        q: "Why does my garbage disposal make a humming sound but not grind?",
        a: "A jam or mechanical problem may prevent normal operation. Turn it off and follow the manufacturer's instructions; do not reach inside the unit.",
      },
      {
        q: "Can a dishwasher drainage problem be caused by plumbing?",
        a: "Yes. A clogged or incorrectly configured connection may affect drainage, although the appliance can also be responsible. The cause should be identified before parts are replaced.",
      },
      {
        q: "Can I install a new sink with my existing countertop?",
        a: "That depends on sink dimensions, cutout compatibility, mounting requirements and the condition of existing connections. Countertop modifications may require a separate specialist.",
      },
    ],
    related: [
      "drain-and-sewer-mesa-az",
      "gas-line-mesa-az",
      "water-heaters-mesa-az",
      "residential-plumbing-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "drain-and-sewer-mesa-az",
        anchor: "Drain Cleaning in Mesa",
        description: "Clearing cooking grease, soap scum, and food debris restrictions from kitchen branch lines.",
      },
      {
        slug: "gas-line-mesa-az",
        anchor: "Kitchen Plumbing and Appliance Connections",
        description: "Code-compliant gas line piping and shut-off valves for kitchen ranges, cooktops, and ovens.",
      },
      {
        slug: "water-heaters-mesa-az",
        anchor: "Water Heater Maintenance and Repair",
        description: "Maintaining proper hot water delivery for dishwashers, sanitization cycles, and food prep.",
      },
      {
        slug: "residential-plumbing-mesa-az",
        anchor: "Residential Plumbing Maintenance",
        description: "Protecting kitchen cabinetry with routine shut-off valve checks and water pressure monitoring.",
      },
    ],
    ctaTitle: "Request Kitchen Plumbing Service in Mesa",
    ctaText: "Explain whether the problem concerns the sink, faucet, disposal, dishwasher or another water connection. For a planned upgrade, include the new fixture or appliance details if available.",
    ctaButtonLabel: "Request Kitchen Plumbing Service",
  },
  {
    slug: "residential-plumbing-mesa-az",
    name: "Residential Plumbing & Maintenance",
    h1: "Residential Plumbing and Maintenance in Mesa, AZ",
    tagline: "Comprehensive plumbing inspections, water pressure regulation, and water softener care in Mesa, AZ",
    metaTitle: "Residential Plumber in Mesa, AZ | Prestige Plumbing",
    metaDescription: "Need residential plumbing in Mesa, AZ? Explore household plumbing inspections, pipe leaks, low water pressure, fixture repairs and preventive maintenance.",
    image: "residentialPlumbing",
    intro: [
      "A home's plumbing system includes water supply pipes, drains, fixtures, shut-off valves and equipment such as water heaters. A small problem in one component can sometimes indicate a wider issue, which is why understanding the cause matters as much as completing the repair.",
      "Prestige Plumbing Company helps Mesa homeowners explore residential plumbing services for everyday plumbing problems, fixture repairs, leak concerns and preventive maintenance. Whether you are dealing with a dripping faucet, inconsistent water pressure or several recurring plumbing issues, a systematic assessment can help determine what needs attention.",
      "Regular checks of accessible plumbing components may help homeowners notice developing problems before they cause more extensive damage.",
    ],
    benefits: [
      "Comprehensive multi-point residential plumbing inspection with written report",
      "Accurate testing and replacement of failing Pressure Reducing Valves (PRVs)",
      "Water treatment and softener guidance tailored to Mesa municipal water conditions",
      "Exterior frost-free hose bibb repair and backflow preventer testing",
      "Testing and calibration of whole-home emergency shutoff valves",
      "AZ ROC #347689 licensed, bonded, and insured plumbing contractors",
    ],
    problems: [
      "Water pressure that is consistently too low or too high",
      "Leaking faucets, running toilets, and faulty shut-off valves",
      "Visible pipe corrosion, moisture, or deteriorated fittings",
      "Water heater wear and mineral deposit buildup",
      "Hard water scaling and treatment equipment questions",
      "Multiple plumbing symptoms occurring at the same time",
    ],
    signs: [
      "Water pressure fluctuations affecting multiple fixtures",
      "Toilets that refill repeatedly or faucets with persistent drips",
      "Visible mineral crust or moisture around accessible pipe joints",
      "Unexplained increases in monthly water utility usage",
      "Loud banging sounds in pipes (water hammer) when valves close",
    ],
    detail: [
      {
        heading: "When Should You Arrange a Plumbing Inspection?",
        body: [
          "An inspection may be useful when buying or moving into a home, after repeated leaks, when water pressure changes throughout the property or when several fixtures show signs of wear.",
          "It is also worth investigating persistent dampness, unexplained water usage or recurring drain problems rather than treating each symptom independently.",
          "An assessment should clearly distinguish visible findings from suspected hidden problems, explain any recommended testing and identify repairs that may be needed.",
        ],
      },
      {
        heading: "Mesa Water Conditions and Water Treatment",
        body: [
          "The City of Mesa notes that local water hardness varies by source, with reported values of approximately 12–22 grains per gallon.",
          "Homeowners considering water filtration or softening equipment can consult the City of Mesa's water-quality guidance to review hardness and mineral reports for their area.",
        ],
      },
    ],
    diagnosticHeading: "Residential Plumbing Services",
    diagnosticOptions: [
      {
        title: "General Plumbing Repairs",
        description: "Household plumbing issues can include leaking faucets, faulty valves, running toilets, damaged supply lines, blocked drains and loose connections.",
        recommendation: "The solution depends on the component involved and the cause of its failure.",
      },
      {
        title: "Water Pressure Problems",
        description: "Water pressure that is consistently too low or too high can affect fixtures and appliances.",
        recommendation: "The cause may involve a pressure-regulating component, a restriction, a supply issue or another plumbing condition. Changes affecting several fixtures warrant a broader assessment.",
      },
      {
        title: "Pipe Leaks and Plumbing Inspections",
        description: "Inspecting accessible pipes and connections can help identify visible corrosion, moisture, deteriorated fittings and other warning signs.",
        recommendation: "Concealed problems may require additional tests or access.",
      },
      {
        title: "Water Heater and Fixture Maintenance",
        description: "Periodic attention to faucets, toilets, water heaters and accessible connections may reveal wear before a component stops operating.",
        recommendation: "Maintenance should follow equipment-specific recommendations rather than a single schedule applied to every system.",
      },
      {
        title: "Water Quality and Treatment Equipment",
        description: "Some households explore water filtration or softening because of mineral deposits, taste preferences or specific treatment needs.",
        recommendation: "The appropriate system depends on the water concern, the equipment's capabilities and maintenance requirements.",
      },
    ],
    pricingPolicy: {
      estimateType: "Multi-Point Inspection Pricing & Written Proposals",
      pricingModel: "Fixed-Fee Comprehensive Inspection & Written Report",
      warranty: "100% Satisfaction Guarantee + 1-Year Workmanship Warranty",
      details: "You receive a complete written condition report detailing pressure readings, fixture conditions, and prioritized recommendations. All repair work is quoted flat-rate before beginning.",
    },
    caseStudy: {
      title: "High-Pressure Surge Protection & Water Softener Integration",
      location: "Red Mountain Ranch, Mesa, AZ",
      technician: "Raul (Field Operations)",
      challenge: "A homeowner suffered ruptured toilet fill valves and noisy water hammer pipes due to municipal water pressure reaching 95 PSI.",
      solution: "Raul installed a 1-inch Zurn Wilkins PRV with brass pressure gauge, tuned line pressure to 65 PSI, and installed a high-efficiency water softener loop.",
      outcome: "Completely eliminated water hammer, protected home appliances, and softened the water across the entire residence.",
      testimonialSnippet: "Raul explained exactly why our fixtures kept failing. He fixed the root cause instead of just selling us band-aids. Highly recommend Prestige!",
      customerName: "Tom & Linda R.",
    },
    stepsHeading: "What to Expect During a Plumbing Inspection",
    steps: [
      { title: "Static Pressure & Main Valve Check", text: "We measure municipal line pressure at the hose bibb and test your main emergency shutoff valve." },
      { title: "Water Heater & Appliance Assessment", text: "We inspect your water heater, expansion tank, T&P relief valve, and washing machine supply lines." },
      { title: "Drainage & Trap Inspection", text: "We inspect under-sink traps, check toilets for silent leaks, and examine exterior cleanouts." },
      { title: "Written Condition Report & Recommendations", text: "We deliver a clear written report summarizing findings, prioritized safety risks, and upfront options." },
    ],
    maintenanceHeading: "A Practical Residential Plumbing Maintenance Checklist",
    maintenance: [
      "Check Accessible Areas: Look under sinks and around toilets, visible pipe joints and water heaters for moisture, corrosion or unexplained water accumulation. Never touch wet electrical components.",
      "Monitor Water Usage: Review water usage periodically. An unusual increase may warrant checking irrigation, running toilets and accessible fixtures before investigating concealed leaks.",
      "Check Toilets and Faucets: A toilet that continues refilling or a faucet that repeatedly drips may need a repair. These issues can also provide early warning of component wear.",
      "Know the Water Shut-Off Locations: Know where the home's main water shut-off valve is located and how it can be operated safely. This information is particularly useful if a pipe or supply connection fails.",
      "Follow Appliance Maintenance Instructions: Water heaters, dishwashers, washing machines and water-treatment systems have different service requirements. Follow their manufacturers' recommendations and seek professional assistance for work that requires specific qualifications.",
    ],
    faqs: [
      {
        q: "What does a residential plumbing inspection cover?",
        a: "The scope can include accessible supply lines, visible drain connections, fixtures, shut-off valves and the water heater. Additional tests may be needed depending on the property's condition and the reason for the inspection.",
      },
      {
        q: "How often should home plumbing be maintained?",
        a: "There is no single interval suitable for every component. Follow manufacturer recommendations for equipment and arrange an assessment when you notice leaks, unusual noises, recurring blockages or changes in pressure.",
      },
      {
        q: "Should I install a water softener in Mesa?",
        a: "That depends on your water conditions, household preferences, appliance needs and maintenance budget. Compare treatment options and their operating requirements before choosing a system.",
      },
      {
        q: "What should I do if several plumbing problems appear at once?",
        a: "Explain all the symptoms together. Multiple problems may be unrelated, but they can sometimes help identify a shared supply, pressure or drainage issue.",
      },
    ],
    related: [
      "water-heaters-mesa-az",
      "leak-detection-mesa-az",
      "repiping-mesa-az",
      "drain-and-sewer-mesa-az",
    ],
    relatedLinks: [
      {
        slug: "water-heaters-mesa-az",
        anchor: "Water Heater Maintenance and Repair",
        description: "Annual flushing, anode rod replacement, and temperature relief valve testing for peak efficiency.",
      },
      {
        slug: "leak-detection-mesa-az",
        anchor: "Hidden Water Leak Detection",
        description: "Non-invasive electronic testing when unexplained water bill spikes or moisture spots appear.",
      },
      {
        slug: "repiping-mesa-az",
        anchor: "Pipe Repair and Repiping",
        description: "Whole-home copper and PEX repipe solutions for aging, corroded, or brittle plumbing systems.",
      },
      {
        slug: "drain-and-sewer-mesa-az",
        anchor: "Drain Cleaning and Sewer Repair",
        description: "Preventive sewer camera inspections and drain clearing to avoid sudden wastewater backups.",
      },
    ],
    ctaTitle: "Request Residential Plumbing Service in Mesa",
    ctaText: "Tell us about the plumbing problems in your home, any repairs that have already been attempted and whether you are looking for a specific repair or a broader assessment.",
    ctaButtonLabel: "Request Residential Plumbing Service",
  },
];

export const services: Service[] = [...coreServices, ...extraServices];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
