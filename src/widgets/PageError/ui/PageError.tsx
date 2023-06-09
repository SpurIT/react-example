import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}
export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('error.title')}</h1>
            <Button onClick={reload}>{t('error.button')}</Button>
        </div>
    );
};
