import { render, screen } from '@testing-library/react';
import Top from './Top';
import buttom from './buttom';

test('renders learn react link', () => {
  render(<Top />);
  render(<buttom />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
