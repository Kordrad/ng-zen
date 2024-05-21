import { Meta, StoryObj } from '@storybook/angular';

import { OnElement } from '../pin/pin.stories';
import { ZenAvatarComponent } from './avatar.component';

export default {
  title: 'Components/Avatar',
  component: ZenAvatarComponent,
  tags: ['autodocs'],
  render: args => ({ props: { ...args } }),
} satisfies Meta<ZenAvatarComponent>;

type Story = StoryObj<ZenAvatarComponent>;

export const Image: Story = {
  args: {
    src: 'https://picsum.photos/32',
  },
};
export const Text: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; color:white">
        <zen-avatar>MI</zen-avatar>
        <zen-avatar>IB</zen-avatar>
        <zen-avatar>WP</zen-avatar>
        <zen-avatar>AI</zen-avatar>
      </div> `,
  }),
};
export const WithBadge = OnElement;
