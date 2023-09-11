import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ensemble Pairing Timer/i);
  expect(linkElement).toBeInTheDocument();
});

test('Input field text should be present', () => {
  render(<App />);
  const inputElement = screen.getByText(/Enter the participants as a comma separated list/i)
  expect(inputElement).toBeInTheDocument();
})

test('Should show typist and navigator when entered', () => {
  render(<App />);

  const inputElement = screen.getByLabelText("Participants");
  fireEvent.change(inputElement, { target: { value: 'bob, sue' } });
  fireEvent.submit(inputElement);
  const bobElement = screen.getByText(/bob/i)
  const sueElement = screen.getByText(/sue/i)

  expect(bobElement).toBeInTheDocument();
  expect(sueElement).toBeInTheDocument();
});
