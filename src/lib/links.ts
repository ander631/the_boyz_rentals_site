/* Resolve {{LINK:...}} tokens in FAQ/answer copy to real <a> markup.
   Display version (anchors). Schema version lives in lib/schema.ts
   (faqAnswerText) and must produce the SAME visible words. */
import { site } from '../data/site';

export function resolveLinks(text: string): string {
  return text
    .replace(
      /\{\{LINK:BOOKING\|([^}]+)\}\}/g,
      `<a href="${site.booking}">$1</a>`,
    )
    .replace(
      /\{\{LINK:([^|]+)\|([^}]+)\}\}/g,
      '<a href="$1">$2</a>',
    );
}
