import type { Meta, StoryObj } from '@storybook/angular';
import { ZenCheckboxComponent } from 'ng-zen/components/checkbox';

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
        <zen-checkbox [value]="true" />
        <zen-checkbox value="mixed" />
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
        <zen-checkbox disabled="true"/>
        <zen-checkbox [value]="true" disabled="true"/>
        <zen-checkbox value="mixed" disabled="true"/>
    `,
  }),
};
