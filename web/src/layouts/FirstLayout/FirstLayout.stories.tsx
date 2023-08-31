import type { Meta, StoryObj } from '@storybook/react'

import FirstLayout from './FirstLayout'

const meta: Meta<typeof FirstLayout> = {
  component: FirstLayout,
}

export default meta

type Story = StoryObj<typeof FirstLayout>

export const Primary: Story = {}
