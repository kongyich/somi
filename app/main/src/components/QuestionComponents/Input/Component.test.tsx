import { render, screen } from '@testing-library/react'
import Component from './Component'

test('default props', () => { 
  render(<Component />)

  const p = screen.getByText('输入框标题')
  expect(p).toBeInTheDocument()

  const input = screen.getByPlaceholderText('请输入')
  expect(input).toBeInTheDocument()
})

test('use props', () => { 
  render(<Component title="hello" placeholder="world" />)

  const t = screen.getByText('hello')
  expect(t).toBeInTheDocument()

  const l = screen.getByPlaceholderText('world')
  expect(l).toBeInTheDocument()
})
