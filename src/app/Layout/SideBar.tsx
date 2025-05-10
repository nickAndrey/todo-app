import { Path } from '@/shared/types/path';
import { FC } from 'react';
import { FaRegBell, FaRegStickyNote, FaRegTrashAlt } from 'react-icons/fa';
import { GoArchive } from 'react-icons/go';
import { NavLink } from 'react-router';
import { tv } from 'tailwind-variants';

const routes = [
  {
    id: 0,
    href: Path.HOME,
    icon: <FaRegStickyNote />,
    label: 'Notes',
  },
  {
    id: 1,
    href: Path.REMINDERS,
    icon: <FaRegBell />,
    label: 'Reminders',
  },
  {
    id: 2,
    href: Path.ARCHIVE,
    icon: <GoArchive />,
    label: 'Archive',
  },
  {
    id: 3,
    href: Path.TRASH,
    icon: <FaRegTrashAlt />,
    label: 'Trash',
  },
];

type SideBarProps = {
  isExpanded?: boolean;
};

const SideBar: FC<SideBarProps> = ({ isExpanded }) => {
  const linkVariants = tv({
    base: 'py-4 px-4 mx-3 rounded-full text-lg flex items-center gap-2 transition-colors duration-200',
    variants: {
      variant: {
        active: 'bg-amber-100 hover:bg-amber-100',
        default: 'hover:bg-gray-100',
      },
    },
  });

  const linkStyles = ({ isActive }: { isActive: boolean }) => {
    return linkVariants({ variant: isActive ? 'active' : 'default' });
  };

  return (
    <div className="border-r-2 border-gray-100 py-2">
      <ul className="flex flex-col">
        {routes.map((route) => (
          <li key={route.id}>
            <NavLink to={route.href} className={linkStyles}>
              {route.icon}
              {isExpanded && <span className="text-sm">{route.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
