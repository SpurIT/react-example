import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
    className?: string
}
const NotFoundPage:FC<NotFoundProps> = (props) => {
    const { t } = useTranslation('notFoundPage');
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>{t('notFound')}</div>
    );
};

export default NotFoundPage;
