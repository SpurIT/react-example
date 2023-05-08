import { classNames } from 'shared/lib/classNames/classNames';

import {
    FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

const CLOSING_DELAY = 300;

interface ModalProps {
    className?: string
    contentClassName?: string
    isOpen: boolean
    onClose: () => void
}
export const Modal: FC<ModalProps> = (props) => {
    const {
        className, contentClassName, children, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>();

    const onClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onCloseHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, CLOSING_DELAY);
        }
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timer.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [cls.open]: isOpen,
        [cls.closing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])} onClick={onCloseHandler}>
                <div className={classNames(cls.content, {}, [contentClassName])} onClick={onClick}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
