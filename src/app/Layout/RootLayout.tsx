import { FC, useState } from 'react';
import { Outlet } from 'react-router';
import { NotesContextProvider } from '../contexts/notes/NotesContext';
import Header from './Header';
import SideBar from './SideBar';

const RootLayout: FC = () => {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

  const toggleSideBar = () => setIsSideBarExpanded((prevValue) => !prevValue);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header onMenuButtonClick={toggleSideBar} />

      <div className="grid grid-cols-[minmax(0,auto)_1fr] flex-auto">
        <SideBar isExpanded={isSideBarExpanded} />

        <main className="px-4 pb-2 w-full">
          <NotesContextProvider>
            <Outlet />
          </NotesContextProvider>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
