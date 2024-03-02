import type { ICON_NAMES } from '@/components/ui/Icon/const';

export type IconName = (typeof ICON_NAMES)[number];
export type IconColorType = 'main' | 'sub' | 'dark' | 'light' | 'red';
