import RootLayout from '@/app/Layout/RootLayout';

import { Path } from '@/shared/types/path';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const HomePage = lazy(() => import('@/domains/home/HomePage'));
const ArchivePage = lazy(() => import('@/domains/archive/ArchivePage'));
const RemindersPage = lazy(() => import('@/domains/reminders/RemindersPage'));
const TrashPage = lazy(() => import('@/domains/trash/TrashPage'));

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: Path.HOME,
        Component: HomePage,
      },
      {
        path: Path.REMINDERS,
        Component: RemindersPage,
      },
      {
        path: Path.ARCHIVE,
        Component: ArchivePage,
      },
      {
        path: Path.TRASH,
        Component: TrashPage,
      },
    ],
  },
]);
