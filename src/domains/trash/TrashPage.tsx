import { useNotesContext } from '@/app/contexts/notes/useNotes';
import { Card } from '@/shared/components/Card';
import { splitByColumns } from '@/shared/utils/splitByColumns';
import { FC } from 'react';

const Trash: FC = () => {
  const { restoreNote, notes } = useNotesContext();

  const columns = splitByColumns(
    notes.filter((item) => item.status === 'deleted'),
    5
  );

  return (
    <div className="flex flex-col gap-8 pt-8 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start max-w-7xl w-full">
        {columns.map((column, columnIndex) => (
          <div className="grid gap-4 items-start" key={columnIndex}>
            {column.map((item) => (
              <Card
                title={item.title}
                content={item.content}
                key={item.id}
                onRestoreNote={() => restoreNote(item.id)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trash;
