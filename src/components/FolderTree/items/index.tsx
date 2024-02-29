import { memo, type FC } from 'react';

import { FileItem } from '@/components/FolderTree/items/File';
import { FolderItem } from '@/components/FolderTree/items/Folder';

import type { Folder, File } from '@/components/FolderTree/common/type';

type Props = {
  type: 'folder' | 'file';
  nestNum: number;
  data: Folder | File;
};

const _FolderTreeItem: FC<Props> = ({ type, nestNum, data }) => {
  switch (type) {
    case 'folder':
      return (
        <FolderItem
          id={(data as Folder).id}
          name={(data as Folder).name}
          data={(data as Folder).data}
          nestNum={nestNum}
        />
      );

    case 'file':
      return <FileItem id={(data as File).id} name={(data as File).name} nestNum={nestNum} />;
  }
};

export const FolderTreeItem = memo(_FolderTreeItem);
