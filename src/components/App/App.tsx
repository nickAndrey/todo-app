import { Button } from '@/components/Button';
import { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <Button
        variant="default"
        size="sm"
        aria-label="button"
        onClick={() => {
          console.log('test');
        }}
      >
        test
      </Button>
    </div>
  );
};

export default App;
