import type { Meta, StoryObj } from '@storybook/angular';
import { ZenButtonComponent } from 'ng-zen/components/button';

export default {
  title: 'Components/Button',
  component: ZenButtonComponent,
  tags: ['autodocs'],
  render: args => ({ props: { ...args } }),
} satisfies Meta<ZenButtonComponent>;

type Story = StoryObj<ZenButtonComponent>;

export const Default: Story = {
  render: () => ({
    template: `
        <button zen-button>Test</button>
    `,
  }),
};

// export const Disabled: Story = {
//   render: () => ({
//     template: `
//         <button zen-button disabled>Test</button>
//     `,
//   }),
// };
