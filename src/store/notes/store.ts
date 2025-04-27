import { Note } from '@/types/note.types';
import { create } from 'zustand';

type NotesState = {
  notes: Partial<Note>[];
  addNote: (note: Partial<Note>) => void;
  updateNote: (note: Partial<Note>) => void;
  deleteNote: (id?: string) => void;
};

export const useNotesStoreBase = create<NotesState>()((set) => ({
  notes: [],
  addNote: (note) => {
    const newNote = {
      ...note,
      id: Date.now().toString(),
    };

    return set((state) => ({ notes: [...state.notes, newNote] }));
  },
  updateNote: (note) => {
    return set((state) => ({
      notes: state.notes.map((item) => (item.id === note.id ? { ...item, ...note } : item)),
    }));
  },
  deleteNote: (id) => {
    return set((state) => ({
      notes: state.notes.map((item) => (item.id === id ? { ...item, status: 'deleted' } : item)),
    }));
  },
}));
