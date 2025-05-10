import { useNotesContext } from '@/app/contexts/notes/useNotes';
import { Card } from '@/shared/components/Card';
import { DraftNotePanel } from '@/shared/components/DraftNotePanel';
import { TNote } from '@/shared/types/note';
import { splitByColumns } from '@/shared/utils/splitByColumns';
import { FC, useState } from 'react';

const Home: FC = () => {
  const { addNote, removeNote, notes } = useNotesContext();

  const [draftNote, setDraftNote] = useState<{
    note: Partial<TNote>;
    mode: 'edit' | 'preview';
  }>({
    note: { title: '', content: '', status: 'active' },
    mode: 'preview',
  });

  const onChangeDraftNote = (name: keyof TNote, value: string) => {
    setDraftNote((prev) => ({
      ...prev,
      note: { ...prev.note, [name]: value },
    }));
  };

  const onResetDraftNote = () => {
    setDraftNote((prev) => ({
      ...prev,
      note: { title: '', content: '', status: 'active' },
    }));
  };

  const onChangeDraftMode = (mode: 'edit' | 'preview') => {
    setDraftNote((prev) => ({ ...prev, mode }));

    if (mode === 'preview' && (draftNote.note.title !== '' || draftNote.note.content !== '')) {
      addNote(draftNote.note);
      onResetDraftNote();
    }
  };

  const columns = splitByColumns(
    notes.filter((item) => item.status === 'active'),
    5
  );

  return (
    <div className="flex flex-col gap-8 pt-8 items-center">
      <DraftNotePanel
        draftNote={draftNote.note}
        mode={draftNote.mode}
        onChangeDraftNote={onChangeDraftNote}
        onChangeMode={onChangeDraftMode}
        onResetDraft={onResetDraftNote}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start max-w-7xl w-full">
        {columns.map((column, columnIndex) => (
          <div className="grid gap-4 items-start" key={columnIndex}>
            {column.map((item) => (
              <Card
                title={item.title}
                content={item.content}
                key={item.id}
                onDeleteNote={() => removeNote(item.id)}
                onEditNote={() => {}}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
