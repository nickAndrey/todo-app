import { Header } from '@/components/Layout';

import { Archive, Home, Reminders, Trash } from '@/pages';
import { FC } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import { Path } from './types/path';

const RootLayout = () => (
  <div className="flex flex-col min-h-[100vh]">
    <Header />

    <main className="px-4 pb-2">
      <Outlet />
    </main>
  </div>
);

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path={Path.HOME} element={<Home />} />
          <Route path={Path.REMINDERS} element={<Reminders />} />
          <Route path={Path.ARCHIVE} element={<Archive />} />
          <Route path={Path.TRASH} element={<Trash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
