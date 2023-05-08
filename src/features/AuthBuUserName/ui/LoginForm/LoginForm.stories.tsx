import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from 'widgets/Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { tsTsxRegex } from 'ts-loader/dist/constants';
import LoginForm from './LoginForm';

export default {
    title: 'Feature/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof Sidebar> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    login: {
        username: 'Ed',
        password: '123',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    login: {
        username: 'Ed',
        password: '123',
    },
}), ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    login: {
        username: 'Ed',
        password: '123',
        error: 'error',
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    login: {
        username: 'Ed',
        password: '123',
        isLogin: true,
    },
})];
