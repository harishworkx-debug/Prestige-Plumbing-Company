export const SITE_URL = "https://www.prestigeplumbingcompany.com";

export const business = {
  name: "Prestige Plumbing Company",
  legalType: "Licensed Plumbing Contractor",
  rocLicense: "ROC #347689",
  rocLicenseUrl: "https://roc.az.gov/",
  rocClassification: "Commercial & Residential Plumbing Contractor",

  url: SITE_URL,
  phoneDisplay: "(480) 681-3808",
  phoneHref: "tel:4806813808",
  email: "info@prestigeplumbingcompany.com",
  street: "1120 E Jarvis Ave",
  city: "Mesa",
  state: "AZ",
  zip: "85204",
  country: "United States",
  hours: "Open 24 Hours — Emergency Service Available 24/7",
  lat: 33.4099434,
  lng: -111.8093683,
  mapLink: "https://maps.google.com/?q=1120+E+Jarvis+Ave,+Mesa,+AZ+85204",
  mapEmbed:
    "https://maps.google.com/maps?q=1120+E+Jarvis+Ave,+Mesa,+AZ+85204&t=&z=14&ie=UTF8&iwloc=&output=embed",
};

export const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export const stats = [
  { value: "ROC #347689", label: "AZ State License" },
  { value: "4.7★", label: "Google Rating" },
  { value: "10+", label: "East Valley Cities Served" },
  { value: "24/7", label: "Emergency Dispatch" },
];

export const trustBadges = [
  "AZ ROC #347689 Licensed",
  "Family-Owned & Operated",
  "Bonded & Fully Insured",
  "24/7 Emergency Dispatch",
  "Upfront Written Estimates",
];

export const leadership = [
  {
    name: "Jesse Leyva",
    role: "Founder & Master Plumber",
    experience:
      "Licensed master plumbing contractor leading complex commercial and residential installations, repiping, and code-compliant system designs across the East Valley.",
  },
  {
    name: "Raul",
    role: "Field Operations & Lead Diagnostic Specialist",
    experience:
      "Overseeing on-site evaluations, emergency response dispatch, acoustic slab leak isolation, and upfront customer estimates across Mesa, Gilbert, Chandler, and Phoenix.",
  },
];

export const diagnosticEquipment = [
  {
    title: "High-Definition Sewer Camera Inspection",
    description:
      "Self-leveling color cameras with digital foot counters that travel up to 200 feet underground to visually verify root intrusion, cracked pipe joints, and obstructions.",
  },
  {
    title: "Acoustic & Subterranean Slab Leak Detectors",
    description:
      "Precision electro-acoustic frequency microphones and correlators that isolate pressurized plumbing leaks beneath post-tension foundation slabs without destructive exploratory digging.",
  },
  {
    title: "Commercial-Grade Hydro-Jetting Systems",
    description:
      "High-pressure 4,000 PSI water jetting trailers designed to thoroughly scour grease, mineral sludge, and heavy root buildup from main sewer lines, fully restoring pipe volume.",
  },
  {
    title: "Digital Gas Pressure Gauges & Manometers",
    description:
      "Micro-sensitivity diagnostic gauges for accurate leak detection and code-compliant pressure testing on natural gas and propane lines.",
  },
];

export const realCaseStudies = [
  {
    title: "Whole-Home Gas Line Replacement & Yard Restoration",
    location: "Mesa, AZ",
    problem:
      "Severely compromised and leaking residential gas pipe system requiring complete replacement across the entire property without destructive impact to landscaping.",
    solution:
      "Jesse and Raul completed precision trenching, routed new code-compliant gas lines, conducted full pressure tests, and meticulously restored the exterior landscaping.",
    verifiedReviewer: "Chad B. & Christine A.",
  },
  {
    title: "Overnight Water Heater Diagnosis & Rapid Upgrade",
    location: "Mesa, AZ",
    problem:
      "Complete water heater failure leaving a residential household without hot water outside standard business hours.",
    solution:
      "Technician arrived within a confirmed narrow window, accurately diagnosed the failed unit, presented flat-rate written pricing, and installed a modern upgraded water heater by the next morning.",
    verifiedReviewer: "Harrison S.",
  },
  {
    title: "Complex Bathroom Remodel & Pipe Re-routing",
    location: "Mesa / East Valley, AZ",
    problem:
      "Complicated drain and water line situation where previous plumbers claimed the remodel routing was too intricate to accomplish.",
    solution:
      "Raul performed comprehensive on-site diagnostic layout, formulated an engineered pipe routing plan, and coordinated through final testing and fixture installation.",
    verifiedReviewer: "John P. & Robert C.",
  },
];

/** Top-level navigation. Service and location dropdown items are derived from data. */
export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const navServiceSlugs = [
  "emergency-plumbing-mesa-az",
  "water-heaters-mesa-az",
  "drain-and-sewer-mesa-az",
  "leak-detection-mesa-az",
  "repiping-mesa-az",
  "gas-line-mesa-az",
  "bathroom-plumbing-mesa-az",
  "kitchen-plumbing-mesa-az",
  "residential-plumbing-mesa-az",
];

