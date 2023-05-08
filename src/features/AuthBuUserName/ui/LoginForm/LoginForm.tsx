import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ReducersList } from 'app/providers/StoreProvider';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const userNameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const passwordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const loginSubmit = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Text title={t('login_form.title')} />
            <form className={classNames(cls.LoginForm, {}, [className])}>
                {error && <Text text={t('login_form.error')} theme={TextTheme.ERROR} />}
                <Input
                    id="username"
                    className={cls.input}
                    value={username}
                    onChange={userNameHandler}
                    placeholder={t('login_form.name')}
                />
                <Input
                    id="password"
                    className={cls.input}
                    value={password}
                    onChange={passwordHandler}
                    placeholder={t('login_form.password')}
                />
                <Button
                    type="submit"
                    className={cls.button}
                    theme={ThemeButton.OUTLINE}
                    onClick={loginSubmit}
                    disabled={isLoading}
                >
                    {t('login_form.submit_button')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
