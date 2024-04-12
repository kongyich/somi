import Component from "./Component";
import { render, screen } from '@testing-library/react'


test('default props', () => {
  render(<Component />)

  const p = screen.getByText('输入框标题')
  expect(p).toBeInTheDocument()

  const textarea = screen.getByPlaceholderText('请输入...')
  expect(textarea).toBeInTheDocument()
})

test('through props', () => {
  render(<Component title="hello" placeholder="world"/>)

  const p = screen.getByText("hello")
  expect(p).toBeInTheDocument()

  const textarea = screen.getByPlaceholderText('world')
  expect(textarea).toBeInTheDocument()
})