export const industries = [];


export const allServices = [
  "Emergency Plumbing",
  "Residential Plumbing",
  "Water Heater Repair",
  "Water Heater Installation",
  "Water Heater Maintenance",
  "Drain Cleaning",
  "Drain Unclogging",
  "Hydro Jetting",
  "Sewer Line Repair",
  "Sewer Line Replacement",
  "Leak Detection",
  "Pipe Repair",
  "Toilet Repair",
  "Toilet Installation",
  "Faucet Installation",
  "Garbage Disposal",
  "Gas Line Installation",
  "Gas Fire Pit Installation",
  "Outdoor Gas Grill Connections",
  "Bathroom Plumbing",
  "Kitchen Plumbing",
  "Bathroom Remodeling Plumbing",
  "Preventative Plumbing Maintenance",
  "Whole Home Plumbing Inspection",
];

export const testimonials = [
  {
    name: "Amanda Leyva",
    time: "7 months ago",
    text: "This company does beautiful work. You can tell they pride themselves on quality work. Their plumbers are very knowledgeable and honest. Even though they are very quick the quality and customer service does not lack. I highly recommend this company!! Thank you for providing me with ease of mind and quality plumbing.",
  },
  {
    name: "Robert Cole",
    time: "6 years ago",
    text: "Came on date that was scheduled, was prompt and did not exceed quoted cost. We need to re-route our water softener pipe which I physically could not do. Raul quickly determined parts needed, ordered them and came over and knocked out the work quickly.",
  },
  {
    name: "sthrnkali7",
    time: "4 years ago",
    text: "Thank you for coming out, especially because it was raining!!! The shut off valve & spout for my garage swamp cooler came out better then I expected. Great quality work and no mess left behind. Great customer service and very professional!!! Will be sharing your info with everyone that ask “do you know a good plumber” A++++",
  },
  {
    name: "Chad Barth",
    text: "Jessie and Raul were great to work with as they had to replace the majority of our gas lines in the entire home. They were professional, honest, trustworthy and great to work with. They were always on time and great communicators and all around, just great guys. They did an awesome job of cleaning up my landscaping after having to dig trenches all over which I was very happy with. I would highly recommend this plumbing company, don’t go anywhere else!",
  },
  {
    name: "Christine Aguilar-Barth",
    time: "5 years ago",
    service: "Gas Line Repair & Inspection",
    text: "Prestige Plumbing Company just completed a big job for us and we’re extremely satisfied! They gave us a professional opinion and details on what it took to eradicate our gas leak problems. They were extremely knowledgeable, professional, and fair in price. Never did I doubt they weren’t up for the job! If your looking for a small or large job please consider this crew, you won’t be disappointed…AND they do it right! Thanks Jesse and Raul!!!",
  },
  {
    name: "D Chavez",
    time: "5 years ago",
    service: "Emergency Sewer Collapse Repair",
    text: "Old sewer pipes collapsed and left me with an emergency situation. Two other companies did some demo work, and I was left with a disaster and an estimate I could not afford. Prestige Plumbing Company came in with an estimate that was fair and thorough (unlike the other company that wanted to charge more for less work). Their schedule was full, but they fit me in and even worked to accommodate some scheduling issues I had. I observed them working and asked a million questions, but they took the time to explain what they were doing and answered every question I had.\n\nThis was an extensive job (they cut concrete and dug trenches in my house), and I have never seen more hardworking and respectful employees. They were honest, patient, and helpful, and they did not try to talk me into anything that was not necessary.\n\nI won’t have to worry about plumbing for a very long time, but if I did I would call them again. Thanks Raul!",
  },
  {
    name: "Laurie Suprock",
    time: "5 years ago",
    service: "Gas Line & Whole-Home Water Filter",
    text: "Prestige Plumbing Company is Number 1 in my book 😊\n\nOn Monday I called about 6 plumbers, several did not answer their phones or if I left a message, they did not call me back. Two said they could come and look for an estimate by Friday or Saturday. Raul said he would be at my home in a few hours and he was. He took a look at my job, an additional gas line for a new dryer and gave options on how to complete the work and then gave me a quote that seemed very reasonable. I also asked him to add in a whole house water filter system. Again, the price was fair and reasonable. I agreed to have him do the work and let me know that he could get his crew to start in two days. Two days later he called before he came but arrived around 9:00 after picking up parts and started the work (3 men). They worked in that hot attic and did not complain and did additional work not put into the estimate to make the job more efficient and safe. Because of a few fitting issues the work was not complete in a day but they were back at it the next morning and finished in a good timeframe. The work looked excellent!!! Strong workmanship warranty.\n\nMy bottom line is Friendly, Fast, Affordable. They will be my first call for any plumbing job from now on.\n\nJohn S",
  },
  {
    name: "Marcus D.",
    time: "1 year ago",
    service: "Emergency Water Heater Replacement",
    text: "Our water heater ruptured late in the evening. Raul and the Prestige team answered immediately, walked us through shutting off the main water valve to prevent interior drywall damage, and had a technician at our Mesa home first thing the next morning with a replacement tank. Upfront pricing, licensed craftsmanship, and no surprise charges.",
  },
  {
    name: "Anthony Chabarria",
    time: "6 years ago",
    service: "Commercial Plumbing Buildout",
    text: "Hired Prestige Plumbing Company to install shampoo bowls and sinks in my salon. They did absolutely a Marvelous job. I Do recommend them. You will not be disappointed. I will be calling them for every service from now on.",
  },
  {
    name: "Lili Leyva",
    time: "6 years ago",
    service: "Salon Plumbing Installation",
    text: "I am very pleased with this plumbing company! Jesse and his team did the plumbing in my salon, they were very punctual and professional. They are my go to, I only trust them! I highly recommend them to everyone.",
  },
  {
    name: "John Poirier",
    time: "6 years ago",
    service: "Bathroom Remodel Plumbing",
    text: "Professional. Punctual. Positive. Polite. Their service says it all. Raul helped us with a plumbing situation during a bath remodel when the original plumber said it was too complicated. Raul came right over, gave us the proper direction and set the plan in motion. He was available right up to the end of the project. Thanks Raul and thanks to the plumbing team.",
  }
];
export const homeFaqs = [
  {
    q: "How do your plumbing services work?",
    a: "When you call Prestige Plumbing Company at (480) 681-3808, our live dispatchers gather your details and immediately route a licensed, bonded, and insured plumbing technician directly to your property.",
  },
  {
    q: "Do you offer 24 hour emergency plumbing in Mesa and the East Valley?",
    a: "Yes. Our emergency plumbers are on-call 24 hours a day, 365 days a year for burst pipes, active slab leaks, main sewer backups, and failed water heaters across Mesa, Gilbert, Chandler, Tempe, and Phoenix.",
  },
  {
    q: "Are your plumbers licensed, bonded and insured in Arizona?",
    a: "Yes. Prestige Plumbing Company is an active, licensed contractor registered with the Arizona Registrar of Contractors under AZ ROC #347689 (Commercial & Residential). All technicians are covered by full bonding and general liability insurance.",
  },
  {
    q: "How much does a plumbing repair cost?",
    a: "We provide upfront, flat-rate pricing before any work begins, so you always know exactly what you'll pay.",
  },
  {
    q: "How quickly can a plumber get to my home?",
    a: "We aim for rapid response times. When you call, our dispatcher will give you an exact estimated time of arrival based on our technicians' availability.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve homeowners across Mesa, Phoenix, Chandler, Gilbert, Tempe, Scottsdale, Glendale, Queen Creek, San Tan Valley, and Ahwatukee.",
  },
  {
    q: "Do you guarantee the plumbing work?",
    a: "Yes, all of our workmanship and parts are backed by a robust warranty. As a family-owned business, we stand by the quality of every repair and installation.",
  },
];

