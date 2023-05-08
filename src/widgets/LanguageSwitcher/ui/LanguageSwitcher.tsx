import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LanguageSwitcherProps {
    className?: string
}
export const LanguageSwitcher = memo(({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggle}
        >
            {t('language')}
        </Button>
    );
});
