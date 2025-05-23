import type { Meta, StoryObj } from '@storybook/react'

import Input from 'components/form/Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
  args: {
    name: 'input',
    id: 'input',
    placeholder: '내용을 입력해주세요',
    isErrorMessageFloat: true,
  },
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    errorMessage: '',
    isError: false,
    isSmall: true,
    type: 'text',
  },
}

export const Error: Story = {
  args: {
    errorMessage: '내용을 바르게 입력해주세요',
    isError: true,
    isSmall: true,
    type: 'text',
  },
}
