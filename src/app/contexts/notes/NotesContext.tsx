import { TNote } from '@/shared/types/note';
import { createContext, FC, ReactNode, useState } from 'react';

type TNotesContext = {
  notes: TNote[];
  addNote: (note: Partial<TNote>) => void;
  removeNote: (noteId: string) => void;
  archiveNote: (noteId: string) => void;
  restoreNote: (noteId: string) => void;
};

const NotesContext = createContext<TNotesContext | null>(null);

type NotesProviderProps = {
  children: ReactNode;
};

export const NotesContextProvider: FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<TNote[]>([]);

  const addNote = (note: Partial<TNote>) => {
    const newNote: TNote = {
      id: Date.now().toString(),
      title: note.title || '',
      content: note.content || '',
      createdAt: note.createdAt || '',
      updatedAt: note.updatedAt || '',
      status: note.status || 'active',
    };

    setNotes((prev) => [...prev, newNote]);
  };

  const removeNote = (noteId: string) => {
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? { ...item, status: 'deleted' } : item))
    );
  };

  const archiveNote = (noteId: string) => {
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? { ...item, status: 'archived' } : item))
    );
  };

  const restoreNote = (noteId: string) => {
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? { ...item, status: 'active' } : item))
    );
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
        archiveNote,
        restoreNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
