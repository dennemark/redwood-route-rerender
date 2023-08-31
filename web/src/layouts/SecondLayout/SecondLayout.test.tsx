import { render } from '@redwoodjs/testing/web'

import SecondLayout from './SecondLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SecondLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondLayout />)
    }).not.toThrow()
  })
})
