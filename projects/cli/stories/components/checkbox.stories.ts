import type { Meta, StoryObj } from '@storybook/angular';

import { ZenCheckboxComponent } from '../../schematics/components/files/checkbox/checkbox.component';

export default {
  title: 'Components/Checkbox',
  component: ZenCheckboxComponent,
  tags: ['autodocs'],
  render: args => ({ props: { ...args } }),
} satisfies Meta<ZenCheckboxComponent>;

type Story = StoryObj<ZenCheckboxComponent>;

export const Default: Story = {
  render: () => ({
    template: `
        <zen-checkbox />
        <zen-checkbox [checked]="true" />
        <zen-checkbox checked="mixed" />
    `,
  }),
};

export const Diabled: Story = {
  render: () => ({
    template: `
        <zen-checkbox disabled="true"/>
        <zen-checkbox [checked]="true" disabled="true"/>
        <zen-checkbox checked="mixed" disabled="true"/>
    `,
  }),
};
