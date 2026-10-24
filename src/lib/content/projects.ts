/**
 * Portfolio project helpers
 *
 * Projects are the blog posts of this site. These helpers order them for the
 * portfolio views and split out the featured project (the TFG, `sticky: true`).
 */

import { Routes } from '@constants/router';
import { routeBuilder } from '@lib/route';
import type { BlogPost } from 'types/blog';
import { localizedPath } from '@/i18n';
import { getSortedPosts } from './posts';

/** Sort by `order` (ascending), then by date (newest first) */
function sortProjects(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const orderA = a.data.order ?? Number.POSITIVE_INFINITY;
    const orderB = b.data.order ?? Number.POSITIVE_INFINITY;
    if (orderA !== orderB) return orderA - orderB;
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}

/** Split the featured project (first sticky one) from the rest */
export function splitFeatured(projects: BlogPost[]): { featured?: BlogPost; others: BlogPost[] } {
  const featured = projects.find((p) => p.data.sticky);
  return { featured, others: projects.filter((p) => p !== featured) };
}

/** All projects for a locale, in portfolio order */
export async function getProjects(locale: string): Promise<BlogPost[]> {
  return sortProjects(await getSortedPosts(locale));
}

/** Localized URL of a project page */
export function getProjectHref(post: BlogPost, locale: string): string {
  return localizedPath(routeBuilder(Routes.Post, post), locale);
}
