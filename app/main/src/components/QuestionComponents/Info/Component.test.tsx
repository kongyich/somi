import { render, screen } from '@testing-library/react'

import Component from './Component'

test('default props', () => {
  render(<Component />)
  const h = screen.getByText('问卷标题')
  expect(h).toBeInTheDocument()
})

test('through props', () => {
  render(<Component title="hello" desc="world" />)

  const h = screen.getByText('hello')
  expect(h).toBeInTheDocument()

  const p = screen.getByText('world')
  expect(p).toBeInTheDocument()
})

test('more word', () => {
  render(<Component desc="a\nb\nc" />)

  const s = screen.getByText('a')
  expect(s).toBeInTheDocument()

  expect(s).toHaveTextContent('a')
  expect(s).not.toHaveTextContent('ab')
})
