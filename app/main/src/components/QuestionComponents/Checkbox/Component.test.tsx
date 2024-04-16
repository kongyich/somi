import Component from "./Component";
import { render, screen } from '@testing-library/react'

test('default props', () => { 
  render(<Component />)

  const p = screen.getByText('多选标题')
  expect(p).toBeInTheDocument()
  
  for(let i = 0; i < 3; i++) {
    const checkbox = screen.getByDisplayValue(`item${i}`)
    expect(checkbox).toBeInTheDocument()

    const label = screen.getByText(`选项${i}`)
    expect(label).toBeInTheDocument()

    expect(checkbox.getAttribute('checked')).toBeNull()
  }
})

test('use props', () => { 
  const mockList = [
    { value: 'v1', text: 't1', checked: false },
    { value: 'v2', text: 't2', checked: true },
    { value: 'v3', text: 't3', checked: false },
  ]

  render(<Component title="hello" list={mockList} />)

  const p = screen.getByText('hello')
  expect(p).toBeInTheDocument()

  const c1 = screen.getByDisplayValue('v1')
  expect(c1).toBeInTheDocument()
  expect(c1.getAttribute('checked')).toBeNull()

  const c2 = screen.getByDisplayValue('v2')
  expect(c2).toBeInTheDocument()
  expect(c2.getAttribute('checked')).not.toBeNull()

  const c3 = screen.getByDisplayValue('v3')
  expect(c3).toBeInTheDocument()
  expect(c3.getAttribute('checked')).toBeNull()
})
