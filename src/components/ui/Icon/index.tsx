import {
  Asterisk,
  AlertSquare,
  ChevronDown,
  ChevronUp,
  File,
  Folder,
  Square,
  SquareCheck,
  SquareMinus,
  SquareOff,
} from '@/components/ui/Icon/generated';
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
  red: styles.svgRed,
  green: styles.svgGreen,
  blue: styles.svgBlue,
  yellow: styles.svgYellow,
} as const;

export const Icon: FC<Props> = ({ name, size, colorType = 'dark' }) => {
  const iconProps: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    className: COLOR_CLASSES[colorType],
    'aria-hidden': true,
    // HACK: data-testidを動的に設定するためにstringにキャストしている
    ['data-testid' as string]: name,
  };

  switch (name) {
    case 'asterisk':
      return <Asterisk {...iconProps} />;
    case 'alert-square':
      return <AlertSquare {...iconProps} />;
    case 'chevronDown':
      return <ChevronDown {...iconProps} />;
    case 'chevronUp':
      return <ChevronUp {...iconProps} />;
    case 'file':
      return <File {...iconProps} />;
    case 'folder':
      return <Folder {...iconProps} />;
    case 'square':
      return <Square {...iconProps} />;
    case 'square-check':
      return <SquareCheck {...iconProps} />;
    case 'square-minus':
      return <SquareMinus {...iconProps} />;
    case 'square-off':
      return <SquareOff {...iconProps} />;
  }
};
