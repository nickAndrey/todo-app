import { create } from 'zustand';
import { NotesState } from './types/note-state.type';

export const useNotesStoreBase = create<NotesState>((set) => ({
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
