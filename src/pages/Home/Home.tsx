import { useNotesStoreBase } from '@/store/notes';
import { Note } from '@/types/note.types';
import { Card } from '@ui/Card';
import { DraftNotePanel } from '@ui/DraftNotePanel';
import { FC, useState } from 'react';
import { splitByColumns } from './utils/splitByColumns';

const Home: FC = () => {
  const notes = useNotesStoreBase((state) => state.notes);
  const addNote = useNotesStoreBase((state) => state.addNote);
  const deleteNote = useNotesStoreBase((state) => state.deleteNote);

  const [draftNote, setDraftNote] = useState<{
    note: Partial<Note>;
    mode: 'edit' | 'preview';
  }>({
    note: { title: '', content: '', status: 'active' },
    mode: 'preview',
  });

  const onChangeDraftNote = (name: keyof Note, value: string) => {
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
                onDeleteNote={() => deleteNote(item.id)}
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
