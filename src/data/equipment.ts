/* ============================================================
   Equipment / trailer data — drives equipment-type pages (6) and
   the equipment×city matrix (48). Content is first-hand operator
   knowledge (Section 6 "non-commodity" mandate): real sizing
   guidance, honest cost answers, distinct FAQs per type.

   Spec facts are kept to well-established general truths and phrased
   as guidance, not guarantees. Anything model/unit-specific that we
   can't state accurately is left to "see live pricing / call".
   No invented prices, no invented specs. (Section 0, rule 2.)
   ============================================================ */

export interface Faq {
  q: string;
  a: string; // plain text; may contain a single {{LINK:/path|anchor}} token resolved in templates
}

export interface Equipment {
  slug: string;
  name: string;
  plural: string;
  category: 'trailer' | 'equipment' | 'hauling';
  categorySlug: 'trailer-rental' | 'equipment-rental' | 'hauling-and-delivery';
  serviceType: string; // schema serviceType
  // one-liner for cards / meta
  blurb: string;
  // direct-answer fodder (60–100 words composed at template level)
  whatItIs: string;
  whoNeedsIt: string;
  // "which size for which job" — the non-commodity operator section
  sizingTitle: string;
  sizing: string[]; // paragraphs
  useCases: string[];
  deliveryNote: string;
  // honest cost-intent answer, no on-site pricing
  costAnswer: string;
  // operator nugget reused in matrix pages for uniqueness
  nugget: string;
  faqs: Faq[];
}

