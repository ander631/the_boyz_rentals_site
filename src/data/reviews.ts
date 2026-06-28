/* ============================================================
   Reviews (Section 10).
   - AggregateRating uses the REAL numbers (5.0 / 86) from site.ts.
   - The three "sample" cards below are PLACEHOLDERS from the design
     (Mike R. / Sarah T. / Dave K.). They are displayed for layout
     fidelity but MUST NOT carry Review schema and MUST be replaced
     with the live Elfsight Google Reviews widget or real attributed
     reviews the owner supplies.
   - `attributedReviews` is empty: until real, attributed reviews
     exist, NO Review schema is emitted anywhere. (No fabricated
     Review markup — Section 0 rule 2, Section 8.)
   ============================================================ */

export interface SampleReview {
  name: string;
  initials: string;
  city: string;
  ago: string;
  quote: string;
}

// PLACEHOLDER display cards only. Do NOT mark these up as Review schema.
// TODO(owner): replace this whole block with the Elfsight Google Reviews
// widget embed, or with real attributed reviews + populate attributedReviews.
export const sampleReviews: SampleReview[] = [
  {
    name: 'Mike R.',
    initials: 'MR',
    city: 'Arvada, CO',
    ago: '2 weeks ago',
    quote:
      'Showed up exactly when they said and dropped the dump trailer right where I needed it. Fair price, zero hassle. These guys are the real deal.',
  },
  {
    name: 'Sarah T.',
    initials: 'ST',
    city: 'Wheat Ridge, CO',
    ago: '1 month ago',
    quote:
      'Needed a skid steer last minute for a job. Booked online in two minutes and they delivered same day. Firefighter owned and it shows.',
  },
  {
    name: 'Dave K.',
    initials: 'DK',
    city: 'Lakewood, CO',
    ago: '1 month ago',
    quote:
      "Best rental rates I found on the Front Range, and they beat a competitor's quote without me even asking. Will rent from The Boyz again.",
  },
];

// Real, attributed Google reviews go here once the owner supplies them.
// ONLY these get Review JSON-LD on /reviews/. Empty = no Review schema.
export interface AttributedReview {
  author: string;
  rating: number; // 1–5
  datePublished: string; // YYYY-MM-DD
  body: string;
}
export const attributedReviews: AttributedReview[] = [
  // TODO(owner, Section 13 #5): paste 3–6 real attributed Google reviews.
];
