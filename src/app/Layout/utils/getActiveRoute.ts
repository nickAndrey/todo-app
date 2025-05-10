import { Path } from '@/shared/types/path';

export const getActiveRoute = (route: string) => {
  return route.length > 1 ? route.slice(1) : Path.HOME.slice(1);
};
