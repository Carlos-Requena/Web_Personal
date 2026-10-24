/**
 * Unified layout spacing constants
 *
 * This file defines standardized spacing values for consistent horizontal
 * and vertical spacing across all pages and components.
 */

/**
 * Content area padding for main content blocks
 */
export const CONTENT_PADDING = {
  // Standard content with top spacing
  standard: 'px-10 py-8 tablet:px-6 tablet:pt-6 tablet:pb-2',
  // Content without extra top spacing
  normal: 'px-6 py-4 tablet:px-6',
  // Compact content (for nested items)
  compact: 'px-4 py-2 tablet:px-2 tablet:py-1',
} as const;

/**
 * Container for portfolio pages without a cover banner (home, projects, about).
 * The top padding leaves room for the fixed header.
 */
export const PAGE_CONTAINER =
  'mx-auto flex w-full max-w-6xl flex-col gap-16 px-8 pt-28 pb-4 tablet:px-6 md:gap-12 md:px-4 md:pt-20';

/**
 * Max width constraints
 */
export const MAX_WIDTH = {
  // Main content container (1400px)
  content: 'max-w-7xl',
} as const;

/**
 * Pagination settings
 */
export const PAGINATION = {
  // Posts per page for homepage and post listing
  pageSize: 10,
} as const;
