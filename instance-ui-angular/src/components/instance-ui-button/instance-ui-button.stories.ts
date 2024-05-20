import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { InstanceUIComponent } from './instance-ui-button.component';

const meta: Meta<InstanceUIComponent> = {
    title: 'Angular Instance UI/Button',
    component: InstanceUIComponent,
    tags: ['autodocs'],
    argTypes: {
        appearance: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary', 'ghost'],
        },
        label: { control: { type: 'text' } },
        loading: { control: { type: 'boolean' } },
    },
    args: {
        appearance: 'primary',
        label: 'Button',
        loading: false,
    },
};

export default meta;
type Story = StoryObj<InstanceUIComponent>;

export const Primary: Story = {
    args: {
        appearance: 'primary',
        label: 'Button',
        loading: false,
    },
};

export const Secondary: Story = {
    args: {
        appearance: 'secondary',
        label: 'Button',
        loading: false,
    },
};

export const Tertiary: Story = {
    args: {
        appearance: 'tertiary',
        label: 'Button',
        loading: false,
    },
};

export const Ghost: Story = {
    args: {
        appearance: 'ghost',
        label: 'Button',
        loading: false,
    },
};

export const Loading: Story = {
    args: {
        appearance: 'primary',
        label: 'Button',
        loading: true,
    },
};
