import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal contentClassName={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
        {
            isOpen && (
                <Suspense fallback={<PageLoader />}>
                    <LoginFormAsync />
                </Suspense>
            )
        }
    </Modal>
);
