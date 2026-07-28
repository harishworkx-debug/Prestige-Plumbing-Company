import type { ImageKey } from "./images";
import type { Service } from "./services";

/**
 * Scalable service definition layer.
 * Add a new spec object here and the page, navigation entry, sitemap URL,
 * schema markup and internal links are generated automatically.
 */
export interface ServiceSpec {
  slug: string;
  name: string;
  tagline: string;
  image: ImageKey;
  metaTitle?: string;
  metaDescription?: string;
  intro: string[];
  benefits: string[];
  problems: string[];
  signs: string[];
  detail: { heading: string; body: string[] }[];
  steps: { title: string; text: string }[];
  maintenance: string[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const buildService = (spec: ServiceSpec): Service => ({
  ...spec,
  metaTitle: spec.metaTitle ?? `${spec.name} in Mesa, AZ | Prestige Plumbing Company`,
  metaDescription:
    spec.metaDescription ??
    `Professional ${spec.name.toLowerCase()} services in Mesa, AZ by Prestige Plumbing Company. Fast response, licensed plumbers, honest pricing and reliable workmanship. Call (480) 215-0629 today.`,
});

const specs: ServiceSpec[] = [
  {
    slug: "slab-leak-repair-mesa-az",
    name: "Slab Leak Repair",
    tagline: "Acoustic slab leak location and rerouting without needless demolition",
    image: "leak",
    intro: [
      "A slab leak is a supply line failure beneath the concrete foundation of your home, and in the East Valley it is one of the most common serious plumbing problems we handle. Homes built between the late 1980s and the mid 2000s routinely ran soft copper through the slab, and two decades of mineral-heavy Arizona water plus expansive soil movement eventually produce pinhole failures.",
      "Prestige Plumbing Company locates slab leaks before touching a single square foot of flooring. Acoustic listening equipment, thermal imaging and line pressurisation narrow the failure to a small area, and in most homes we then reroute the affected run overhead in PEX rather than jackhammering a trench through your living room.",
    ],
    benefits: [
      "Non-destructive electronic location before any concrete is opened",
      "Overhead PEX rerouting that avoids trenching the slab in most homes",
      "Immediate reduction in the water bill that the leak has been inflating",
      "Prevents subfloor saturation, mould growth and foundation movement",
      "Full photographic documentation suitable for an insurance claim",
    ],
    problems: [
      "Warm or hot spots on tile and wood flooring",
      "The sound of running water when every fixture is closed",
      "Water bills climbing month over month with no change in usage",
      "Cracking or lifting flooring above the failed line",
      "Low pressure on the hot side of the house only",
    ],
    signs: [
      "Your water meter dial creeps with the house shut off",
      "Unexplained damp patches at the base of interior walls",
      "A musty odour in a room with no visible plumbing",
      "The water heater runs constantly to keep up",
    ],
    detail: [
      {
        heading: "Repair Versus Reroute Versus Repipe",
        body: [
          "Once the failure point is known, there are three honest options and we will show you the evidence behind our recommendation. A spot repair opens the slab at one location and is appropriate when the piping is otherwise sound and the leak is close to an accessible edge.",
          "A reroute abandons the failed under-slab run and replaces it overhead through the attic in PEX. It is usually faster, cheaper and less invasive than opening the floor. When a home has already suffered two or more pinhole failures, that pattern indicates system-wide pitting corrosion and a full repipe becomes the sensible investment rather than a third emergency next winter.",
        ],
      },
    ],
    steps: [
      { title: "Confirm The Leak", text: "Meter isolation and pressure testing verify that the loss is on the supply side and under the slab rather than in an irrigation line or drain." },
      { title: "Pinpoint Electronically", text: "Acoustic listening discs, line tracing and thermal imaging narrow the failure to within inches so no exploratory demolition is required." },
      { title: "Present Written Options", text: "Spot repair, overhead reroute and full repipe are priced flat-rate in writing with the trade-offs of each explained." },
      { title: "Repair And Restore", text: "The approved work is completed, pressure tested, and the affected finishes are put back with the site left clean." },
    ],
    maintenance: [
      "Keep house pressure regulated below 80 psi to reduce stress on under-slab lines",
      "Read your meter monthly with all fixtures off as an early warning check",
      "Consider whole-home water treatment to slow copper pitting in hard Arizona water",
    ],
    faqs: [
      { q: "Do you have to break my floor to fix a slab leak?", a: "Usually not. In the majority of Mesa homes we reroute the affected line overhead in PEX, which avoids jackhammering the slab entirely. Opening the concrete is a last resort we only recommend when a spot repair is genuinely the better value." },
      { q: "Will homeowners insurance cover a slab leak?", a: "Most Arizona policies cover the resulting water damage and the access work rather than the pipe itself. We photograph the failure, the affected area and the completed repair, and our invoices describe cause and remedy in the language adjusters expect." },
      { q: "How long does slab leak repair take?", a: "Electronic location typically takes one to two hours. A reroute of a single line is commonly finished the same day, while a whole-home repipe runs three to six days depending on size and finish work." },
    ],
    related: ["leak-detection-mesa-az", "repiping-mesa-az", "pipe-repair-mesa-az", "emergency-leak-repair-mesa-az"],
  },
  {
    slug: "tankless-water-heater-mesa-az",
    name: "Tankless Water Heater Installation",
    tagline: "Endless hot water with condensing tankless systems sized for Arizona homes",
    image: "waterHeater",
    intro: [
      "A tankless water heater heats water only as it flows, which removes the standby losses of a storage tank and eliminates the day you run out of hot water halfway through the third shower. In a valley where hard water shortens the life of conventional tanks, a properly installed and serviced tankless unit frequently outlasts two tank replacements.",
      "Sizing is where most tankless installations succeed or fail. Prestige Plumbing Company calculates your real peak demand in gallons per minute against Mesa's winter groundwater temperature, then specifies a unit and gas supply that meets it — rather than selling whatever model is on the shelf.",
    ],
    benefits: [
      "Continuous hot water with no recovery wait between showers",
      "Twenty-year typical service life with annual descaling",
      "Reclaimed floor or closet space where the old tank stood",
      "Lower standby energy loss than a conventional storage heater",
      "No 50-gallon tank in the garage waiting to rupture",
    ],
    problems: [
      "Undersized gas lines that starve a new tankless unit",
      "Existing venting that cannot serve a condensing appliance",
      "Scale build-up from hard water reducing flow and triggering fault codes",
      "Cold-water sandwich caused by poor recirculation design",
      "Improper condensate drainage on high-efficiency models",
    ],
    signs: [
      "Your household regularly runs out of hot water",
      "The existing tank is over ten years old and rusting at the base",
      "You want to free up garage or closet floor space",
      "Utility bills are high and the tank heats an empty house all day",
    ],
    detail: [
      {
        heading: "Gas, Venting And Water Quality",
        body: [
          "A tankless heater draws far more gas at peak than the tank it replaces. We perform a load calculation on your existing meter and piping, and upgrade the run where necessary — skipping that step is why some tankless installations underperform from day one.",
          "Condensing units require dedicated stainless or PVC venting and a condensate path. We also strongly recommend isolation valves and, in Mesa's mineral-heavy supply, a scale-reduction strategy. Annual descaling through those isolation valves is what keeps a tankless heater at full output for two decades.",
        ],
      },
    ],
    steps: [
      { title: "Demand Calculation", text: "We count simultaneous fixtures and measure incoming water temperature to determine the true gallons-per-minute requirement for your household." },
      { title: "Gas And Vent Assessment", text: "Meter capacity, pipe sizing and vent routing are checked so the unit is supported correctly before anything is ordered." },
      { title: "Permitted Installation", text: "The unit is mounted, gas and water connected, venting and condensate routed, and the work permitted with the city where required." },
      { title: "Commission And Demonstrate", text: "We set temperature, verify combustion and flow, register the manufacturer warranty and show you the descaling service ports." },
    ],
    maintenance: [
      "Descale the heat exchanger annually through the isolation valves",
      "Clean the inlet water filter screen every six months",
      "Keep the vent terminal clear of dust, landscaping and nesting debris",
    ],
    faqs: [
      { q: "Is a tankless water heater worth it in Mesa?", a: "For households that run out of hot water or want to reclaim space, yes — provided the unit is sized correctly and descaled annually. Hard Arizona water makes that annual service non-negotiable for a long life." },
      { q: "Can I convert from a tank to tankless in one day?", a: "Most straight conversions are completed in a single day. If the gas supply or venting needs upgrading, allow a second day for that work and the associated inspection." },
      { q: "Do tankless heaters work during a power outage?", a: "Gas tankless units use electronic ignition and controls, so they will not fire without power. A small battery backup or generator circuit keeps hot water available during outages." },
    ],
    related: ["water-heater-installation-mesa-az", "water-heater-repair-mesa-az", "gas-line-installation-mesa-az", "plumbing-maintenance-mesa-az"],
  },
  {
    slug: "pipe-replacement-mesa-az",
    name: "Pipe Replacement",
    tagline: "Replacing failed supply and drain piping with modern, long-life materials",
    image: "van",
    intro: [
      "There is a point where repairing a pipe stops being economical. Galvanized steel that has tuberculated shut, cast iron drainage that has scaled and cracked, and copper riddled with pitting corrosion all reach a stage where each patch simply moves the next failure a few feet down the line.",
      "Prestige Plumbing Company replaces individual runs, branches or full systems using PEX-A for supply and PVC or ABS for drainage, sized to restore the flow and pressure the fixtures were designed around. Every replacement is planned to minimise drywall openings and completed under permit where code requires it.",
    ],
    benefits: [
      "Restored pressure and flow at every fixture in the home",
      "Modern materials immune to the corrosion that failed the original pipe",
      "Planned access points instead of repeated emergency wall openings",
      "Clean water without the rust discolouration of aged galvanised steel",
      "Documented, permitted work that supports resale value",
    ],
    problems: [
      "Galvanized supply lines narrowed by decades of internal corrosion",
      "Repeated pinhole leaks in the same copper system",
      "Cracked or bellied cast iron drainage under older homes",
      "Polybutylene piping that insurers increasingly refuse to cover",
      "Undersized branches causing pressure drop when two fixtures run",
    ],
    signs: [
      "Brown or rust-tinted water at first draw",
      "Pressure that collapses when a second tap opens",
      "More than one leak repair in the same system within two years",
      "Visible corrosion, weeping or mineral crust on exposed pipe",
    ],
    detail: [
      {
        heading: "Choosing The Right Replacement Material",
        body: [
          "PEX-A has become the default for supply replacement in Arizona because it tolerates mineral-heavy water, resists pitting, flexes with slab movement and can be routed overhead with far fewer wall openings than rigid copper. Where exposed piping is required or a customer prefers it, we still install type L copper to a high standard.",
          "For drainage we replace cast iron with PVC or ABS, correcting the slope and any bellies along the way. Correcting slope is often what actually solves a decades-old recurring blockage that no amount of cabling ever fixed.",
        ],
      },
    ],
    steps: [
      { title: "System Survey", text: "We inspect accessible piping, test pressure, and camera drain lines to establish exactly which sections have failed and which remain serviceable." },
      { title: "Scope And Route Plan", text: "A replacement route is designed to minimise demolition, with the number and location of access openings agreed in advance." },
      { title: "Replace And Pressure Test", text: "New piping is installed, tied in, pressure tested and inspected before anything is closed up." },
      { title: "Restore And Warranty", text: "Openings are patched, the site cleaned, and the workmanship warranty issued with photographs of the completed work." },
    ],
    maintenance: [
      "Install and maintain a pressure regulator to protect new piping",
      "Insulate exposed exterior runs against summer UV and winter cold snaps",
      "Have the system pressure checked during annual plumbing maintenance",
    ],
    faqs: [
      { q: "How disruptive is replacing pipes in an occupied home?", a: "Less than most homeowners expect. Water is typically restored each evening, and by routing PEX overhead we usually limit openings to a handful of small, patchable areas rather than opening entire walls." },
      { q: "Can you replace just one section of pipe?", a: "Yes, and often that is the right answer. We only recommend whole-system replacement when the evidence — repeat failures, visible corrosion, or camera footage — shows the rest of the system is on the same trajectory." },
      { q: "Do you pull permits for pipe replacement?", a: "Yes. Significant supply or drainage replacement is permitted with the local jurisdiction and inspected, and we handle the application and scheduling on your behalf." },
    ],
    related: ["repiping-mesa-az", "pipe-repair-mesa-az", "slab-leak-repair-mesa-az", "water-line-installation-mesa-az"],
  },
  {
    slug: "repiping-mesa-az",
    name: "Whole Home Repiping",
    tagline: "Complete PEX and copper repipes with minimal demolition and full permitting",
    image: "van",
    intro: [
      "Repiping replaces every supply line in the building at once, ending the cycle of emergency repairs that older galvanized, polybutylene and pitted copper systems eventually produce. For homes that have had two or more leaks in as many years, a repipe usually costs less than the next three emergencies plus their drywall and flooring damage.",
      "Our repipe crews work to a written plan: manifold placement, overhead routing, access-point locations and a day-by-day schedule agreed before we start. Water is restored to the home each evening, and drywall is patched and textured as part of the project rather than left for you to arrange.",
    ],
    benefits: [
      "Every supply line replaced at once, ending recurring leak repairs",
      "Balanced pressure at every fixture including upstairs bathrooms",
      "Drywall patching, texture and clean-up included in the project",
      "Water available to the home each evening during the project",
      "Long-term workmanship warranty on the entire new system",
    ],
    problems: [
      "Polybutylene systems failing at fittings throughout the house",
      "Galvanized piping delivering rust-coloured water and poor pressure",
      "Copper with widespread pinhole pitting from hard water",
      "Prior partial repairs leaving a patchwork of mismatched materials",
      "Insurance carriers declining coverage over outdated piping",
    ],
    signs: [
      "You have paid for more than two leak repairs in recent years",
      "Pressure is poor everywhere, not at one fixture",
      "Discoloured water appears after the house sits unused",
      "Your home still contains original 1970s or 1980s supply piping",
    ],
    detail: [
      {
        heading: "What A Repipe Week Actually Looks Like",
        body: [
          "Day one is protection and access: floors covered, furniture moved back, and the small openings cut at the locations agreed in the plan. Days two and three are the new PEX runs, manifold and tie-ins, with the system pressure tested at the end.",
          "Inspection follows, then patching, texture matching and final clean-up. Most single-storey Mesa homes complete in three to five working days; larger or two-storey properties run closer to a week. You will have a named lead technician for the whole project rather than a rotating crew.",
        ],
      },
    ],
    steps: [
      { title: "Whole-System Assessment", text: "Every accessible run, the meter, the regulator and the water heater connections are evaluated and photographed." },
      { title: "Written Repipe Plan", text: "Routing, manifold location, access openings, schedule and a flat-rate price are all agreed in writing before work begins." },
      { title: "Install And Inspect", text: "New PEX or copper is installed, pressure tested, and inspected by the jurisdiction under permit." },
      { title: "Patch, Texture, Clean", text: "Openings are patched and textured to match, the property is cleaned, and warranty documentation is issued." },
    ],
    maintenance: [
      "Set and verify a pressure regulator to protect the new system",
      "Exercise main and fixture shut-off valves twice a year",
      "Flush the water heater annually now that the supply side is new",
    ],
    faqs: [
      { q: "How long does a whole home repipe take?", a: "Three to five working days for most single-storey Mesa homes, and up to a week for larger or two-storey properties. Water is restored to the house each evening throughout the project." },
      { q: "Do we need to move out during a repipe?", a: "Almost never. Most families stay in the home. We protect the work areas, restore water daily, and keep at least one bathroom serviceable wherever the layout allows." },
      { q: "Is PEX better than copper for repiping in Arizona?", a: "For most homes here, yes. PEX resists the pitting corrosion that hard local water causes in copper, flexes with slab movement, and needs far fewer wall openings to install." },
    ],
    related: ["pipe-replacement-mesa-az", "slab-leak-repair-mesa-az", "pipe-repair-mesa-az", "residential-plumbing-mesa-az"],
  },
  {
    slug: "sewer-line-replacement-mesa-az",
    name: "Sewer Line Replacement",
    tagline: "Trenchless and traditional sewer replacement with camera-verified results",
    image: "drain",
    intro: [
      "When a sewer lateral has collapsed, separated at the joints or been crushed by root intrusion, cleaning it is no longer a solution. Replacement restores a continuous, correctly sloped line between the house and the city main, and ends the cycle of backups that a failing lateral produces every few months.",
      "Prestige Plumbing Company evaluates every failing line for trenchless options first. Pipe bursting and lining can replace a lateral with minimal excavation, preserving driveways, mature landscaping and hardscape that open-cut trenching would destroy.",
    ],
    benefits: [
      "Trenchless methods that preserve driveways, patios and landscaping",
      "New line with correct, continuous fall to the city connection",
      "Root-proof jointless materials that resist future intrusion",
      "Camera verification of the finished line before we leave",
      "Permitted work coordinated with the local jurisdiction",
    ],
    problems: [
      "Collapsed or offset clay lateral sections",
      "Bellied lines holding standing water and solids",
      "Root masses that regrow within months of every cleaning",
      "Cast iron laterals scaled and cracked with age",
      "Repeated whole-house backups affecting multiple fixtures",
    ],
    signs: [
      "Sewage backing up into tubs or floor drains repeatedly",
      "Sinkholes, soggy ground or unusually lush grass over the line",
      "Sewer odour outdoors near the cleanout",
      "A drain company that has cabled the same line more than twice this year",
    ],
    detail: [
      {
        heading: "Trenchless Versus Open Cut",
        body: [
          "Pipe bursting pulls a new HDPE line through the path of the old one, fracturing the original outward. It requires only entry and exit pits, which means a driveway or mature tree usually survives the project. Cured-in-place lining creates a new jointless pipe inside the existing host where the host is intact enough to support it.",
          "Open-cut excavation remains the right answer when the line has collapsed completely, when slope must be corrected along the run, or when the depth and utility congestion make trenchless impractical. We camera the line and show you the footage so the recommendation is evidence-based, not assumed.",
        ],
      },
    ],
    steps: [
      { title: "Camera And Locate", text: "The lateral is inspected on camera and the failure depth and position are marked above ground." },
      { title: "Method Selection", text: "Pipe bursting, lining or open cut is recommended based on the footage, depth, slope and site conditions, and priced in writing." },
      { title: "Replace Under Permit", text: "The new line is installed, tied to the city connection, and inspected as required by the jurisdiction." },
      { title: "Verify And Restore", text: "A final camera pass confirms fall and flow, and the surface is backfilled, compacted and restored." },
    ],
    maintenance: [
      "Camera the new lateral every three to five years as a baseline check",
      "Keep aggressive root species away from the line's path",
      "Never flush wipes, grease or hygiene products into a new sewer line",
    ],
    faqs: [
      { q: "Can you replace my sewer line without digging up the yard?", a: "In many cases yes. Pipe bursting needs only an entry and exit pit, so driveways, patios and mature trees usually stay intact. We confirm suitability from the camera inspection first." },
      { q: "How long does sewer line replacement take?", a: "A trenchless replacement is often completed in one to two days. Open-cut projects depend on length, depth and surface restoration, and typically run two to four days." },
      { q: "Who is responsible for the sewer lateral?", a: "In most Arizona jurisdictions the property owner owns the lateral from the building to the city main connection, including the portion under the street easement. We confirm the boundary with the city before quoting." },
    ],
    related: ["sewer-line-repair-mesa-az", "camera-drain-inspection-mesa-az", "hydro-jetting-mesa-az", "drain-cleaning-mesa-az"],
  },
  {
    slug: "camera-drain-inspection-mesa-az",
    name: "Camera Drain Inspection",
    tagline: "High-resolution sewer camera footage with on-screen locating and depth",
    image: "drain",
    intro: [
      "A drain camera turns guesswork into evidence. Instead of estimating why a line keeps blocking, we push a self-levelling colour camera through the pipe and watch the actual condition of the walls, joints and fall in real time, with a sonde transmitting the exact position and depth to the surface.",
      "Prestige Plumbing Company records every inspection and gives you the footage. Whether you are buying a home in Mesa, deciding between cleaning and replacement, or documenting a recurring problem for a landlord or insurer, that recording is the difference between an opinion and a fact.",
    ],
    benefits: [
      "See the true internal condition of the pipe before spending on repairs",
      "Exact location and depth marked above ground for any needed excavation",
      "Recorded footage supplied for insurance, escrow or property records",
      "Distinguishes a simple blockage from structural failure",
      "Confirms the result after cleaning, jetting or replacement work",
    ],
    problems: [
      "Recurring blockages with no obvious cause",
      "Unknown pipe material or routing in an older property",
      "Suspected root intrusion at clay joints",
      "Bellies holding water that cabling never clears",
      "Pre-purchase uncertainty about a home's underground drainage",
    ],
    signs: [
      "The same drain has been cleared more than twice in a year",
      "Multiple fixtures back up at the same time",
      "You are buying a home built before 1990",
      "Sewer odour with no visible leak",
    ],
    detail: [
      {
        heading: "What The Footage Actually Tells Us",
        body: [
          "We are looking for four things: material and its condition, joint integrity, slope, and intrusions. A clay line with hairline root entry at each joint has a very different future to a cast iron line with heavy scale, and both differ again from a PVC line with a belly holding two inches of standing water.",
          "That distinction drives the recommendation. Roots and scale respond to hydro jetting and can be managed on a maintenance interval. A belly or a collapse cannot be cleaned away — it needs the slope corrected or the section replaced, and the camera shows you precisely which one you are dealing with.",
        ],
      },
    ],
    steps: [
      { title: "Access The Line", text: "We enter through the cleanout where possible, or pull a toilet to gain access without damaging the pipe." },
      { title: "Inspect On Camera", text: "The self-levelling camera travels the full length while you watch the live feed and we narrate what each feature means." },
      { title: "Locate And Mark", text: "The sonde is tracked from the surface so any defect is marked with position and depth for later work." },
      { title: "Report And Recommend", text: "You receive the recording plus a written recommendation covering cleaning, spot repair or replacement with flat-rate pricing." },
    ],
    maintenance: [
      "Re-inspect known problem lines annually to track deterioration",
      "Camera any line after jetting to confirm the pipe wall is clean",
      "Keep the recording with your property documents for future reference",
    ],
    faqs: [
      { q: "Do I get a copy of the camera footage?", a: "Yes. Every inspection is recorded and supplied to you, which is particularly useful for insurance claims, escrow negotiations and comparing quotes from other contractors." },
      { q: "Should I get a sewer inspection before buying a house?", a: "For any Mesa home built before 1990, absolutely. Standard home inspections do not include the underground lateral, and a failed sewer line is one of the most expensive surprises a buyer can inherit." },
      { q: "How long does a camera inspection take?", a: "A typical residential lateral inspection takes 45 to 90 minutes including locating, marking and reviewing the footage with you." },
    ],
    related: ["sewer-line-repair-mesa-az", "hydro-jetting-mesa-az", "drain-cleaning-mesa-az", "plumbing-inspection-mesa-az"],
  },
  {
    slug: "garbage-disposal-repair-mesa-az",
    name: "Garbage Disposal Repair",
    tagline: "Jam clearing, leak repair and motor diagnosis for kitchen disposals",
    image: "bathroom",
    intro: [
      "A garbage disposal that hums, trips or leaks is usually repairable, and replacing one that only needs a jam cleared or a mounting gasket renewed is money wasted. Our technicians diagnose the actual fault — jam, failed splash baffle, seized bearing, tripped overload, leaking sink flange or a failed dishwasher inlet — before quoting anything.",
      "We also look at what the disposal is connected to. A unit that keeps backing up often reveals a partially blocked kitchen branch line thick with grease, and clearing the disposal alone would leave you calling again in a fortnight.",
    ],
    benefits: [
      "Honest repair-versus-replace advice based on the actual fault",
      "Jams, leaks and electrical faults resolved on the first visit",
      "Kitchen branch line checked so the real cause is not missed",
      "Correct gaskets and mountings that stop leaks returning",
      "Same-day appointments across Mesa and the East Valley",
    ],
    problems: [
      "Unit hums but the grind plate will not turn",
      "Water leaking from the sink flange or the housing seam",
      "Persistent overload trips within seconds of switching on",
      "Loud metallic rattle from foreign objects or a failed bearing",
      "Standing water in the sink after every use",
    ],
    signs: [
      "You reset the unit more often than you use it",
      "Water pools in the cabinet beneath the sink",
      "Grinding has become noticeably slower or noisier",
      "Odour persists after cleaning the chamber",
    ],
    detail: [
      {
        heading: "When Repair Is Not The Right Answer",
        body: [
          "A leak from the body seam of the housing rather than a gasket means the internal chamber has corroded through, and no repair returns that unit to service. Likewise a motor that has lost bearing integrity will be noisy and short-lived even after a jam is freed.",
          "In those cases we say so plainly and quote a replacement with the correct horsepower for your household, including a new mounting assembly and dishwasher connection. Where the fault is a jam, a baffle, a flange seal or an overload reset, we repair it and you pay a repair price.",
        ],
      },
    ],
    steps: [
      { title: "Isolate And Inspect", text: "Power is isolated at the switch and breaker, and the chamber, mounting, flange and drain connection are inspected." },
      { title: "Diagnose The Fault", text: "We test the motor, overload and switch, and free any jam manually rather than forcing the unit." },
      { title: "Repair Or Recommend", text: "Repairable faults are corrected on site; unrepairable housings are quoted flat-rate for replacement with no pressure." },
      { title: "Test Under Load", text: "The unit is run with water and waste, the drain checked for flow, and the cabinet checked dry before we leave." },
    ],
    maintenance: [
      "Run cold water for fifteen seconds before and after every use",
      "Keep fibrous peels, bones, coffee grounds and grease out of the chamber",
      "Grind ice cubes monthly to clear residue from the grind ring",
    ],
    faqs: [
      { q: "My disposal hums but does not spin — is it dead?", a: "Usually not. A hum with no rotation is the classic signature of a jam, and once it is freed and the overload reset the unit typically returns to normal service." },
      { q: "Why does my disposal leak only when the dishwasher runs?", a: "That points to the dishwasher inlet connection or the knockout plug rather than the disposal itself, and it is a straightforward repair." },
      { q: "How long should a garbage disposal last?", a: "Eight to twelve years with sensible use. Hard water and grinding fibrous or greasy waste shortens that considerably in Arizona kitchens." },
    ],
    related: ["garbage-disposal-installation-mesa-az", "kitchen-plumbing-mesa-az", "drain-cleaning-mesa-az", "sink-repair-mesa-az"],
  },
  {
    slug: "garbage-disposal-installation-mesa-az",
    name: "Garbage Disposal Installation",
    tagline: "Correctly sized, properly vented disposal installation with new mountings",
    image: "bathroom",
    intro: [
      "Installing a garbage disposal well means more than bolting a unit to the sink flange. Horsepower has to suit the household, the drain arm must be pitched correctly, the dishwasher inlet needs the knockout removed and connected with a high loop, and the electrical supply must be properly switched and grounded.",
      "Prestige Plumbing Company installs continuous-feed and batch-feed units in Mesa kitchens with a new mounting assembly, new gaskets and a tested drain connection, so the first sign of trouble is not a puddle in the cabinet six weeks later.",
    ],
    benefits: [
      "Unit horsepower matched to how your household actually cooks",
      "New mounting assembly and gaskets rather than reusing worn parts",
      "Dishwasher inlet connected with a correct high loop to prevent backflow",
      "Drain arm re-pitched where the existing plumbing was installed poorly",
      "Old unit removed and disposed of responsibly",
    ],
    problems: [
      "Existing drain arm pitched incorrectly and prone to blocking",
      "Corroded sink flanges that will not seal against a new unit",
      "Missing dishwasher high loop allowing waste water backflow",
      "Undersized units struggling in high-use family kitchens",
      "Unsafe or unswitched electrical connections beneath the sink",
    ],
    signs: [
      "Your existing unit leaks from the housing rather than a fitting",
      "You are remodelling the kitchen or replacing the sink",
      "The current disposal is underpowered for your household",
      "Repairs on the old unit now approach replacement cost",
    ],
    detail: [
      {
        heading: "Choosing Horsepower And Feed Type",
        body: [
          "A half-horsepower unit is adequate for a couple who cook occasionally. Families producing daily food waste are better served by three-quarter or one horsepower, which grinds finer and jams far less often — and finer grinding matters in older Mesa homes where the kitchen branch line is already narrowed by years of grease.",
          "Batch-feed units, which only run when the stopper is in place, are worth considering in homes with young children. Continuous-feed remains the standard for most kitchens and is what we install unless you prefer otherwise.",
        ],
      },
    ],
    steps: [
      { title: "Assess The Cabinet", text: "Drain height, trap arm pitch, dishwasher connection and electrical supply are checked before a unit is selected." },
      { title: "Remove The Old Unit", text: "The existing disposal and mounting are removed, the sink flange cleaned, and any corroded drain components identified." },
      { title: "Install And Connect", text: "The new mounting, unit, trap arm and dishwasher inlet are fitted with new gaskets and a proper high loop." },
      { title: "Test And Demonstrate", text: "The unit is run under load, the cabinet checked dry, and the reset, splash guard and care routine explained." },
    ],
    maintenance: [
      "Use cold water during and after grinding to solidify fats",
      "Avoid fibrous waste such as celery, onion skins and artichoke leaves",
      "Check the cabinet floor for moisture every few months",
    ],
    faqs: [
      { q: "What size garbage disposal do I need?", a: "Half horsepower suits light use, three-quarter horsepower suits most families, and one horsepower is best for heavy daily cooking or homes with older, narrower kitchen drain lines." },
      { q: "Can a disposal be installed on any sink?", a: "Almost any modern sink with a standard 3.5-inch opening. Some fireclay and cast iron sinks need a specific mounting kit, which we identify during assessment." },
      { q: "How long does installation take?", a: "A straight swap takes about an hour. Adding a disposal where none existed, or correcting drain pitch and electrical supply, takes two to three hours." },
    ],
    related: ["garbage-disposal-repair-mesa-az", "kitchen-plumbing-mesa-az", "sink-installation-mesa-az", "drain-cleaning-mesa-az"],
  },
  {
    slug: "toilet-repair-mesa-az",
    name: "Toilet Repair",
    tagline: "Running, leaking, weak-flushing and rocking toilets repaired properly",
    image: "bathroom",
    intro: [
      "A toilet that runs continuously can waste hundreds of gallons a day, which in Mesa's summer billing period is a genuinely expensive fault. Most running, weak-flushing or leaking toilets are repairable at a fraction of replacement cost once the actual failure — flapper, fill valve, flush valve seal, supply line or wax ring — is identified.",
      "We repair every major brand and carry common valve and seal stock on the truck, so the majority of toilet repairs across Mesa, Gilbert and Chandler are completed on the first visit rather than scheduled for a return trip.",
    ],
    benefits: [
      "Most repairs completed in a single visit from truck stock",
      "Immediate end to the water waste a running toilet creates",
      "Rocking toilets re-set with a new wax ring and secured flange",
      "Weak flush diagnosed properly rather than blamed on the bowl",
      "Honest advice when a repair genuinely is not worth the cost",
    ],
    problems: [
      "Tank refilling on its own between uses",
      "Water seeping at the base or around the closet bolts",
      "Weak or incomplete flush needing a second cycle",
      "Cracked or brittle supply lines and shut-off valves",
      "Loose, rocking bowls that break the wax seal",
    ],
    signs: [
      "You can hear the fill valve cycling at night",
      "The floor near the base is discoloured or soft",
      "Flushing requires holding the handle down",
      "Sewer odour lingers in the bathroom",
    ],
    detail: [
      {
        heading: "Why Toilets Run In Hard-Water Homes",
        body: [
          "Mesa's mineral content is hard on flappers and fill valve seals. Scale forms on the flapper seat and the rubber loses its ability to seal, so water trickles into the bowl until the fill valve cycles again. The sound is intermittent and easy to ignore, and the waste is substantial.",
          "Where a home has a rocking bowl we also check the closet flange. A flange that has corroded or sits below finished floor level will destroy any new wax ring within months, so we repair the flange properly rather than stacking rings — a shortcut we see regularly on repeat-repair calls.",
        ],
      },
    ],
    steps: [
      { title: "Confirm The Fault", text: "Dye testing, tank inspection and base examination establish whether the loss is internal, at the seal or at the supply." },
      { title: "Repair With Quality Parts", text: "Flappers, fill valves, flush valve seals, supply lines and angle stops are replaced with durable components, not the cheapest available." },
      { title: "Reset Where Needed", text: "Rocking or leaking bowls are pulled, the flange repaired or shimmed correctly, and a new wax seal fitted." },
      { title: "Test And Verify", text: "Multiple flush cycles confirm a clean shut-off, full flush volume and a dry base before we leave." },
    ],
    maintenance: [
      "Replace the flapper every three to four years in hard-water homes",
      "Avoid in-tank chemical tablets that degrade rubber components",
      "Check the base and supply line for moisture during seasonal checks",
    ],
    faqs: [
      { q: "Is it cheaper to repair or replace a toilet?", a: "Repair, in most cases. Valve and seal work costs a fraction of replacement. Replacement makes sense when the bowl or tank is cracked, the toilet is a low-performing early water-saver model, or the same unit has needed repeated attention." },
      { q: "Why does my toilet run intermittently at night?", a: "That is the fill valve topping up after a slow internal leak past a scaled flapper seat. It is usually a straightforward, inexpensive repair." },
      { q: "Is water around the toilet base dangerous?", a: "It should be dealt with quickly. Leakage at the base means the wax seal has failed and contaminated water is reaching the subfloor, where it will rot the substrate and can spread odour and bacteria." },
    ],
    related: ["toilet-installation-mesa-az", "bathroom-plumbing-mesa-az", "leak-detection-mesa-az", "emergency-plumber-mesa-az"],
  },
  {
    slug: "toilet-installation-mesa-az",
    name: "Toilet Installation",
    tagline: "New toilet supply and installation with flange repair and proper sealing",
    image: "bathroom",
    intro: [
      "Replacing a toilet correctly starts below the fixture. The closet flange must sit at the right height and be structurally sound, the floor must be level and solid, and the supply stop should be renewed at the same time — otherwise a brand-new toilet ends up rocking, leaking or seized to an old valve within a year.",
      "Prestige Plumbing Company installs comfort-height, dual-flush, one-piece and wall-hung toilets across Mesa and the East Valley, including flange repair, new wax or waxless seals, new stainless bolts and a new braided supply line as standard.",
    ],
    benefits: [
      "Flange condition and height corrected before the new unit is set",
      "New supply stop, braided line and stainless closet bolts included",
      "Comfort-height and high-efficiency options explained without upselling",
      "Old fixture removed and disposed of responsibly",
      "Fully leak-tested installation with a workmanship warranty",
    ],
    problems: [
      "Corroded or below-floor closet flanges that will not seal",
      "Soft or damaged subfloor from a long-term base leak",
      "Seized angle stops that snap when a replacement is attempted",
      "Rough-in distance mismatched to the chosen fixture",
      "Uneven tile leaving the new bowl rocking",
    ],
    signs: [
      "The existing bowl or tank is cracked",
      "The toilet has been repaired repeatedly and still performs poorly",
      "You are remodelling or changing the bathroom floor",
      "You want a comfort-height or higher-efficiency fixture",
    ],
    detail: [
      {
        heading: "Rough-In, Height And Flush Technology",
        body: [
          "Most Arizona homes use a twelve-inch rough-in from wall to flange centre, but ten and fourteen-inch layouts exist in older properties and choosing the wrong fixture wastes a delivery. We measure before ordering and confirm the model fits the space and the door swing.",
          "Comfort-height bowls suit most adults and anyone with mobility considerations. On flush performance, modern 1.28-gallon fixtures from reputable manufacturers clear the bowl reliably, unlike the first generation of low-flow toilets that gave water-saving models a poor reputation.",
        ],
      },
    ],
    steps: [
      { title: "Measure And Specify", text: "Rough-in, height preference, floor condition and supply position are checked and the right fixture confirmed." },
      { title: "Remove And Inspect", text: "The old toilet is removed and the flange, subfloor and shut-off valve inspected and repaired as needed." },
      { title: "Set And Seal", text: "The new fixture is set on a fresh seal with stainless bolts, levelled, shimmed where required and connected to a new supply." },
      { title: "Test And Clean", text: "Repeated flush cycles verify seal, flow and stability, and the old unit and packaging are removed from site." },
    ],
    maintenance: [
      "Avoid over-tightening closet bolts, which can crack the porcelain base",
      "Clean with non-abrasive products to protect the glaze and seals",
      "Re-check the base for movement after the first few months",
    ],
    faqs: [
      { q: "How long does it take to install a new toilet?", a: "A straightforward replacement takes about ninety minutes. Flange repair, subfloor patching or supply-valve replacement adds an hour or two." },
      { q: "Will a low-flow toilet clog more often?", a: "Not with a quality modern fixture. Current 1.28-gallon designs use engineered bowl geometry and clear waste as reliably as older high-volume toilets." },
      { q: "Do you take the old toilet away?", a: "Yes. Removal and responsible disposal of the old fixture is included in every installation." },
    ],
    related: ["toilet-repair-mesa-az", "bathroom-plumbing-mesa-az", "bathroom-remodel-plumbing-mesa-az", "residential-plumbing-mesa-az"],
  },
  {
    slug: "faucet-repair-mesa-az",
    name: "Faucet Repair",
    tagline: "Dripping, stiff and low-flow faucets repaired with the correct cartridges",
    image: "bathroom",
    intro: [
      "Arizona water is unkind to faucet cartridges. Mineral content scales the ceramic discs and rubber seats that control flow, which is why a kitchen or bathroom faucet that worked perfectly for years begins to drip, stiffen or whistle. Most of those faucets are repairable with the manufacturer's cartridge rather than a full replacement.",
      "We carry cartridges and seat kits for the major brands found across Mesa homes and identify the model on site, so a dripping faucet is usually solved in a single visit — and a dripping faucet is a genuine cost, wasting thousands of gallons a year at current rates.",
    ],
    benefits: [
      "Correct manufacturer cartridge rather than a universal compromise part",
      "Immediate end to the water waste of a constant drip",
      "Aerators descaled and flow restored at the same visit",
      "Angle stops and supply lines inspected while access is open",
      "Repair pricing that avoids an unnecessary fixture replacement",
    ],
    problems: [
      "Constant drip from the spout after shut-off",
      "Handles that are stiff, gritty or will not centre",
      "Water seeping from the base of the spout or handle",
      "Weak flow from a scaled aerator or supply line",
      "Temperature drift on single-lever mixers",
    ],
    signs: [
      "You have tightened the handle and the drip persists",
      "Mineral crust is visible around the base or aerator",
      "Flow from this faucet is noticeably weaker than the rest of the house",
      "The cabinet beneath the sink is damp",
    ],
    detail: [
      {
        heading: "Cartridge, Seat Or Fixture",
        body: [
          "A drip from the spout means the cartridge or the seats and springs behind it are no longer sealing. A drip from the handle base points to failed O-rings, and water from the deck plate usually means the mounting seal or the supply connection. Each of these is a different repair, and only the last sometimes justifies replacing the fixture.",
          "We advise replacement when the faucet body itself is corroded, when parts are genuinely unavailable for a discontinued import, or when the fixture is a low-grade builder unit that will fail again shortly. Otherwise a quality faucet is worth repairing repeatedly over decades.",
        ],
      },
    ],
    steps: [
      { title: "Identify The Fixture", text: "Brand and model are identified so the correct cartridge and seat kit are used rather than a generic substitute." },
      { title: "Isolate And Dismantle", text: "Supply is isolated at the angle stops, and the handle, cartridge and seats are removed and inspected." },
      { title: "Replace And Descale", text: "Worn components are replaced, the valve body and aerator descaled, and O-rings lubricated with plumber's grease." },
      { title: "Reassemble And Test", text: "The faucet is reassembled, both temperatures tested, and the cabinet checked dry under running load." },
    ],
    maintenance: [
      "Unscrew and soak aerators in vinegar twice a year",
      "Avoid forcing stiff handles, which shears cartridge stems",
      "Wipe hard-water spotting from finishes to protect the plating",
    ],
    faqs: [
      { q: "Is a dripping faucet worth fixing quickly?", a: "Yes. A single drip per second wastes roughly three thousand gallons a year, and the constant flow also erodes the valve seat, turning a small cartridge job into a larger one." },
      { q: "Why do faucet cartridges fail so fast in Mesa?", a: "Hard water deposits scale on the ceramic discs and rubber seats, so they can no longer close cleanly. Periodic descaling and quality cartridges extend the interval significantly." },
      { q: "Can you repair any brand of faucet?", a: "We repair all major brands and most imports. Where parts are genuinely discontinued we will tell you before starting and quote a replacement fixture instead." },
    ],
    related: ["faucet-installation-mesa-az", "kitchen-plumbing-mesa-az", "bathroom-plumbing-mesa-az", "leak-detection-mesa-az"],
  },
  {
    slug: "faucet-installation-mesa-az",
    name: "Faucet Installation",
    tagline: "Kitchen, bath and outdoor faucet installation with new supplies and stops",
    image: "bathroom",
    intro: [
      "New faucet installations fail for predictable reasons: reused corroded angle stops, kinked supply lines, deck plates fitted without sealant, and mismatched hole configurations. We install kitchen, lavatory, bar, laundry and outdoor faucets with new stops and braided stainless supplies as standard.",
      "Whether you have purchased the fixture yourself or want us to supply it, the installation is the same standard: correct hole layout, sealed deck, secure mounting, tested connections and a clean cabinet when we leave.",
    ],
    benefits: [
      "New angle stops and braided supply lines included",
      "Correct hole configuration confirmed before the fixture is opened",
      "Deck and base properly sealed against sink-top water",
      "Customer-supplied fixtures installed to the same standard",
      "Pull-down and touchless models set up and demonstrated",
    ],
    problems: [
      "Seized shut-off valves that fail during a DIY attempt",
      "Three-hole sinks paired with single-hole fixtures",
      "Supply lines kinked or cross-threaded on installation",
      "Loose mounting hardware allowing the spout to swivel out of line",
      "Missing sealant letting water reach the cabinet through the deck",
    ],
    signs: [
      "Your current faucet is corroded or beyond economic repair",
      "You are replacing a sink or countertop",
      "You want touchless, pull-down or filtered-water functionality",
      "The existing shut-off valves no longer close fully",
    ],
    detail: [
      {
        heading: "Getting The Details Right",
        body: [
          "Hole count and spread matter. A single-hole fixture on a three-hole sink needs a deck plate, a widespread lavatory set needs an eight-inch spread, and a pull-down kitchen faucet needs enough clearance behind the sink for the hose weight to travel freely.",
          "We also renew the angle stops. They are inexpensive, they are the valves you will reach for in an emergency, and after fifteen years in Arizona water many of them will not close when you need them. Replacing them during installation is far cheaper than an emergency call later.",
        ],
      },
    ],
    steps: [
      { title: "Confirm Fit", text: "Sink hole layout, deck thickness, clearance and supply positions are checked against the chosen fixture." },
      { title: "Remove And Renew", text: "The old faucet is removed and the angle stops and supply lines replaced with new components." },
      { title: "Mount And Seal", text: "The new faucet is mounted securely, the deck sealed, and the hose or sprayer routed without kinks or friction." },
      { title: "Test And Demonstrate", text: "Both supplies are tested under pressure, the cabinet checked dry, and any electronic or filtration features demonstrated." },
    ],
    maintenance: [
      "Clean aerators regularly to maintain rated flow",
      "Check supply connections for weeping twice a year",
      "Use only mild cleaners on brushed and matte black finishes",
    ],
    faqs: [
      { q: "Can you install a faucet I bought myself?", a: "Yes, and we do it regularly. We will check the fixture matches your sink configuration before starting, and install it with new stops and supply lines to the same standard as a supplied fixture." },
      { q: "How long does faucet installation take?", a: "Around an hour for a straight replacement. Add time if the angle stops are seized, the sink layout changes, or a garbage disposal and filtration are involved." },
      { q: "Do I need to replace shut-off valves at the same time?", a: "We strongly recommend it on any fixture over ten years old. Valves that will not close are the single most common reason a small leak becomes an emergency." },
    ],
    related: ["faucet-repair-mesa-az", "sink-installation-mesa-az", "kitchen-plumbing-mesa-az", "bathroom-plumbing-mesa-az"],
  },
  {
    slug: "sink-repair-mesa-az",
    name: "Sink Repair",
    tagline: "Leaking traps, blocked branches and failing sink drains repaired",
    image: "bathroom",
    intro: [
      "Most sink problems are not the sink at all — they are the drain assembly, the trap, the branch line or the connection between them. A cabinet that smells musty, a basin that empties slowly, or a puddle that appears only after a full sink drains each point to a different failure.",
      "Prestige Plumbing Company repairs kitchen, lavatory, laundry, bar and utility sinks across Mesa: pop-up assemblies, strainer baskets, tailpieces, P-traps, trap arms and the branch drain behind them, plus the cabinet damage that a slow leak has already started.",
    ],
    benefits: [
      "The true source of the leak found rather than the visible drip chased",
      "Metal and PVC drain assemblies repaired or upgraded correctly",
      "Branch line cleared where the sink is slow rather than leaking",
      "Cabinet moisture damage identified before it spreads",
      "Same-day availability for active leaks",
    ],
    problems: [
      "Leaking slip joints and worn trap washers",
      "Corroded metal tailpieces and strainer baskets",
      "Loose or failed strainer putty seals under the basin",
      "Slow drainage from a grease-narrowed branch line",
      "Missing or improper venting causing gurgling and slow flow",
    ],
    signs: [
      "The cabinet base is stained, swollen or musty",
      "Water appears only after the basin is filled and released",
      "The sink gurgles as it empties",
      "Standing water remains in the basin after use",
    ],
    detail: [
      {
        heading: "Leak, Blockage Or Vent",
        body: [
          "We test each possibility separately. Filling and releasing the basin loads the drain assembly and reveals slip-joint and strainer leaks that a trickle of water will not. If the basin drains slowly with no leak, the issue is the branch line or the vent rather than anything under the cabinet.",
          "Gurgling is the classic vent signature: the draining water is pulling air through the trap because it cannot get it from the vent stack. Repairing that properly protects the trap seal, which is the only thing standing between your kitchen and sewer gas.",
        ],
      },
    ],
    steps: [
      { title: "Load Test The Drain", text: "The basin is filled and released to expose leaks that appear only under full flow." },
      { title: "Inspect The Assembly", text: "Strainer, tailpiece, trap, trap arm and connections are examined for corrosion, misalignment and failed seals." },
      { title: "Repair Or Rebuild", text: "Failed components are replaced, misaligned assemblies re-plumbed to correct fall, and the branch cleared if restricted." },
      { title: "Verify Dry", text: "The sink is run repeatedly and the cabinet checked dry, with any water-damaged shelf material flagged for you." },
    ],
    maintenance: [
      "Check under-sink cabinets for moisture every few months",
      "Never pour cooking grease into a kitchen sink",
      "Fill and release the basin monthly to keep trap seals full in guest bathrooms",
    ],
    faqs: [
      { q: "Why does my sink only leak sometimes?", a: "Because the failure is above the normal water line in the assembly. A slow trickle passes below it, but a full basin releasing at once loads the joints and the leak appears." },
      { q: "Can you fix a slow sink without harsh chemicals?", a: "Yes, and we prefer to. Chemical drain openers damage older piping and rarely clear grease properly. Mechanical clearing or targeted jetting removes the build-up rather than boring a hole through it." },
      { q: "Should I repair or replace the drain assembly?", a: "Corroded metal assemblies are usually better replaced outright, as the adjacent joints tend to fail soon after a partial repair." },
    ],
    related: ["sink-installation-mesa-az", "drain-cleaning-mesa-az", "kitchen-plumbing-mesa-az", "faucet-repair-mesa-az"],
  },
  {
    slug: "sink-installation-mesa-az",
    name: "Sink Installation",
    tagline: "Drop-in, undermount and farmhouse sink plumbing installed and tested",
    image: "bathroom",
    intro: [
      "Setting a new sink is as much about the drain geometry as the basin. Deeper bowls, farmhouse fronts and undermount installations all change the height of the tailpiece relative to the trap arm, and getting that fall wrong is how a beautiful new kitchen sink ends up draining slowly from day one.",
      "We install drop-in, undermount, farmhouse and vessel sinks in Mesa homes with new drain assemblies, correctly pitched trap arms, renewed shut-offs and, where fitted, the disposal and filtration connections done properly at the same time.",
    ],
    benefits: [
      "Drain geometry corrected for deeper modern basins",
      "New drain assembly, trap and supply connections included",
      "Disposal and filtered-water connections integrated cleanly",
      "Undermount and farmhouse installations sealed against countertop seepage",
      "Coordination with your counter fabricator or remodel schedule",
    ],
    problems: [
      "Trap arms that sit too high for a deep new basin",
      "Existing branch drains without adequate fall",
      "Seized shut-off valves discovered mid-installation",
      "Undermount clips and sealant failing in humid cabinets",
      "Disposal weight unsupported on lightweight basins",
    ],
    signs: [
      "You are replacing a countertop or remodelling the kitchen",
      "The existing basin is cracked, chipped or permanently stained",
      "You are upgrading to a deeper single-bowl or farmhouse sink",
      "The current sink drains slowly no matter how often it is cleared",
    ],
    detail: [
      {
        heading: "Drain Height Is Everything",
        body: [
          "A deep single-bowl sink can drop the tailpiece four inches lower than the shallow double-bowl it replaced. If the branch drain in the wall stays where it is, the trap arm ends up level or rising, and waste water no longer carries solids away cleanly.",
          "We measure that relationship before the sink goes in and re-plumb the branch where required, so the finished installation has proper continuous fall. It is the difference between a sink that works for twenty years and one you call about every few months.",
        ],
      },
    ],
    steps: [
      { title: "Survey The Rough-In", text: "Branch drain height, vent arrangement, supply positions and cabinet clearance are measured against the new sink." },
      { title: "Remove And Prepare", text: "The old sink is removed, the countertop cut-out checked, and cabinet or counter support confirmed for the new basin's weight." },
      { title: "Set And Plumb", text: "The sink is set and sealed, and new drain, trap, supplies and any disposal or filtration are connected with correct fall." },
      { title: "Fill Test And Finish", text: "The basin is filled and released repeatedly, connections checked dry, and silicone lines tooled cleanly." },
    ],
    maintenance: [
      "Keep the sealant bead around undermount rims intact and dry",
      "Avoid dropping heavy cookware onto composite and fireclay basins",
      "Run hot water after washing greasy items to keep the branch clear",
    ],
    faqs: [
      { q: "Can you install a farmhouse sink in an existing kitchen?", a: "Usually yes, but the sink cabinet and often the countertop require modification, and the drain height frequently needs adjusting. We assess both before quoting." },
      { q: "Do you supply the sink or do I?", a: "Either. Many customers choose their own basin and we handle the plumbing installation; we can also supply quality fixtures if you prefer a single point of responsibility." },
      { q: "How long does a sink installation take?", a: "Two to four hours for a like-for-like replacement. Deeper basins, disposal additions or branch drain corrections extend it to most of a day." },
    ],
    related: ["sink-repair-mesa-az", "kitchen-plumbing-mesa-az", "faucet-installation-mesa-az", "garbage-disposal-installation-mesa-az"],
  },
  {
    slug: "shower-repair-mesa-az",
    name: "Shower Repair",
    tagline: "Valve, cartridge, pan and diverter repairs that stop hidden water damage",
    image: "bathroom",
    intro: [
      "Shower leaks are the most destructive small leaks in a house because the water goes behind tile and into the wall cavity where nobody sees it. A dripping shower head, a diverter that will not hold, or a valve weeping inside the wall can saturate framing for months before a stain appears on the ceiling below.",
      "Prestige Plumbing Company repairs pressure-balancing and thermostatic valves, cartridges, diverters, shower arms, pans and drains across Mesa and the East Valley, using access strategies that minimise tile removal wherever the plumbing allows.",
    ],
    benefits: [
      "Valve cartridges replaced without unnecessary tile demolition",
      "Anti-scald pressure-balancing function restored to code",
      "Concealed wall leaks located before framing damage spreads",
      "Shower pans and drains resealed or replaced correctly",
      "Moisture in adjoining rooms investigated as part of the repair",
    ],
    problems: [
      "Constant drip from the head or spout after shut-off",
      "Sudden temperature swings when another fixture is used",
      "Tub spout diverters that will not send water upward",
      "Water staining on adjacent walls or ceilings below",
      "Cracked or separated shower pans leaking into the subfloor",
    ],
    signs: [
      "Grout and caulk lines are persistently dark or crumbling",
      "The ceiling beneath the bathroom shows a growing stain",
      "Handle operation feels gritty, loose or restricted",
      "You smell mustiness in the bathroom after use",
    ],
    detail: [
      {
        heading: "Access Without Wrecking The Tile",
        body: [
          "Wherever possible we work through the trim plate opening or from the back wall of an adjoining closet or hallway. That approach lets us rebuild or replace most valves without disturbing the tile face, which is usually the most expensive part of any shower repair.",
          "When the leak is at the pan or the drain connection rather than the valve, tile removal may be unavoidable — but we confirm the source with moisture metering and camera access first, so nothing is opened on a guess.",
        ],
      },
    ],
    steps: [
      { title: "Locate The Source", text: "Moisture meters, targeted testing and inspection from below identify whether the valve, the pan, the drain or the surround is failing." },
      { title: "Plan Minimal Access", text: "We choose the least destructive access route, preferring adjoining walls and trim openings over the tile face." },
      { title: "Repair Or Rebuild", text: "Cartridges, seats, diverters, valve bodies, drains or pan connections are repaired or replaced as required." },
      { title: "Test And Reinstate", text: "The assembly is run through temperature and pressure cycles, checked from below, and the access point neatly reinstated." },
    ],
    maintenance: [
      "Renew silicone at pan and wall junctions every two to three years",
      "Descale shower heads twice a year in Mesa's hard water",
      "Report ceiling stains below a bathroom immediately rather than repainting them",
    ],
    faqs: [
      { q: "Will you have to remove tile to fix my shower valve?", a: "Usually not. Most valve repairs are done through the trim opening or from an adjoining wall, and we always exhaust those options before considering tile removal." },
      { q: "Why does my shower go cold when someone flushes?", a: "That is a failed or absent pressure-balancing function in the valve. Replacing the cartridge, or the valve where necessary, restores stable temperature and the anti-scald protection required by code." },
      { q: "How do I know if a shower is leaking inside the wall?", a: "Warning signs include dark or crumbling grout, a musty smell, soft drywall on the other side of the wall, and staining on a ceiling below. Moisture metering confirms it without opening anything." },
    ],
    related: ["shower-installation-mesa-az", "bathroom-plumbing-mesa-az", "leak-detection-mesa-az", "bathtub-plumbing-mesa-az"],
  },
  {
    slug: "shower-installation-mesa-az",
    name: "Shower Installation",
    tagline: "New shower valves, pans and complete shower plumbing installed to code",
    image: "bathroom",
    intro: [
      "A new shower is only as good as the plumbing behind the tile. Valve depth relative to the finished surface, pan slope to the drain, correctly bonded drain assemblies and properly sized supply lines all determine whether the finished shower performs and stays dry for decades.",
      "We handle the plumbing side of shower installations across Mesa and the East Valley: pressure-balancing or thermostatic valve rough-in, multi-head and rainfall supply sizing, drain and pan connections, and permitted inspection where the scope requires it.",
    ],
    benefits: [
      "Valve set at the correct depth for your finished tile or panel surface",
      "Supply sizing that actually supports rainfall and multi-head layouts",
      "Pan slope and drain bonding done to prevent long-term seepage",
      "Anti-scald pressure balancing to current Arizona code",
      "Coordination with your tile setter and remodel schedule",
    ],
    problems: [
      "Valves roughed in too deep or too shallow for the trim plate",
      "Half-inch supplies unable to feed multi-head systems",
      "Pans without adequate fall leaving standing water",
      "Improper drain connections that seep into the subfloor",
      "Old galvanized branch lines starving a new shower of pressure",
    ],
    signs: [
      "You are remodelling a bathroom or converting a tub to a shower",
      "The existing valve is obsolete and parts are unavailable",
      "You want a rainfall head, body sprays or a hand shower added",
      "The current shower has never had adequate pressure",
    ],
    detail: [
      {
        heading: "Flow Planning For Modern Shower Layouts",
        body: [
          "A single standard head needs modest flow. Add a rainfall head, a hand shower and body sprays and the demand can triple, which a half-inch branch simply cannot deliver at usable pressure. We calculate combined flow and upsize the branch and valve accordingly.",
          "Hot water capacity matters just as much. A large multi-head shower can outrun a small tank heater in minutes, so we check the heater's recovery and, where appropriate, discuss tankless or a larger tank as part of the project rather than after the tile is finished.",
        ],
      },
    ],
    steps: [
      { title: "Design The Rough-In", text: "Head layout, valve type, flow requirement and drain position are planned against the finished surface build-up." },
      { title: "Install Supply And Drain", text: "Branch lines are upsized where needed, the valve set to depth, and the drain and pan connection installed correctly." },
      { title: "Pressure Test And Inspect", text: "The rough-in is pressure tested and, where the scope requires, inspected under permit before the walls close." },
      { title: "Trim And Commission", text: "After tile, trim is fitted, temperature limits set, and the finished shower tested through full hot and cold cycles." },
    ],
    maintenance: [
      "Clean head nozzles and filters to maintain spray pattern in hard water",
      "Keep the drain hair strainer in place to protect the branch line",
      "Inspect silicone joints annually and renew before they fail",
    ],
    faqs: [
      { q: "Can you convert my tub into a walk-in shower?", a: "Yes. The plumbing side involves relocating and resizing the drain, setting a new valve at the correct depth, and confirming the branch supply can deliver your intended head layout." },
      { q: "Do I need a permit for a new shower?", a: "Cosmetic trim swaps generally do not require one, but relocating a drain or altering supply and valve rough-in usually does. We handle the permit and inspection where it applies." },
      { q: "Why is my new rainfall head weak?", a: "Almost always undersized supply. Rainfall heads need volume rather than pressure, and a half-inch branch shared with other fixtures cannot deliver it. Upsizing the branch resolves it." },
    ],
    related: ["shower-repair-mesa-az", "bathroom-plumbing-mesa-az", "bathtub-plumbing-mesa-az", "water-heater-installation-mesa-az"],
  },
  {
    slug: "bathtub-plumbing-mesa-az",
    name: "Bathtub Plumbing",
    tagline: "Tub valves, waste and overflow assemblies, drains and replacements",
    image: "bathroom",
    intro: [
      "Bathtub plumbing problems tend to hide. The waste and overflow assembly sits behind an access panel or inside a wall cavity, and when its gaskets fail the water runs quietly into the framing rather than onto the bathroom floor, often for months before it appears on a ceiling below.",
      "We service and replace tub valves, spouts, diverters, drain shoes and waste-and-overflow assemblies across Mesa, and handle full tub replacements including the drain relocation and rough-in that a new fixture requires.",
    ],
    benefits: [
      "Waste and overflow gasket leaks resolved before framing damage occurs",
      "Diverters and spouts repaired so water goes where it should",
      "Slow tub drains cleared without damaging older drain shoes",
      "Full tub replacements plumbed and tested correctly",
      "Access made and reinstated tidily wherever possible",
    ],
    problems: [
      "Water staining the ceiling below only after a bath is taken",
      "Trip-lever and pop-up drain assemblies that will not hold water",
      "Tub spout diverters leaking while the shower runs",
      "Slow-draining tubs from hair-packed drain shoes",
      "Cracked or corroded drain shoes on cast iron and steel tubs",
    ],
    signs: [
      "The tub will not hold water at a constant level",
      "A ceiling stain appears below the bathroom after bathing",
      "The overflow plate is loose or weeping",
      "Draining the tub takes several minutes",
    ],
    detail: [
      {
        heading: "Waste And Overflow: The Usual Culprit",
        body: [
          "The overflow gasket seals the assembly against the back of the tub. As it hardens with age it stops sealing, and every bath filled above the overflow level pushes water past it into the wall. The tell is a leak that only ever appears after a full bath, never after a shower.",
          "Replacing that assembly requires access from behind or below, which is straightforward in homes with an access panel or a crawl-accessible ceiling and more involved otherwise. We identify the cheapest safe access route before quoting rather than defaulting to the largest opening.",
        ],
      },
    ],
    steps: [
      { title: "Reproduce The Leak", text: "We fill the tub, run the shower and test the overflow separately so the failing component is identified rather than assumed." },
      { title: "Gain Access", text: "The least invasive access route is chosen — panel, adjoining wall or ceiling below — and protected before opening." },
      { title: "Repair Or Replace", text: "Gaskets, drain shoes, trip levers, valves or the full waste and overflow assembly are replaced as required." },
      { title: "Test And Reinstate", text: "The tub is filled to overflow and drained repeatedly while the access area is watched, then closed up cleanly." },
    ],
    maintenance: [
      "Clear hair from the drain and overflow strainer regularly",
      "Renew the silicone bead where the tub meets tile or surround annually",
      "Fill guest bathroom tubs briefly each month to keep the trap seal intact",
    ],
    faqs: [
      { q: "Why does my ceiling stain only after someone takes a bath?", a: "That is the classic overflow gasket failure. Showers stay below the overflow, but a filled bath pushes water past the hardened gasket into the wall and down to the ceiling below." },
      { q: "Can a bathtub drain be cleared without damage?", a: "Yes. We use appropriately sized cabling and hair-retrieval tools rather than chemicals, which are especially damaging to older steel and cast iron drain shoes." },
      { q: "Do you replace bathtubs?", a: "We handle the full plumbing side — removal, drain relocation where required, rough-in, setting and connection — and coordinate with tile and surround trades on remodel projects." },
    ],
    related: ["shower-repair-mesa-az", "bathroom-plumbing-mesa-az", "drain-cleaning-mesa-az", "bathroom-remodel-plumbing-mesa-az"],
  },
  {
    slug: "gas-line-repair-mesa-az",
    name: "Gas Line Repair",
    tagline: "Licensed gas leak detection, pressure testing and permitted repairs",
    image: "gasLine",
    intro: [
      "Gas work has no margin for improvisation. Every gas line repair we perform is carried out by licensed technicians using calibrated combustible gas detectors and pressure testing, under permit where the jurisdiction requires it, and verified before the system returns to service.",
      "If you smell sulfur, hear hissing near a line or appliance, or a detector has alarmed, leave the building and call the utility from outside first. Once the supply is safe, Prestige Plumbing Company will locate the compromised section, repair or replace it, and pressure test the system to confirm integrity.",
    ],
    benefits: [
      "Licensed technicians with calibrated leak detection instruments",
      "Full-system pressure testing rather than a single-joint check",
      "Permitted repairs coordinated with the local jurisdiction",
      "Corroded exterior and underground runs replaced properly",
      "Appliance connectors and shut-off valves inspected at the same visit",
    ],
    problems: [
      "Corrosion at exterior and buried steel gas piping",
      "Failed joint compound and thread sealant at fittings",
      "Damaged lines from landscaping, trenching or post driving",
      "Deteriorated flexible appliance connectors",
      "Pressure loss detected during appliance servicing",
    ],
    signs: [
      "A sulfur or rotten-egg odour indoors or near the meter",
      "Hissing near a line, meter or appliance connection",
      "Dead or discoloured vegetation along a buried line's path",
      "Gas appliances burning with an unusual yellow flame",
    ],
    detail: [
      {
        heading: "Detection, Isolation And Verification",
        body: [
          "We start with a combustible gas detector sweep of the accessible system and then isolate sections to narrow the loss. Pressure testing with a calibrated gauge tells us whether the system holds, and for how long, which distinguishes a single significant leak from diffuse deterioration across older piping.",
          "Repairs are made with correct materials for the location — coated steel or approved CSST where permitted — and the system is retested and documented before service is restored. Where corrosion is widespread we recommend replacing the run rather than patching a fitting that is one of many about to fail.",
        ],
      },
    ],
    steps: [
      { title: "Make Safe First", text: "Supply is isolated, the area ventilated, and no ignition sources are permitted until the system is confirmed safe." },
      { title: "Detect And Isolate", text: "Calibrated detection and sectional isolation locate the compromised piping precisely." },
      { title: "Repair Under Permit", text: "The failed section is repaired or replaced with approved materials, permitted and inspected where required." },
      { title: "Pressure Test And Restore", text: "The system is pressure tested and held, appliances relit and checked, and the results documented for your records." },
    ],
    maintenance: [
      "Have gas piping inspected during annual plumbing maintenance",
      "Replace flexible appliance connectors when appliances are moved or replaced",
      "Keep landscaping and digging well clear of marked buried gas lines",
    ],
    faqs: [
      { q: "What should I do if I smell gas?", a: "Leave the building immediately without operating switches, phones or garage doors, then call your gas utility from outside. Once the supply is secured, call us to locate and repair the fault." },
      { q: "Do gas line repairs require a permit?", a: "In most East Valley jurisdictions, yes. We apply for the permit, complete the work to code and arrange the inspection as part of the job." },
      { q: "How long does a gas leak repair take?", a: "Locating and repairing a single accessible leak is often a same-day job. Buried or widely corroded runs take longer, particularly where excavation and inspection scheduling are involved." },
    ],
    related: ["gas-line-installation-mesa-az", "emergency-plumber-mesa-az", "plumbing-inspection-mesa-az", "commercial-plumbing-mesa-az"],
  },
  {
    slug: "water-line-repair-mesa-az",
    name: "Water Line Repair",
    tagline: "Main water service line leak location and repair without guesswork",
    image: "leak",
    intro: [
      "The water service line runs from the meter to your home, and when it fails you often see the symptoms before the water: a soggy patch of yard in July, an unusually green stripe of grass, a bill that has doubled, or pressure that has quietly dropped across the whole house.",
      "Prestige Plumbing Company traces and repairs service line failures across Mesa and the East Valley using line locating and acoustic equipment, so excavation is limited to the actual failure point rather than a trench along the whole run.",
    ],
    benefits: [
      "Precise electronic location that limits excavation to the failure",
      "Repairs that restore full house pressure rather than masking the loss",
      "Correct bedding and compaction so the repair does not settle and fail",
      "Coordination with the utility on meter-side responsibility",
      "Landscaping and hardscape disturbance kept to a minimum",
    ],
    problems: [
      "Pinhole and split failures in aged copper or poly service lines",
      "Root and rock damage to shallow buried lines",
      "Failed compression and transition fittings at the meter",
      "Pressure loss across the whole property with no interior leak",
      "Previous repairs backfilled poorly and failing again",
    ],
    signs: [
      "A persistently wet or unusually green area between meter and house",
      "House-wide pressure decline over weeks or months",
      "The meter dial turns with every fixture in the house closed",
      "Water bills climbing with no change in household usage",
    ],
    detail: [
      {
        heading: "Meter-Side Versus Owner-Side",
        body: [
          "The utility is responsible for the line up to and including the meter; from the meter to the house it is yours. Establishing which side has failed determines who pays, so we verify at the meter before excavating anything and tell you plainly if the leak belongs to the city.",
          "For owner-side failures we assess whether a spot repair or a full service line replacement is the better value. A single mechanical damage point is worth repairing; a poly or copper line with age-related failures in multiple spots is worth replacing in one planned project.",
        ],
      },
    ],
    steps: [
      { title: "Verify And Isolate", text: "Meter readings and valve isolation confirm the loss is on the owner-side service line rather than inside the home or irrigation." },
      { title: "Locate The Failure", text: "Line tracing and acoustic correlation pinpoint the leak so excavation is limited to a small area." },
      { title: "Excavate And Repair", text: "The failure is exposed, repaired or the run replaced, with materials suited to the soil and depth." },
      { title: "Test And Backfill", text: "Pressure is restored and verified, and the excavation is bedded, compacted and the surface restored." },
    ],
    maintenance: [
      "Check your meter monthly with the house shut off",
      "Maintain house pressure below 80 psi with a working regulator",
      "Mark the service line route before any landscaping or trenching work",
    ],
    faqs: [
      { q: "Who pays for a water line leak — me or the city?", a: "The utility owns the line up to the meter and you own it from the meter to the house. We verify which side has failed before any work is quoted or started." },
      { q: "How do you find a buried water line leak?", a: "Line tracing establishes the route and acoustic correlation locates the escaping water. That combination usually narrows the failure to within a few feet, so we dig one small hole rather than a trench." },
      { q: "Can a service line be replaced without digging up the driveway?", a: "Often yes, using directional boring or pulling a new line along a different route. We assess the site and give you both options with pricing." },
    ],
    related: ["water-line-installation-mesa-az", "leak-detection-mesa-az", "slab-leak-repair-mesa-az", "emergency-leak-repair-mesa-az"],
  },
  {
    slug: "water-line-installation-mesa-az",
    name: "Water Line Installation",
    tagline: "New and replacement water service lines, hose bibbs and irrigation ties",
    image: "van",
    intro: [
      "Whether you are replacing a failing service line, running water to a casita or workshop, or adding hose bibbs and appliance supplies, the installation has to account for Arizona conditions: soil movement, summer heat, depth of cover and the pressure the meter actually delivers.",
      "Prestige Plumbing Company installs new water lines in the correct material and diameter for the run length and demand, with proper bedding, tracer wire where applicable, and isolation valves that let future work happen without shutting down the entire property.",
    ],
    benefits: [
      "Line diameter sized for run length and actual fixture demand",
      "Directional boring options that avoid tearing up driveways",
      "Isolation valves that simplify every future repair",
      "Correct depth, bedding and compaction for Arizona soils",
      "Permitted and inspected work where the jurisdiction requires it",
    ],
    problems: [
      "Undersized existing lines strangling pressure at the house",
      "Poly and aged copper service lines nearing end of life",
      "No isolation valve between meter and house",
      "Detached structures needing new supply runs",
      "Shallow lines vulnerable to landscaping and vehicle loads",
    ],
    signs: [
      "Pressure drops noticeably when two fixtures run at once",
      "Your service line has already been repaired more than once",
      "You are adding a casita, guest house, workshop or pool equipment",
      "Irrigation and household demand are competing for supply",
    ],
    detail: [
      {
        heading: "Sizing And Route Planning",
        body: [
          "Pressure loss over distance is the factor homeowners underestimate. A three-quarter-inch line adequate for a short run to a compact house is often insufficient for a long driveway approach or a property with irrigation, a pool and multiple bathrooms, and the answer is a properly calculated diameter rather than accepting weak flow.",
          "Route matters just as much. We plan around trees, hardscape, existing utilities and future landscaping, and use directional boring where a straight trench would destroy something expensive. Tracer wire and documented routing mean the line can be located easily years from now.",
        ],
      },
    ],
    steps: [
      { title: "Calculate Demand", text: "Fixture units, irrigation load and run length determine the correct line diameter and material." },
      { title: "Plan The Route", text: "Utilities are located, and the route is planned to avoid hardscape and mature landscaping, using boring where sensible." },
      { title: "Install And Valve", text: "The line is installed at correct depth with bedding, tracer wire and accessible isolation valves." },
      { title: "Pressure Test And Restore", text: "The new line is pressure tested and inspected where required, then backfilled, compacted and the surface reinstated." },
    ],
    maintenance: [
      "Exercise the main isolation valve twice a year so it works when needed",
      "Keep the documented line route with your property records",
      "Verify static pressure annually and adjust the regulator as needed",
    ],
    faqs: [
      { q: "How long does a water service line replacement take?", a: "Most residential replacements are completed in one to two days including pressure testing and surface restoration, depending on run length and access." },
      { q: "What size water line does my house need?", a: "It depends on run length, fixture count and irrigation demand. Many homes with weak pressure have an undersized line, and correcting the diameter resolves what looked like a pressure problem." },
      { q: "Will you have to dig up my driveway?", a: "Usually not. Directional boring lets us pass beneath driveways and hardscape with entry and exit pits only." },
    ],
    related: ["water-line-repair-mesa-az", "repiping-mesa-az", "residential-plumbing-mesa-az", "plumbing-inspection-mesa-az"],
  },
  {
    slug: "backflow-testing-mesa-az",
    name: "Backflow Testing",
    tagline: "Certified backflow assembly testing, repair and annual compliance",
    image: "commercial",
    intro: [
      "Backflow prevention assemblies keep irrigation chemicals, boiler water and commercial process water out of the potable supply. Arizona jurisdictions require annual testing of those assemblies by a certified tester, and the results must be filed with the water provider to keep the property compliant.",
      "Prestige Plumbing Company tests, repairs and replaces reduced pressure zone and double check assemblies for HOAs, commercial properties, restaurants and residential irrigation systems throughout Mesa and the surrounding cities, and files the paperwork on your behalf.",
    ],
    benefits: [
      "Certified testing that satisfies local annual compliance requirements",
      "Test reports filed with the water provider for you",
      "Repair kits and rebuilds rather than automatic replacement",
      "Multi-property scheduling for HOAs and portfolio owners",
      "Freeze and vandalism damage assessed at the same visit",
    ],
    problems: [
      "Assemblies failing their annual test on relief valve discharge",
      "Fouled check valves from grit and debris in the supply",
      "Freeze-split bodies after an unusual cold snap",
      "Missing or expired test records triggering utility notices",
      "Assemblies installed at incorrect height or orientation",
    ],
    signs: [
      "You have received an annual testing notice from your water provider",
      "The assembly is discharging water from the relief port",
      "Irrigation pressure has dropped noticeably",
      "The device has visible corrosion, damage or freeze splitting",
    ],
    detail: [
      {
        heading: "Test, Repair, Retest",
        body: [
          "A test measures the differential pressure across each check and the operation of the relief valve. Failures are usually caused by debris fouling a check seat or by worn rubber components, both of which are repairable with a manufacturer rebuild kit at far lower cost than replacement.",
          "Following a repair the assembly must be retested and the passing result filed. We complete that cycle in one visit wherever possible, carrying common rebuild kits so a failed test does not become a second appointment and a compliance delay.",
        ],
      },
    ],
    steps: [
      { title: "Schedule And Notify", text: "Testing is scheduled around your irrigation or business operation, with any required shut-down notice given in advance." },
      { title: "Certified Test", text: "Differential pressures and relief valve operation are measured with calibrated gauges by a certified tester." },
      { title: "Repair If Required", text: "Failed assemblies are rebuilt on site with manufacturer kits, or replacement is quoted where the body is damaged." },
      { title: "File The Report", text: "The passing result is documented and filed with your water provider, and a copy retained for your records." },
    ],
    maintenance: [
      "Test annually, or more frequently if your jurisdiction requires it",
      "Insulate assemblies before winter cold snaps to prevent freeze damage",
      "Keep the assembly clear of landscaping so it stays accessible for testing",
    ],
    faqs: [
      { q: "How often does backflow testing need to be done?", a: "Annually in most Arizona jurisdictions, and some commercial and high-hazard applications require more frequent testing. Your water provider's notice will state the required interval." },
      { q: "What happens if my assembly fails the test?", a: "Most failures are repairable on site with a rebuild kit. We repair, retest and file the passing report, usually in the same visit." },
      { q: "Do homeowners need backflow testing?", a: "If you have an irrigation system with a backflow assembly, most providers require annual testing just as they do for commercial properties." },
    ],
    related: ["commercial-plumbing-mesa-az", "plumbing-inspection-mesa-az", "plumbing-maintenance-mesa-az", "water-line-installation-mesa-az"],
  },
  {
    slug: "plumbing-maintenance-mesa-az",
    name: "Plumbing Maintenance",
    tagline: "Scheduled preventative maintenance plans for homes and businesses",
    image: "van",
    intro: [
      "Preventative maintenance is the least glamorous and most cost-effective plumbing service we offer. Flushing a water heater, checking pressure, exercising shut-off valves and jetting a grease-prone kitchen line costs a fraction of the emergency that follows when none of it is done.",
      "Our maintenance visits follow a documented checklist and produce a written report with photographs, so you know the current condition of every major component and can budget for replacements before they choose their own timing.",
    ],
    benefits: [
      "Failures caught while they are still inexpensive repairs",
      "Water heater life extended significantly in hard Arizona water",
      "Written, photographed condition report after every visit",
      "Priority scheduling for maintenance plan customers",
      "Predictable budgeting instead of emergency spending",
    ],
    problems: [
      "Sediment accumulation shortening water heater life",
      "House pressure creeping above 80 psi and stressing every joint",
      "Shut-off valves seizing from years without operation",
      "Grease build-up narrowing kitchen and commercial branch lines",
      "Small drips quietly damaging cabinets and subfloor",
    ],
    signs: [
      "You have never had the water heater flushed",
      "You do not know where or whether your main shut-off works",
      "Fixtures have developed minor drips you have been ignoring",
      "The property is a rental you want documented regularly",
    ],
    detail: [
      {
        heading: "What A Maintenance Visit Covers",
        body: [
          "We flush the water heater and inspect the anode rod, test and adjust static pressure, exercise the main and fixture shut-offs, inspect visible supply and drain piping, check every fixture for drips and flow, test toilets for silent leaks, and inspect the water heater's relief valve and connections.",
          "Where the property has known problem areas — a kitchen line that grease has narrowed, a lateral with root history, a commercial grease interceptor — we add scheduled jetting or camera inspection to the plan at the appropriate interval rather than waiting for the next backup.",
        ],
      },
    ],
    steps: [
      { title: "Baseline Survey", text: "The first visit documents the whole system's condition and establishes what needs attention now versus what to monitor." },
      { title: "Scheduled Service", text: "Heater flushing, pressure testing, valve exercise and fixture checks are carried out to a consistent checklist." },
      { title: "Report And Prioritise", text: "You receive a photographed written report separating urgent items, planned work and healthy components." },
      { title: "Plan The Year Ahead", text: "Recommended intervals for jetting, camera inspection or replacement are scheduled so nothing is forgotten." },
    ],
    maintenance: [
      "Flush the water heater annually in Mesa's hard water",
      "Verify static pressure and regulator function each year",
      "Exercise every shut-off valve twice a year to keep them functional",
    ],
    faqs: [
      { q: "How often should plumbing maintenance be done?", a: "Annually for most homes. Rental portfolios, restaurants and properties with a history of drain problems typically benefit from a semi-annual schedule." },
      { q: "Does maintenance really extend water heater life?", a: "Substantially. Sediment insulates the tank floor and accelerates failure, and the anode rod is consumed faster in hard water. Annual flushing and anode inspection commonly adds three to five years." },
      { q: "Do you offer maintenance plans for rental properties?", a: "Yes. Multi-address scheduling with photographed reports per property is one of the most common ways property managers use us." },
    ],
    related: ["plumbing-inspection-mesa-az", "water-heater-repair-mesa-az", "drain-cleaning-mesa-az", "commercial-plumbing-mesa-az"],
  },
  {
    slug: "plumbing-inspection-mesa-az",
    name: "Plumbing Inspection",
    tagline: "Whole-home and pre-purchase plumbing inspections with written reports",
    image: "van",
    intro: [
      "A plumbing inspection answers a specific question: what condition is this system actually in, and what will it cost over the next five years? That matters most when buying a home, when insuring an older property, or when deciding whether to keep repairing a system that has started failing regularly.",
      "Our inspections cover supply piping, drainage, the water heater, fixtures, shut-offs, pressure, the gas system and, where requested, a camera inspection of the sewer lateral. You receive a written report with photographs and prioritised recommendations rather than a verbal summary at the door.",
    ],
    benefits: [
      "Independent written report suitable for escrow negotiation",
      "Sewer camera inspection available as part of the same visit",
      "Pressure, gas and water heater condition documented objectively",
      "Repairs prioritised by urgency so budgeting is realistic",
      "Baseline record for future maintenance and insurance purposes",
    ],
    problems: [
      "Unknown piping material and age in older Mesa properties",
      "Undocumented previous repairs of unknown quality",
      "Sewer laterals never inspected before purchase",
      "Water heaters installed without permits or proper venting",
      "Pressure running high and silently shortening system life",
    ],
    signs: [
      "You are buying or selling a property",
      "The home was built before 1990",
      "Your insurer has asked about the piping material",
      "Repairs have started happening more than once a year",
    ],
    detail: [
      {
        heading: "What We Document",
        body: [
          "Supply material and condition, visible drainage, fixture operation and flow, water heater age, venting and connections, static and dynamic pressure, regulator function, shut-off valve operation, gas piping condition, and any evidence of past or present leaks. Every finding is photographed.",
          "The report separates findings into three categories: repair now, plan and budget, and monitor. That structure is what makes it useful in an escrow negotiation and equally useful as a five-year maintenance plan if you are staying put.",
        ],
      },
    ],
    steps: [
      { title: "Whole-System Walk", text: "Every accessible fixture, valve, appliance connection and run of visible piping is inspected and photographed." },
      { title: "Test And Measure", text: "Static and dynamic pressure, regulator operation, heater condition and gas system integrity are measured, not estimated." },
      { title: "Camera If Requested", text: "The sewer lateral is inspected on camera and the footage supplied with the report." },
      { title: "Deliver The Report", text: "A written, photographed report arrives with findings prioritised and flat-rate pricing for anything recommended." },
    ],
    maintenance: [
      "Re-inspect every three to five years, or annually for rental properties",
      "Keep the report and any camera footage with your property documents",
      "Act on the 'repair now' items before the next seasonal extreme",
    ],
    faqs: [
      { q: "Is a plumbing inspection worth it before buying a house?", a: "Yes, particularly for older East Valley homes. Standard home inspections do not camera the sewer lateral or pressure test the system, and those are exactly where the expensive surprises live." },
      { q: "How long does a full inspection take?", a: "Two to three hours for a typical home, plus additional time if a sewer camera inspection is included." },
      { q: "Do I get a written report?", a: "Always. You receive a photographed written report with findings prioritised as repair now, plan and budget, or monitor." },
    ],
    related: ["plumbing-maintenance-mesa-az", "camera-drain-inspection-mesa-az", "leak-detection-mesa-az", "repiping-mesa-az"],
  },
  {
    slug: "water-softener-installation-mesa-az",
    name: "Water Softener Installation",
    tagline: "Whole-home softening sized for Mesa's hard water and your household",
    image: "van",
    intro: [
      "Mesa's water is genuinely hard, and the consequences are visible throughout a home: scaled water heaters, failing faucet cartridges, spotted glassware, stiff laundry and a steady stream of small plumbing repairs that softer water simply does not produce.",
      "Prestige Plumbing Company installs whole-home softeners sized to your household's water usage and measured hardness, plumbed with a bypass loop, correct drain connection and an air gap, so the system can be serviced without shutting down the house.",
    ],
    benefits: [
      "Grain capacity sized to measured hardness and real household usage",
      "Bypass valving so servicing never means shutting off the house",
      "Reduced scale build-up in water heaters, fixtures and appliances",
      "Correct drain and air-gap installation to code",
      "Noticeably longer life from cartridges, seals and appliances",
    ],
    problems: [
      "Scale accelerating water heater failure",
      "White mineral crust on fixtures, glass and tile",
      "Soap and detergent performing poorly, using more product",
      "Faucet cartridges and toilet flappers failing prematurely",
      "Existing softeners undersized and regenerating constantly",
    ],
    signs: [
      "Spotting on glassware and shower glass despite cleaning",
      "Skin and hair feel dry after showering",
      "Appliances are failing sooner than their rated life",
      "Visible scale at aerators, shower heads and the heater relief valve",
    ],
    detail: [
      {
        heading: "Sizing And Placement",
        body: [
          "Sizing is grains of hardness multiplied by daily household water use. Undersized units regenerate too frequently, waste salt and water, and wear out early; oversized units cost more than necessary. We measure your actual hardness rather than quoting a city average.",
          "Placement matters for servicing and for drainage. The unit needs an accessible drain with a proper air gap, a nearby power source for the control valve, and enough space for salt loading. We also keep exterior hose bibbs and irrigation on unsoftened supply, since there is no benefit to softening landscape water.",
        ],
      },
    ],
    steps: [
      { title: "Test The Water", text: "Hardness and iron are measured on site and combined with household usage to determine correct capacity." },
      { title: "Plan The Installation", text: "Location, bypass loop, drain path with air gap and power supply are planned before any pipe is cut." },
      { title: "Install And Program", text: "The unit is plumbed in with a bypass, connected to drain, and the control valve programmed to your measured hardness." },
      { title: "Commission And Explain", text: "The system is flushed and tested, and salt loading, bypass operation and service intervals are demonstrated." },
    ],
    maintenance: [
      "Keep the brine tank at least one third full of quality salt",
      "Break up salt bridging in the brine tank a few times a year",
      "Have the resin and control valve serviced periodically",
    ],
    faqs: [
      { q: "Do I really need a water softener in Mesa?", a: "Hardness here is high enough that most homes see a real return through longer water heater life, fewer cartridge and flapper failures, and better appliance performance." },
      { q: "Where does a water softener get installed?", a: "Typically in the garage on the main supply after the meter and before the water heater, with exterior hose bibbs and irrigation left on unsoftened water." },
      { q: "How much salt will it use?", a: "That depends on your measured hardness and usage. A correctly sized system regenerates efficiently, which is exactly why sizing off a real hardness test rather than an average matters." },
    ],
    related: ["reverse-osmosis-system-mesa-az", "water-heater-installation-mesa-az", "plumbing-maintenance-mesa-az", "residential-plumbing-mesa-az"],
  },
  {
    slug: "reverse-osmosis-system-mesa-az",
    name: "Reverse Osmosis System Installation",
    tagline: "Under-sink and whole-home RO drinking water systems installed and serviced",
    image: "bathroom",
    intro: [
      "A reverse osmosis system produces genuinely high-purity drinking water by forcing supply water through a semi-permeable membrane that removes dissolved solids a standard carbon filter cannot touch. In an area with high total dissolved solids like the East Valley, the difference in taste is immediate and obvious.",
      "We install under-sink RO systems with dedicated faucets, refrigerator and ice-maker connections, and correct drain saddles or air gaps, plus whole-home systems where a household wants treated water at every fixture. Filter and membrane servicing is available on a scheduled basis.",
    ],
    benefits: [
      "Substantial reduction in dissolved solids, taste and odour compounds",
      "Dedicated drinking faucet plus refrigerator and ice-maker feed",
      "Proper drain connection so the system does not siphon or smell",
      "Scheduled filter and membrane replacement handled for you",
      "Ends the cost and plastic of bottled water deliveries",
    ],
    problems: [
      "High dissolved solids leaving a noticeable taste in tap water",
      "Existing RO units installed without correct drain connections",
      "Membranes fouled by hard water where no softener precedes them",
      "Low storage tank pressure producing a weak trickle at the faucet",
      "Filters years past their replacement interval",
    ],
    signs: [
      "You buy bottled water for drinking and cooking",
      "Tap water has a mineral or chlorinated taste",
      "Your ice cubes are cloudy and taste of the supply",
      "An existing RO faucet has slowed to a trickle",
    ],
    detail: [
      {
        heading: "Softener First, Then RO",
        body: [
          "RO membranes foul quickly on very hard water. Where a home has both, we plumb the softener upstream so the membrane sees conditioned water, which can double or triple its service life and keeps the production rate where it should be.",
          "The other detail that determines long-term satisfaction is the drain connection and the storage tank. A properly installed air gap prevents any cross connection, and correct tank pre-charge pressure is what gives you a strong steady flow at the faucet rather than a disappointing dribble.",
        ],
      },
    ],
    steps: [
      { title: "Test And Specify", text: "Dissolved solids are measured and the system specified to match household demand and existing treatment." },
      { title: "Prepare The Cabinet", text: "Faucet position, tank location, supply tap and drain connection are planned for access and serviceability." },
      { title: "Install And Sanitise", text: "The unit, tank, faucet and any refrigerator line are installed, the system sanitised, flushed and pressure checked." },
      { title: "Test And Schedule", text: "Output is verified with a TDS meter and the filter and membrane replacement schedule is set up." },
    ],
    maintenance: [
      "Replace pre and post filters on the manufacturer's schedule",
      "Replace the membrane when TDS output rises noticeably",
      "Check the storage tank pre-charge pressure annually",
    ],
    faqs: [
      { q: "Does an RO system waste a lot of water?", a: "Modern systems are far more efficient than older designs, and pairing RO with a softener reduces membrane fouling so the system runs at its designed recovery rate rather than working harder." },
      { q: "Can you connect RO water to my refrigerator?", a: "Yes. A dedicated line to the refrigerator gives you filtered water and clear, better-tasting ice, and we run it as part of the installation." },
      { q: "How often do RO filters need replacing?", a: "Pre and post filters typically every six to twelve months, and the membrane every two to five years depending on incoming water quality and usage." },
    ],
    related: ["water-softener-installation-mesa-az", "kitchen-plumbing-mesa-az", "plumbing-maintenance-mesa-az", "sink-installation-mesa-az"],
  },
  {
    slug: "emergency-leak-repair-mesa-az",
    name: "Emergency Leak Repair",
    tagline: "Immediate response to active leaks, day or night, across the Valley",
    image: "leak",
    intro: [
      "An active leak is a clock running against your drywall, flooring, cabinetry and framing. Prestige Plumbing Company dispatches emergency leak repairs 24 hours a day across Mesa and the East Valley, and the call begins with guidance on isolating the water while a technician is already on the road.",
      "Our emergency trucks carry PEX and copper repair stock, fittings, valves, pumps and extraction equipment, so most leaks are stopped and permanently repaired on the same visit rather than capped off with a promise to return.",
    ],
    benefits: [
      "Live answer at any hour with immediate shut-off guidance",
      "Typical arrival within 60 to 90 minutes across the East Valley",
      "Containment and extraction before diagnosis to limit damage",
      "Permanent repair on the first visit in most cases",
      "Photographic documentation for insurance claims",
    ],
    problems: [
      "Burst or split supply lines flooding a room",
      "Failed washing machine and water heater connectors",
      "Ruptured hose bibbs and irrigation tie-ins",
      "Ceiling leaks from a bathroom or shower above",
      "Shut-off valves that will not close during an emergency",
    ],
    signs: [
      "Water is actively spreading across flooring",
      "A ceiling is bulging, dripping or discoloured",
      "You have shut the main because a fixture valve would not hold",
      "You can hear water running with everything closed",
    ],
    detail: [
      {
        heading: "The First Five Minutes Matter Most",
        body: [
          "When you call, we walk you through locating the main shut-off or the nearest fixture stop before anything else. Stopping the flow is worth more than any repair speed we can offer, and that guidance regularly saves thousands of dollars in restoration cost.",
          "On arrival the technician contains and extracts before opening anything up. Once the property is stable, we locate the failure, show you what caused it, and repair it — and if the failure is a symptom of a wider problem such as system-wide copper pitting, we tell you then rather than after the third emergency.",
        ],
      },
    ],
    steps: [
      { title: "Stop The Water", text: "Phone guidance to isolate the supply immediately, followed by on-site isolation and pressure relief." },
      { title: "Contain And Extract", text: "The affected footprint is contained and standing water removed so damage stops spreading during diagnosis." },
      { title: "Locate And Repair", text: "The failure is found, shown to you, and repaired permanently from truck stock wherever possible." },
      { title: "Document And Advise", text: "Cause, damage and repair are photographed for your insurer, and any underlying systemic issue is explained in writing." },
    ],
    maintenance: [
      "Label your main shut-off valve and make sure everyone at home can find it",
      "Replace braided washing machine and heater connectors every five years",
      "Fit a leak detection shut-off device on high-risk appliances",
    ],
    faqs: [
      { q: "How fast can you get to an emergency leak?", a: "Most Mesa, Gilbert, Chandler and Tempe addresses see a technician within 60 to 90 minutes, and we begin helping over the phone the moment you call." },
      { q: "What should I do before the plumber arrives?", a: "Shut the water at the main or the nearest fixture stop, switch off power to any affected area at the breaker, and move belongings clear. We will talk you through each step." },
      { q: "Will you provide documentation for my insurance claim?", a: "Yes. We photograph the failure, the affected area and the completed repair, and itemise cause and remedy in language adjusters accept." },
    ],
    related: ["emergency-plumber-mesa-az", "leak-detection-mesa-az", "slab-leak-repair-mesa-az", "water-line-repair-mesa-az"],
  },
  {
    slug: "bathroom-remodel-plumbing-mesa-az",
    name: "Bathroom Remodel Plumbing",
    tagline: "Permitted rough-in and finish plumbing for bathroom renovations",
    image: "bathroom",
    intro: [
      "Bathroom remodels succeed or fail on the rough-in. Once tile is set and the vanity is in, moving a drain three inches is no longer a small job, so drain positions, valve depths, vent arrangements and supply routing have to be right before anything is closed up.",
      "Prestige Plumbing Company handles the plumbing scope of bathroom renovations across Mesa and the East Valley — demolition disconnects, relocation of drains and supplies, permitted rough-in and inspection, then finish plumbing coordinated with your tile, cabinet and glass trades.",
    ],
    benefits: [
      "Drain and supply relocation planned around your finished layout",
      "Valve depth set correctly for the specified tile or panel thickness",
      "Permitting and inspection handled for you",
      "Trade coordination so your schedule does not stall on plumbing",
      "Old galvanized or cast iron replaced while the walls are open",
    ],
    problems: [
      "Layout changes that outrun the existing drain and vent arrangement",
      "Valves roughed in at the wrong depth for the finished surface",
      "Aged supply piping left in place behind brand-new tile",
      "Inadequate venting causing gurgling in a new layout",
      "Uncoordinated trades leaving the project waiting on rough-in",
    ],
    signs: [
      "You are moving a toilet, shower or vanity position",
      "The bathroom still has original galvanized or cast iron plumbing",
      "You are converting a tub to a walk-in shower",
      "Your contractor needs a licensed plumber for the permitted scope",
    ],
    detail: [
      {
        heading: "Open Walls Are An Opportunity",
        body: [
          "The most expensive part of replacing old piping is access, and a remodel gives you that access for free. If the bathroom is served by galvanized supply or aged cast iron drainage, replacing it during the remodel costs a fraction of doing it later through finished tile.",
          "We look at the whole picture while the walls are open: venting, branch sizing for the fixtures you have chosen, shut-off valve placement for future serviceability, and whether the water heater can support a larger shower. Those decisions are cheap now and costly afterwards.",
        ],
      },
    ],
    steps: [
      { title: "Plan Against The Design", text: "Your finished layout and fixture selections drive the drain, vent, valve and supply plan before demolition begins." },
      { title: "Demolition Disconnects", text: "Existing fixtures are safely disconnected and capped, and the exposed system is assessed for replacement opportunities." },
      { title: "Rough-In And Inspect", text: "New drains, vents and supplies are installed, pressure tested and inspected under permit before the walls close." },
      { title: "Finish Plumbing", text: "After tile and cabinetry, fixtures and trim are set, tested and demonstrated, and the site left clean." },
    ],
    maintenance: [
      "Keep the rough-in photographs for future reference before drilling walls",
      "Renew silicone at wet junctions every two to three years",
      "Have new fixtures checked at the first annual maintenance visit",
    ],
    faqs: [
      { q: "Do I need a permit for bathroom remodel plumbing?", a: "If you are relocating drains, vents or supply lines, yes. Straight fixture replacements in the same positions often do not. We confirm scope with the jurisdiction and handle the permit either way." },
      { q: "Can you work with my general contractor?", a: "Regularly. We coordinate the plumbing scope with tile, cabinet, electrical and glass trades so the rough-in and finish stages land in the right sequence." },
      { q: "Should I replace old pipes during a remodel?", a: "If the bathroom is served by galvanized or aged cast iron, absolutely. Access is the expensive part and the walls are already open." },
    ],
    related: ["bathroom-plumbing-mesa-az", "shower-installation-mesa-az", "toilet-installation-mesa-az", "repiping-mesa-az"],
  },
];

export const extraServices: Service[] = specs.map(buildService);
