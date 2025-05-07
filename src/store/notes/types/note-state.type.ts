import { Note } from '@/types/note.types';

export type NotesState = {
  notes: Partial<Note>[];
  addNote: (note: Partial<Note>) => void;
  updateNote: (note: Partial<Note>) => void;
  deleteNote: (id?: string) => void;
};
