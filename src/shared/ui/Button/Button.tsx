import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton;
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, square, size, disabled, children, type, ...rest
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };
    return (
        <button type="button" className={classNames(cls.Button, mods, [className])} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};
