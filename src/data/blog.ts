import type { ImageKey } from "./images";

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: ImageKey;
  sections: { heading: string; body: string[]; list?: string[] }[];
  takeaway: string;
}

export const posts: Post[] = [
  {
    slug: "signs-you-need-drain-cleaning",
    title: "7 Signs You Need Professional Drain Cleaning",
    metaTitle: "7 Signs You Need Drain Cleaning | Prestige Plumbing Mesa AZ",
    metaDescription:
      "Slow drains, gurgling, odors and repeat clogs are warnings. Learn the 7 signs your Mesa AZ home needs professional drain cleaning before a backup.",
    excerpt:
      "Drains rarely fail without warning. Here are the seven signals Mesa homeowners should never ignore — and what each one actually means inside the pipe.",
    date: "2026-06-18",
    readTime: "7 min read",
    category: "Drains",
    image: "blogDrain",
    sections: [
      {
        heading: "1. Water Pools Around Your Feet In The Shower",
        body: [
          "A shower that drains as fast as it fills is working correctly. When water begins collecting around your ankles, the pipe's effective diameter has already been reduced significantly by hair bound together with soap scum and body oils.",
          "Homeowners often wait until the drain stops entirely, but the intermediate stage is exactly when clearing is easiest and cheapest. Once the blockage becomes a solid plug, the material has usually compacted well down the branch line.",
        ],
      },
      {
        heading: "2. Drains Gurgle When Another Fixture Runs",
        body: [
          "Gurgling means air is being pulled through water in a trap — a sign that either the drain line is partially blocked or the vent system is restricted. Neither resolves itself.",
          "If a toilet bubbles when the washing machine drains, the issue is almost certainly in a shared line rather than the individual fixture, and that shifts the diagnosis toward the main.",
        ],
      },
      {
        heading: "3. Sewage Or Musty Odor Near Drains",
        body: [
          "Properly functioning traps hold water that blocks sewer gas from entering living space. Persistent odor means either the trap has dried out, the vent is blocked, or waste is accumulating in the line and decomposing.",
          "Rarely used guest bathrooms are the most common cause of dried traps. Running water for thirty seconds monthly solves that entirely. If the odor persists after refilling traps, you have a line issue.",
        ],
      },
      {
        heading: "4. You Are Plunging The Same Fixture Repeatedly",
        body: [
          "One plunge is maintenance. Three plunges in a month is a diagnostic finding. Repeat clogs at the same fixture indicate a physical defect — a belly holding water, an offset joint catching debris, or a heavy accumulation coating the pipe wall.",
          "This is the point where a camera inspection pays for itself, because it converts guessing into evidence.",
        ],
      },
      {
        heading: "5. Multiple Fixtures Are Slow At Once",
        body: [
          "When several fixtures across the house slow simultaneously, the problem is downstream of all of them — the main line or the sewer lateral. This is the most urgent sign on the list.",
          "Main line blockages escalate to whole-house backups, and the lowest fixture in the home is where sewage surfaces. That is usually a shower or tub, and the cleanup is unpleasant and expensive.",
        ],
      },
      {
        heading: "6. Fruit Flies Or Drain Flies Appear",
        body: [
          "Drain flies breed in the organic film that coats the inside of a slow drain. Their presence is a reliable indicator of accumulated biofilm well beyond the visible strainer.",
          "Surface cleaners do not reach the breeding surface. Mechanical cleaning of the pipe wall does.",
        ],
      },
      {
        heading: "7. Water Backs Up Somewhere Unexpected",
        body: [
          "Running the washing machine and finding water in the shower means waste is finding the path of least resistance because the intended path is blocked. Treat this as an emergency.",
          "Shut off water-using appliances and call a plumber before running anything else. Continuing to add volume to a blocked system only increases the amount of water that ends up on your floor.",
        ],
      },
      {
        heading: "What Professional Drain Cleaning Actually Involves",
        body: [
          "A real drain cleaning removes accumulated material from the full circumference of the pipe rather than boring a channel through it. Depending on what the line contains, that means cabling with an appropriately sized cutting head or hydro jetting at pressures up to 4,000 PSI.",
          "For any recurring blockage, camera inspection should come first. Roots, bellies, offsets and scale all produce identical symptoms at the fixture and require completely different remedies.",
        ],
        list: [
          "Camera inspection on recurring or main-line issues",
          "Mechanical cabling for hair, soft blockages and branch lines",
          "Hydro jetting for grease, scale and root intrusion",
          "Post-service flow testing to confirm genuine restoration",
        ],
      },
    ],
    takeaway:
      "Address slow drains while they are still merely slow. Prestige Plumbing Company clears and cameras drains across Mesa, Gilbert, Chandler and the Phoenix metro — call (480) 215-0629 for flat-rate pricing before we start.",
  },
  {
    slug: "why-water-heaters-fail",
    title: "Why Water Heaters Fail (And How To Get More Years From Yours)",
    metaTitle: "Why Water Heaters Fail | Arizona Hard Water Guide | Prestige Plumbing",
    metaDescription:
      "Sediment, anode rod depletion and high pressure kill Arizona water heaters early. Learn why yours failed and how to extend the next one's life.",
    excerpt:
      "Most water heaters in Arizona die years before they should — and almost always from the same three causes. Here is what actually happens inside the tank.",
    date: "2026-06-04",
    readTime: "8 min read",
    category: "Water Heaters",
    image: "waterHeaterOld",
    sections: [
      {
        heading: "Cause One: Sediment Accumulation",
        body: [
          "Arizona water carries a heavy dissolved mineral load. When that water is heated, calcium and magnesium precipitate out and settle on the bottom of the tank, forming a hard crust that grows a little thicker every year.",
          "On a gas heater, the burner sits directly beneath that crust. Heat now has to pass through mineral rock before reaching water, so the tank floor overheats, the steel expands and contracts beyond design tolerance, and the protective glass lining eventually cracks. Once the lining fails, corrosion reaches bare steel and the tank's remaining life is measured in months.",
          "The popping and rumbling homeowners describe is water trapped beneath sediment flashing to steam. It is not a harmless quirk; it is the sound of a heater being destroyed.",
        ],
      },
      {
        heading: "Cause Two: A Consumed Anode Rod",
        body: [
          "Every tank heater contains a sacrificial anode rod — typically magnesium or aluminum — that corrodes preferentially so the steel tank does not. It is the single most important component in the appliance and the one almost nobody inspects.",
          "In soft water an anode may last six years. In Mesa, Gilbert and Chandler water it can be entirely consumed in three to four. From the moment it is gone, the tank itself becomes the sacrificial element.",
          "Replacing an anode rod costs a fraction of a new heater and can add five or more years of service. It is the highest-return maintenance item in residential plumbing, and it requires nothing more than a visit and a wrench.",
        ],
      },
      {
        heading: "Cause Three: Excessive Water Pressure",
        body: [
          "Water expands when heated. In a closed system — one with a check valve or pressure reducing valve at the meter — that expansion has nowhere to go, so pressure spikes every heating cycle.",
          "Without a thermal expansion tank, those spikes stress the tank, the relief valve, and every fixture in the house. Homeowners see it as a relief valve that drips, or as toilet fill valves and faucet cartridges failing repeatedly.",
          "Static pressure should be between 55 and 70 PSI. Above 80 PSI, code requires regulation, and above that threshold every water-using component in the home wears faster.",
        ],
      },
      {
        heading: "Warning Signs Your Heater Is Nearing The End",
        body: [
          "Failure is rarely instantaneous. Most heaters signal their decline for months before the tank lets go.",
        ],
        list: [
          "Rumbling, popping or kettling noises during heating cycles",
          "Hot water that runs out noticeably faster than a year ago",
          "Rusty or metallic-tasting water on the hot side only",
          "Moisture, rust staining or a damp ring at the base",
          "A relief valve that discharges periodically",
          "Age beyond ten years without documented maintenance",
        ],
      },
      {
        heading: "The Maintenance Schedule That Actually Works In Arizona",
        body: [
          "Manufacturer schedules are written for average national water quality. Arizona is not average. Our recommendation for Valley homes is more aggressive and produces measurably longer equipment life.",
        ],
        list: [
          "Flush the tank annually — twice yearly with no softener",
          "Inspect the anode rod at year three and every two years after",
          "Verify static pressure and expansion tank charge annually",
          "Test the temperature and pressure relief valve each year",
          "Set the thermostat to 120°F to reduce scale formation and scald risk",
          "Descale tankless heat exchangers every twelve months",
        ],
      },
    ],
    takeaway:
      "A maintained water heater in Arizona can reach twelve to fifteen years; a neglected one often fails at seven. Book a flush and anode inspection with Prestige Plumbing Company at (480) 215-0629.",
  },
  {
    slug: "how-to-prevent-plumbing-emergencies",
    title: "How To Prevent Plumbing Emergencies Before They Happen",
    metaTitle: "How To Prevent Plumbing Emergencies | Mesa AZ | Prestige Plumbing",
    metaDescription:
      "Most plumbing emergencies give warning signs first. Learn the preventative steps every Arizona homeowner should take to avoid a 2am flood.",
    excerpt:
      "Nearly every emergency we respond to was preventable. Here is the short list of habits and upgrades that keep you off our midnight dispatch board.",
    date: "2026-05-22",
    readTime: "7 min read",
    category: "Prevention",
    image: "emergencyPlumbing",
    sections: [
      {
        heading: "Know Your Shut-Offs Before You Need Them",
        body: [
          "The single most valuable thirty seconds in a plumbing emergency is the time it takes to close the main water valve. Most homeowners have never located theirs, and they discover it in the dark while water spreads across a floor.",
          "Find your main shut-off today. In Arizona homes it is usually on an exterior wall near the front hose bibb, or at the meter box near the street. Turn it fully closed and open again — valves seize when they sit untouched for years, and one that will not close is worse than none at all.",
          "Locate your gas shut-off at the meter as well, and keep a wrench nearby that fits it.",
        ],
      },
      {
        heading: "Replace Supply Connectors On A Schedule",
        body: [
          "Braided stainless connectors on washing machines, toilets, sinks and water heaters are the most common single point of catastrophic failure in a home. They are inexpensive, they fail without warning, and they release water at full main pressure until someone intervenes.",
          "Replace them every five to seven years regardless of appearance. A pair of connectors costs less than a restoration deductible by several orders of magnitude.",
        ],
      },
      {
        heading: "Regulate Your Water Pressure",
        body: [
          "High pressure destroys plumbing systems quietly. It shortens the life of every valve, cartridge, connector and appliance, and it turns a small weakness into a burst.",
          "Have static pressure measured. If it is above 80 PSI, install a pressure reducing valve. If you already have one, remember that they fail — typically after ten to fifteen years — and should be tested periodically.",
        ],
      },
      {
        heading: "Install Leak Detection Where Water Hides",
        body: [
          "Modern leak sensors cost very little and alert your phone the moment they detect moisture. The value is entirely in the placement.",
        ],
        list: [
          "Water heater drip pan",
          "Beneath kitchen and bathroom sinks",
          "Behind the washing machine",
          "Under the dishwasher toe kick",
          "Near any water softener or filtration equipment",
        ],
      },
      {
        heading: "Stop Treating Your Drains As Disposals",
        body: [
          "Grease, fibrous vegetable waste, coffee grounds, wipes and hygiene products cause the overwhelming majority of the backups we clear. 'Flushable' wipes do not break down; they accumulate and bind with grease into the blockages that require jetting to remove.",
          "Keep a grease container by the stove. Fit hair catchers in every shower. Flush only human waste and toilet paper. These three habits eliminate most residential drain emergencies.",
        ],
      },
      {
        heading: "Schedule An Annual Inspection",
        body: [
          "An annual plumbing inspection is the closest thing to insurance against emergencies. We test pressure, inspect accessible piping, evaluate the water heater, exercise valves, and camera the sewer lateral where age warrants it.",
          "The findings are prioritized: what needs attention now, what to plan within a year, and what merely needs monitoring. Most homeowners discover at least one item they had no idea was developing.",
        ],
      },
    ],
    takeaway:
      "Prevention costs a fraction of restoration. Book a whole-home plumbing inspection with Prestige Plumbing Company at (480) 215-0629 and get ahead of the failure.",
  },
  {
    slug: "benefits-of-hydro-jetting",
    title: "The Real Benefits Of Hydro Jetting Your Drain Lines",
    metaTitle: "Benefits Of Hydro Jetting | Drain & Sewer Cleaning | Prestige Plumbing",
    metaDescription:
      "Hydro jetting restores pipes to full diameter instead of punching a hole through a clog. Learn how it works and when it beats snaking.",
    excerpt:
      "Snaking opens a channel. Jetting cleans the pipe. Here is the difference, why it matters, and when jetting is the wrong choice.",
    date: "2026-05-09",
    readTime: "6 min read",
    category: "Drains",
    image: "drainOld",
    sections: [
      {
        heading: "What Hydro Jetting Actually Does",
        body: [
          "A hydro jetter pushes water through a specialized nozzle at pressures reaching 4,000 PSI. Most jets face backward, which both propels the hose upstream and scours accumulated material off the pipe wall behind the nozzle. Forward jets break through the obstruction itself.",
          "The result is a pipe restored to its original interior diameter, with the removed material flushed downstream to the municipal main rather than compacted further into your system.",
        ],
      },
      {
        heading: "Why It Outlasts Snaking",
        body: [
          "A cable with a cutting head bores a passage through a blockage. Flow returns immediately, which feels like success — but the pipe wall is still coated. In a grease-laden kitchen line, that remaining coating recaptures the passage within weeks.",
          "Jetting removes the coating itself. Customers who were calling for a drain clearing every two months often go two years or more after a proper jetting service.",
        ],
      },
      {
        heading: "What Jetting Removes That Cables Cannot",
        body: [
          "Certain accumulations simply do not respond to mechanical cabling.",
        ],
        list: [
          "Hardened grease bonded to the pipe wall",
          "Mineral scale inside aging cast iron",
          "Fine root hair intrusion at joints",
          "Sludge settled in low-slope or bellied sections",
          "Soap and detergent residue in laundry lines",
        ],
      },
      {
        heading: "When Jetting Is The Wrong Call",
        body: [
          "Any company that recommends jetting without a camera inspection is guessing with your money. High pressure applied to compromised pipe makes the situation worse.",
          "We do not jet heavily corroded cast iron with visible channeling, cracked or collapsed clay, or badly offset joints. Those conditions need spot repair, lining or replacement, and pressure would accelerate the failure.",
          "This is why every jetting job we perform begins and ends with camera footage — you see the pipe before and after, and the recommendation is based on evidence rather than a price sheet.",
        ],
      },
      {
        heading: "Commercial Kitchens: Schedule It",
        body: [
          "For restaurants, jetting should be preventative rather than reactive. A quarterly program costs a fraction of one closed dinner service, and health inspectors take a favorable view of documented drain maintenance.",
          "We schedule commercial jetting overnight or before opening so no service window is ever lost.",
        ],
      },
    ],
    takeaway:
      "If you have had the same line cleared more than once this year, jetting is the conversation worth having. Call Prestige Plumbing Company at (480) 215-0629 for a camera inspection first.",
  },
  {
    slug: "common-plumbing-problems-in-mesa",
    title: "The Most Common Plumbing Problems In Mesa Homes",
    metaTitle: "Common Plumbing Problems In Mesa AZ Homes | Prestige Plumbing",
    metaDescription:
      "Hard water, slab leaks, root intrusion and galvanized pipe — the plumbing issues Mesa homeowners face most, explained by local plumbers.",
    excerpt:
      "Twenty years of service calls in one city produces clear patterns. These are the plumbing problems Mesa homes actually have.",
    date: "2026-04-27",
    readTime: "8 min read",
    category: "Local",
    image: "commercialOld",
    sections: [
      {
        heading: "Hard Water Damage — The Universal Mesa Problem",
        body: [
          "Every plumbing problem in Mesa is either caused by hard water or made worse by it. Our municipal supply blends Colorado River and Salt River water, both carrying heavy dissolved calcium and magnesium.",
          "The consequences show up everywhere: sediment crusting water heater tanks, scale narrowing supply lines, faucet cartridges seizing, dishwasher and washing machine components failing early, and white deposits on every fixture in the house.",
          "Water treatment is not a luxury purchase in this city; it is the difference between a water heater lasting seven years and lasting thirteen.",
        ],
      },
      {
        heading: "Slab Leaks In East Mesa",
        body: [
          "Homes built from roughly 1988 through 2004 — the wave that filled in east of Greenfield and Power Roads — commonly run copper supply through the slab. Three decades of aggressive water chemistry and soil movement produce pinhole failures.",
          "The symptoms are consistent: a warm spot on tile, the sound of running water when everything is off, a water bill that jumped without explanation, and sometimes hairline cracks appearing in drywall or grout.",
          "We locate these acoustically and usually recommend rerouting the affected line overhead in PEX rather than jackhammering the floor.",
        ],
      },
      {
        heading: "Root Intrusion In Central Mesa Sewer Laterals",
        body: [
          "The mature ficus, mesquite and palm trees that make older Mesa neighborhoods pleasant also send aggressive root systems toward the only reliable water source in a desert: your sewer lateral.",
          "Clay pipe joints are the entry point. Roots enter as hairs, expand, catch waste, and eventually block the line completely. Camera inspection shows exactly where they enter and how much damage has occurred.",
        ],
      },
      {
        heading: "Galvanized Pipe In Pre-1970 Homes",
        body: [
          "Downtown Mesa and the older neighborhoods surrounding it still contain galvanized steel supply piping. It corrodes from the inside, building up tuberculation that progressively narrows the passage until pressure becomes unusable.",
          "Homeowners often replace fixtures repeatedly trying to solve it. Nothing works, because the restriction is in the pipe itself. PEX repiping restores full flow and is far less invasive than most people expect.",
        ],
      },
      {
        heading: "Summer Pressure And Thermal Stress",
        body: [
          "Mesa summers push everything to its limit. Ground temperatures raise incoming water temperature, exterior components degrade under UV exposure, and hose bibbs left pressurized against a closed nozzle fail spectacularly.",
          "Before summer, we recommend checking exterior hose bibbs, verifying static pressure, and confirming your pressure reducing valve still holds its setting.",
        ],
      },
      {
        heading: "What Mesa Homeowners Should Do About It",
        body: [
          "None of these problems are mysterious, and all of them respond well to attention before failure.",
        ],
        list: [
          "Flush the water heater annually and inspect the anode by year three",
          "Install water treatment sized to your household",
          "Keep static pressure between 55 and 70 PSI",
          "Camera the sewer lateral every three to five years in older neighborhoods",
          "Investigate any unexplained water bill increase immediately",
        ],
      },
    ],
    takeaway:
      "We have worked on Mesa plumbing and we know what your house is likely hiding. Call Prestige Plumbing Company at (480) 215-0629 for a whole-home inspection.",
  },
  {
    slug: "residential-plumbing-maintenance-tips",
    title: "Residential Plumbing Maintenance: A Homeowner's Annual Checklist",
    metaTitle: "Home Plumbing Maintenance Checklist | Prestige Plumbing Mesa AZ",
    metaDescription:
      "A practical month-by-month plumbing maintenance checklist for Arizona homeowners. Protect your pipes, water heater and drains all year.",
    excerpt:
      "A simple annual routine prevents the majority of residential plumbing failures. Here is exactly what to check and when.",
    date: "2026-04-11",
    readTime: "7 min read",
    category: "Maintenance",
    image: "residentialPlumbing",
    sections: [
      {
        heading: "Monthly: Five Minutes That Matter",
        body: [
          "The monthly routine is short and catches problems while they are still inexpensive.",
        ],
        list: [
          "Read the water meter with every fixture off and confirm it is not moving",
          "Run water briefly in unused bathrooms to keep traps sealed",
          "Look under every sink for moisture, staining or corrosion",
          "Check the water heater pan and surrounding floor for dampness",
          "Test that garbage disposal and dishwasher drain freely",
        ],
      },
      {
        heading: "Quarterly: Fixtures And Flow",
        body: [
          "Every three months, spend twenty minutes on the details that quietly degrade.",
        ],
        list: [
          "Clean faucet aerators and showerheads of mineral scale",
          "Clear hair and debris from pop-up drain assemblies",
          "Inspect toilet tanks for running water and worn flappers",
          "Check exposed piping in the garage and attic for corrosion",
          "Verify washing machine hoses show no bulging or rust at the fittings",
        ],
      },
      {
        heading: "Annually: The Important Work",
        body: [
          "These are the items with the largest impact on equipment life, and several are worth having a professional perform.",
        ],
        list: [
          "Flush the water heater completely to remove sediment",
          "Test the temperature and pressure relief valve",
          "Measure static water pressure and verify the regulator holds 55–70 PSI",
          "Exercise the main shut-off valve and every angle stop in the house",
          "Descale tankless water heaters through the isolation valves",
          "Inspect and service water softener and filtration systems",
        ],
      },
      {
        heading: "Every Three Years: The Deeper Checks",
        body: [
          "Some components need attention on a longer cycle but matter enormously when neglected.",
        ],
        list: [
          "Inspect and replace the water heater anode rod as needed",
          "Camera the sewer lateral on homes over twenty-five years old",
          "Replace braided supply connectors throughout the house",
          "Have a professional whole-home plumbing inspection performed",
        ],
      },
      {
        heading: "The Arizona Adjustments",
        body: [
          "National maintenance advice underestimates what hard water and desert heat do to a plumbing system. In the Valley, double the frequency of water heater flushing if you have no softener, inspect exterior hose bibbs before summer, and treat any unexplained bill increase as a leak until proven otherwise.",
          "Homes with under-slab copper built between 1985 and 2005 deserve particular attention — that population is squarely in the slab leak window, and early detection is dramatically cheaper than emergency response.",
        ],
      },
    ],
    takeaway:
      "If the annual items feel like more than you want to take on, we do all of them in a single visit. Call Prestige Plumbing Company at (480) 215-0629.",
  },
  {
    slug: "gas-line-safety-guide",
    title: "Gas Line Safety: What Every Arizona Homeowner Should Know",
    metaTitle: "Gas Line Safety Guide Arizona | Prestige Plumbing Company",
    metaDescription:
      "Gas leak warning signs, what to do immediately, and how proper gas line installation protects your family. Licensed gas plumbers in Mesa AZ.",
    excerpt:
      "Gas is the one plumbing system where a mistake is not measured in dollars. Here is what to recognize, what to do, and what proper installation looks like.",
    date: "2026-03-28",
    readTime: "6 min read",
    category: "Gas",
    image: "gasLineOld",
    sections: [
      {
        heading: "Recognizing A Gas Leak",
        body: [
          "Natural gas is odorless by nature. Utilities add mercaptan, which produces the distinctive rotten-egg smell, specifically so leaks are detectable. That odor is never something to investigate casually.",
        ],
        list: [
          "A sulfur or rotten-egg smell indoors or near the meter",
          "Hissing or whistling near a gas line or appliance",
          "Yellow or orange burner flames instead of steady blue",
          "Soot accumulation around appliance vents",
          "Dead or discolored vegetation over an underground line",
          "Unexplained headaches, dizziness or nausea in the household",
        ],
      },
      {
        heading: "What To Do Immediately",
        body: [
          "If you suspect a leak, act in this order and do not deviate. Do not operate any electrical switch, appliance or garage door opener, and do not use a phone inside the building — any of these can produce an ignition source.",
          "Leave the building with everyone inside, including pets. Once outside and at a distance, call your gas utility's emergency line. After the utility has made the area safe, call a licensed plumber for the repair.",
          "Never attempt to locate or repair a gas leak yourself, and never rely on soapy water testing as a substitute for professional pressure testing.",
        ],
      },
      {
        heading: "Why Proper Installation Matters So Much",
        body: [
          "Most gas problems we encounter originate at installation. The most common defect is undersized piping: a line adequate for one appliance is teed into for a second, and neither performs correctly under simultaneous demand.",
          "Correct installation begins with a BTU load calculation covering every connected appliance and the developed pipe length to the furthest one. Each segment is then sized so pressure drop stays within code limits at full simultaneous load.",
          "CSST flexible gas piping must be bonded to the electrical grounding system — a step routinely missed by unqualified installers and a genuine lightning-related fire risk when omitted.",
        ],
      },
      {
        heading: "Permits Are Not Optional",
        body: [
          "New gas lines and extensions require permits and inspection in essentially every Valley jurisdiction, including Mesa, Gilbert, Chandler, Tempe and Scottsdale. The inspection exists because gas mistakes are not self-correcting.",
          "Unpermitted gas work also creates insurance exposure. If an incident traces to unpermitted piping, coverage disputes follow. The permit fee is trivial compared to that risk.",
        ],
      },
      {
        heading: "Outdoor Fire Features And Grills",
        body: [
          "Fire pits, built-in grills and patio heaters are among the most popular gas additions in Arizona backyards, and they carry specific requirements: an accessible emergency shut-off outside the enclosure, correct burial depth and tracer wire for underground runs, and pressure testing before backfill.",
          "Plan the stub-out location with your hardscape design before concrete is poured. Retrofitting a gas line under finished pavers is considerably more expensive than planning for it.",
        ],
      },
    ],
    takeaway:
      "Gas work belongs with licensed, permitted professionals. Prestige Plumbing Company installs and repairs gas piping throughout the East Valley — call (480) 215-0629.",
  },
  {
    slug: "toilet-repair-guide",
    title: "Toilet Repair Guide: Fix The Common Problems Yourself",
    metaTitle: "Toilet Repair Guide | Running, Clogged & Leaking | Prestige Plumbing",
    metaDescription:
      "How to diagnose and fix a running toilet, weak flush, leaking base or phantom refill — and when to call a plumber in Mesa AZ.",
    excerpt:
      "Most toilet problems come down to four inexpensive parts. Here is how to identify which one is failing before you call anyone.",
    date: "2026-03-14",
    readTime: "7 min read",
    category: "Fixtures",
    image: "waterHeaters",
    sections: [
      {
        heading: "The Running Toilet",
        body: [
          "A toilet that runs continuously is wasting up to two hundred gallons a day. The cause is almost always the flapper — a rubber seal that hardens with age and mineral exposure until it no longer seats fully.",
          "Test it by adding a few drops of food coloring to the tank and waiting fifteen minutes without flushing. Color appearing in the bowl confirms a leaking flapper. Replacement costs a few dollars and takes ten minutes.",
          "If the flapper is sound, check the fill valve. When the float is set too high, water reaches the overflow tube and drains continuously into the bowl. Lowering the float usually resolves it.",
        ],
      },
      {
        heading: "The Weak Or Incomplete Flush",
        body: [
          "A flush that fails to clear the bowl has one of three causes: insufficient tank water volume, blocked rim jets, or a partial blockage in the trapway.",
          "First, check the water level in the tank — it should sit about an inch below the overflow tube. Then inspect the small holes under the bowl rim; in hard-water areas like Mesa these clog with mineral scale and dramatically reduce flush energy. A wire and some descaling solution restores them.",
          "If both check out, the trapway or branch drain is partially obstructed and needs mechanical clearing.",
        ],
      },
      {
        heading: "Water Around The Base",
        body: [
          "Water pooling at the toilet base usually means a failed wax ring, and it demands prompt attention because that water is going into your subfloor.",
          "First rule out condensation, which is common in humid bathrooms, and check the tank-to-bowl bolts and supply connection. If the water appears only after flushing, the wax ring has failed.",
          "A rocking toilet is the usual cause — movement breaks the seal. Never simply shim and caulk over the problem; the flange needs inspection, and a broken flange requires repair before resetting the toilet.",
        ],
      },
      {
        heading: "Phantom Flushing",
        body: [
          "When a toilet refills briefly on its own every few minutes without anyone touching it, water is slowly escaping the tank into the bowl, and the fill valve is topping it back up.",
          "This is the same flapper issue as a running toilet, just at a lower rate. It wastes a surprising amount of water over a month, and the fix is identical.",
        ],
      },
      {
        heading: "When To Call A Plumber",
        body: [
          "Several situations are genuinely beyond a straightforward parts swap and should not be attempted with a plunger and optimism.",
        ],
        list: [
          "A toilet that rocks or has a damaged closet flange",
          "Repeated clogs, which usually indicate a drain line problem rather than the fixture",
          "Sewage odor persisting after repairs",
          "Cracks in the tank or bowl porcelain",
          "Multiple fixtures backing up alongside the toilet",
          "Water damage visible on the floor or ceiling below",
        ],
      },
    ],
    takeaway:
      "Simple parts are worth trying yourself. For anything involving the flange, the drain line, or water where it should not be, call Prestige Plumbing Company at (480) 215-0629.",
  },
  {
    slug: "water-heater-maintenance-checklist",
    title: "Water Heater Maintenance Checklist For Arizona Homes",
    metaTitle: "Water Heater Maintenance Checklist AZ | Prestige Plumbing Mesa",
    metaDescription:
      "Step-by-step water heater maintenance for hard-water Arizona homes: flushing, anode inspection, relief valve testing and tankless descaling.",
    excerpt:
      "Arizona water is brutal on water heaters. This checklist is what we recommend to every customer to get years of extra service life.",
    date: "2026-02-26",
    readTime: "6 min read",
    category: "Water Heaters",
    image: "leakOld",
    sections: [
      {
        heading: "Why The Standard Schedule Is Not Enough Here",
        body: [
          "Manufacturer maintenance intervals assume average water quality. Arizona's mineral load is well above average, so sediment accumulates faster and anode rods are consumed sooner than the manual anticipates.",
          "Following the printed schedule in the Valley usually means arriving at the tank's failure point several years early. Our recommended schedule is more frequent and the difference in equipment life is substantial.",
        ],
      },
      {
        heading: "Annual: Flush The Tank",
        body: [
          "Flushing removes the mineral layer that insulates the burner from the water and eventually cracks the tank lining. It is the highest-value annual task on the list.",
          "The process: shut off power or gas, close the cold inlet, attach a hose to the drain valve, open a hot fixture to break vacuum, and drain until the water runs clear. Refill fully before restoring power to an electric unit — dry-firing destroys elements instantly.",
          "If you have no water softener, do this twice a year. Homes on well water may need it even more often.",
        ],
      },
      {
        heading: "Every Two To Three Years: Inspect The Anode Rod",
        body: [
          "The anode rod corrodes so the tank does not. When it is consumed, the tank becomes the sacrificial element and the countdown to failure begins.",
          "In Mesa, Gilbert and Chandler water, an anode can be fully depleted in three to four years. Inspect at year three and replace when more than half the core wire is exposed. This single item can add five or more years to a heater's life.",
        ],
      },
      {
        heading: "Annual: Test The Relief Valve",
        body: [
          "The temperature and pressure relief valve is the appliance's primary safety device, protecting against catastrophic tank rupture.",
          "Lift the test lever and allow a short discharge into the drain line, then release. It should stop cleanly. A valve that continues dripping afterward has debris or corrosion on the seat and should be replaced — not plugged, not ignored.",
        ],
      },
      {
        heading: "Annual: Verify Pressure And Expansion",
        body: [
          "Measure static water pressure at a hose bibb. It should read between 55 and 70 PSI. Above 80, a pressure reducing valve is required by code and by common sense.",
          "If your system has a pressure reducing valve or check valve, it is closed and requires a thermal expansion tank. Verify the tank's air charge matches incoming water pressure; a waterlogged expansion tank offers no protection at all.",
        ],
      },
      {
        heading: "Tankless: Descale Every Twelve Months",
        body: [
          "Tankless units have no tank to flush, but their compact heat exchangers scale rapidly in hard water. Annual descaling circulates a food-grade solution through the exchanger to dissolve mineral buildup.",
          "If your unit was installed with isolation valves, the process takes under an hour. If it was not, we recommend adding them during the first service — it converts an awkward job into a routine one for the life of the appliance.",
        ],
      },
    ],
    takeaway:
      "We perform the full checklist in one visit, including anode inspection and relief valve testing. Book water heater service with Prestige Plumbing Company at (480) 215-0629.",
  },
  {
    slug: "how-to-detect-hidden-leaks",
    title: "How To Detect Hidden Water Leaks In Your Home",
    metaTitle: "How To Detect Hidden Water Leaks | Slab Leak Signs | Prestige Plumbing",
    metaDescription:
      "Find hidden leaks before they cause damage. Meter tests, slab leak symptoms and the detection methods professionals use in Mesa AZ homes.",
    excerpt:
      "A hidden leak can run for months before you see a drop. Here is how to test for one yourself, and how professionals pinpoint it without demolition.",
    date: "2026-02-10",
    readTime: "7 min read",
    category: "Leaks",
    image: "bathroomOld",
    sections: [
      {
        heading: "The Meter Test: Ten Minutes, Definitive Answer",
        body: [
          "This is the single best diagnostic a homeowner can perform, and it costs nothing. Turn off every water-using fixture and appliance in the home, including ice makers and irrigation.",
          "Locate your water meter and note the reading, or watch the small leak-indicator dial or triangle. Wait thirty minutes without using any water and read it again.",
          "Any movement means water is escaping somewhere in your system. To narrow it down, close the main shut-off at the house and repeat: if the meter still moves, the leak is between the meter and the house; if it stops, the leak is inside.",
        ],
      },
      {
        heading: "Symptoms Of A Slab Leak",
        body: [
          "Slab leaks are the most expensive hidden leaks in Arizona homes because water escapes beneath concrete where nothing is visible until damage surfaces.",
        ],
        list: [
          "A warm or hot spot on tile or hardwood flooring",
          "The sound of running water with everything shut off",
          "Unexplained increases in the water bill",
          "New cracks in drywall, tile grout or the foundation",
          "Damp carpet or buckling flooring in one area",
          "A musty odor with no visible source",
        ],
      },
      {
        heading: "Checking For Leaks You Can Reach",
        body: [
          "Before assuming the worst, rule out the accessible suspects. Toilets are the most common silent water waster in a home.",
          "Add food coloring to each toilet tank and wait fifteen minutes without flushing. Color in the bowl means a leaking flapper. Then inspect under every sink for moisture and corrosion, check the water heater pan, examine washing machine hose connections, and walk your irrigation zones looking for unusually green or soggy patches.",
        ],
      },
      {
        heading: "How Professionals Locate What You Cannot See",
        body: [
          "When the leak is inside a wall, under a slab, or beneath a yard, professional detection replaces guesswork with precision.",
          "Acoustic equipment amplifies the high-frequency sound of pressurized water escaping a pipe, which transmits through concrete and soil. An experienced technician localizes it to within inches. Thermal imaging then confirms the finding by revealing the temperature signature of a hot-line leak beneath flooring.",
          "For drain-side leaks where there is no pressure to produce sound, tracer gas is introduced into the line and detected at the surface where it escapes. Pool and irrigation lines are pressure-isolated and tested individually.",
        ],
      },
      {
        heading: "Why Speed Matters",
        body: [
          "Hidden leaks compound. Water saturates subfloor and framing, microbial growth begins within 24 to 48 hours, and soil beneath a foundation can wash out and create settlement.",
          "The cost curve is steep. A leak located in week one is a repair. The same leak found in month six is a repair plus remediation plus flooring plus drywall — frequently ten times the number.",
        ],
      },
    ],
    takeaway:
      "If your meter is moving with everything off, do not wait. Prestige Plumbing Company locates hidden and slab leaks across Mesa and the Phoenix metro — call (480) 215-0629.",
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
