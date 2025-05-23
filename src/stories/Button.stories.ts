import type { Meta, StoryObj } from '@storybook/react'

import Button from 'components/form/Button'
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    style: { width: '120px', height: '40px', borderRadius: '30px' },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
    color: 'default',
    disabled: false,
  },
}

export const Black: Story = {
  args: {
    children: 'Black Button',
    color: 'black',
    disabled: false,
  },
}

export const Red: Story = {
  args: {
    children: 'Red Button',
    color: 'red',
    disabled: false,
  },
}

export const Blue: Story = {
  args: {
    children: 'Blue Button',
    color: 'blue',
    disabled: false,
  },
}