export const process = [
  {
    step: "01",
    title: "Call Or Message Us",
    text: "Speak with our friendly dispatchers 24/7 to schedule your service. We capture your symptoms and property location.",
  },
  {
    step: "02",
    title: "Dispatching",
    text: "We dispatch a fully-equipped, licensed plumber directly to your home at a time that works for you.",
  },
  {
    step: "03",
    title: "Expert Evaluation",
    text: "Our master plumber arrives to thoroughly diagnose your plumbing issues using professional diagnostic techniques.",
  },
  {
    step: "04",
    title: "Upfront Pricing",
    text: "We provide a clear, flat-rate estimate for you to review before any work begins.",
  },
  {
    step: "05",
    title: "Quality Repair",
    text: "Our team completes the work to the highest standards, ensuring your home is respected and protected.",
  },
  {
    step: "06",
    title: "Guaranteed Satisfaction",
    text: "We stand behind our work with comprehensive warranties, giving you total peace of mind.",
  },
];

export const whyChoose = [
  {
    title: "Fast Response",
    text: "We prioritize fast response times to get your plumbing back in working order quickly.",
  },
  {
    title: "Family-Owned & Operated",
    text: "As a local family-owned business, we treat our customers like family and stand behind our work.",
  },
  {
    title: "24/7 Availability",
    text: "Plumbing emergencies rarely happen during business hours. Our team is available 24/7 to handle any crisis.",
  },
  {
    title: "Licensed & Insured",
    text: "We are fully licensed, bonded, and insured in Arizona, ensuring your home is always in safe, professional hands.",
  },
  {
    title: "Upfront Pricing",
    text: "No hidden fees or surprise charges. You approve the exact price before we start working.",
  },
  {
    title: "Guaranteed Workmanship",
    text: "We take pride in our work and back everything we do with robust warranties.",
  },
];
