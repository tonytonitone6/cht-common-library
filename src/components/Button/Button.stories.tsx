import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

// export default { 
//     title: 'Button',
//     component: Button,
// }

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: "#f00" },
        { name: 'black', value: "#000" },
        { name: 'blue', value: "#00f" },
      ]
    }
  }
}

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: 'primary1',
  args: {
    label: 'test123'
  },

}

export const Secondary: Story = {
  name: 'secondary2',
  args: {
    label: 'Test456'
  }
}

export default meta;
