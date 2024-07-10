import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ZenButtonComponent } from 'ng-zen/components/button';
import { ZenCheckboxComponent } from 'ng-zen/components/checkbox';
import { ZenSwitchComponent } from 'ng-zen/components/switch';
import { ZenDisabledDirective } from 'ng-zen/directives/disabled';

import { Disabled as ButtonDisabled } from '../components/button.stories';
import { Disabled as CheckboxDisabled } from '../components/checkbox.stories';
import { Disabled as SwitchDisabled } from '../components/switch.stories';

export default {
  title: 'Directives/Disabled',
  tags: ['autodocs'],
  component: ZenDisabledDirective,
  decorators: [
    moduleMetadata({
      imports: [ZenSwitchComponent, ZenButtonComponent, ZenCheckboxComponent],
    }),
  ],
} satisfies Meta<ZenDisabledDirective>;

type Story = StoryObj<ZenDisabledDirective>;

export const Default: Story = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    disabled: true,
  },

  render: args => ({
    moduleMetadata: { imports: [ZenDisabledDirective] },
    props: { ...args },
    template: `
    <button [zenDisabled]="${args.disabled}">...</button>

    <button ${args.disabled ? 'zenDisabled' : ''}>...</button>`,
  }),
};

export { ButtonDisabled, CheckboxDisabled, SwitchDisabled };
