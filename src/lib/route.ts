import { Routes } from '@constants/router';
import type { BlogPost, PostRef } from 'types/blog';

export type RouteParams<T extends Routes> = T extends Routes.Post ? BlogPost | PostRef | undefined : undefined;

/**
 * 编码 slug，保留 / 但转义其他 URL 不安全字符，同 Hexo 行为
 * @param slug 原始 slug
 * @returns 编码后的 slug
 */
export const encodeSlug = (slug: string) => slug?.split('/').map(encodeURIComponent).join('/') ?? '';

export function routeBuilder<T extends Routes>(route: T, param: RouteParams<typeof route>) {
  let href: string = route;
  if (!param) return href;
  switch (route) {
    case Routes.Post: {
      // 兼容 BlogPost 和 PostRef
      const link = 'data' in param ? param.data?.link : param.link;
      const slug = param.slug;
      href += `/${encodeSlug(link ?? slug)}`;
      break;
    }
    default:
      break;
  }
  return href;
}

export const showDirRoutes = [Routes.Post];

/**
 * Path used to highlight the active navigation item.
 * Trailing slashes are ignored, and project pages belong to "/projects".
 * @param strippedPath pathname without base or locale prefix
 */
export function getActiveNavPath(strippedPath: string): string {
  const path = strippedPath.length > 1 ? strippedPath.replace(/\/+$/, '') : strippedPath;
  if (path.startsWith('/post/') || path.startsWith('/categories/projects')) return '/projects';
  return path;
}
