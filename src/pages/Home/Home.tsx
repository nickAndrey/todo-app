import { Card } from '@/components/UI';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <h4>Home</h4>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
        <Card title="test" />
      </div>
    </div>
  );
};

export default Home;
