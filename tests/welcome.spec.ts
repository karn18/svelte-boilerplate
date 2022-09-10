import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { render } from '@testing-library/svelte'

import Welcome from '../src/components/Welcome.svelte'

describe('Welcome', () => {
  it('show svelte boilerpalte in header', () => {
    const component = render(Welcome)
    const text = component.getByText('Svelte boilerplate')
    const heading = component.getByRole('heading')
    expect(text).toBeInTheDocument()
    expect(heading.textContent).to.equal('Svelte boilerplate')
  })
})
