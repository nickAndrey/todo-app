import { TNote } from '@/shared/types/note';
import { createContext, FC, ReactNode, useState } from 'react';

type TNotesContext = {
  notes: TNote[];
  addNote: (note: Partial<TNote>) => void;
  removeNote: (noteId: string) => void;
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
    setNotes((prev) => prev.filter((item) => item.id !== noteId));
  };

  // const updateNote = () => {};

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
