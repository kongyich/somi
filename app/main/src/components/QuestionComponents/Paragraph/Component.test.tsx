import { render, screen } from '@testing-library/react'
import Component from './Component'


test('default props', () => {
  render(<Component />)

  const s = screen.getByText('一行段落')
  expect(s).toBeInTheDocument()
})

test('through props', () => {
  render(<Component text="hello" isCenter={true} />)

  const p = screen.getByText('hello')
  expect(p).toBeInTheDocument()

  const t = p.parentElement
  expect(t).not.toBeNull()

  const style = p!.style || {}
  expect(style.textAlign).toBe('center')
})

test('多行文字', () => {
  render(<Component text={'a\nb\nc'} />)

  const span = screen.getByText('a')
  expect(span).toBeInTheDocument()

  expect(span).toHaveTextContent('a')
  expect(span).not.toHaveTextContent('ab'
})
