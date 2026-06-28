/* ============================================================
   City data — drives city hubs (8) and the equipment×city matrix (48).
   Each city carries REAL local context (neighborhoods, terrain, soil,
   common projects) so matrix/city pages read uniquely, not as a
   name-swap template (Section 6 uniqueness mandate).

   Facts kept to verifiable generalities (real neighborhoods, Front
   Range expansive-clay soils, foothills vs. plains). No invented
   ordinances — permit guidance is generic with an owner TODO.
   ============================================================ */

export interface City {
  slug: string;
  name: string;
  region: 'CO';
  // one-line positioning
  blurb: string;
  // real neighborhoods / landmarks (used in prose, not as filler)
  neighborhoods: string[];
  // terrain + what it means for digging/hauling
  terrain: string;
  // soil reality for excavation work
  soil: string;
  // common local project types (varies the copy per city)
  jobs: string[];
  // delivery framing
  deliveryNote: string;
  // generic permit/access note (no fabricated specifics)
  accessNote: string;
  // nearby cities we serve (slugs from this set) — cross-linking widget
  nearby: string[];
  // city-specific FAQ pieces (true/general)
  localFaqs: { q: string; a: string }[];
}

export const cities: City[] = [
  {
    slug: 'denver',
    name: 'Denver',
    region: 'CO',
    blurb: 'The heart of our service area — from close-in bungalows to new East-side builds.',
    neighborhoods: ['Five Points', 'the Highlands', 'Washington Park', 'Berkeley', 'Central Park', 'Green Valley Ranch'],
    terrain: 'Denver is a mix of tight, alley-access older neighborhoods and wide-open newer subdivisions on the east side. Access is the swing factor — a close-in lot off a narrow alley needs a compact machine, while an East Denver new-build has room for full-size gear.',
    soil: 'Most of Denver sits on expansive Front Range clay that swells and shrinks with moisture. It digs heavy when wet and packs hard when dry, which matters for footings, drainage, and any trench that has to hold a grade.',
    jobs: ['driveway and patio replacements', 'backyard regrades and drainage fixes', 'fence and deck footings', 'basement and addition digs', 'demolition cleanouts and debris hauling'],
    deliveryNote: 'We deliver trailers and equipment anywhere in Denver and pick them back up — no need to own a truck big enough to tow a loaded machine through city traffic.',
    accessNote: 'Older Denver lots often rely on alley access and narrow side yards, so measure your gate before booking a machine. For anything staged in the right-of-way or street, check Denver permit rules first.',
    nearby: ['lakewood', 'wheat-ridge', 'aurora', 'thornton'],
    localFaqs: [
      {
        q: 'Can you deliver equipment to older Denver neighborhoods with alley access?',
        a: 'Yes. Tight alley lots in areas like the Highlands or Berkeley are exactly why we run compact, gate-width machines and deliver them in. Measure your gate or alley opening and we will match the right size.',
      },
      {
        q: 'Is Denver clay soil a problem for digging?',
        a: 'It is the main thing to plan for. Denver expansive clay digs heavy when wet and hard when dry. For footings and drainage we help you size a machine with enough breakout force so the job does not stall.',
      },
    ],
  },
  {
    slug: 'aurora',
    name: 'Aurora',
    region: 'CO',
    blurb: 'Sprawling east-metro coverage from established neighborhoods to fast-growing subdivisions.',
    neighborhoods: ['Southlands', 'Saddle Rock', 'Del Mar Park', 'Murphy Creek', 'Green Valley Ranch East'],
    terrain: 'Aurora spreads across the flatter east plains, so most sites have room to work and easy trailer access. The trade-off is distance — jobs can sit well east of the core, which is exactly why delivery matters here.',
    soil: 'Aurora ground is largely deep clay and fill typical of the eastern Front Range. It holds water in spring and bakes hard in summer, so drainage and compaction planning pay off on grading and footing work.',
    jobs: ['new-build landscaping and grading', 'large backyard and drainage projects', 'fence lines across bigger lots', 'sod, rock, and material hauling', 'community and HOA cleanups'],
    deliveryNote: 'Because Aurora job sites can sit far east of the metro core, delivery is the easy button — we bring the gear to you and save you the long tow.',
    accessNote: 'Most Aurora lots have generous access, but newer subdivisions sometimes have HOA rules about equipment staging and street use. Check with your HOA, and check city rules for anything in the right-of-way.',
    nearby: ['denver', 'centennial', 'thornton'],
    localFaqs: [
      {
        q: 'Do you deliver to far East Aurora and Southlands-area subdivisions?',
        a: 'Yes — east Aurora is a regular run for us. Delivery means you skip a long tow through traffic; we drop the trailer or machine and pick it up when you are done.',
      },
      {
        q: 'What size machine suits a large Aurora backyard?',
        a: 'Newer Aurora lots usually have room for a standard-frame skid steer or a 3 to 3.5 ton mini excavator, which speeds up grading and digging. If the yard is fenced, confirm the gate width first.',
      },
    ],
  },
  {
    slug: 'lakewood',
    name: 'Lakewood',
    region: 'CO',
    blurb: 'West-metro coverage from Belmar flats to the slopes of Green Mountain.',
    neighborhoods: ['Belmar', 'Green Mountain', 'Eiber', 'Morse Park', 'Union Square'],
    terrain: 'Lakewood runs from flat, established neighborhoods near Belmar up to the hilly, foothill-adjacent slopes of Green Mountain. The west side adds grade and the occasional rocky pocket, which can change how you approach a dig or a haul.',
    soil: 'Closer to the foothills, Lakewood soil gets rockier and can include decomposed granite and cobble mixed into the clay. That is harder digging than flat clay, so breakout force and the right bucket matter on the west side.',
    jobs: ['sloped-lot grading and retaining prep', 'driveway and hardscape work', 'drainage on hillside lots', 'foothill-adjacent footings through rocky ground', 'brush and debris hauling'],
    deliveryNote: 'We deliver across Lakewood, including the steeper Green Mountain streets where towing a loaded trailer yourself is no fun.',
    accessNote: 'Hillside Lakewood lots can have tight, sloped driveways — tell us about access and grade so we send a machine that can get in and work safely. For street staging, check city right-of-way rules.',
    nearby: ['denver', 'wheat-ridge', 'arvada'],
    localFaqs: [
      {
        q: 'Can a machine handle a sloped Green Mountain lot?',
        a: 'Often yes, but grade and access drive the choice. Tracked machines hold a slope and soft ground better than wheels. Tell us the steepness and the driveway width and we will size it safely.',
      },
      {
        q: 'Is digging harder near the Lakewood foothills?',
        a: 'It can be — west Lakewood soil mixes rock and decomposed granite into the clay, which is tougher than flat ground. A machine with more breakout force and the right bucket makes the difference.',
      },
    ],
  },
  {
    slug: 'arvada',
    name: 'Arvada',
    region: 'CO',
    blurb: 'From historic Olde Town to the newer builds out toward the foothills.',
    neighborhoods: ['Olde Town Arvada', 'Ralston Valley', 'Leyden Rock', 'Candelas', 'West Woods'],
    terrain: 'Arvada blends tight, mature lots around Olde Town with sprawling newer subdivisions climbing west toward the foothills. Older sections lean on alley and gate access; the western builds have more room but more grade.',
    soil: 'Arvada sits on classic Front Range clay, with rockier, harder-digging ground as you move west toward the hogback and foothills. Drainage and footing work reward planning for soil that swells when wet.',
    jobs: ['Olde Town lot regrades and landscaping', 'fence and deck footings on mature lots', 'new-build grading out west', 'driveway and hardscape projects', 'material and debris hauling'],
    deliveryNote: 'We deliver throughout Arvada — from the tight streets around Olde Town to the newer west-side neighborhoods — and pick the gear back up.',
    accessNote: 'Mature Arvada lots near Olde Town often use alley access and narrow gates, so measure before booking. Western subdivisions may have HOA staging rules. Check the right-of-way for street work.',
    nearby: ['wheat-ridge', 'westminster', 'lakewood', 'denver'],
    localFaqs: [
      {
        q: 'Will a skid steer fit through a gate on an older Olde Town Arvada lot?',
        a: 'A 36-inch compact skid steer usually clears a standard backyard gate, which is why it is our go-to for mature Arvada lots. Measure the opening and posts first — an inch decides it.',
      },
      {
        q: 'Do you serve the newer west Arvada neighborhoods like Candelas and Leyden Rock?',
        a: 'Yes. Those newer builds have room for larger machines and we deliver out that way regularly. Soil gets rockier toward the foothills, so we help you pick a machine with enough digging power.',
      },
    ],
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    region: 'CO',
    blurb: 'Mid-metro coverage between Denver and Boulder, from Standley Lake to Downtown Westminster.',
    neighborhoods: ['Standley Lake', 'Downtown Westminster', 'Legacy Ridge', 'The Ranch', 'Bradburn'],
    terrain: 'Westminster rolls gently between Denver and Boulder, with a mix of established neighborhoods and active redevelopment around Downtown Westminster. Most lots have workable access with moderate grade.',
    soil: 'Westminster ground is typical Front Range clay with some rolling-terrain variation. It moves with moisture, so grading, drainage, and footings benefit from a machine that can work dense ground.',
    jobs: ['backyard regrades and drainage', 'patio, driveway, and hardscape prep', 'fence and deck footings', 'landscaping material hauling', 'cleanouts and debris removal'],
    deliveryNote: 'We deliver across Westminster, north toward Standley Lake and through the newer Downtown Westminster area, and handle pickup.',
    accessNote: 'Westminster lots are mostly accessible, but newer planned communities can have HOA rules on equipment and staging. Confirm with your HOA and check city right-of-way rules for street work.',
    nearby: ['arvada', 'thornton', 'denver'],
    localFaqs: [
      {
        q: 'Do you deliver to the Standley Lake and Legacy Ridge areas?',
        a: 'Yes — north Westminster is a regular delivery zone. We drop the trailer or machine at your site and pick it up, so you skip towing across the metro.',
      },
      {
        q: 'What machine works best for a Westminster backyard drainage fix?',
        a: 'A compact skid steer or a mini excavator handles most residential drainage and regrade work. If the yard is fenced, a 36-inch compact machine fits the gate; for open lots we can go larger and faster.',
      },
    ],
  },
  {
    slug: 'thornton',
    name: 'Thornton',
    region: 'CO',
    blurb: 'North-metro coverage across fast-growing subdivisions and established Original Thornton.',
    neighborhoods: ['Original Thornton', 'Eastlake', 'Hunters Glen', 'North Creek', 'Trail Winds'],
    terrain: 'Thornton is one of the fastest-growing parts of the north metro, with wide newer subdivisions and flatter, open ground that makes for easy trailer access and room to work.',
    soil: 'Thornton sits on deep clay and fill common to the north Front Range. It holds spring moisture and compacts hard, so drainage and compaction planning help on grading, footings, and new-build landscaping.',
    jobs: ['new-build and post-construction landscaping', 'backyard grading and drainage', 'fence lines on larger lots', 'sod, rock, and material delivery and hauling', 'HOA and community projects'],
    deliveryNote: 'We deliver throughout Thornton, including the newer subdivisions up north, and pick the equipment back up when you finish.',
    accessNote: 'Most Thornton lots have generous access. Newer planned neighborhoods often have HOA staging rules, so check before equipment arrives, and confirm city rules for any street or right-of-way work.',
    nearby: ['westminster', 'denver', 'aurora'],
    localFaqs: [
      {
        q: 'Do you deliver to new construction in north Thornton?',
        a: 'Yes — post-construction landscaping is one of our most common Thornton jobs. We deliver the skid steer, mini excavator, or dump trailer right to the new lot and haul it back.',
      },
      {
        q: 'What is the best machine for finishing a new-build Thornton yard?',
        a: 'For grading and moving material on a fresh lot, a skid steer paired with a dump trailer is the workhorse combo. For trenching irrigation or drainage, add a mini excavator.',
      },
    ],
  },
  {
    slug: 'wheat-ridge',
    name: 'Wheat Ridge',
    region: 'CO',
    blurb: 'Our home base — close-in west-metro lots, big gardens, and classic bungalows.',
    neighborhoods: ['the Ridge at 38', 'Applewood', 'Paramount Heights', 'Fruitdale', 'Panorama Park'],
    terrain: 'Wheat Ridge is where we are based, so we know it inside and out — a close-in west-metro city of established bungalows, generous lots, and a strong gardening streak, with plenty of alley access and mature trees.',
    soil: 'Wheat Ridge sits on the same Front Range clay as its neighbors, with deep, often well-worked garden soil on the older lots. For footings and drainage it still pays to plan for clay that swells when wet.',
    jobs: ['garden bed and large-lot landscaping', 'driveway and patio replacements', 'fence and deck footings on mature lots', 'tree and stump debris hauling', 'cleanouts along alley access'],
    deliveryNote: 'Wheat Ridge is our backyard. Local delivery is fast and easy — we bring the gear over and pick it up, often same day when it is on the yard.',
    accessNote: 'Many Wheat Ridge lots use alley access and have mature trees and gates to work around, so measure your opening before booking a machine. Check city right-of-way rules for street staging.',
    nearby: ['arvada', 'lakewood', 'denver', 'westminster'],
    localFaqs: [
      {
        q: 'You are based in Wheat Ridge — does that mean faster service here?',
        a: 'It does. Our yard is at 4380 Pierson St in Wheat Ridge, so local delivery and same-day turnaround are easiest right here when the gear is available.',
      },
      {
        q: 'Can you work around alley access and mature trees on a Wheat Ridge lot?',
        a: 'Yes — that is the norm here. We run compact, gate-width machines that fit alley openings and tight side yards. Measure the gate and we will bring a machine that fits.',
      },
    ],
  },
  {
    slug: 'centennial',
    name: 'Centennial',
    region: 'CO',
    blurb: 'South-metro coverage across established, master-planned suburban neighborhoods.',
    neighborhoods: ['Willow Creek', 'Walnut Hills', 'Homestead', 'Foxridge', 'Piney Creek'],
    terrain: 'Centennial is a settled south-metro suburb of master-planned neighborhoods with mature landscaping and consistent, workable lot access. Most jobs here are upgrades and replacements rather than raw new builds.',
    soil: 'Centennial sits on Front Range clay typical of the south metro. Established lots often have years of landscaping on top, but the clay underneath still swells with moisture, which matters for drainage and footing work.',
    jobs: ['landscape renovations and regrades', 'drainage corrections on mature lots', 'patio, driveway, and hardscape replacement', 'fence and deck footing work', 'material and debris hauling'],
    deliveryNote: 'We deliver across Centennial and the south metro, dropping the trailer or machine at your site and picking it up after.',
    accessNote: 'Centennial neighborhoods are mostly HOA-governed, so check staging and equipment rules with your HOA before delivery. Confirm city right-of-way rules for any street work.',
    nearby: ['aurora', 'denver', 'lakewood'],
    localFaqs: [
      {
        q: 'Do you serve established Centennial neighborhoods like Willow Creek and Piney Creek?',
        a: 'Yes. Most of our Centennial work is renovation and drainage on mature lots, and we deliver right to the property. Many neighborhoods are HOA-governed, so confirm staging rules before we arrive.',
      },
      {
        q: 'What machine is best for a Centennial landscape renovation?',
        a: 'A compact skid steer handles most regrading and material work on established lots, and a mini excavator covers drainage and footing digs. If the yard is fenced, a gate-width compact machine is the move.',
      },
    ],
  },
  {
    slug: 'golden',
    name: 'Golden',
    region: 'CO',
    blurb: 'Foothills coverage where the plains meet Clear Creek Canyon — historic downtown to the mesas.',
    neighborhoods: ['downtown Golden', 'Mesa Meadows', 'Eagle Ridge', 'Genesee', 'Applewood'],
    terrain: 'Golden sits right where the plains meet the foothills, with steeper grades, rocky ground, and tighter mountain-adjacent lots. Access and slope matter more here than almost anywhere else in the metro.',
    soil: 'Golden trades the metro’s deep clay for rockier foothill soil — decomposed granite, cobble, and shallow bedrock are common. That is hard digging, so machine weight and breakout force matter.',
    jobs: ['sloped-lot grading and retaining prep', 'rocky footings and foundations', 'driveway and access work on grade', 'drainage on hillside lots', 'brush and debris hauling'],
    deliveryNote: 'We deliver into Golden and the foothill streets where towing a loaded trailer up grade yourself is a headache — we handle the haul.',
    accessNote: 'Foothill Golden lots can be steep with tight driveways; tell us the grade and access and we will send a machine that can work it safely. Check city right-of-way rules for street staging.',
    nearby: ['lakewood', 'arvada', 'wheat-ridge', 'denver'],
    localFaqs: [
      {
        q: 'Can you deliver equipment up into the Golden foothills?',
        a: 'Yes. Steep, narrow foothill streets are exactly why delivery makes sense in Golden — we haul the machine or trailer in and pick it up, so you skip towing a loaded rig up grade.',
      },
      {
        q: 'Is digging harder in Golden than down in the metro?',
        a: 'Usually, yes. Golden trades deep clay for rocky, decomposed-granite ground with shallow bedrock in spots. A heavier machine with strong breakout force and the right bucket is the way to go.',
      },
    ],
  },
  {
    slug: 'broomfield',
    name: 'Broomfield',
    region: 'CO',
    blurb: 'Coverage between Denver and Boulder — from Anthem’s new builds to the Interlocken area.',
    neighborhoods: ['Anthem', 'The Broadlands', 'Interlocken', 'McKay Landing', 'Brunner Farm'],
    terrain: 'Broomfield rolls between Denver and Boulder with a mix of fast-growing newer subdivisions and established neighborhoods. Most lots have room to work, with gentle grade.',
    soil: 'Broomfield sits on typical Front Range clay over rolling terrain. It moves with moisture, so drainage and footing work reward a machine that can handle dense ground.',
    jobs: ['new-build and post-construction landscaping', 'backyard grading and drainage', 'fence lines on larger lots', 'sod, rock, and material hauling', 'HOA and community projects'],
    deliveryNote: 'We deliver across Broomfield, from Anthem up north to the Interlocken side, and pick the gear back up.',
    accessNote: 'Many Broomfield neighborhoods are newer and HOA-governed, so confirm equipment-staging rules before delivery. Check city right-of-way rules for street work.',
    nearby: ['westminster', 'arvada', 'northglenn', 'thornton'],
    localFaqs: [
      {
        q: 'Do you deliver to new construction in Anthem and the Broadlands?',
        a: 'Yes — finishing new-build yards is one of our most common Broomfield jobs. We deliver the skid steer, mini excavator, or dump trailer to the lot and haul it back.',
      },
      {
        q: 'What machine is best for a Broomfield backyard project?',
        a: 'A compact skid steer covers most grading and material work; a mini excavator handles drainage and footing digs. Fenced yard? A 36-inch gate-width machine fits the opening.',
      },
    ],
  },
  {
    slug: 'northglenn',
    name: 'Northglenn',
    region: 'CO',
    blurb: 'North-metro coverage across established, close-in neighborhoods and modest lots.',
    neighborhoods: ['Webster Lake', 'Stonehocker Park', 'Hillcrest', 'E.B. Rains Jr. Memorial Park', 'Original Northglenn'],
    terrain: 'Northglenn is a settled, close-in north-metro city of established neighborhoods, modest lots, and flatter ground that makes for easy trailer access.',
    soil: 'Northglenn sits on deep Front Range clay typical of the north metro. It holds spring moisture and packs hard, so drainage and compaction planning help on grading and footings.',
    jobs: ['backyard regrades and drainage', 'driveway and patio replacements', 'fence and deck footings on mature lots', 'material and debris hauling', 'cleanouts and tree-debris removal'],
    deliveryNote: 'We deliver throughout Northglenn and across the north metro, dropping the trailer or machine at your site and picking it up after.',
    accessNote: 'Established Northglenn lots are mostly easy to access; measure any backyard gate before booking a machine. Check city right-of-way rules for street staging.',
    nearby: ['thornton', 'westminster', 'broomfield', 'denver'],
    localFaqs: [
      {
        q: 'Do you deliver across Northglenn?',
        a: 'Yes — Northglenn is a regular run for us. We bring the trailer or machine to your site and pick it up, so you do not need a truck big enough to tow it.',
      },
      {
        q: 'What machine fits a typical Northglenn backyard?',
        a: 'A compact skid steer or mini excavator handles most regrade, drainage, and footing work. For a fenced yard, a 36-inch gate-width machine clears a standard gate.',
      },
    ],
  },
  {
    slug: 'commerce-city',
    name: 'Commerce City',
    region: 'CO',
    blurb: 'Northeast-metro coverage from established neighborhoods to the fast-growing Reunion side.',
    neighborhoods: ['Reunion', 'Belle Creek', 'Northern Lights', 'the Dick’s Sporting Goods Park area', 'Original Commerce City'],
    terrain: 'Commerce City spans older, close-in neighborhoods and wide newer subdivisions out toward Reunion, with flat, open ground that makes for easy trailer access and room to work.',
    soil: 'Commerce City sits on deep clay and fill common to the northeast metro. It holds water in spring and bakes hard in summer, so drainage and compaction planning pay off.',
    jobs: ['new-build and post-construction landscaping', 'backyard grading and drainage', 'fence lines on larger lots', 'sod, rock, and material hauling', 'cleanouts and debris removal'],
    deliveryNote: 'We deliver across Commerce City, from the older core out to Reunion, and pick the equipment back up.',
    accessNote: 'Newer Reunion-area neighborhoods can have HOA staging rules; confirm before delivery. Check city right-of-way rules for street work.',
    nearby: ['denver', 'thornton', 'brighton', 'aurora'],
    localFaqs: [
      {
        q: 'Do you deliver out to Reunion and the newer Commerce City subdivisions?',
        a: 'Yes — those newer builds are a regular delivery zone. We drop the trailer or machine at the lot and haul it back when you are done.',
      },
      {
        q: 'What is the best setup for finishing a Commerce City new-build yard?',
        a: 'A skid steer paired with a dump trailer is the workhorse combo for grading and moving material; add a mini excavator for irrigation or drainage trenching.',
      },
    ],
  },
  {
    slug: 'englewood',
    name: 'Englewood',
    region: 'CO',
    blurb: 'Close-in south-central coverage — established Broadway-corridor neighborhoods and mature lots.',
    neighborhoods: ['the South Broadway corridor', 'downtown Englewood', 'Cherrelyn', 'Romans Park', 'the Bates–Logan Park area'],
    terrain: 'Englewood is a settled, close-in south-central city of established neighborhoods and mature lots, with flatter ground and tighter, older parcels where access matters.',
    soil: 'Englewood sits on Front Range clay typical of the close-in metro. Older lots carry years of landscaping, but the clay underneath still swells with moisture, which matters for drainage and footings.',
    jobs: ['landscape renovations and regrades', 'drainage corrections on mature lots', 'driveway and patio replacement', 'fence and deck footings', 'tree-debris and cleanout hauling'],
    deliveryNote: 'We deliver across Englewood and the south-central metro, dropping the trailer or machine at your site and picking it up after.',
    accessNote: 'Older Englewood lots can be tight with narrow gates and alleys, so measure your opening before booking a machine. Check city right-of-way rules for street staging.',
    nearby: ['denver', 'littleton', 'centennial', 'lakewood'],
    localFaqs: [
      {
        q: 'Can you fit a machine into a tight, older Englewood lot?',
        a: 'Usually, yes. Narrow gates and alleys are common in close-in Englewood, which is why we run 36-inch gate-width machines. Measure the opening and we will match a machine that fits.',
      },
      {
        q: 'Do you deliver throughout Englewood?',
        a: 'Yes — we deliver the trailer or machine to your Englewood site and pick it up, so you skip towing a loaded rig through the city.',
      },
    ],
  },
  {
    slug: 'littleton',
    name: 'Littleton',
    region: 'CO',
    blurb: 'South-metro coverage from historic downtown Littleton to the foothill-adjacent west side.',
    neighborhoods: ['historic downtown Littleton', 'Ketring Park', 'Ken Caryl', 'Columbine', 'the Highline Canal corridor'],
    terrain: 'Littleton blends a historic, established core with neighborhoods that climb toward the foothills on the west side. Eastern lots are flatter; west toward Ken Caryl adds grade and rock.',
    soil: 'Littleton sits on Front Range clay through most of town, getting rockier and harder-digging toward the western foothills. Drainage and footing work reward planning for soil that moves with moisture.',
    jobs: ['landscape renovations and regrades', 'drainage and grading on varied terrain', 'driveway and hardscape work', 'fence and deck footings', 'material and debris hauling'],
    deliveryNote: 'We deliver across Littleton, from the historic core to the foothill-adjacent west side, and pick the gear back up.',
    accessNote: 'Western Littleton lots can be sloped with tighter access; tell us the grade and driveway width so we send a machine that can work it. Check city right-of-way rules for street staging.',
    nearby: ['centennial', 'englewood', 'denver', 'lakewood'],
    localFaqs: [
      {
        q: 'Do you serve both downtown Littleton and the Ken Caryl side?',
        a: 'Yes. We cover the historic core and the foothill-adjacent west side. Western lots can be sloped and rockier, so we help you size a machine with the grade and ground in mind.',
      },
      {
        q: 'What machine suits a Littleton landscape project?',
        a: 'A compact skid steer handles most regrading and material work; a mini excavator covers drainage and footing digs. For a fenced yard, a 36-inch gate-width machine clears a standard gate.',
      },
    ],
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    region: 'CO',
    blurb: 'Far-north coverage across fast-growing subdivisions on Brighton’s former farmland.',
    neighborhoods: ['Brighton Crossing', 'Eagle Shadow', 'Southern Hills', 'downtown Brighton', 'Bromley Park'],
    terrain: 'Brighton sits at the north edge of the metro, where former farmland has become wide, fast-growing subdivisions. Ground is flat and open with easy trailer access and plenty of room to work.',
    soil: 'Brighton ground mixes Front Range clay with sandier, agricultural soil from its farming roots. It still moves with moisture, so drainage and compaction planning help on grading and footings.',
    jobs: ['new-build and post-construction landscaping', 'backyard grading and drainage', 'fence lines on larger and rural lots', 'sod, rock, and material hauling', 'acreage and outbuilding projects'],
    deliveryNote: 'Because Brighton sits at the far north edge of the metro, delivery is the easy button — we bring the gear to you and save the long tow.',
    accessNote: 'Brighton lots and acreage usually have generous access; newer subdivisions can have HOA staging rules, so confirm before delivery. Check city right-of-way rules for street work.',
    nearby: ['commerce-city', 'thornton', 'northglenn'],
    localFaqs: [
      {
        q: 'Do you deliver all the way out to Brighton?',
        a: 'Yes — Brighton is a regular far-north run for us. Delivery saves you a long tow; we drop the trailer or machine and pick it up when you finish.',
      },
      {
        q: 'Can you handle larger Brighton lots and acreage?',
        a: 'Absolutely. Open lots and acreage have room for standard-frame machines that grade and move material fast. Tell us the job and we will size it.',
      },
    ],
  },
];

export const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));

// Homepage service-area list. Every city now has a full hub + matrix
// page, so all entries are clickable (derived straight from `cities`).
export const serviceAreaCities: { name: string; slug: string }[] = cities.map((c) => ({
  name: c.name,
  slug: c.slug,
}));
