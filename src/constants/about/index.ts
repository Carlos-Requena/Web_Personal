// =============================================================================
// About / CV content
// -----------------------------------------------------------------------------
// Per-locale profile content. The narrative paragraphs are ported verbatim from
// the previous Markdown pages so the hand-written Japanese is preserved.
// =============================================================================

import { en } from './en';
import { es } from './es';
import { ja } from './ja';
import type { AboutContent } from './types';

export type { AboutContent, AboutLabels, NarrativeBlock, SkillGroup, TimelineEntry } from './types';

const aboutContent: Record<string, AboutContent> = { es, en, ja };

/** Profile content for a locale, falling back to Spanish */
export function getAboutContent(locale: string): AboutContent {
  return aboutContent[locale] ?? es;
}

/** Replace `{key}` placeholders in a label */
export function fillLabel(label: string, params: Record<string, string | number>): string {
  return label.replace(/\{(\w+)\}/g, (_, key: string) => String(params[key] ?? `{${key}}`));
}
