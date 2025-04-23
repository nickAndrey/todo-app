import { RootLayout } from '@/components/Layout';
import { Archive, Home, Reminders, Trash } from '@/pages';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Path } from './types/path';

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
