import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ZenAvatarComponent } from '../avatar';
import { ZenBadgeComponent } from '../badge';
import { ZenPinComponent } from './pin.component';

export default {
  title: 'Components/Pin',
  component: ZenPinComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ZenPinComponent, ZenAvatarComponent, ZenBadgeComponent],
    }),
  ],
  render: args => ({ props: { ...args }, template: `<zen-pin />` }),
} satisfies Meta<ZenPinComponent>;

type Story = StoryObj<ZenPinComponent>;

export const Default: Story = {};

export const OnElement: Story = {
  render: () => ({
    template: `
        <div style="display: flex; gap: 1rem; --zen-badge-offset: -4px">
          <zen-badge>
              <zen-pin topRight style="background-color: #2a912a; border: 2px solid white"/>
              <zen-avatar src="https://picsum.photos/32" />
          </zen-badge>

          <zen-badge>
              <zen-pin bottomRight style="background-color: #c42929; border: 2px solid white"/>
              <zen-avatar style="color:white">AB</zen-avatar>
          </zen-badge>
        </div>
     `,
  }),
};
