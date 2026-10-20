import type { ImageKey } from "./images";

export interface PostDocumentedExample {
  title: string;
  scenario: string;
  resolution: string;
  technicalTakeaway: string;
}

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  technicalReviewer: string;
  date: string;
  updatedDate: string;
  readTime: string;
  category: string;
  image: ImageKey;
  sections: { heading: string; body: string[]; list?: string[] }[];
  documentedExample: PostDocumentedExample;
  takeaway: string;
}

export const posts: Post[] = [
  {
    slug: "signs-you-need-drain-cleaning",
    title: "7 Signs You Need Professional Drain Cleaning in Mesa, AZ",
    metaTitle: "7 Signs You Need Drain Cleaning Mesa AZ | Plumbing Company Mesa",
    metaDescription: "Slow drains, gurgling toilets, foul odors & recurring clogs are warnings. Learn the 7 signs your Mesa home needs drain cleaning before a sewer backup.",
    excerpt: "Drains rarely fail without warning. Here are the seven signals East Valley homeowners should never ignore — and what each one actually means inside your pipes.",
    author: "Jesse Leyva (Master Plumber)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-05-12",
    updatedDate: "2026-10-18",
    readTime: "7 min read",
    category: "Drains",
    image: "blogDrain",
    sections: [
      {
        heading: "1. Water Pools Around Your Feet in the Shower",
        body: [
          "A shower drain should evacuate water at the same rate the showerhead delivers it (typically 1.8 to 2.5 gallons per minute). When water pools around your ankles, the internal pipe diameter has been choked by a dense matrix of hair, soap scum, and body oils.",
          "Homeowners often wait until the drain stops completely, but the intermediate slow-drain stage is when professional cleaning is fastest and most affordable. Once the clog solidifies, wastewater compacts debris farther down the horizontal branch line toward the stack.",
        ],
      },
      {
        heading: "2. Toilets Gurgle When Another Fixture Runs",
        body: [
          "Gurgling indicates that negative air pressure is pulling air through the water seal of your toilet trap. This happens when a partial blockage downstream in the main sewer line restricts venting, forcing waste flow to siphon air from the nearest open trap.",
          "If a toilet bubbles or gurgles when your residential washing machine drains, the restriction is almost certainly in the shared main building drain rather than the individual fixture.",
        ],
      },
      {
        heading: "3. Persistent Sewer Gas Odors Near Drains",
        body: [
          "Properly functioning plumbing P-traps hold a water barrier that stops methane and sewer gases from entering your home. A persistent sewer odor means either a trap has evaporated, a roof vent stack is obstructed, or decomposing bio-sludge has coated the pipe walls above the water line.",
          "In Mesa's arid climate, guest bathroom traps evaporate quickly. If running water for 30 seconds does not permanently eliminate the odor, decomposing waste or a cracked vent line inside the wall is the underlying cause.",
        ],
      },
      {
        heading: "4. You Are Plunging the Same Fixture Repeatedly",
        body: [
          "Plunging once every few months is ordinary maintenance. Plunging three times in a single month indicates a physical structural defect: an offset joint catching toilet paper, an under-slab pipe belly holding standing water, or invasive tree root mats.",
          "This is where a high-definition digital sewer camera inspection pays for itself, converting guesswork into verified visual evidence.",
        ],
      },
      {
        heading: "5. Multiple Fixtures Drain Slowly at the Same Time",
        body: [
          "When a bathroom sink, shower, and toilet all drain sluggishly simultaneously, the issue is located downstream of all three: in the primary building lateral or municipal sewer connection.",
          "Main line restrictions inevitably escalate to whole-house sewage overflows. Because wastewater seeks the lowest point of relief, sewage surfaces first in ground-floor bathtubs and shower basins.",
        ],
      },
      {
        heading: "6. Drain Flies (Psychodidae) Around Sinks and Tubs",
        body: [
          "Drain flies breed and lay eggs inside the gelatinous organic biofilm that lines sluggish, dirty drain pipes. Their presence is a definitive biological indicator of accumulated organic matter.",
          "Pouring bleach or boiling water down the drain only kills surface insects temporarily. Eliminating the infestation requires mechanical cabling or hydro jetting to scrub the breeding biofilm from the pipe walls.",
        ],
      },
      {
        heading: "7. Water Backs Up in Unexpected Locations",
        body: [
          "If running your kitchen sink causes water to back up into your laundry standpipe, or running the washing machine floods the master shower, your main drainage path is compromised. Treat this as an immediate plumbing emergency.",
          "Shut off all water-consuming appliances immediately. Adding more water volume to a blocked system will inevitably force sewage onto your flooring.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Diagnostic: Chronic Shower Backup in Dobson Ranch",
      scenario: "Homeowner reported monthly shower clogs that chemical drain cleaners failed to resolve. Cabling heads returned with black grease and fibrous debris.",
      resolution: "Our technician fed a Rigid microREEL sewer camera through the cleanout, identifying heavy calcified hard water scale and fine ficus roots entering a clay joint 32 feet out. We hydro-jetted the line at 4,000 PSI, restoring 100% flow diameter.",
      technicalTakeaway: "Chemical drain cleaners never dissolve roots or mineral scale—they merely erode the bottom of the pipe. Always verify chronic clogs with inline video cameras.",
    },
    takeaway: "Address slow drains while they are still merely slow before they turn into a full-blown emergency backup. Plumbing Company Mesa provides expert camera inspections and hydro jetting across Mesa, Gilbert, Chandler, and Phoenix. Call (480) 681-3808 for upfront flat-rate service.",
  },
  {
    slug: "why-water-heaters-fail",
    title: "Why Water Heaters Fail in Arizona (And How to Extend Their Lifespan)",
    metaTitle: "Why Water Heaters Fail Arizona | Hard Water Guide | Plumbing Company Mesa",
    metaDescription: "Hard water sediment, sacrificial anode rod depletion & high pressure kill Arizona water heaters. Learn why tanks fail and how to double your unit's life.",
    excerpt: "Most water heaters in the East Valley fail years before their intended lifespan — almost always due to the same three regional factors. Here is what actually happens inside your tank.",
    author: "Raul (Field Operations & Water Heater Specialist)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-05-20",
    updatedDate: "2026-10-18",
    readTime: "8 min read",
    category: "Water Heaters",
    image: "waterHeaterOld",
    sections: [
      {
        heading: "Cause One: Heavy Mineral Sediment Accumulation",
        body: [
          "Mesa and East Valley tap water carries an extreme mineral load (15 to 25 grains of dissolved calcium and magnesium per gallon). When water is heated above 120°F, these minerals precipitate out of solution and settle at the bottom of the tank, forming a dense calcified rock barrier.",
          "On gas water heaters, the burner fires directly beneath this sediment crust. Because heat cannot transfer efficiently through solid mineral rock, the steel tank floor overheats, expanding and contracting beyond its engineering tolerance. This cracks the protective internal glass porcelain lining, exposing bare steel to direct corrosion and eventual tank rupture.",
          "The popping, knocking, or rumbling sounds homeowners hear is water trapped beneath the sediment layer boiling into steam. It is not harmless—it is the sound of your tank undergoing destructive thermal stress.",
        ],
      },
      {
        heading: "Cause Two: Sacrificial Anode Rod Depletion",
        body: [
          "Every tank water heater contains a sacrificial anode rod (magnesium or aluminum) designed to corrode preferentially through galvanic action so the steel tank does not rust. It is the single most vital protective component in the appliance.",
          "In soft water, an anode rod can last 6 to 8 years. In Mesa's aggressive mineral water, an anode rod is often completely depleted down to its steel wire core in 3 to 4 years. Once the sacrificial rod is consumed, electrolytic corrosion attacks the steel tank walls directly.",
          "Replacing an anode rod every 3 to 4 years costs a fraction of a new water heater and can add 5 to 7 years of service to your unit.",
        ],
      },
      {
        heading: "Cause Three: Excessive Water Pressure & Thermal Expansion",
        body: [
          "Water expands in volume by roughly 2% when heated. In a closed plumbing system—one equipped with a backflow preventer or Pressure Reducing Valve (PRV) at the meter—that thermal expansion has nowhere to escape, causing internal pressure to spike dramatically during every heating cycle.",
          "Without a functioning thermal expansion tank, these pressure surges stress the tank welds, weaken internal flue baffles, and cause Temperature & Pressure (T&P) relief valves to drip continuously.",
          "Static household water pressure should remain between 55 and 70 PSI. Pressure exceeding 80 PSI violates uniform plumbing code and drastically accelerates tank failure.",
        ],
      },
      {
        heading: "Warning Signs Your Water Heater Is Nearing Total Failure",
        body: [
          "Water heaters rarely fail without advance warning. Watching for early symptoms allows you to plan a replacement rather than dealing with an emergency flooded garage.",
        ],
        list: [
          "Loud popping, banging, or rumbling noises during active heating cycles",
          "Hot water running out noticeably faster during normal family showers",
          "Rusty, discolored, or metallic-tasting water on the hot side only",
          "Moisture, corrosion, or a wet mineral ring forming around the tank base",
          "The Temperature & Pressure (T&P) relief valve dripping water into the discharge tube",
          "The tank is over 8–10 years old in an East Valley home without a water softener",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: 10-Year Water Heater Rupture in Superstition Springs",
      scenario: "Homeowner experienced complete loss of hot water and 20 gallons of water in the garage drip pan. The unit had never received an annual sediment flush.",
      resolution: "We extracted the ruptured 50-gallon tank, revealing over 40 lbs of hardened calcium limestone inside. We installed a Bradford White commercial-grade gas heater with a new thermal expansion tank and brass shutoff valve.",
      technicalTakeaway: "Sediment build-up acts like an insulator. A water heater with 3 inches of sediment consumes up to 30% more energy before rupturing prematurely.",
    },
    takeaway: "Protecting your water heater requires annual flushing, timely anode rod replacements, and regulated static water pressure. Plumbing Company Mesa provides expert water heater repair, replacement, and tankless conversions across Mesa and the East Valley. Call (480) 681-3808 for upfront flat-rate pricing.",
  },
  {
    slug: "how-to-prevent-plumbing-emergencies",
    title: "How to Prevent Catastrophic Plumbing Emergencies in Arizona",
    metaTitle: "Prevent Plumbing Emergencies Mesa AZ | Plumbing Company Mesa",
    metaDescription: "Avoid costly burst pipes, slab leaks & sewer backups. Master plumber checklist for protecting your Mesa, AZ home from sudden water damage.",
    excerpt: "Plumbing emergencies cause billions in property damage every year. Here is the verified prevention checklist used by licensed Arizona master plumbers to safeguard your home.",
    author: "Jesse Leyva (Founder & Master Plumber)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-06-02",
    updatedDate: "2026-10-18",
    readTime: "6 min read",
    category: "Prevention",
    image: "emergencyPlumbing",
    sections: [
      {
        heading: "1. Locate and Test Your Main Whole-Home Water Shutoff Valve",
        body: [
          "When a 1-inch pressurized supply pipe ruptures, it can flood your home with 40 to 60 gallons of water per minute. In an emergency, every second spent searching for your main shutoff valve equates to thousands of dollars in ruined flooring and drywall.",
          "Locate your main shut-off valve today (typically located on the exterior front wall near your hose bibb, or inside the garage near the water heater). If your valve is an old multi-turn gate valve with a round wheel, test it gently. Gate valves frequently seize or snap internally. We strongly recommend upgrading to a modern quarter-turn brass ball valve.",
        ],
      },
      {
        heading: "2. Replace Rubber Washing Machine Hoses with Braided Stainless Steel",
        body: [
          "Standard black rubber washing machine hoses are under continuous municipal water pressure 24/7. Over time, internal rubber degrades, bubbles, and bursts catastrophically—often while homeowners are away at work.",
          "Replace rubber hoses every 5 years with burst-proof braided stainless steel supply lines. Consider installing an automatic washing machine shut-off valve that relieves pressure when the appliance is idle.",
        ],
      },
      {
        heading: "3. Monitor Household Static Water Pressure Regularly",
        body: [
          "Municipal water providers in Mesa and Phoenix often pump water at 85 to 110+ PSI to ensure adequate pressure across vast distribution grids. However, residential appliances and plumbing joints are only rated for up to 80 PSI.",
          "High water pressure constantly strains toilet fill valves, flexible faucet connectors, and copper solder joints. Install an inexpensive screw-on pressure gauge on an outdoor hose bibb once a year. If pressure exceeds 75 PSI, install or replace your Pressure Reducing Valve (PRV).",
        ],
      },
      {
        heading: "4. Eliminate Builder-Grade Plastic Push-Pull Angle Stops",
        body: [
          "Many high-volume residential subdivisions in the East Valley were built with cheap plastic push-pull angle stops under sinks and behind toilets. After 7 to 10 years of exposure to Arizona's chlorinated water, the plastic becomes brittle and cracks when touched.",
          "Proactively replace plastic shutoffs with commercial-grade, all-brass quarter-turn ball angle stops with Teflon seals.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: Ruptured Guest Bath Plastic Angle Stop",
      scenario: "Homeowner attempted to replace a toilet flapper; turning the builder-grade plastic angle stop snapped the stem clean off, flooding the hallway at 70 PSI.",
      resolution: "Our emergency plumber arrived in 30 minutes, isolated the street meter, cut back the damaged copper stub-out, and installed a heavy-duty brass compression angle stop.",
      technicalTakeaway: "Never force a seized plastic angle stop. If it doesn't turn smoothly with light hand pressure, shut off the whole-home main water valve before proceeding.",
    },
    takeaway: "Preventative plumbing maintenance is always a fraction of the cost of emergency water damage restoration. Plumbing Company Mesa provides comprehensive whole-home plumbing inspections across Mesa, Gilbert, Chandler, and Phoenix. Call (480) 681-3808 to schedule your inspection.",
  },
  {
    slug: "benefits-of-hydro-jetting",
    title: "The Benefits of Hydro Jetting: Why Snaking Isn't Always Enough",
    metaTitle: "Benefits of Hydro Jetting Mesa AZ | Sewer Cleaning | Plumbing Company Mesa",
    metaDescription: "Mechanical snakes punch holes, but 4,000 PSI hydro jetting scours away grease, roots & scale. Learn why hydro jetting provides permanent sewer line clearing.",
    excerpt: "Traditional drain snakes clear temporary paths, but hydro jetting restores pipes to like-new internal diameter. Here is the technical breakdown of how high-pressure jetting works.",
    author: "Raul (Field Operations Specialist)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-06-15",
    updatedDate: "2026-10-18",
    readTime: "7 min read",
    category: "Drain Cleaning",
    image: "blogDrain",
    sections: [
      {
        heading: "Mechanical Snaking vs. Hydro Jetting: Understanding the Difference",
        body: [
          "A mechanical drain snake (or motorized cabling machine) utilizes a flexible steel cable with an articulated cutting blade at the tip. It rotates down the pipe to punch a hole through a soft clog and restore basic water flow.",
          "However, a snake only clears a path the exact width of its cutting head (typically 1 to 2 inches inside a 4-inch sewer pipe). It leaves behind a thick coating of grease, soap scum, and tree root stubs along the pipe walls. Within weeks or months, new debris catches on these rough edges and the backup returns.",
          "Hydro jetting utilizes a heavy-duty commercial pump delivering up to 4,000 PSI of pressurized water through specialized forward-penetrating and reverse-scouring nozzles. It strips grease, pulverizes tree roots, and flushes hard mineral scale completely out of the pipe.",
        ],
      },
      {
        heading: "Complete 360-Degree Cleaning of Pipe Walls",
        body: [
          "The reverse-thrust jets on a hydro jetter propel the nozzle forward through the sewer line while scouring the entire 360-degree circumference of the pipe interior. It emulsifies solidified fats, oils, and grease (FOG) that mechanical cables simply slide through.",
          "Hydro jetting restores the full original flow capacity of cast-iron, PVC, and clay sewer lines, delaying the recurrence of future clogs by years rather than weeks.",
        ],
      },
      {
        heading: "Pulverizing Invasive Tree Root Systems",
        body: [
          "In older Mesa and Tempe neighborhoods, mature ficus, eucalyptus, and palm roots aggressively enter sewer joints in search of moisture. Mechanical cables slice through the center of root balls, leaving thick root collars that regrow rapidly.",
          "Hydro jetting nozzles equipped with rotating hardened steel chains or laser-cut water streams shear roots flush against the pipe wall, clearing the entire joint and preparing the pipe for permanent trenchless lining if necessary.",
        ],
      },
      {
        heading: "Why Camera Inspection Must Always Precede Jetting",
        body: [
          "Hydro jetting is powerful and should only be performed by licensed plumbing professionals. Before jetting any sewer line, our technicians run a high-definition digital sewer camera to inspect the structural integrity of the pipe.",
          "If an old clay or orangeburg pipe has collapsed, cracked, or separated, high-pressure jetting could cause further damage. Camera verification ensures the line can safely handle 4,000 PSI scouring.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: Commercial Kitchen Line Jetting in Mesa",
      scenario: "A local restaurant experienced weekly kitchen floor drain backups despite regular mechanical snaking. Cable blades were coming back coated in heavy yellow grease.",
      resolution: "We performed a preliminary camera inspection to verify Schedule 40 PVC integrity, followed by high-pressure hydro jetting with a spinning grease nozzle at 3,800 PSI, scouring 120 feet of line clean to city main.",
      technicalTakeaway: "Grease acts like soft wax—a cable punch merely creates a tunnel that closes right back up. Only high-pressure water emulsifies grease out of the drainage system.",
    },
    takeaway: "For permanent drain and sewer clearing, hydro jetting is the gold standard. Plumbing Company Mesa provides professional sewer camera inspections and commercial-grade hydro jetting across Mesa, Gilbert, Chandler, and Phoenix. Call (480) 681-3808 to schedule service.",
  },
  {
    slug: "common-plumbing-problems-in-mesa",
    title: "Top 5 Plumbing Problems Unique to Mesa, AZ (And What Causes Them)",
    metaTitle: "Common Plumbing Problems in Mesa AZ | Plumbing Company Mesa",
    metaDescription: "Mesa's hard water, under-slab copper pinholes, shifting clay soils & high municipal pressure create unique challenges. Learn how local master plumbers solve them.",
    excerpt: "Arizona desert conditions, regional water chemistry, and local building practices combine to create plumbing issues you won't find in other parts of the country.",
    author: "Jesse Leyva (Founder & Master Plumber)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-06-25",
    updatedDate: "2026-10-18",
    readTime: "8 min read",
    category: "Local Plumbing",
    image: "aboutTeam",
    sections: [
      {
        heading: "1. Extreme Mineral Hard Water (15–25 Grains Per Gallon)",
        body: [
          "Mesa's municipal water supply blends surface water from the Salt River and Colorado River (via the Central Arizona Project) with deep groundwater wells. All three sources carry heavy concentrations of dissolved calcium and magnesium.",
          "This mineral hardness rapidly coats heating elements, calcifies shower cartridges, reduces water pressure at faucet aerators, and leaves stubborn white crust on glass enclosures. Installing an ion-exchange water softener is the single most effective way to protect household appliances in Mesa.",
        ],
      },
      {
        heading: "2. Under-Slab Copper Pinhole Leaks (Slab Leaks)",
        body: [
          "Between the 1970s and early 2000s, thousands of homes in East Mesa, Dobson Ranch, and Red Mountain Ranch were built with soft copper water lines laid directly into caliche soil beneath concrete foundation slabs.",
          "Over decades, aggressive water chemistry corrodes copper from the inside, while soil settling rubs pipes against abrasive rocks from the outside. Pinhole leaks develop, causing warm floor spots, foundation settling, and huge water bills. We locate them acoustically and execute overhead PEX attic reroutes.",
        ],
      },
      {
        heading: "3. Expansive Caliche & Clay Soil Movement",
        body: [
          "Mesa soil contains dense layers of caliche (calcium carbonate cemented soil) and expansive clay that swell significantly during monsoon storm deluges and shrink during dry summer heat.",
          "This ground expansion puts heavy shear stress on underground main water service lines, irrigation pipes, and sewer laterals, leading to cracked pipe joints and subterranean leaks.",
        ],
      },
      {
        heading: "4. Municipal Water Pressure Spikes (85–110+ PSI)",
        body: [
          "Because Mesa covers over 138 square miles with varying elevations from the valley floor to the Usery Mountain foothills, municipal water utilities pump at high pressures to reach all zones.",
          "Pressures regularly exceed 85 to 100 PSI at residential meters. Left unregulated, these pressure surges rupture water heater tanks, cause water hammer banging, and blow out toilet valves. Pressure Reducing Valves (PRVs) are mandatory for system protection.",
        ],
      },
      {
        heading: "5. Summer Monsoon Storm Sewer Backups",
        body: [
          "During July and August monsoon storms, intense localized rainfall can overwhelm storm drainage systems and infiltrate older municipal sanitary sewer lines through manholes and roof vents.",
          "If your home's main sewer lateral has existing root intrusions or grease buildup, monsoon surges cause immediate sewage backups into ground-floor fixtures. Cleanouts and backwater valves prevent backflow.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: East Mesa Slab Leak & Pressure Surge Repair",
      scenario: "Homeowner experienced a $260 water bill increase and loud water hammer noises whenever laundry cycles stopped. Static pressure tested at 98 PSI.",
      resolution: "We located a pinhole hot water slab leak under the hallway tile using acoustic microphones, performed an overhead PEX-A attic reroute, and replaced the failed 15-year-old PRV.",
      technicalTakeaway: "Unregulated municipal water pressure accelerates copper erosion dramatically. Lowering pressure from 98 PSI to 65 PSI doubles plumbing component life.",
    },
    takeaway: "Mesa homes require plumbing solutions engineered specifically for Arizona desert conditions. Plumbing Company Mesa is licensed, bonded, and headquartered right here in Mesa. Call (480) 681-3808 for honest flat-rate service.",
  },
  {
    slug: "residential-plumbing-maintenance-tips",
    title: "The Ultimate Arizona Residential Plumbing Maintenance Schedule",
    metaTitle: "Plumbing Maintenance Checklist Mesa AZ | Plumbing Company Mesa",
    metaDescription: "Comprehensive seasonal plumbing maintenance checklist for Arizona homeowners. Protect water heaters, PRV valves & sewer lines from costly failures.",
    excerpt: "Preventative plumbing maintenance takes minutes a month but saves thousands of dollars in emergency repairs. Here is your step-by-step Arizona maintenance schedule.",
    author: "Raul (Lead Estimator & Field Operations)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-07-02",
    updatedDate: "2026-10-18",
    readTime: "7 min read",
    category: "Maintenance",
    image: "residentialPlumbing",
    sections: [
      {
        heading: "Monthly Homeowner Plumbing Checklist",
        body: [
          "Perform a simple visual walk-through once a month to catch minor leaks before they cause rot:",
        ],
        list: [
          "Check under all kitchen and bathroom vanity sinks for dampness or water stains",
          "Inspect toilet tanks for silent leaks by adding a few drops of food coloring into the tank (if color appears in the bowl within 15 minutes, replace the flapper)",
          "Inspect water softener salt brine levels and break up any hardened salt bridges",
          "Check the digital leak indicator on your water meter when no water is running",
        ],
      },
      {
        heading: "Quarterly Plumbing Checklist",
        body: [
          "Every three months, address fixtures exposed to mineral hardness:",
        ],
        list: [
          "Unscrew faucet aerators and showerheads; soak in white vinegar to dissolve calcium scale",
          "Exercise all fixture angle stop valves by turning them off and on to prevent mineral seizure",
          "Pour a bucket of water down unused guest bathroom drains to refill dried P-traps",
          "Inspect washing machine stainless steel braided hoses for kinks, bulges, or corrosion",
        ],
      },
      {
        heading: "Annual Master Plumbing Checklist",
        body: [
          "Once a year, perform critical heavy maintenance on your major plumbing infrastructure:",
        ],
        list: [
          "Flush your water heater tank to purge accumulated calcium and magnesium sediment",
          "Test the Temperature & Pressure (T&P) relief valve on your water heater for smooth operation",
          "Test household static water pressure with a gauge (ensure pressure stays between 55 and 70 PSI)",
          "Schedule a professional sewer camera inspection if you have mature trees near sewer laterals",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: Annual Maintenance Inspection in Las Sendas",
      scenario: "During an annual 45-point inspection, our technician tested incoming water pressure at 94 PSI and identified a failing water heater T&P valve dripping into the wall cavity.",
      resolution: "We installed a new Zurn Wilkins PRV set to 65 PSI, replaced the corroded T&P valve, and completed an annual sediment flush of the 50-gallon Bradford White tank.",
      technicalTakeaway: "Annual inspections consistently catch minor component failures—like leaking T&P valves or failing regulators—months before they cause catastrophic structural flooding.",
    },
    takeaway: "Regular maintenance keeps your plumbing reliable and safeguards your home investment. Plumbing Company Mesa provides multi-point residential plumbing inspections across Mesa, Gilbert, Chandler, and Phoenix. Call (480) 681-3808 to book your inspection.",
  },
  {
    slug: "gas-line-safety-guide",
    title: "Arizona Gas Line Safety: Rotten Egg Smells, Utility Red-Tags, and Code Compliance",
    metaTitle: "Gas Line Safety Guide Mesa AZ | Licensed Gas Plumber | Plumbing Company Mesa",
    metaDescription: "What to do if you smell natural gas, get red-tagged by Southwest Gas, or need outdoor BBQ/fire pit lines. Licensed Arizona gas plumbing guide.",
    excerpt: "Natural gas is safe and efficient when properly maintained, but gas leaks require immediate, protocol-driven action. Here is what every Arizona homeowner must know.",
    author: "Jesse Leyva (Founder & Master Plumber)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-07-10",
    updatedDate: "2026-10-18",
    readTime: "7 min read",
    category: "Gas Lines",
    image: "gasLine",
    sections: [
      {
        heading: "What to Do Immediately If You Smell Natural Gas",
        body: [
          "Natural gas is naturally colorless and odorless. Gas utilities inject a harmless chemical odorant called mercaptan, which smells distinctly like rotten eggs or sulfur, so leaks can be detected instantly.",
          "If you smell a strong gas odor inside your home: do not flip light switches, do not ignite matches, do not unplug appliances, and do not use your phone indoors (any electrical spark can ignite gas). Evacuate all occupants immediately, leave doors open, and call 911 or Southwest Gas from across the street.",
        ],
      },
      {
        heading: "Understanding Southwest Gas 'Red-Tag' Lockouts",
        body: [
          "If Southwest Gas responds to a leak report, their technicians shut off the gas meter and place a physical red lock and warning tag on the valve. The utility cannot legally restore gas service until a licensed plumbing contractor performs the repair, passes a mechanical pressure decay test, and provides official documentation.",
          "Do not panic if you are red-tagged. Plumbing Company Mesa responds rapidly to utility lockouts. We isolate lines, pressure-test with compressed air at 15 PSI, make code-compliant repairs using black iron or poly gas pipe, and coordinate municipal inspections for fast gas restoration.",
        ],
      },
      {
        heading: "Proper Gas Line Sizing for Outdoor Living Appliances",
        body: [
          "Adding a 100,000 BTU outdoor BBQ island, a 50,000 BTU fire pit, or a 400,000 BTU pool heater requires precise pipe capacity calculations. If a line is undersized, running your pool heater will starve your indoor water heater and furnace of fuel.",
          "We calculate cumulative household BTU loads, determine correct pipe diameters, and install underground yellow medium-density polyethylene (MDPE) pipe with anodeless risers buried to strict code depth.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: Whole-Home Gas Line Reroute After Southwest Gas Lockout",
      scenario: "Southwest Gas locked out a Mesa home's meter after a minor yard leak was detected. The family had no hot water, heat, or cooking gas.",
      resolution: "Jesse and Raul performed an emergency pressure decay test, identified corroded underground steel pipe, trenched 90 feet, installed code-compliant poly gas pipe with tracer wire, and passed city inspection in 48 hours.",
      testimonialSnippet: "Jessie and Raul were great to work with as they had to replace the majority of our gas lines. Professional, honest, on time, and did an awesome job restoring my landscaping.",
      technicalTakeaway: "Underground gas lines must use approved polyethylene pipe with anodeless steel risers—never bury bare black iron directly in corrosive desert soil.",
    },
    takeaway: "Gas line work must always be performed by licensed, bonded Arizona ROC contractors. Plumbing Company Mesa  provides emergency gas leak repairs, pressure testing, and appliance hookups across Mesa and the Valley. Call (480) 681-3808 immediately.",
  },
  {
    slug: "toilet-repair-guide",
    title: "The Homeowner's Guide to Toilet Repair: Phantom Flushes, Leaks, and Wobbles",
    metaTitle: "Toilet Repair Guide Mesa AZ | Running Toilet Fix | Plumbing Company Mesa",
    metaDescription: "Fix ghost flushing, leaking tank flappers, broken fill valves & wobbly toilet bases. Learn when to DIY and when to call a licensed Mesa plumber.",
    excerpt: "Toilets account for over 30% of total indoor water usage. Here is the diagnostic breakdown of phantom flushes, fill valve failures, and dangerous wax seal leaks.",
    author: "Raul (Field Operations Specialist)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-07-18",
    updatedDate: "2026-10-18",
    readTime: "6 min read",
    category: "Bathrooms",
    image: "bathroomPlumbing",
    sections: [
      {
        heading: "1. The 'Phantom Flush': Why Your Toilet Runs By Itself",
        body: [
          "If your toilet intermittently runs for two to three seconds without anyone touching the handle, it is experiencing a 'phantom flush'. This occurs when water slowly leaks out of the toilet tank into the bowl.",
          "The cause is almost always a deteriorated rubber flapper or mineral scale on the flush valve seat. In Arizona's hard water, rubber flappers warp or become encrusted within 3 to 5 years, breaking the watertight seal. Replacing the flapper permanently cures the problem and stops wasting hundreds of gallons of water per week.",
        ],
      },
      {
        heading: "2. The Toilet Tank Hisses Continuously (Fill Valve Failure)",
        body: [
          "If your toilet hisses constantly, water is continuously running into the overflow tube. This means the fill valve (ballcock assembly) has failed internally or the float is set too high.",
          "Hard water minerals deposit inside the tiny diaphragm of the fill valve, preventing it from shutting off completely. Replacing the entire fill valve assembly with a commercial-grade Fluidmaster 400A restores quiet, reliable operation.",
        ],
      },
      {
        heading: "3. The Rocking Toilet: Danger of Subfloor Rot",
        body: [
          "A toilet should be firmly anchored to the floor with zero wobble or movement. If a toilet rocks when sat on, the wax ring seal beneath the base has broken, and wastewater is seeping into the subfloor with every flush.",
          "Never simply tighten the closet bolts with a wrench—over-tightening will crack the porcelain base! The toilet must be unbolted, the wax ring replaced, the closet flange inspected for cracks, and the base properly shimmed and caulked.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: Cracked Closet Flange Repair in Alta Mesa",
      scenario: "Homeowner noticed soft flooring and a slight sewer odor around a rocking master bathroom toilet. Previous handyman had tried to caulk over the gap.",
      resolution: "We pulled the toilet, discovered a rotted wax ring and cracked cast-iron closet flange, installed a stainless steel flange repair ring, set a heavy-duty reinforced wax seal, and leveled the base with plastic shims.",
      technicalTakeaway: "Never caulk around a rocking toilet base without verifying the wax seal. Caulking traps leaking water beneath the porcelain, rotting subfloors and drywall ceilings below.",
    },
    takeaway: "Leaking toilets waste thousands of gallons of water and can destroy subflooring. Plumbing Company Mesa provides expert toilet repair, rebuilds, and replacements across Mesa and the East Valley. Call (480) 681-3808 for upfront flat-rate service.",
  },
  {
    slug: "water-heater-maintenance-checklist",
    title: "Step-by-Step Water Heater Maintenance Checklist for Arizona Homeowners",
    metaTitle: "Water Heater Maintenance Checklist Mesa AZ | Plumbing Company Mesa",
    metaDescription: "Step-by-step DIY guide: flushing water heater sediment, testing T&P relief valves, checking anode rods & tankless descaling in Arizona's hard water.",
    excerpt: "With Arizona's severe mineral hardness, regular water heater maintenance isn't optional—it's essential to avoid early tank replacement. Here is your step-by-step maintenance guide.",
    author: "Jesse Leyva (Founder & Master Plumber)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-07-28",
    updatedDate: "2026-10-18",
    readTime: "8 min read",
    category: "Water Heaters",
    image: "waterHeaters",
    sections: [
      {
        heading: "Step 1: How to Safely Flush Your Water Heater Tank",
        body: [
          "Flushing your tank purges calcified mineral sediment before it bakes into solid rock:",
        ],
        list: [
          "Turn off power to the water heater (shut off circuit breaker for electric models; turn gas valve to 'PILOT')",
          "Shut off the cold water inlet valve on top of the heater",
          "Attach a heavy-duty garden hose to the brass drain valve at the base of the tank, running the opposite end to an exterior drain or driveway",
          "Open the drain valve and open a hot water faucet inside the house to break vacuum suction",
          "Allow the tank to drain completely; then open the cold water supply valve in short bursts to stir up and flush remaining sediment until the water runs completely clear",
          "Close the drain valve, disconnect the hose, refill the tank completely with water, and only then restore power or relight the burner",
        ],
      },
      {
        heading: "Step 2: Testing the Temperature & Pressure (T&P) Relief Valve",
        body: [
          "The T&P valve is your water heater's primary safety device, designed to open automatically if internal pressure exceeds 150 PSI or temperature exceeds 210°F.",
          "Lift the small metal test lever briefly. Water should discharge rapidly into the drain pipe. Release the lever; the valve should snap shut and stop dripping immediately. If it continues to leak, replace the valve immediately.",
        ],
      },
      {
        heading: "Step 3: Checking the Sacrificial Anode Rod",
        body: [
          "Turn off water and relieve tank pressure. Use a 1-1/16\" socket wrench on the hex nut on top of the heater to unscrew the anode rod.",
          "If the rod is coated in thick calcium crust or worn down to its thin center steel core wire, replace it with a new magnesium or aluminum anode rod immediately.",
        ],
      },
      {
        heading: "Step 4: Annual Descaling for Tankless Water Heaters",
        body: [
          "Tankless water heaters require annual descaling to remove mineral scale from the copper or stainless steel heat exchanger. Close the service isolation valves, connect a submersible utility pump to 4 gallons of food-grade virgin white vinegar, and circulate the vinegar through the unit for 45 minutes to dissolve calcification.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: Tankless Error Code 027 Flush in Gilbert",
      scenario: "Homeowner's Navien tankless unit displayed error code 027 (water overheating) and shut down mid-shower due to heavy hard water scale in the heat exchanger.",
      resolution: "We connected our descaling circulation kit with a 1/6 HP pump and virgin white vinegar, circulating for 60 minutes. Flushed out over 2 cups of dissolved calcium carbonates, clearing error codes.",
      technicalTakeaway: "Tankless units in Arizona must have isolation service valves installed. Without annual descaling, hard water scale invalidates manufacturer warranties.",
    },
    takeaway: "Proper annual maintenance doubles water heater life and lowers utility bills. Plumbing Company Mesa provides professional water heater flushes, anode replacements, and tankless descaling across Mesa, Gilbert, Chandler, and Phoenix. Call (480) 681-3808.",
  },
  {
    slug: "how-to-detect-hidden-leaks",
    title: "How to Detect Hidden Plumbing Leaks Behind Walls and Under Concrete Slabs",
    metaTitle: "Detect Hidden Leaks Mesa AZ | Slab Leak Guide | Plumbing Company Mesa",
    metaDescription: "Learn how to use your water meter to detect hidden leaks, recognize slab leak symptoms, and understand modern non-invasive acoustic detection technology.",
    excerpt: "Hidden plumbing leaks quietly destroy structural framing, cause mold, and drive water bills through the roof. Here is how to test for leaks and pinpoint them non-invasively.",
    author: "Jesse Leyva (Founder & Master Plumber)",
    technicalReviewer: "Jesse Leyva, Master Plumber",
    date: "2026-08-05",
    updatedDate: "2026-10-18",
    readTime: "7 min read",
    category: "Leak Detection",
    image: "leakDetection",
    sections: [
      {
        heading: "1. The 15-Minute Water Meter Leak Test",
        body: [
          "The fastest way to confirm whether your home has a pressurized water leak is using your municipal water meter:",
        ],
        list: [
          "Ensure all water fixtures inside and outside the home are completely turned off (toilets, ice maker, washing machine, irrigation)",
          "Locate your water meter box near the street curb and lift the lid",
          "Observe the small triangular or star-shaped low-flow leak indicator dial (or digital flow register). If the dial is spinning even slowly, water is escaping somewhere in your system",
          "If the dial appears still, write down the exact reading, wait 15 minutes without using any water, and check again. Any change in the reading confirms a leak",
        ],
      },
      {
        heading: "2. Symptoms of an Under-Slab Foundation Leak",
        body: [
          "In the East Valley, soft copper lines embedded in caliche soil beneath concrete slabs are prone to pinhole ruptures. Symptoms include:",
        ],
        list: [
          "Unexplained warm or hot spots on tile, laminate, or carpeted flooring",
          "The sound of running water behind walls or under the floor when all taps are closed",
          "Baseboards warping, discoloring, or separating from drywall",
          "Musty odors or unexplained localized humidity in carpeted bedrooms",
          "A dramatic unexplained jump in your monthly municipal water utility bill",
        ],
      },
      {
        heading: "3. Professional Acoustic & Thermal Leak Pinpointing",
        body: [
          "Never allow a contractor to guess where a leak is by jackhammering exploratory holes through your flooring. Licensed leak detection specialists use non-invasive technology:",
          "We isolate hot and cold lines with digital pressure gauges, then use ultrasonic ground microphones to listen to pipe friction frequencies through the concrete slab. FLIR thermal infrared cameras visually map the heat signature of hot water migrating under the floor, pinpointing the leak to a tiny footprint.",
        ],
      },
      {
        heading: "4. The Overhead PEX Attic Reroute Solution",
        body: [
          "Once an under-slab leak is confirmed, breaking the slab to repair a single pinhole is rarely the best choice. Aging copper will likely develop another leak nearby.",
          "Our recommended solution is an overhead PEX-A attic reroute. We abandon the compromised line under the foundation completely, routing new Uponor PEX-A through your attic space. Your concrete and tile remain undisturbed, and the fix is permanent.",
        ],
      },
    ],
    documentedExample: {
      title: "Field Case: Acoustic Slab Leak Pinpoint in Ahwatukee Foothills",
      scenario: "Homeowner experienced warm tile in the master closet and a $220 water bill increase. Water meter dial was spinning continuously at 1.2 GPM.",
      resolution: "We connected digital pressure gauges to verify a hot water loop failure, used ultrasonic ground microphones to pinpoint the rupture under the closet slab, and completed an overhead Uponor PEX-A reroute in 24 hours.",
      technicalTakeaway: "Non-invasive electronic leak detection saves homeowners thousands by eliminating destructive exploratory floor demolition.",
    },
    takeaway: "If you suspect a hidden leak, prompt action prevents catastrophic structural damage. Plumbing Company Mesa provides non-invasive acoustic leak detection and overhead PEX reroutes across Mesa, Gilbert, Chandler, and Phoenix. Call (480) 681-3808 for immediate assistance.",
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
