import RootLayout from '@/app/Layout/RootLayout';
import { Archive } from '@/domains/archive';
import { Home } from '@/domains/home';
import { Reminders } from '@/domains/reminders';
import { Trash } from '@/domains/trash';

import { Path } from '@/shared/types/path';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: Path.HOME,
        Component: Home,
      },
      {
        path: Path.REMINDERS,
        Component: Reminders,
      },
      {
        path: Path.ARCHIVE,
        Component: Archive,
      },
      {
        path: Path.TRASH,
        Component: Trash,
      },
    ],
  },
]);
