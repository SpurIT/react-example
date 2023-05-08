import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'Widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'vasya',
        },
    },
})];

export const LightNotAuth = Template.bind({});
LightNotAuth.args = {};
LightNotAuth.decorators = [StoreDecorator({})];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'vasya',
        },
    },
}), ThemeDecorator(Theme.DARK)];

export const DarkNotAuth = Template.bind({});
DarkNotAuth.args = {};
DarkNotAuth.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
