import { FormsModule } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ZenSwitchComponent } from 'ng-zen/components/switch';

export default {
  title: 'Components/Switch',
  component: ZenSwitchComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
  render: args => ({ props: { ...args } }),
} satisfies Meta<ZenSwitchComponent>;

type Story = StoryObj<ZenSwitchComponent>;

export const Default: Story = {
  render: () => ({
    template: `
        <zen-switch />
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `<zen-switch [disabled]="true" />`,
  }),
};

export const Checked: Story = {
  render: () => ({
    template: `
      <zen-switch [ngModel]="true" />
      <br/>
      <zen-switch [checked]="true" />
    `,
  }),
};
