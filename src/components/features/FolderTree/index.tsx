import { memo, type FC } from 'react';

import commonStyles from '@/components/features/FolderTree/common/index.module.css';
import styles from '@/components/features/FolderTree/index.module.css';
import { FolderTreeItem } from '@/components/features/FolderTree/items';

import type { File, Folder } from '@/components/features/FolderTree/common/type';

type Props = {
  data: (File | Folder)[];
};

const _FolderTree: FC<Props> = ({ data }) => {
  return (
    <div className={styles.folderTree}>
      <ul className={styles.tree}>
        {data.map((data) => (
          <li className={commonStyles.listDataItem} key={data.id + data.type}>
            <FolderTreeItem type={data.type} nestNum={0} data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FolderTree = memo(_FolderTree);
