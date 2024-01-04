import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Autocomplete from './Dialog';

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
}

type Story = StoryObj<typeof Autocomplete>;

export const main: Story = {
  name: 'Autocomplete',
}

export default meta;