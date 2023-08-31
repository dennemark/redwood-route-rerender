import { render } from '@redwoodjs/testing/web'

import FirstLayout from './FirstLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FirstLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FirstLayout />)
    }).not.toThrow()
  })
})
