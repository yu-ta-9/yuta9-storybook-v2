import { clsx } from 'clsx';
import { memo, useState } from 'react';

import commonStyles from '@/components/FolderTree/common/index.module.css';
import { FolderTreeItem } from '@/components/FolderTree/items';
import styles from '@/components/FolderTree/items/Folder/index.module.css';
import { DivButton } from '@/components/tools/DivButton';
import { Icon } from '@/components/ui/Icon';

import type { File, Folder } from '@/components/FolderTree/common/type';
import type { FC } from 'react';

export type FolderItemProps = {
  id: number;
  name: string;
  data: (File | Folder)[];
  nestNum: number;
};

const _FolderItem: FC<FolderItemProps> = ({ id, name, data, nestNum }) => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const toggleIsFolderOpen = (): void => {
    setIsFolderOpen((prev) => !prev);
  };

  return (
    <>
      <DivButton
        tabIndex={0}
        onClick={toggleIsFolderOpen}
        id={String(id)}
        className={styles.folderItem}
        style={{ paddingLeft: `${8 + 32 * nestNum}px` }}
      >
        <div className={styles.info}>
          <Icon name='folder' size={20} />

          <div className={styles['heading']}>{name}</div>
        </div>

        {isFolderOpen ? <Icon name='chevronUp' size={20} /> : <Icon name='chevronDown' size={20} />}
      </DivButton>
      {/* TODO: アクセシビリティ */}
      <ul
        className={clsx(styles.folder, isFolderOpen ? styles.open : styles.close)}
        style={{ display: isFolderOpen ? 'block' : 'none' }}
      >
        {data.map((data) => (
          <li key={data.id + data.type} className={commonStyles.listDataItem}>
            <FolderTreeItem type={data.type} nestNum={nestNum + 1} data={data} />
          </li>
        ))}
      </ul>
    </>
  );
};

export const FolderItem = memo(_FolderItem);
