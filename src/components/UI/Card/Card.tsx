import { FC } from 'react';
import { Button } from '..';

type CardProps = {
  title: string;
};

const Card: FC<CardProps> = ({ title }) => {
  return (
    <article className="flex flex-col border border-gray-100 rounded-lg p-2">
      <h4 className="text-xl font-medium">{title}</h4>

      <section>content</section>

      <footer className="flex gap-2">
        <Button variant="default" size="xs">
          background
        </Button>
        <Button variant="default" size="xs">
          archive
        </Button>
        <Button variant="default" size="xs">
          more
        </Button>
      </footer>
    </article>
  );
};

export default Card;
