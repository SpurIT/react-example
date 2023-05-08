import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'Shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <div>Lorem ipsum dolor sit amet.</div>,
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <div>Lorem ipsum dolor sit amet.</div>,
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
