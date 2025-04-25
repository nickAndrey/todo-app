import { Card, Modal } from '@/components/UI';
import { FC, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { splitByColumns } from './utils/splitByColumns';

const Home: FC = () => {
  const [editNoteDialog, setEditNoteDialog] = useState({
    isOpened: false,
    note: '',
  });

  const columns = splitByColumns(
    [
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
      { key: '', content: '' },
    ],
    5
  );

  return (
    <div>
      <h4>Home</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
        {columns.map((column, columnIndex) => (
          <div className="grid gap-4 items-start" key={columnIndex}>
            {column.map((item, itemIndex) => (
              <Card
                title={item.key as string}
                content={item.content as string}
                key={itemIndex}
                onEditNote={() =>
                  setEditNoteDialog((prev) => ({
                    ...prev,
                    isOpened: true,
                    note: `#### test`,
                  }))
                }
              />
            ))}
          </div>
        ))}
      </div>

      {editNoteDialog.isOpened && (
        <Modal onClose={() => setEditNoteDialog((prev) => ({ ...prev, isOpened: false }))}>
          <Markdown remarkPlugins={[remarkGfm]}>{editNoteDialog.note as string}</Markdown>
        </Modal>
      )}
    </div>
  );
};

export default Home;
