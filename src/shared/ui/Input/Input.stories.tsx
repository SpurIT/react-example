import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Input } from './Input';

export default {
    title: 'Shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    id: 'input',
    className: '',
    placeholder: 'Placeholder',
    value: 'Value',
};

export const Dark = Template.bind({});
Dark.args = {
    id: 'input',
    className: '',
    placeholder: 'Placeholder',
    value: 'Value',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
