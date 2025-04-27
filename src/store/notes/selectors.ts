import { createSelectors } from '../utils/createSelectors';
import { useNotesStoreBase } from './store';

export const useNotesStore = createSelectors(useNotesStoreBase);
