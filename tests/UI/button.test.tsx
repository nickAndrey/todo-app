import { Button } from '@/components/UI/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('Should render component', () => {
    render(<Button variant="default">test</Button>);

    const button = screen.getByText('test');
    expect(button).toBeInTheDocument();
  });
});
