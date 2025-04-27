import { Note } from '@/types/note.types';
import { Button } from '@ui/Button';
import { FC, RefObject, useRef } from 'react';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { tv } from 'tailwind-variants';
import { useOnClickOutside } from 'usehooks-ts';

type DraftNotePanelProps = {
  draftNote: Partial<Note>;
  mode: 'edit' | 'preview';
  onChangeDraftNote?: (name: keyof Note, value: string) => void;
  onChangeMode?: (mode: 'edit' | 'preview') => void;
  onResetDraft?: () => void;
};

const DraftNotePanel: FC<DraftNotePanelProps> = ({
  draftNote,
  mode,
  onChangeDraftNote,
  onChangeMode,
  onResetDraft,
}) => {
  const ref = useRef<HTMLElement | null>(null);

  const panelStyles = tv({
    slots: {
      wrapper: `flex flex-col gap-3 p-4 rounded-lg border border-gray-100 shadow-md/10 max-w-xl w-full hover:shadow-md/30 transition-all duration-200`,
      initialPlaceholder: `text-md font-semibold text-gray-500`,
      form: `flex flex-col gap-2 h-full`,
      input: `rounded-lg border border-gray-100 p-2 focus:border-gray-200 `,
      footer: `flex justify-end`,
    },
    variants: {
      mode: {
        edit: {
          initialPlaceholder: 'hidden',
        },
        preview: {
          form: 'hidden',
          footer: 'hidden',
        },
      },
    },
  });

  const { wrapper, initialPlaceholder, form, input, footer } = panelStyles({ mode });

  useOnClickOutside(ref as RefObject<HTMLElement>, () => onChangeMode?.('preview'));

  return (
    <article ref={ref} className={wrapper()} onClick={() => onChangeMode?.('edit')}>
      <p className={initialPlaceholder()}>Take a note...</p>

      <form className={form()}>
        <input
          type="text"
          name="note-title"
          className={input()}
          placeholder="Title..."
          value={draftNote.title}
          onChange={(e) => onChangeDraftNote?.('title', e.target.value)}
        />
        <textarea
          rows={5}
          name="note-content"
          className={input()}
          placeholder="Take a note..."
          value={draftNote.content}
          onChange={(e) => onChangeDraftNote?.('content', e.target.value)}
        />
      </form>

      <footer className={footer()}>
        <Button variant="round" size="sm" className="bg-white mr-auto">
          <IoColorPaletteOutline />
        </Button>

        <Button
          variant="default"
          size="sm"
          className="bg-white"
          onClick={(e) => {
            e.stopPropagation();
            onChangeMode?.('preview');
            onResetDraft?.();
          }}
        >
          Close
        </Button>
      </footer>
    </article>
  );
};

export default DraftNotePanel;
