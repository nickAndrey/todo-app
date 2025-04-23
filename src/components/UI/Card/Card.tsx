import { FC } from 'react';
import { Button } from '..';

import { FaRegTrashAlt } from 'react-icons/fa';
import { GoArchive } from 'react-icons/go';
import { IoColorPaletteOutline } from 'react-icons/io5';

type CardProps = {
  title: string;
};

const Card: FC<CardProps> = ({ title }) => {
  return (
    <article className="flex flex-col border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all duration-200">
      <h4 className="text-xl font-medium">{title}</h4>

      <section className="py-4">content</section>

      <footer className="flex gap-2 justify-end">
        <Button variant="round" size="sm" className="bg-white mr-auto">
          <IoColorPaletteOutline />
        </Button>

        <Button variant="round" size="sm" className="bg-white">
          <GoArchive />
        </Button>

        <Button variant="round" size="sm" className="bg-white">
          <FaRegTrashAlt />
        </Button>
      </footer>
    </article>
  );
};

export default Card;
