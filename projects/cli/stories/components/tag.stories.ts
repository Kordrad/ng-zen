import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { ZenAvatarComponent } from '../../schematics/components/files/avatar';
import { ZenBadgeComponent } from '../../schematics/components/files/badge';
import { ZenTagComponent } from '../../schematics/components/files/tag';

export default {
  title: 'Components/Tag',
  component: ZenTagComponent,
  tags: ['autodocs'],
  render: args => ({ props: { ...args } }),
} satisfies Meta<ZenTagComponent>;

type Story = StoryObj<ZenTagComponent>;

export const Default: Story = {
  render: () => ({ template: `<zen-tag>Zen Tag</zen-tag>` }),
};

export const AvatarWithTag: Story = {
  decorators: [
    moduleMetadata({
      imports: [ZenTagComponent, ZenAvatarComponent, ZenBadgeComponent],
    }),
  ],
  render: () => ({
    template: `
      <zen-badge style="--zen-badge-offset: -4px">
        <zen-tag bottom>KS</zen-tag>
        <zen-avatar src="https://github.com/Kordrad.png" style="height: 64px; width: 64px"/>
      </zen-badge>`,
  }),
};
