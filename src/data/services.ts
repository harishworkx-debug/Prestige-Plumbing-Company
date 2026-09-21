import type { ImageKey } from "./images";
import { extraServices } from "./services-extra";
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
    slug: "emergency-plumbing-mesa-az",
    name: "Emergency Plumbing",
    tagline: "24/7 residential emergency plumbing connections across Mesa and the Phoenix metro",
    metaTitle: "24/7 Emergency Plumber Mesa AZ | Residential Connections | Prestige Plumbing",
    metaDescription: "Connect with emergency residential plumbers in Mesa & Phoenix metro. Available 24/7 for burst pipes and water heater failures. Call (480) 863-0564 now.",
    image: "emergencyPlumbing",
    intro: [
      "A plumbing emergency does not schedule itself around business hours. Water travels fast, drywall absorbs it faster, and in Arizona's dry climate a hidden leak can quietly destroy framing and flooring. Prestige Plumbing Company helps homeowners connect with independent emergency professionals across Mesa, Phoenix, Chandler, Gilbert, Tempe and Scottsdale.",
      "When you call our emergency line, the first thing we do is help connect you with a local professional who can provide over-the-phone guidance to stop the damage while a technician is dispatched.",
      "The independent emergency providers we connect you with arrive with trucks stocked as complete mobile workshops. That inventory helps them complete residential repairs quickly.",
    ],
    benefits: [
      "24/7 immediate connection with independent local professionals",
      "Over-the-phone guidance to stop water damage while providers are en route",
      "Connections to providers with fully stocked trucks",
      "Network of licensed residential emergency technicians",
      "Flat-rate emergency pricing quoted directly by the provider",
      "Contractors who can coordinate with residential water mitigation teams",
    ],
    problems: [
      "Burst or ruptured interior residential supply lines",
      "Catastrophic water heater failure and home flooding",
      "Sewer main backups into residential showers and ground-floor fixtures",
      "Residential gas leaks detected by smell",
      "Loss of all water pressure to the home",
      "Slab leaks surfacing rapidly through residential flooring",
    ],
    signs: [
      "Water pooling rapidly around home appliances or under cabinets",
      "The smell of natural gas (rotten eggs) anywhere in the home",
      "Multiple residential drains backing up simultaneously",
      "Sewage emerging from a shower drain or cleanout",
      "The sound of running water inside walls when no fixtures are on",
      "A sudden, severe drop in residential water pressure",
    ],
    detail: [
      {
        heading: "Immediate Damage Control",
        body: [
          "The priority on a residential emergency call is stopping the progression of damage. Independent professionals identify and isolate the source immediately. Only once the home is safe from further damage do they pivot to diagnosis and repair.",
          "If the emergency involves extensive flooding, professionals will also advise on safe electrical practices for homeowners.",
        ],
      },
    ],
    steps: [
      { title: "Connect", text: "Call our service to get connected with a local independent plumbing professional." },
      { title: "Diagnose", text: "The local provider traces the failure to its source in your home." },
      { title: "Quote", text: "You receive a firm, flat-rate price for the repair directly from the independent contractor." },
      { title: "Repair", text: "The repair is completed by the independent professional using high-quality parts." },
    ],
    maintenance: [
      "Locate and test your whole-home shut-off valve annually",
      "Replace washing machine rubber hoses with steel braided lines",
      "Consider installing a smart leak detector with an automatic shut-off valve",
      "Have your water heater inspected and flushed every year",
    ],
    faqs: [
      { q: "What should I do while waiting for the plumber?", a: "Shut off the water to the affected area or the whole house, turn off the breaker to any electrical appliances in standing water, and move valuables away from the leak path." },
      { q: "Do the independent plumbers charge extra for nights and weekends?", a: "Providers typically have specific emergency dispatch rates for after-hours calls, but the repair itself is quoted flat-rate before they begin." },
      { q: "Can a provider fix a burst pipe inside a wall tonight?", a: "Yes. Many independent providers carry the necessary parts to complete in-wall pipe repairs for homeowners immediately." },
      { q: "Will the contractor patch the drywall after the repair?", a: "Providers perform the necessary demolition to access the plumbing and make the repair. They typically do not patch drywall, but may refer you to local drywall contractors." },
    ],
    related: ["water-heaters-mesa-az", "drain-and-sewer-mesa-az", "leak-detection-mesa-az"],
  },
  {
    slug: "water-heaters-mesa-az",
    name: "Water Heater Services",
    tagline: "Connecting homeowners with expert repair and replacement for water heaters",
    metaTitle: "Water Heater Repair & Installation Mesa AZ | Residential Connections",
    metaDescription: "Residential water heater connections in Mesa, AZ. Connect with pros for repair, replacement and tankless installation. Call (480) 863-0564.",
    image: "waterHeaters",
    intro: [
      "Mesa's hard water is notoriously tough on residential water heaters. The high mineral content accelerates sediment buildup, degrading heating elements in electric models and insulating the burners in gas units.",
      "Prestige Plumbing Company helps homeowners connect with comprehensive water heater services across the East Valley. We connect you with local professionals who repair and install traditional tank heaters and high-efficiency tankless systems.",
      "Independent contractors can help you decide which residential system suits your home. They evaluate gas supply, venting and water treatment for homeowners.",
    ],
    benefits: [
      "Connections to providers offering fast residential replacements",
      "Expert diagnosis of heating element and thermostat failures",
      "Professional connections for tankless water heater conversions",
      "Code-compliant residential installation including proper venting",
      "Providers typically handle the disposal and recycling of old water heaters",
    ],
    problems: [
      "No hot water or hot water running out too quickly in your home",
      "Leaking from the base of the tank or temperature pressure relief valve",
      "Popping or rumbling noises from inside the residential tank",
      "Rusty or discolored hot water in your home",
      "Pilot light repeatedly going out on gas models",
    ],
    signs: [
      "Water pooling around the base of your home water heater",
      "A noticeable drop in hot water capacity during residential showers",
      "The heater is over ten years old in an Arizona home without a water softener",
      "Error codes flashing on newer residential gas or tankless models",
    ],
    detail: [
      {
        heading: "Repair vs. Replacement",
        body: [
          "Not every issue requires a new heater for your home. Independent professionals routinely replace faulty thermocouples and heating elements to restore function to residential units. However, if the steel tank itself has fractured, replacement is the only option.",
          "Where a residential unit is beyond repair, contractors present a replacement scope that corrects venting and gas sizing for your home.",
        ],
      },
    ],
    steps: [
      { title: "Evaluate", text: "The independent professional tests the electrical or gas components and inspects the tank integrity." },
      { title: "Present Options", text: "The contractor provides options for residential repair or replacement." },
      { title: "Execute", text: "Repairs and replacements are completed by the local provider to current plumbing code." },
      { title: "Commission", text: "The provider tests the new system and sets the temperature safely for your home." },
    ],
    maintenance: [
      "Flush the tank annually to remove hard water sediment",
      "Test the Temperature & Pressure (T&P) relief valve every year",
      "Inspect the anode rod every three years and replace if depleted",
      "Schedule professional descaling annually for residential tankless units",
    ],
    faqs: [
      { q: "Why is my home water heater making a popping sound?", a: "That is the sound of water boiling under a thick layer of mineral sediment at the bottom of the tank. It means the unit needs flushing." },
      { q: "How long should a water heater last in an Arizona home?", a: "With Mesa's hard water, a standard tank heater typically lasts 8 to 10 years without maintenance. With a water softener, 12 to 15 years is achievable." },
      { q: "Can I switch my house from a tank to a tankless heater?", a: "Usually, yes. It requires evaluating your current gas meter capacity and the venting pathway. A local pro can provide a comprehensive quote for homeowners." },
      { q: "Are tankless water heaters worth it for homeowners?", a: "If you frequently run out of hot water or have a large family, yes. However, they require annual descaling maintenance." },
    ],
    related: ["emergency-plumbing-mesa-az", "residential-plumbing-mesa-az", "gas-line-mesa-az"],
  },
  {
    slug: "drain-and-sewer-mesa-az",
    name: "Drain & Sewer Services",
    tagline: "Connecting homeowners with professional drain cleaning and sewer line repair",
    metaTitle: "Residential Drain Cleaning & Sewer Repair Mesa AZ | Prestige Plumbing",
    metaDescription: "Residential drain cleaning and sewer repair connections in Mesa, AZ. Connect with pros for camera inspections. Call (480) 863-0564.",
    image: "drainAndSewer",
    intro: [
      "A slow drain is an annoyance; a main sewer backup is a health hazard for your home. The drainage system relies entirely on gravity and proper slope. When roots intrude or soils shift beneath the house, gravity flow stops.",
      "Prestige Plumbing Company helps homeowners connect with local pros who approach drain clearing systematically. Independent professionals use cabling machines and high-resolution sewer cameras to visually verify the residential line is clear.",
      "Whether you have a single backed-up kitchen sink or a collapsed clay sewer line in an older neighborhood, we connect you with a permanent solution provider.",
    ],
    benefits: [
      "Connections for visual verification of residential blockages with cameras",
      "Professionals offering hydro jetting for residential scale and root removal",
      "Precise location of buried home lines to minimize yard disruption",
      "Trenchless and open-cut residential sewer line replacement options",
      "Network of experienced independent professionals",
    ],
    problems: [
      "Main sewer line backups affecting the entire house",
      "Tree roots breaking through older clay or cast-iron home lines",
      "Heavy grease and soap scum buildup in kitchen and laundry branches",
      "Bellied or sagging residential pipes holding standing water",
      "Collapsed home lines requiring structural repair",
    ],
    signs: [
      "Gurgling sounds from the toilet when running the bathroom sink",
      "Water backing up into the shower when the residential washing machine drains",
      "Foul sewage odors persistent in the yard or lower home bathrooms",
      "Multiple slow drains across different areas of the house",
    ],
    detail: [
      {
        heading: "Professional Residential Drain Clearing",
        body: [
          "Traditional cabling is excellent for retrieving soft blockages in homes. However, a cable only clears a path the width of its cutting head. For extensive root mats in residential lines, advanced methods are required.",
          "Local professionals use advanced techniques to restore the residential pipe to its original interior diameter and delay the return of future blockages for homeowners.",
        ],
      },
    ],
    steps: [
      { title: "Inspect", text: "Independent professionals often begin with a camera inspection to identify the exact nature of the blockage in your home." },
      { title: "Clear", text: "The local provider selects the appropriate tool to break through the obstruction." },
      { title: "Verify", text: "The contractor cameras the residential line again to ensure no secondary blockages remain." },
      { title: "Repair", text: "If the camera reveals structural damage, the provider quotes a repair for the homeowner." },
    ],
    maintenance: [
      "Never pour cooking grease, fats or oils down the residential kitchen sink",
      "Use mesh strainers in home shower drains to catch hair",
      "Consider having your main residential sewer line camera-inspected",
      "Consider preventative maintenance if you have older cast-iron plumbing",
    ],
    faqs: [
      { q: "Why does my toilet gurgle when the home shower drains?", a: "Gurgling indicates a venting issue or a partial blockage downstream. As water struggles to pass, it pulls air through the easiest path in the home." },
      { q: "Are chemical drain cleaners safe for homes?", a: "No. Liquid drain cleaners rely on caustic chemical reactions that generate intense heat and can damage residential pipes." },
      { q: "Can a provider repair broken sewer lines under my yard?", a: "Yes. Independent professionals can locate the break point, excavate locally, repair the damaged residential section, and restore the trench." },
      { q: "How much does a residential sewer camera inspection cost?", a: "Pricing is set by the independent contractor, usually flat-rate depending on the home access point." },
    ],
    related: ["emergency-plumbing-mesa-az", "bathroom-plumbing-mesa-az", "kitchen-plumbing-mesa-az"],
  },
  {
    slug: "leak-detection-mesa-az",
    name: "Leak Detection & Slab Leaks",
    tagline: "Connecting homeowners with pros to pinpoint hidden leaks behind walls and slabs",
    metaTitle: "Residential Leak Detection & Slab Leak Repair Mesa AZ",
    metaDescription: "Professional residential leak detection connections in Mesa. Find pros using acoustic equipment to locate home leaks. Call (480) 863-0564.",
    image: "leakDetection",
    intro: [
      "A hidden leak in a pressurized water line doesn't stop. It runs continuously, quietly destroying residential drywall and flooring. In the East Valley, where thousands of homes built between the 1970s and 2000s have copper supply lines routed beneath the foundation, residential slab leaks are common.",
      "Finding a leak under a concrete slab requires specialized technology. Prestige Plumbing Company connects homeowners with independent pros who use sensitive acoustic listening devices and thermal imaging cameras to pinpoint pipe failures.",
      "Once located, the local provider presents the homeowner with appropriate repair options, specializing in rerouting the compromised line to bypass the under-slab hazard.",
    ],
    benefits: [
      "Non-destructive leak locating protects your home",
      "Connections to pros using thermal and acoustic technology",
      "Clear options for direct repair vs. overhead residential line rerouting",
      "Minimization of home water damage through rapid response",
      "Independent providers can assist with documentation for homeowner's insurance",
    ],
    problems: [
      "Pinhole leaks in under-slab copper piping (Slab Leaks) in homes",
      "Slow leaks behind residential shower valves",
      "Undetected homeowner irrigation or main water service line leaks",
      "Degraded polybutylene or older galvanized steel pipe failures in homes",
    ],
    signs: [
      "An inexplicably high monthly residential water bill",
      "Warm or hot spots on hard surface flooring in your home",
      "The sound of water running when all home fixtures are turned off",
      "Baseboards swelling or pulling away from the residential wall",
      "A damp, musty odor or unexplained mold growth in the home",
    ],
    detail: [
      {
        heading: "The Residential Slab Leak Reroute",
        body: [
          "When a copper line fails beneath your home foundation, repairing that specific spot requires jackhammering the floor. It is often a temporary fix for homeowners, as the rest of the line remains vulnerable.",
          "Many local professionals recommend a reroute for homeowners. They run a new line through the attic and drop it down the walls to feed the fixtures, permanently removing the plumbing from the under-slab environment.",
        ],
      },
    ],
    steps: [
      { title: "Test", text: "The independent provider pressure tests the hot and cold systems in your home." },
      { title: "Locate", text: "Using advanced gear, the local contractor traces the lines and pinpoints the leak." },
      { title: "Plan", text: "The pro drafts a residential repair plan for the homeowner." },
      { title: "Execute", text: "The independent contractor completes the repair and restores home water service." },
    ],
    maintenance: [
      "Monitor your home water bill monthly for unexplained spikes",
      "Check your residential water meter overnight to see if the dial moves",
      "Consider installing a smart leak detection system for your home",
      "Address abnormally high municipal water pressure with a PRV",
    ],
    faqs: [
      { q: "Does homeowner's insurance cover residential slab leaks?", a: "Insurance typically covers the damage caused by the water (drywall, flooring) but rarely the cost of the plumbing repair itself. Independent pros can provide documentation for adjusters." },
      { q: "Why do copper pipes leak under the home slab?", a: "A combination of factors: aggressive mineral chemistry in Arizona water, shifting soils, and poor initial installation practices in older homes." },
      { q: "How long does a home slab leak reroute take?", a: "Most single-line residential reroutes are completed by local pros in one to two days." },
      { q: "Is PEX safe to use for a home reroute?", a: "Yes. PEX is the industry standard for residential repiping. It is highly durable and immune to the mineral scaling that destroys copper." },
    ],
    related: ["emergency-plumbing-mesa-az", "repiping-mesa-az", "residential-plumbing-mesa-az"],
  },
  {
    slug: "repiping-mesa-az",
    name: "Repiping & Pipe Repair",
    tagline: "Connecting homeowners with pros for whole-home repiping and pipe replacements",
    metaTitle: "Whole Home Repiping Mesa AZ | Residential Plumbing Connections",
    metaDescription: "Expert whole-home repiping connections in Mesa. Connect with pros to replace failing polybutylene and copper pipes in your home. Call (480) 863-0564.",
    image: "repiping",
    intro: [
      "The plumbing infrastructure inside your home walls has a lifespan. Galvanized steel pipes rust from the inside out. Early-generation copper suffers from pinhole pitting due to Arizona's hard water. Polybutylene piping is famously prone to sudden failure.",
      "When residential spot repairs become a monthly occurrence, a whole-home repipe is a sound decision for homeowners. Prestige Plumbing Company helps connect you with experts in full-scale residential repiping.",
      "Independent contractors replace aging home systems with modern, highly durable PEX tubing, which is immune to internal corrosion.",
    ],
    benefits: [
      "Restoration of strong, consistent water pressure throughout the home",
      "Elimination of rusty, discolored, or bad-tasting water in the home",
      "Peace of mind for homeowners against sudden pipe bursts",
      "Increased home value and easier passage of buyer inspections",
      "Modern residential systems that resist scale buildup and corrosion",
    ],
    problems: [
      "Frequent, recurring pinhole leaks in older residential copper systems",
      "Severely restricted water flow due to galvanized pipe corrosion in homes",
      "The presence of high-risk polybutylene piping in the home",
      "Water that runs brown or yellow when a home faucet is turned on",
    ],
    signs: [
      "You cannot run the shower and the washing machine at the same time in your home",
      "Your home was built before 1995 and still has its original plumbing",
      "You have repaired more than two separate residential leaks in the past year",
      "You notice a drop in pressure when flushing a home toilet",
    ],
    detail: [
      {
        heading: "The Home Repiping Process",
        body: [
          "A whole-home repipe sounds intimidating to homeowners, but independent pros use structured processes. They make strategic, minimal surgical cuts in the home drywall to route new lines.",
          "During a typical residential repipe, your water is usually restored every evening so you can remain in your home comfortably.",
        ],
      },
    ],
    steps: [
      { title: "Assess", text: "The independent contractor maps the existing plumbing layout in your home." },
      { title: "Prep", text: "The provider lays down floor protection and seals off workspaces in the home." },
      { title: "Install", text: "New lines are routed and connected to all home fixtures." },
      { title: "Test", text: "The local pro tests the new residential system to ensure integrity." },
    ],
    maintenance: [
      "Ensure your home's water pressure regulator is functioning correctly",
      "Consider a whole-home water softener to protect new residential fixtures",
      "Familiarize yourself with the new home main shut-off valve location",
    ],
    faqs: [
      { q: "How long does a whole-home repipe take?", a: "Most residential repipes take between 2 to 4 days, depending on the size of the home." },
      { q: "Do the plumbers fix the holes in the home drywall afterward?", a: "Independent plumbers make clean cuts, but they typically leave the patching to specialized residential drywall contractors." },
      { q: "Why use PEX instead of copper in my home?", a: "PEX is highly resistant to the scale buildup that destroys copper, and it requires fewer fittings." },
      { q: "Is polybutylene pipe really that bad for homes?", a: "Yes. Polybutylene reacts with municipal water, causing the pipe to become brittle. Failure is common in older residential properties." },
    ],
    related: ["leak-detection-mesa-az", "bathroom-plumbing-mesa-az", "kitchen-plumbing-mesa-az"],
  },
  {
    slug: "gas-line-mesa-az",
    name: "Residential Gas Line Services",
    tagline: "Connecting homeowners with pros for safe residential gas line installation and repair",
    metaTitle: "Residential Gas Line Repair & Install Mesa AZ | Prestige Plumbing",
    metaDescription: "Residential gas line connections in Mesa, AZ. Connect with pros to run gas for stoves, fire pits, and pool heaters. Call (480) 863-0564.",
    image: "gasLine",
    intro: [
      "Natural gas is efficient for homeowners, but working with it requires strict adherence to safety codes. Prestige Plumbing Company connects homeowners with professionals qualified for residential gas line work.",
      "Whether you are upgrading your home kitchen to a gas range, running a new line to a backyard fire pit, or need emergency repair for a red-tagged leak, we connect you with local experts.",
      "Independent contractors handle everything from initial sizing calculations for your home appliances to final pressure testing.",
    ],
    benefits: [
      "Connections to pros who perform rigorous residential pressure testing",
      "Proper BTU load calculations for home appliances",
      "Expertise in residential gas materials",
      "Rapid connection for utility-mandated residential shutoffs",
      "Network of independent professionals familiar with city inspectors",
    ],
    problems: [
      "Active natural gas leaks at home appliance connections",
      "Undersized residential gas lines starving appliances of fuel",
      "Corroded exterior gas lines at your home",
      "Home appliances 'red-tagged' and shut down by the utility company",
    ],
    signs: [
      "The distinct odor of sulfur or rotten eggs anywhere on the residential property",
      "Hissing sounds near the home gas meter",
      "Dead or dying vegetation over an underground home gas line",
      "Yellow or orange flames on a residential gas stove",
    ],
    detail: [
      {
        heading: "Residential Emergency Gas Leaks",
        body: [
          "If you smell gas, your first call should be to the utility provider or 911 to secure the home. Once the property is safe, call us to get connected with a local professional.",
          "Independent contractors use combustible gas detectors to pinpoint the residential leak, perform repairs, and coordinate with inspectors.",
        ],
      },
    ],
    steps: [
      { title: "Calculate", text: "For new residential installs, the pro calculates the total BTU demand for your home." },
      { title: "Route", text: "The local contractor installs the piping using approved materials for the home." },
      { title: "Test", text: "The entire residential system is tested to verify it holds pressure." },
      { title: "Inspect", text: "The independent provider coordinates with municipal inspectors for your home." },
    ],
    maintenance: [
      "Keep the area around your home gas meter clear of debris",
      "Have home gas appliances serviced annually",
      "Install carbon monoxide detectors near all sleeping areas in the home",
      "Check flexible home appliance connectors periodically",
    ],
    faqs: [
      { q: "Can I get connected with someone to run a gas line for my new home outdoor kitchen?", a: "Yes. We connect homeowners with pros who install underground gas lines for outdoor kitchens and fire pits." },
      { q: "What is a 'red tag' on my home appliance?", a: "A red tag is a notice left by the utility company indicating a safety hazard. Homeowners must hire a professional to fix the issue." },
      { q: "Why do pros use air to test home gas lines?", a: "Testing with compressed air is safer and more accurate for residential properties." },
      { q: "Can I switch my home electric stove to a gas stove?", a: "Yes, if gas is available at your residential property. Local pros can route a new line into your kitchen." },
    ],
    related: ["emergency-plumbing-mesa-az", "water-heaters-mesa-az", "residential-plumbing-mesa-az"],
  },
  {
    slug: "bathroom-plumbing-mesa-az",
    name: "Bathroom Plumbing",
    tagline: "Connecting homeowners with pros for toilet, shower, and sink repair",
    metaTitle: "Residential Bathroom Plumbing Mesa AZ | Prestige Plumbing",
    metaDescription: "Residential bathroom plumbing connections in Mesa, AZ. Connect with pros for toilet repair and shower valve replacement. Call (480) 863-0564.",
    image: "bathroomPlumbing",
    intro: [
      "The home bathroom sees the highest volume of water usage, making it a frequent site of plumbing failures. Prestige Plumbing Company helps homeowners connect with local pros for residential bathroom plumbing.",
      "Independent contractors handle repairs of existing home fixtures and rough-in plumbing for residential renovations.",
      "Local providers carry universal rebuild kits and high-quality replacement fixtures to complete most residential repairs efficiently.",
    ],
    benefits: [
      "Fast connection to pros for repairing running or leaking home toilets",
      "Expert connections for rebuilding failing home shower valves",
      "Precision installation of new residential vanity sinks",
      "Code-compliant drain rough-ins for home bathroom remodels",
      "Identification of hidden leaks behind home tile walls",
    ],
    problems: [
      "Home toilets that run constantly or leak at the base",
      "Residential shower valves that drip or lack hot water",
      "Slow draining home bathroom sinks",
      "Water stains appearing on the ceiling below a residential bathroom",
    ],
    signs: [
      "The sound of water trickling in the home toilet tank",
      "A spongy feeling in the residential floor around the toilet",
      "Low water pressure isolated to the home showerhead",
      "Sewer odors emanating from the home sink drain",
    ],
    detail: [
      {
        heading: "Home Shower Valve Replacement",
        body: [
          "When a home shower valve fails, replacing the brass body inside the wall is required. Independent professionals can often access the plumbing from the drywall on the opposite side to preserve your expensive residential shower enclosure.",
        ],
      },
    ],
    steps: [
      { title: "Diagnose", text: "The local pro identifies the root cause of the home plumbing issue." },
      { title: "Protect", text: "The provider uses protective mats to keep your home clean." },
      { title: "Repair", text: "The independent contractor rebuilds the home fixture or installs a replacement." },
      { title: "Test", text: "The pro tests the home fixture for proper flow and drainage." },
    ],
    maintenance: [
      "Replace home toilet flappers every 3-5 years",
      "Clean aerators on home sink faucets quarterly",
      "Never flush flushable wipes in your home toilets",
      "Check the caulking around home tubs and showers annually",
    ],
    faqs: [
      { q: "Why does my home toilet keep running?", a: "The most common culprit is a deteriorated rubber flapper in the residential tank." },
      { q: "Can a pro fix a dripping home shower head?", a: "Yes. Local contractors can usually rebuild the valve with a new cartridge for homeowners." },
      { q: "My home bathroom sink drains very slowly. What should I do?", a: "We connect homeowners with pros who manually clear the p-trap for a permanent residential fix." },
      { q: "Do the plumbers install customer-supplied home fixtures?", a: "Yes. Most independent professionals are happy to install fixtures that homeowners have purchased." },
    ],
    related: ["drain-and-sewer-mesa-az", "residential-plumbing-mesa-az", "repiping-mesa-az"],
  },
  {
    slug: "kitchen-plumbing-mesa-az",
    name: "Kitchen Plumbing",
    tagline: "Connecting homeowners with pros for disposals, faucets, and sinks",
    metaTitle: "Residential Kitchen Plumbing Mesa AZ | Prestige Plumbing",
    metaDescription: "Residential kitchen plumbing connections in Mesa. Connect with pros for garbage disposal repair and faucet replacement. Call (480) 863-0564.",
    image: "kitchenPlumbing",
    intro: [
      "The residential kitchen is the center of your home, and a plumbing failure disrupts daily life. Prestige Plumbing Company connects homeowners with comprehensive kitchen plumbing services.",
      "Independent professionals clear stubborn grease clogs, replace failing home faucets, and install residential garbage disposals.",
      "Local contractors take meticulous care working around home countertops and custom cabinetry.",
    ],
    benefits: [
      "Connections to pros for upgrading home garbage disposals",
      "Professional installation of residential kitchen faucets",
      "Correction of improper under-sink home drain geometry",
      "Installation of shut-off valves for home dishwashers",
      "Clearing of heavy grease in residential kitchen lines",
    ],
    problems: [
      "Home garbage disposals that hum but will not spin",
      "Residential kitchen faucets that drip from the spout",
      "Slow-draining home kitchen sinks",
      "Water pooling inside the home cabinet under the sink",
    ],
    signs: [
      "A foul odor coming from the home garbage disposal",
      "Water backing up into the home sink basin",
      "Low water pressure at the residential kitchen faucet",
      "Mineral crust buildup around the base of the home faucet",
    ],
    detail: [
      {
        heading: "Proper Home Disposal Usage",
        body: [
          "Most home garbage disposal jams are preventable. Disposals are designed for residual food scraps. When using the home disposal, always run cold water before and during grinding.",
        ],
      },
    ],
    steps: [
      { title: "Inspect", text: "The independent pro checks the home disposal and faucet for leaks." },
      { title: "Clear/Repair", text: "The local contractor unjams the home disposal or replaces the faucet cartridge." },
      { title: "Upgrade", text: "The provider ensures secure, code-compliant connections for new home fixtures." },
      { title: "Verify", text: "The pro tests the home fixtures to check for leaks." },
    ],
    maintenance: [
      "Grind ice cubes monthly to clean home disposal blades",
      "Periodically check the home cabinet floor for dampness",
      "Never pour grease down the residential drain",
      "Soak home faucet aerators in vinegar to remove mineral buildup",
    ],
    faqs: [
      { q: "Why is my home garbage disposal humming but not working?", a: "The motor is likely jammed. Local pros can extract the object and unjam the residential unit for homeowners." },
      { q: "My home dishwasher is not draining. Can a plumber help?", a: "Often, yes. Independent professionals clear these connection points for homeowners." },
      { q: "Can I find someone to install a new home sink?", a: "Yes, we connect homeowners with pros who install sinks in existing cutouts." },
      { q: "Why does my home kitchen faucet have low pressure?", a: "The aerator is likely clogged. Local contractors can restore full pressure for homeowners." },
    ],
    related: ["drain-and-sewer-mesa-az", "residential-plumbing-mesa-az", "leak-detection-mesa-az"],
  },
  {
    slug: "residential-plumbing-mesa-az",
    name: "Residential Plumbing & Maintenance",
    tagline: "Connecting homeowners with pros for whole-home plumbing care",
    metaTitle: "Residential Plumber Connections Mesa AZ | Prestige Plumbing",
    metaDescription: "Residential plumbing connections in the East Valley. Connect with pros for whole-home inspections and maintenance. Call (480) 863-0564.",
    image: "residentialPlumbing",
    intro: [
      "Your home's plumbing is an interconnected system. Prestige Plumbing Company helps homeowners connect with pros who offer proactive residential plumbing maintenance.",
      "Independent contractors conduct thorough preventative home inspections and evaluate residential water pressure issues.",
      "Whether you need a baseline home inspection or a residential water softener, we connect you with the expertise to keep your home plumbing operating flawlessly.",
    ],
    benefits: [
      "Connections for comprehensive whole-home plumbing inspections",
      "Finding pros for installation of residential water softeners",
      "Home pressure reducing valve testing and replacement",
      "Residential hose bibb repair and replacement",
      "Connecting homeowners with preventative maintenance providers",
    ],
    problems: [
      "Excessively high water pressure damaging home fixtures",
      "Severe hard water scaling in the home",
      "Leaking or frozen outdoor home spigots",
      "General aging of the residential plumbing system",
    ],
    signs: [
      "Water hammering noises in the home pipes",
      "White scale buildup forming on home faucets",
      "A drop in home water pressure when multiple fixtures are used",
      "You are purchasing a residential property older than 15 years",
    ],
    detail: [
      {
        heading: "The Importance of Home Water Pressure",
        body: [
          "Municipal water pressure often fluctuates. Residential plumbing fixtures are designed to operate safely between 50 and 75 PSI.",
          "When home pressure is too high, it puts stress on the system. Independent pros routinely test home pressure and install valves to protect the property.",
        ],
      },
    ],
    steps: [
      { title: "Evaluate", text: "The local pro assesses the overall health of the residential system." },
      { title: "Report", text: "The independent contractor provides a clear summary of findings to the homeowner." },
      { title: "Recommend", text: "The provider suggests residential solutions like water softeners if needed." },
      { title: "Service", text: "The local pro performs the requested home maintenance." },
    ],
    maintenance: [
      "Consider having a professional plumbing inspection performed",
      "Have your home's water pressure checked",
      "Keep salt tanks full if you have a residential water softening system",
      "Disconnect garden hoses from home spigots during freezing weather",
    ],
    faqs: [
      { q: "What does a whole-home residential plumbing inspection cover?", a: "Pros test water pressure, check the water heater, inspect supply lines, and evaluate the main home shut-off valve." },
      { q: "Do I really need a residential water softener in Mesa?", a: "While not required, it is highly recommended for homeowners to extend the life of residential appliances." },
      { q: "Why do my home pipes bang when the washing machine stops?", a: "That is called water hammer. Local contractors can install hammer arrestors for homeowners." },
      { q: "Can I connect with someone to fix a leaking spigot in the backyard?", a: "Yes. We connect homeowners with pros who replace worn-out home hose bibbs." },
    ],
    related: ["water-heaters-mesa-az", "repiping-mesa-az", "leak-detection-mesa-az"],
  },
];

export const services: Service[] = [...coreServices, ...extraServices];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
