export const SITE_URL = "https://prestigeplumbingcompany.com";

export const business = {
  name: "Prestige Plumbing Company",
  legalType: "Homeowner Connection Service",

  url: SITE_URL,
  phoneDisplay: "(480) 681-3808",
  phoneHref: "tel:4802150629",
  email: "info@prestigeplumbingcompany.com",
  street: "1120 E Jarvis Ave",
  city: "Mesa",
  state: "AZ",
  zip: "85204",
  country: "United States",
  hours: "Open 24 Hours — Residential Providers Available 24/7",
  lat: 33.4099434,
  lng: -111.8093683,
  mapLink: "https://maps.google.com/?q=1120+E+Jarvis+Ave,+Mesa,+AZ+85204",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5100902307227!2d-111.80936828869199!3d33.40994337329464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba70be73a5803%3A0x56e9aa95dc356cab!2sPrestige%20Plumbing%20Company!5e0!3m2!1sen!2sin!4v1784982688252!5m2!1sen!2sin",
};

export const socials = [
  { label: "Facebook", href: "https://facebook.com/prestigeplumbingcompany" },
  { label: "Instagram", href: "https://instagram.com/prestigeplumbingcompany" },
  { label: "LinkedIn", href: "https://linkedin.com/company/prestigeplumbingcompany" },
  { label: "YouTube", href: "https://youtube.com/@prestigeplumbingcompany" },
];

export const stats = [
  { value: "24/7", label: "Availability" },
  { value: "Fast", label: "Connection Times" },
  { value: "AZ", label: "Local Providers" },
  { value: "100%", label: "Residential" },
];

export const trustBadges = [
  "Local Independent Providers",
  "Residential Plumbing",
  "24/7 Availability",
  "Upfront Estimates",
];

/** Top-level navigation. Service and location dropdown items are derived from data. */
export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Reviews", to: "/reviews" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const navServiceSlugs = [
  "emergency-plumber-mesa-az",
  "drain-cleaning-mesa-az",
  "leak-detection-mesa-az",
  "water-heater-repair-mesa-az",
  "water-heater-installation-mesa-az",
  "hydro-jetting-mesa-az",
  "sewer-line-repair-mesa-az",
  "pipe-repair-mesa-az",
  "repiping-mesa-az",
  "residential-plumbing-mesa-az",
  "gas-line-installation-mesa-az",
  "plumbing-maintenance-mesa-az",
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

export const testimonials: any[] = [];

export const homeFaqs = [
  {
    q: "How does this plumbing connection service work?",
    a: "We help homeowners in Mesa and Phoenix connect with independent, local plumbing professionals. When you call our number, we take down your information and immediately route you to an available provider in your area.",
  },
  {
    q: "Do you offer 24 hour emergency plumbing in Mesa and Phoenix?",
    a: "Yes, our phone line is open 24 hours a day, 365 days a year. We aim to connect you with independent local professionals who offer emergency response for burst pipes, sewage backups, and failed water heaters. Please note that same-day and 24/7 availability depends on technician availability and demand in your market.",
  },
  {
    q: "Are the plumbers licensed, bonded and insured in Arizona?",
    a: "It is the responsibility of the homeowner to verify that the independent contractor they hire furnishes the necessary license and insurance required for the work being performed in Arizona. We recommend always asking the provider for their credentials before any work begins.",
  },
  {
    q: "How much does a plumbing repair cost?",
    a: "Pricing is set directly by the independent service providers you are connected with. Most providers offer estimates before beginning work, so you can approve the cost ahead of time.",
  },
  {
    q: "How quickly can a provider get to my home?",
    a: "Arrival times vary depending on the independent provider's schedule, traffic, and your exact location. During your call with the local contractor, they will provide you with an estimated time of arrival.",
  },
  {
    q: "What areas do you serve?",
    a: "We assist homeowners in finding local professionals across Mesa, Phoenix, Chandler, Gilbert, Tempe, Scottsdale, Glendale, Queen Creek, San Tan Valley, and Ahwatukee.",
  },
  {
    q: "Do you guarantee the plumbing work?",
    a: "Prestige Plumbing Company is a free service to assist homeowners in connecting with local service providers. All contractors are independent, and we do not warrant or guarantee any work performed. Any warranties or guarantees are provided solely by the contractor you hire.",
  },
];

export const process = [
  {
    step: "01",
    title: "Call Or Message Us",
    text: "Speak with our connection service representatives 24/7. We capture your symptoms and property location to help find an available local professional.",
  },
  {
    step: "02",
    title: "Get Connected",
    text: "You will be connected with an independent local plumber serving your area. They will answer your questions and arrange a visit.",
  },
  {
    step: "03",
    title: "Provider Arrival",
    text: "The local service provider arrives at your home to evaluate your plumbing issues using professional diagnostic techniques.",
  },
  {
    step: "04",
    title: "Review Estimates",
    text: "You discuss the repair or replacement options directly with the provider, reviewing any estimates and pricing they provide.",
  },
  {
    step: "05",
    title: "Expert Repair",
    text: "The independent provider completes the work, restoring your home's plumbing systems.",
  },
  {
    step: "06",
    title: "Payment & Completion",
    text: "You pay the independent contractor directly based on your agreed-upon estimate.",
  },
];

export const whyChoose = [
  {
    title: "Fast Connection",
    text: "Instead of calling multiple companies that might be booked out for weeks, our service aims to quickly connect you with an available provider in your zip code.",
  },
  {
    title: "Independent Professionals",
    text: "You will be connected with local, independent plumbing providers who serve the residential areas of the East Valley and Phoenix metro.",
  },
  {
    title: "24/7 Availability",
    text: "Plumbing emergencies rarely happen during business hours. Our phone line is open 24/7 to help connect you with available emergency technicians.",
  },
  {
    title: "Residential Focus",
    text: "The providers in our network specialize in residential plumbing systems, focusing entirely on single-family homes and residential properties.",
  },
  {
    title: "No Obligation",
    text: "Using our connection service is completely free for homeowners. You decide whether to hire the independent provider after discussing your needs with them.",
  },
  {
    title: "Local Service",
    text: "We focus on connecting you with providers familiar with Arizona's water conditions and common local plumbing challenges.",
  },
];
