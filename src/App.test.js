import { render, screen } from '@testing-library/react';
import App from './App';
//import renderer from 'react-test-renderer'


//test('renders a snapshot', () => {
  //const tree = renderer.create(<App/>).toJSON()
  //expect(tree).toMatchSnapshot()
//})

test('renders text Gustavo0623', () => {
  render(<App />)
  const me = screen.getByText(/Gustavo0623/i)
  expect(me).toBeInTheDocument()
})
