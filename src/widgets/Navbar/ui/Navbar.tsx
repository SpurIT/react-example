import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { memo, useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthBuUserName';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const onAuthModalLogout = useCallback(() => {
        dispatch(userActions.logout());
        onAuthModalClose();
    }, [dispatch, onAuthModalClose]);
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {
                    authData ? (
                        <Button
                            theme={ThemeButton.CLEAR}
                            onClick={onAuthModalLogout}
                        >
                            {t('header.logout.logout_button')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ThemeButton.CLEAR}
                                onClick={onAuthModalOpen}
                            >
                                {t('header.login.login_button')}
                            </Button>
                            <LoginModal isOpen={isAuthModalOpen} onClose={onAuthModalClose} />
                        </>
                    )
                }
            </div>
        </header>
    );
});
