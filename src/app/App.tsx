import { FC } from 'react';
import { RouterProvider } from 'react-router';
import { routes } from './routes/routes';

const App: FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
