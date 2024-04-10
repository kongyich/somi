import { render, screen } from '@testing-library/react'

import Component from './Component'

test('default props', () => {
  render(<Component />)
  const h = screen.getByText('一行标题')
  expect(h).toBeInTheDocument()
})

test('through props', () => {
  render(<Component text="hello" level={2} isCenter={true} />)

  const h = screen.getByText('hello')
  expect(h).toBeInTheDocument()

  expect(h).matches('h2').toBeTruthy()

  const style = h.style
  expect(style.textAlign).toBe('center')
})
