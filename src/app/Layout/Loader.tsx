import { FC } from 'react';
import { CgSpinner } from 'react-icons/cg';

const Loader: FC = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <CgSpinner className="animate-spin text-amber-500 text-[60px]" />
    </div>
  );
};

export default Loader;
