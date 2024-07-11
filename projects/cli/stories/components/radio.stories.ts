import type { Meta, StoryObj } from '@storybook/angular';
import { ZenRadioComponent } from 'ng-zen/components/radio';

export default {
  title: 'Components/Radio',
  component: ZenRadioComponent,
  tags: ['autodocs'],
  render: args => ({ props: { ...args } }),
} satisfies Meta<ZenRadioComponent>;

type Story = StoryObj<ZenRadioComponent>;

export const Default: Story = {
  render: () => ({
    template: `
        <zen-radio name="group-1" />
        <zen-radio name="group-1" [checked]="true" />
        <zen-radio name="group-1" />
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
        <zen-radio disabled name="group-2"/>
        <zen-radio disabled name="group-2"/>
        <zen-radio disabled name="group-2"/>
    `,
  }),
};

export const Labeled: Story = {
  render: () => ({
    template: `
        <div style="display: flex; flex-direction: column">
          <label><zen-radio name="group-3"/> 1</label>
          <label><zen-radio name="group-3"/> 2</label>
          <label><zen-radio name="group-3"/> 3</label>
        </div>
    `,
  }),
};
