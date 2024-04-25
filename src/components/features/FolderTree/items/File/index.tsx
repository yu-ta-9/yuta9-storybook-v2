import { memo, type FC } from 'react';

import styles from '@/components/features/FolderTree/items/File/index.module.css';
import { Icon } from '@/components/ui/Icon';

export type PersonItemProps = {
  id: number;
  name: string;
  nestNum: number;
};

const _FileItem: FC<PersonItemProps> = ({ id, name, nestNum }) => {
  return (
    // TODO: 調整
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div id={String(id)} className={styles.fileItem} style={{ paddingLeft: `${8 + 32 * nestNum}px` }} tabIndex={0}>
      <Icon name='file' size={20} />

      <div className={styles['heading']}>{name}</div>
    </div>
  );
};

export const FileItem = memo(_FileItem);
