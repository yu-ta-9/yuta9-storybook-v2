import { ChevronDown, ChevronUp, Folder, File, Asterisk } from '@/components/ui/Icon/generated';
import styles from '@/components/ui/Icon/index.module.css';

import type { IconName, IconTheme } from '@/components/ui/Icon/type';
import type { FC, SVGProps } from 'react';

type Props = {
  name: IconName;
  size: number;
  theme?: IconTheme;
};

const COLOR_CLASSES: { [key in IconTheme]: string } = {
  primary: styles.svgPrimary,
  onPrimary: styles.svgOnPrimary,
  error: styles.svgError,
  onError: styles.svgOnError,
  surface: styles.svgSurface,
  onSurface: styles.svgOnSurface,
} as const;

export const Icon: FC<Props> = ({ name, size, theme = 'primary' }) => {
  const iconProps: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    className: COLOR_CLASSES[theme],
    'aria-hidden': true,
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