export const equipment: Equipment[] = [
  {
    slug: 'skid-steer',
    name: 'Skid Steer',
    plural: 'Skid Steers',
    category: 'equipment',
    categorySlug: 'equipment-rental',
    serviceType: 'Skid Steer Rental',
    blurb: 'Compact, powerful loaders for grading, digging, demo, and hauling material around a tight site.',
    whatItIs:
      'A skid steer is a compact, four-wheel (or tracked) loader you steer by driving the wheels at different speeds. Swap the bucket for forks, an auger, a grapple, or a breaker and one machine handles grading, material moving, demolition, and digging.',
    whoNeedsIt:
      'Landscapers, contractors, and homeowners tackling driveways, grading, dirt work, demo cleanup, and material moving on lots where a full-size loader can not fit.',
    sizingTitle: 'Which size skid steer fits your job?',
    sizing: [
      'The first question is almost always access. A compact, small-frame skid steer is roughly 36 inches wide — narrow enough to pass through a standard 36-inch backyard gate or side yard. If you have to get into a fenced backyard, measure the gate before you book; an inch matters.',
      'Standard-frame machines run about 60 to 66 inches wide with a lot more lift and breakout force. They are the right call for open lots, larger grading jobs, and moving heavier pallets — but they will not fit through most residential gates.',
      'Tracked skid steers (compact track loaders) float better on soft ground, mud, and turf, leaving less of a mess. Wheeled machines are faster and cheaper on hard, established surfaces like gravel and pavement. If the Front Range spring has your yard soft, tracks earn their keep.',
    ],
    useCases: [
      'Grading and leveling for a new shed, patio, or driveway base',
      'Moving dirt, gravel, mulch, or sod across a site',
      'Demolition cleanup and debris loading',
      'Auger work for fence posts and deck footings',
      'Snow pushing and stockpile work',
    ],
    deliveryNote:
      'We deliver the skid steer and any attachments to your site on a trailer and pick it up when you are done — no need to own a truck big enough to tow it.',
    costAnswer:
      'Skid steer rental rates depend on the size of machine, the attachments you need, how long you keep it, and how far we deliver. We keep pricing honest and simple — see live availability and pricing on our booking platform, or call and we will give you a straight number.',
    nugget:
      'If the job is inside a fenced backyard, a 36-inch compact frame is usually the only thing that fits through the gate — measure first.',
    faqs: [
      {
        q: 'What size skid steer fits through a 36-inch gate?',
        a: 'A compact, small-frame skid steer is about 36 inches wide and will usually clear a standard 36-inch gate with the gate fully open. Measure the actual opening (and any posts) before you book — standard-frame machines at 60 inches will not fit.',
      },
      {
        q: 'Do I need a special license to operate a skid steer?',
        a: 'No special license is required to rent and operate one on your own property. We walk you through safe operation at drop-off. For commercial job sites, your employer may require OSHA-aligned training.',
      },
      {
        q: 'Wheeled or tracked — which should I rent?',
        a: 'Tracks float on soft, wet, or turf ground and leave less of a mess; wheels are faster and lower-cost on hard, established surfaces. For soft Front Range spring soil, go tracked.',
      },
      {
        q: 'Can you deliver the skid steer to my site?',
        a: 'Yes. We deliver and pick up across Denver and the Front Range so you do not need a truck and trailer big enough to haul it. {{LINK:/hauling-and-delivery/|See hauling and delivery}}.',
      },
      {
        q: 'How much does it cost to rent a skid steer?',
        a: 'Rates depend on machine size, attachments, rental length, and delivery distance. We do not play games on price — {{LINK:BOOKING|check live pricing and availability}} or call (303) 900-8228 for a straight answer.',
      },
    ],
  },
  {
    slug: 'mini-excavator',
    name: 'Mini Excavator',
    plural: 'Mini Excavators',
    category: 'equipment',
    categorySlug: 'equipment-rental',
    serviceType: 'Mini Excavator Rental',
    blurb: 'Compact excavators for trenching, digging, and tight-access work where a full-size machine can not go.',
    whatItIs:
      'A mini excavator is a compact tracked digging machine — typically in the 1 to 6 ton class — with a boom, arm, and bucket plus a backfill blade. It trenches, digs footings, pulls stumps, and grades in spaces a full-size excavator can not reach.',
    whoNeedsIt:
      'Anyone running utility trenches, footings, drainage, pond or water-feature digs, stump removal, or landscaping excavation on residential and light-commercial sites.',
    sizingTitle: 'Which size mini excavator do you need?',
    sizing: [
      'Access drives the choice. The smallest sub-compact units retract to around 36 inches wide and squeeze through gates and side yards; the trade-off is shorter reach and dig depth. Common 3 to 3.5 ton rentals are roughly 5 to 6 feet wide and dig deeper and faster.',
      'Match dig depth to the job. Smaller machines reach roughly 6 to 8 feet down — fine for most residential water, sewer, and drainage lines. Deeper footings or main-line work want a larger machine. If you are not sure how deep your line sits, call and we will help you size it.',
      'Colorado clay is the other factor. In early spring the ground can still be frozen or gummy heavy clay, which slows digging and rewards a heavier machine with more breakout force. A 1-ton unit will struggle in frozen Front Range clay; a 3.5-ton will not.',
    ],
    useCases: [
      'Water, sewer, gas, and electrical trenching',
      'Footings and foundations for additions, decks, and sheds',
      'Drainage, French drains, and grading for water control',
      'Stump and root removal',
      'Pond, water feature, and landscape excavation',
    ],
    deliveryNote:
      'We trailer the mini excavator to your site and retrieve it after — including the backfill blade and the bucket sizes you need.',
    costAnswer:
      'Mini excavator rates depend on machine size, rental duration, bucket options, and delivery. We price it straight — see live pricing on the booking platform or call and we will quote you honestly.',
    nugget:
      'In early-spring Front Range clay, a 1-ton machine bogs down; step up to a 3 to 3.5 ton class for real breakout force in frozen or heavy ground.',
    faqs: [
      {
        q: 'Can a mini excavator dig in frozen Colorado clay in early spring?',
        a: 'It can, but size matters. The smallest 1-ton machines struggle in frozen or heavy Front Range clay. A 3 to 3.5 ton class has the weight and breakout force to work it. If the top few inches are still frozen, give it time to thaw or step up a size.',
      },
      {
        q: 'How deep can a mini excavator dig?',
        a: 'Compact units reach roughly 6 to 8 feet, which covers most residential water, sewer, and drainage lines. Deeper footings or main lines call for a larger machine — tell us your depth and we will size it.',
      },
      {
        q: 'Will a mini excavator fit through my gate?',
        a: 'The smallest sub-compact machines retract to about 36 inches and fit a standard gate; common 3 to 3.5 ton units are 5 to 6 feet wide and will not. Measure the opening before you book.',
      },
      {
        q: 'Do I need to call before I dig?',
        a: 'Yes — always call 811 (Colorado 811) before any digging so utilities get marked. It is free and required. We are happy to talk through your dig, but locating lines is a must before the bucket goes in the ground.',
      },
      {
        q: 'How much does a mini excavator rental cost?',
        a: 'It depends on machine size, how long you need it, bucket options, and delivery distance. {{LINK:BOOKING|See live pricing}} or call (303) 900-8228 for a straight number.',
      },
    ],
  },
  {
    slug: 'excavator',
    name: 'Excavator',
    plural: 'Excavators',
    category: 'equipment',
    categorySlug: 'equipment-rental',
    serviceType: 'Excavator Rental',
    blurb: 'Full-size digging power for deeper trenches, foundations, and heavy excavation.',
    whatItIs:
      'A full-size excavator brings serious reach, depth, and breakout force for deep trenching, foundation digs, large grading, and heavy material handling. When a mini runs out of depth or power, this is the machine.',
    whoNeedsIt:
      'Contractors and serious projects: deep utilities, full foundations, large drainage and grading, demolition, and heavy dirt moving where a compact machine can not keep up.',
    sizingTitle: 'When do you step up from a mini to a full-size excavator?',
    sizing: [
      'Depth and volume are the deciding factors. If you need to dig past roughly 8 to 10 feet, or you are moving large volumes of dirt on a deadline, a full-size machine pays for itself in time saved.',
      'Heavy or frozen Front Range ground also favors a bigger machine. More weight means more breakout force, so dense clay, rock, and compacted fill that stall a mini come apart cleanly.',
      'Be honest about access and ground protection. Full-size machines need room to work and a path in. If your site is tight or you are crossing finished surfaces, tell us — we will help you decide between a midi and a full-size, or whether a mini is genuinely enough.',
    ],
    useCases: [
      'Deep utility and main-line trenching',
      'Full foundation and basement excavation',
      'Large-scale grading and site prep',
      'Demolition and heavy debris handling',
      'Rock, hardpan, and compacted fill excavation',
    ],
    deliveryNote:
      'Full-size excavators are delivered and picked up by us on the proper trailer. We handle the heavy haul so you do not have to.',
    costAnswer:
      'Full-size excavator pricing depends heavily on machine size, attachments, duration, and delivery. Because the range is wide, the honest move is to see live pricing on our booking platform or call so we can scope it with you.',
    nugget:
      'Crossing the 8 to 10 foot dig-depth line, or moving big dirt volume on a clock, is the signal to step up from a mini to a full-size excavator.',
    faqs: [
      {
        q: 'When do I need a full-size excavator instead of a mini?',
        a: 'When you are digging deeper than about 8 to 10 feet, moving large volumes of material on a deadline, or breaking dense clay, rock, or compacted fill that a mini can not handle. Tell us the depth and the dirt and we will size it.',
      },
      {
        q: 'Can you deliver a full-size excavator to my site?',
        a: 'Yes. We haul it in on the correct trailer and pick it up when you finish — across Denver and the Front Range. {{LINK:/hauling-and-delivery/|See hauling and delivery}}.',
      },
      {
        q: 'Do I need to locate utilities before excavating?',
        a: 'Absolutely. Call 811 before you dig so all utilities are marked. For deep excavation this is not optional — it protects you, the crew, and the lines.',
      },
      {
        q: 'How much does it cost to rent a full-size excavator?',
        a: 'The range is wide depending on machine size, attachments, rental length, and delivery. {{LINK:BOOKING|Check live pricing}} or call (303) 900-8228 and we will scope it honestly.',
      },
    ],
  },
  {
    slug: 'dump-trailer',
    name: 'Dump Trailer',
    plural: 'Dump Trailers',
    category: 'trailer',
    categorySlug: 'trailer-rental',
    serviceType: 'Dump Trailer Rental',
    blurb: 'Hydraulic dump trailers for hauling and dumping dirt, gravel, concrete, and debris.',
    whatItIs:
      'A dump trailer is a heavy-duty trailer with a hydraulic bed that lifts and dumps its load — dirt, gravel, mulch, concrete, roofing, or demolition debris — without shoveling it out by hand.',
    whoNeedsIt:
      'Anyone hauling and dumping material: landscapers, roofers, remodelers, and homeowners on cleanout, hardscape, or junk-haul jobs.',
    sizingTitle: 'GVWR vs payload: what a dump trailer can actually carry',
    sizing: [
      'The number that matters is payload, not the trailer length. Payload is the trailer GVWR minus the trailer empty weight. A common 7x14 dump trailer might be rated at 14,000 lb GVWR and weigh around 4,400 lb empty — leaving roughly 9,000 to 9,600 lb of legal payload. That is the figure you load to, not the size of the box.',
      'Dense material fills payload before it fills volume. Wet dirt, gravel, and concrete get heavy fast — a half-full box can already be at the weight limit. Mulch and brush fill the box long before they hit the weight. Know which one you are hauling.',
      'Your truck and hitch have to match. A loaded dump trailer needs the right ball, a properly rated hitch, and a brake controller in the tow vehicle. We will tell you exactly what your truck needs so you are legal and safe before you pull out.',
    ],
    useCases: [
      'Hauling dirt, gravel, sand, and road base',
      'Concrete and asphalt debris removal',
      'Roofing tear-off and construction debris',
      'Yard cleanouts, brush, and landscaping waste',
      'Delivering and dumping mulch or rock',
    ],
    deliveryNote:
      'No truck big enough to tow it? We can deliver the dump trailer to you and pick it up — ask about delivery when you book.',
    costAnswer:
      'Dump trailer rates depend on trailer size, how long you keep it, and whether you need delivery. Pricing is simple and honest — see live rates on the booking platform or call us.',
    nugget:
      'Payload equals GVWR minus the trailer empty weight — a 14,000 lb GVWR dump trailer that weighs ~4,400 lb empty carries roughly 9,000+ lb, and wet dirt hits that limit fast.',
    faqs: [
      {
        q: 'How much can a dump trailer carry?',
        a: 'Look at payload, not length: payload is the GVWR minus the trailer empty weight. A 7x14 rated at 14,000 lb GVWR weighing ~4,400 lb empty carries roughly 9,000 to 9,600 lb. Dense material like wet dirt or concrete reaches that limit before the box looks full.',
      },
      {
        q: 'What do I need on my truck to tow a dump trailer?',
        a: 'A properly rated hitch and ball (commonly 2-5/16 inch), a brake controller, and a truck with enough tow rating for the loaded weight. We tell you exactly what is required at pickup so you leave legal and safe.',
      },
      {
        q: 'Do I need a CDL to tow a dump trailer?',
        a: 'For typical non-commercial use behind a standard pickup, no — most setups stay under the 26,001 lb combined threshold. If you are hauling commercially or running heavier combinations, check current Colorado CDL rules.',
      },
      {
        q: 'Can I dump concrete or roofing debris in it?',
        a: 'Yes — dump trailers are built for heavy debris like concrete, asphalt, and roofing tear-off. Just watch payload weight with dense material, and confirm your dump site accepts the load.',
      },
      {
        q: 'How much does it cost to rent a dump trailer?',
        a: 'It depends on size, rental length, and delivery. {{LINK:BOOKING|See live pricing}} or call (303) 900-8228 for a straight answer.',
      },
    ],
  },
  {
    slug: 'flatbed-trailer',
    name: 'Flatbed / Equipment Trailer',
    plural: 'Flatbed & Equipment Trailers',
    category: 'trailer',
    categorySlug: 'trailer-rental',
    serviceType: 'Flatbed & Equipment Trailer Rental',
    blurb: 'Tandem-axle flatbed and equipment trailers for hauling machines, materials, and big loads.',
    whatItIs:
      'A flatbed or equipment trailer is an open deck trailer — typically tandem-axle, 18 to 24 feet — with ramps for loading equipment, lumber, pallets, and oversized material. It is the workhorse for moving a machine or a heavy load.',
    whoNeedsIt:
      'Contractors moving equipment, anyone hauling lumber, pallets, materials, or a piece of machinery to or from a job site.',
    sizingTitle: 'Sizing a flatbed: deck length, GVWR, and your tow rating',
    sizing: [
      'Start with what you are hauling. Measure the equipment or load length and add room to chain it down — a tracked machine wants deck length and ramp angle that let it climb on without high-centering. An 18-foot deck handles most compact machines; longer loads want 20 to 24 feet.',
      'Then check payload the same way as any trailer: GVWR minus the trailer empty weight equals what you can legally carry. Match that to the actual weight of your machine or material with margin to spare.',
      'Finally, match the trailer to your truck. A loaded equipment trailer needs the correct hitch and ball, a brake controller, and a tow vehicle rated for the combined weight. We will spell out exactly what your truck needs so you are not guessing in the yard.',
    ],
    useCases: [
      'Hauling skid steers, mini excavators, and compact machines',
      'Moving lumber, pallets, and building materials',
      'Transporting mowers, UTVs, and equipment',
      'Oversized or long-load hauling',
      'Job-site equipment moves',
    ],
    deliveryNote:
      'If you do not have a truck rated to tow a loaded equipment trailer, ask us about delivery — or let us handle the haul for you.',
    costAnswer:
      'Flatbed and equipment trailer rates depend on deck size, rental length, and delivery. We keep it honest — check live pricing on the booking platform or call.',
    nugget:
      'Deck length plus ramp angle decide whether a tracked machine climbs on cleanly — measure the load and confirm your truck tow rating before you book.',
    faqs: [
      {
        q: 'What size equipment trailer do I need to haul a skid steer?',
        a: 'Most compact skid steers fit an 18-foot tandem-axle deck with room to chain down, but check your machine length and weight against the trailer payload (GVWR minus empty weight). Longer or heavier machines want a 20 to 24 foot deck. Tell us the machine and we will match it.',
      },
      {
        q: 'What does my truck need to tow a loaded equipment trailer?',
        a: 'The correct hitch and ball, a brake controller, and a tow rating that covers the combined loaded weight. We confirm the exact requirements at pickup so you leave safe and legal.',
      },
      {
        q: 'Do I need a CDL to tow an equipment trailer?',
        a: 'For typical non-commercial loads behind a properly rated pickup, generally no. Heavier commercial combinations can cross into CDL territory — check current Colorado rules.',
      },
      {
        q: 'Can you deliver the trailer or haul my equipment for me?',
        a: 'Yes. If you are not set up to tow it, we deliver the trailer or handle the move. {{LINK:/hauling-and-delivery/|See hauling and delivery}}.',
      },
      {
        q: 'How much does a flatbed trailer rental cost?',
        a: 'It depends on deck size, rental length, and delivery distance. {{LINK:BOOKING|Check live pricing}} or call (303) 900-8228.',
      },
    ],
  },
  {
    slug: 'car-hauler',
    name: 'Car Hauler',
    plural: 'Car Haulers',
    category: 'trailer',
    categorySlug: 'trailer-rental',
    serviceType: 'Car Hauler Rental',
    blurb: 'Open car-hauler trailers for moving vehicles, project cars, and light equipment.',
    whatItIs:
      'A car hauler is an open trailer built to load and secure a vehicle — typically an 18 to 20 foot tandem-axle deck with ramps and tie-down points for a car, truck, project vehicle, or light equipment.',
    whoNeedsIt:
      'Anyone moving a vehicle: a project car, an extra truck, an auction or private-sale pickup, or a non-running vehicle that needs to get from A to B.',
    sizingTitle: 'Loading a car hauler safely: wheelbase, weight, and tie-downs',
    sizing: [
      'Match the deck to the vehicle. Most cars and light trucks load fine on an 18 to 20 foot car hauler, but check your wheelbase and overall length so the vehicle sits balanced — too far back and you lose tongue weight, too far forward and you overload the hitch.',
      'Mind the weight. Confirm the vehicle weight against the trailer payload (GVWR minus empty weight) so you stay legal and your truck stays in its tow rating. A heavy 3/4-ton truck on a light trailer is a problem before you leave the driveway.',
      'Tie down right. Four-point wheel straps or quality chains at proper angles keep the vehicle from shifting. We show you the tie-down points and the right technique at pickup — a load that moves at highway speed is the fastest way to ruin a haul.',
    ],
    useCases: [
      'Moving a project or restoration car',
      'Auction and private-sale vehicle pickup',
      'Hauling a non-running vehicle',
      'Transporting an extra truck or UTV',
      'Light equipment and toy hauling',
    ],
    deliveryNote:
      'Not set up to tow a loaded car hauler? Ask about delivery, or let us move the vehicle for you with our hauling service.',
    costAnswer:
      'Car hauler rates depend on the trailer, how long you need it, and delivery. Pricing is straightforward — see live rates on the booking platform or call us.',
    nugget:
      'Balance is everything: position the vehicle for proper tongue weight, confirm it is under trailer payload, and use four-point tie-downs at correct angles.',
    faqs: [
      {
        q: 'What size car hauler do I need?',
        a: 'Most cars and light trucks load on an 18 to 20 foot tandem-axle car hauler. Check your vehicle length and wheelbase so it sits balanced on the deck, and confirm the vehicle weight is under the trailer payload.',
      },
      {
        q: 'Can I haul a non-running vehicle?',
        a: 'Yes, with the right approach — a winch or a vehicle that can be pushed/pulled into position, then secured with proper tie-downs. Tell us the situation and we will make sure you have a workable setup.',
      },
      {
        q: 'What does my truck need to tow a car hauler?',
        a: 'A correctly rated hitch and ball, a brake controller, and a tow rating covering the loaded weight. We confirm requirements at pickup.',
      },
      {
        q: 'How do I secure the vehicle on the trailer?',
        a: 'Four-point wheel straps or quality chains at proper angles, with the vehicle positioned for correct tongue weight. We show you the tie-down points and technique so nothing shifts at highway speed.',
      },
      {
        q: 'How much does it cost to rent a car hauler?',
        a: 'It depends on the trailer, rental length, and delivery. {{LINK:BOOKING|See live pricing}} or call (303) 900-8228.',
      },
    ],
  },
];

export const equipmentBySlug = Object.fromEntries(equipment.map((e) => [e.slug, e]));

export const categories = [
  {
    slug: 'trailer-rental',
    name: 'Trailer Rental',
    h1: 'Trailer Rental in Denver, CO',
    short: 'Trailers',
    blurb: 'Dump, flatbed, equipment, and car-hauler trailers — delivered.',
    intro:
      'From hauling dirt and debris to moving a machine or a vehicle, we rent the trailers that get the load moving across Denver and the Front Range. Daily and weekly, with delivery available.',
    members: ['dump-trailer', 'flatbed-trailer', 'car-hauler'],
  },
  {
    slug: 'equipment-rental',
    name: 'Equipment Rental',
    h1: 'Equipment Rental in Denver, CO',
    short: 'Equipment',
    blurb: 'Skid steers, mini excavators, and full-size excavators — delivered to your site.',
    intro:
      'When the job calls for moving dirt, digging, grading, or demo, we rent the machines that do the work — and we deliver them straight to your site across the Denver metro.',
    members: ['skid-steer', 'mini-excavator', 'excavator'],
  },
];

export type Category = (typeof categories)[number];
export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));
