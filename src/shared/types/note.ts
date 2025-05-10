type TNoteStatus = 'active' | 'archived' | 'deleted';

export type TNote = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  status: TNoteStatus;

  // optional fields
  pinned?: boolean; // for showing at the top
  color?: string; // for colored notes
  labels?: string[]; // for tags/categories
};
