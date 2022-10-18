import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('Renders Hello World', () => {
    render(<Heading />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
