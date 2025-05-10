import { Button } from '@/shared/components/Button';
import { FC } from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';
import { GoArchive } from 'react-icons/go';
import { IoColorPaletteOutline } from 'react-icons/io5';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type CardProps = {
  title?: string;
  content?: string;
  onColorChange?: () => void;
  onArchiveNote?: () => void;
  onDeleteNote?: () => void;
  onEditNote?: () => void;
};

const Card: FC<CardProps> = ({
  title,
  content,
  onColorChange,
  onArchiveNote,
  onDeleteNote,
  onEditNote,
}) => {
  return (
    <article className="flex flex-col border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all duration-200">
      {title && <h4 className="text-xl font-medium truncate text-ellipsis">{title}</h4>}

      <section className="py-4 flex-1" onClick={onEditNote}>
        <div className="h-full line-clamp-20">
          {content ? (
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          ) : (
            <h4 className="text-xl text-gray-400">Empty note</h4>
          )}
        </div>
      </section>

      <footer className="flex gap-2 justify-end">
        <Button variant="round" size="sm" className="bg-white mr-auto" onClick={onColorChange}>
          <IoColorPaletteOutline />
        </Button>

        <Button variant="round" size="sm" className="bg-white" onClick={onArchiveNote}>
          <GoArchive />
        </Button>

        <Button variant="round" size="sm" className="bg-white" onClick={onDeleteNote}>
          <FaRegTrashAlt />
        </Button>
      </footer>
    </article>
  );
};

export default Card;
