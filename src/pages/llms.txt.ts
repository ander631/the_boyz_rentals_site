import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, abs } from '../data/site';
import { categories, equipment } from '../data/equipment';
import { cities } from '../data/cities';

// /llms.txt — machine-readable site map for LLMs (llmstxt.org style,
// mirroring the macbasementco.com/llms.txt framework). Generated from the
// data layer so it always lists every page. First link = the booking POS.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort((a, b) =>
    b.data.datePublished.localeCompare(a.data.datePublished),
  );
  const L = (label: string, url: string, desc?: string) =>
    `- [${label}](${url})${desc ? `: ${desc}` : ''}`;

  const out: string[] = [];
  out.push(`# ${site.name}`);
  out.push('');
  out.push(
    `> Firefighter-owned trailer & equipment rental and hauling across Denver and the Front Range, Colorado. Skid steers, excavators, dump/flatbed/car-hauler trailers, and load hauling — delivered to your site. Reserve online or call ${site.phone}.`,
  );
  out.push('');

  // Booking first (the money action).
  out.push('## Book / Reserve');
  out.push(
    L('Reserve Online — Live Inventory & Pricing', site.booking,
      'Check real-time availability and book any trailer or machine. The fastest way to rent.'),
  );
  out.push('');

  out.push('## Main Pages');
  out.push(L('Home', abs('/'), 'Firefighter-owned equipment & trailer rental and hauling in Denver, CO. We deliver.'));
  for (const c of categories) out.push(L(c.name, abs(`/${c.slug}/`), c.blurb));
  out.push(L('Hauling & Delivery', abs('/hauling-and-delivery/'), 'If it needs moving, we move it across the Front Range. You call, we haul.'));
  out.push(L('About', abs('/about/'), 'Meet Morgan and the firefighter crew behind The Boyz, and why the fleet runs new.'));
  out.push(L('Reviews', abs('/reviews/'), `Rated ${site.reviews.rating} stars across ${site.reviews.count} Google reviews.`));
  out.push(L('FAQ', abs('/faq/'), 'Answers on delivery, pricing, gate sizing, towing & CDL rules, payload, and discounts.'));
  out.push(L('Contact', abs('/contact/'), `Call ${site.phone}, email ${site.email}, or reserve online.`));
  out.push(L('Blog', abs('/blog/'), 'Straight-talk guides on renting equipment and trailers in Denver.'));
  out.push('');

  out.push('## Equipment & Trailer Rentals');
  for (const e of equipment) out.push(L(`${e.name} Rental`, abs(`/${e.slug}-rental/`), e.blurb));
  out.push('');

  out.push('## Service Areas');
  for (const c of cities) out.push(L(`Equipment & Trailer Rental in ${c.name}`, abs(`/equipment-rental-${c.slug}/`)));
  out.push('');

  out.push('## Equipment & Trailers by City');
  for (const e of equipment)
    for (const c of cities)
      out.push(L(`${e.name} Rental in ${c.name}`, abs(`/${e.slug}-rental-${c.slug}/`)));
  out.push('');

  out.push('## Blog Posts');
  for (const p of posts) out.push(L(p.data.title, abs(`/blog/${p.id}/`), p.data.excerpt));
  out.push('');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
