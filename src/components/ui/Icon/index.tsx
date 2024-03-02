import { ChevronDown, ChevronUp, Folder, File } from '@/components/ui/Icon/generated';
import styles from '@/components/ui/Icon/index.module.css';

import type { IconColorType, IconName } from '@/components/ui/Icon/type';
import type { FC, SVGProps } from 'react';

type Props = {
  name: IconName;
  size: number;
  colorType?: IconColorType;
};

const COLOR_CLASSES: { [key in IconColorType]: string } = {
  main: styles.svgMain,
  sub: styles.svgSub,
  dark: styles.svgDark,
  light: styles.svgLight,
} as const;

export const Icon: FC<Props> = ({ name, size, colorType = 'dark' }) => {
  const iconProps: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    className: COLOR_CLASSES[colorType],
  };

  switch (name) {
    case 'chevronDown':
      return <ChevronDown {...iconProps} />;
    case 'chevronUp':
      return <ChevronUp {...iconProps} />;
    case 'file':
      return <File {...iconProps} />;
    case 'folder':
      return <Folder {...iconProps} />;
    case 'asterisk':
      return <Asterisk {...iconProps} />;
  }
};
