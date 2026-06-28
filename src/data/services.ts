/* Category-hub FAQs + the Hauling & Delivery hub content.
   True/general answers only; cost questions answered honestly with a
   pointer to live pricing (Section 6). */
import type { Faq } from './equipment';

export const categoryFaqs: Record<string, Faq[]> = {
  'trailer-rental': [
    {
      q: 'What kind of trailer do I need?',
      a: 'For hauling and dumping loose material like dirt, gravel, or debris, a {{LINK:/dump-trailer-rental/|dump trailer}} is the move. For moving a machine, lumber, or pallets, you want a {{LINK:/flatbed-trailer-rental/|flatbed or equipment trailer}}. For a vehicle, rent a {{LINK:/car-hauler-rental/|car hauler}}. Tell us the load and we will match it.',
    },
    {
      q: 'Do I need a CDL to tow your trailers?',
      a: 'For typical non-commercial use behind a properly rated pickup, generally no. Heavier or commercial combinations can cross into CDL territory in Colorado. We confirm the exact hitch, ball, and brake-controller requirements at pickup so you leave legal and safe.',
    },
    {
      q: 'Can you deliver the trailer to me?',
      a: 'Yes. If you are not set up to tow a loaded trailer, we deliver it across Denver and the Front Range and pick it up. {{LINK:/hauling-and-delivery/|See hauling and delivery}}.',
    },
    {
      q: 'How much does it cost to rent a trailer?',
      a: 'It depends on the trailer type, how long you keep it, and whether you need delivery. We keep pricing simple and honest — {{LINK:BOOKING|check live pricing and availability}} or call (303) 900-8228.',
    },
  ],
  'equipment-rental': [
    {
      q: 'Which machine is right for my job?',
      a: 'For grading, material moving, and demo, a {{LINK:/skid-steer-rental/|skid steer}} is the all-rounder. For trenching, footings, and drainage, a {{LINK:/mini-excavator-rental/|mini excavator}} digs cleanly. For deep or heavy excavation, step up to a {{LINK:/excavator-rental/|full-size excavator}}. Not sure? Call and we will size it with you.',
    },
    {
      q: 'Will the equipment fit through my gate?',
      a: 'A compact, small-frame skid steer or a sub-compact mini excavator is about 36 inches wide and usually clears a standard backyard gate. Larger machines will not. Measure your gate opening before you book and we will match a machine that fits.',
    },
    {
      q: 'Do you deliver the equipment to my site?',
      a: 'Yes — we trailer the machine to your job site and pick it up when you are done, so you do not need a truck big enough to haul it. {{LINK:/hauling-and-delivery/|See hauling and delivery}}.',
    },
    {
      q: 'Do I need a license to operate the equipment?',
      a: 'No special license is required to rent and operate on your own property. We walk you through safe operation at drop-off. Commercial job sites may require OSHA-aligned training through your employer.',
    },
    {
      q: 'How much does equipment rental cost?',
      a: 'Rates depend on the machine, attachments, rental length, and delivery distance. No games on price — {{LINK:BOOKING|see live pricing}} or call (303) 900-8228 for a straight answer.',
    },
  ],
};

export const hauling = {
  serviceType: 'Equipment Hauling & Delivery',
  h1: 'Equipment Hauling & Delivery in Denver, CO',
  metaDesc:
    'Equipment hauling and delivery across Denver & the Front Range. Firefighter-owned, honest pricing — if it needs moving, we move it. Call (303) 900-8228.',
  directAnswer:
    'The Boyz Rentals & Towing hauls and delivers loads across Denver and the Front Range — equipment, materials, trailers, and more. If you are not set up to tow it, or you just need something moved from A to B, we bring the truck and the trailer. You call, we haul.',
  whatWeHaul: [
    'Skid steers, mini excavators, and other equipment to and from your site',
    'Rental trailers and machines we deliver and pick up',
    'Materials — dirt, gravel, rock, mulch, lumber, pallets',
    'Vehicles and project cars on a car hauler',
    'Debris and cleanout loads to the dump',
  ],
  how: [
    {
      h: 'Tell us what needs moving',
      p: 'Call or message with the load, the pickup point, and the drop-off. The more detail, the tighter the quote.',
    },
    {
      h: 'We bring the right setup',
      p: 'We match the truck and trailer to your load — dump, flatbed, equipment trailer, or car hauler — and handle the tie-down and the haul.',
    },
    {
      h: 'Delivered, picked up, done',
      p: 'We drop it where you need it and, for rentals, come back to grab it when you finish. No towing headaches on your end.',
    },
  ],
  faqs: [
    {
      q: 'What areas do you haul and deliver to?',
      a: 'We cover Denver and roughly a 40-mile radius across the Front Range — Wheat Ridge, Arvada, Lakewood, Westminster, Thornton, Aurora, Centennial, and the towns around them. If you are near the metro, call and ask.',
    },
    {
      q: 'Can you deliver a rental and pick it up when I am done?',
      a: 'Yes — that is the standard. We deliver the trailer or machine to your site and come back to retrieve it, so you never need a truck big enough to tow it yourself.',
    },
    {
      q: 'Can you haul something I am not renting from you?',
      a: 'Often yes. If it is a load we can legally and safely move — equipment, materials, a vehicle, or debris — tell us the details and we will quote the haul.',
    },
    {
      q: 'How much does hauling and delivery cost?',
      a: 'Hauling and delivery pricing depends on the load, the distance, and the setup needed. We price it straight — call (303) 900-8228 and we will give you an honest number.',
    },
  ],
};
