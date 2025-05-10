import { Button } from '@/shared/components/Button';
import { Path } from '@/shared/types/path';
import { FC, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useLocation } from 'react-router';
import { getActiveRoute } from './utils/getActiveRoute';

type HeaderProps = {
  onMenuButtonClick?: () => void;
};

const Header: FC<HeaderProps> = ({ onMenuButtonClick }) => {
  const location = useLocation();

  const [activeRoute, setActiveRoute] = useState(getActiveRoute(Path.HOME));

  useEffect(() => setActiveRoute(getActiveRoute(location.pathname)), [location.pathname]);

  return (
    <header className="px-4 py-2 border-b-2 border-gray-100 flex justify-between">
      <div className="flex gap-2 items-center">
        <Button variant="round" size="md" onClick={onMenuButtonClick}>
          <FiMenu className="w-4 h-4" />
        </Button>
        <h4 className="capitalize">{activeRoute}</h4>
      </div>
    </header>
  );
};

export default Header;
