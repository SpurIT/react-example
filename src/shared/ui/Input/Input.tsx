import { ChangeEvent, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    id: string
    type?: string
    value?: string
    placeholder?: string
    onChange?: (value: string) => void
}
export const Input = (props: InputProps) => {
    const {
        id, className, type = 'text', value, placeholder, onChange, ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {placeholder && <label htmlFor={id} className={cls.placeholder}>{placeholder}</label>}
            <input
                id={id}
                className={cls.inputField}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
};
