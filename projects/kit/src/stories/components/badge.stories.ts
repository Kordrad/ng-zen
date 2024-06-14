import type { Meta, StoryObj } from '@storybook/angular';
import { ZenBadgeComponent } from 'ng-zen/components/badge';

import { OnElement } from './pin.stories';

export default {
  title: 'Components/Badge',
  component: ZenBadgeComponent,
  tags: ['autodocs'],
  render: args => ({ props: { ...args } }),
} satisfies Meta<ZenBadgeComponent>;

type Story = StoryObj<ZenBadgeComponent>;
export const Component: Story = {
  render: () => ({
    template: `
    <zen-badge>
      <small topLeft>TOP-LEFT</small>
      <small top>TOP</small>
      <small topRight>TOP-RIGHT</small>
      <small left>LEFT</small>
      <small right>RIGHT</small>
      <small bottomLeft>BOTTOM-LEFT</small>
      <small bottom>BOTTOM</small>
      <small bottomRight>BOTTOM-RIGHT</small>
      <img src="https://picsum.photos/200/200"  alt="picsum"/>
    </zen-badge>
  `,
  }),
};

export const Attribute: Story = {
  render: () => ({
    template: `
    <div zenBadge style="background: lightgray;
        height: 254px;
        width: 254px;
        border-radius: 16px;">
      <small topLeft>TOP-LEFT</small>
      <small top>TOP</small>
      <small topRight>TOP-RIGHT</small>
      <small left>LEFT</small>
      <small right>RIGHT</small>
      <small bottomLeft>BOTTOM-LEFT</small>
      <small bottom>BOTTOM</small>
      <small bottomRight>BOTTOM-RIGHT</small>
    </div>
  `,
  }),
};

export const Avatar = OnElement;
