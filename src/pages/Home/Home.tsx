import { Card, Modal } from '@/components/UI';
import { FC, useState } from 'react';
import { splitByColumns } from './utils/splitByColumns';

const Home: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    7
  );

  return (
    <div>
      <h4>Home</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-start">
        {columns.map((column, columnIndex) => (
          <div className="grid gap-4 items-start" key={columnIndex}>
            {column.map((item, itemIndex) => (
              <Card
                title={item.key as string}
                content={item.content as string}
                key={itemIndex}
                onEditNote={() => setIsDialogOpen(true)}
              />
            ))}
          </div>
        ))}
      </div>

      {isDialogOpen && <Modal onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
};

export default Home;
