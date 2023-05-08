import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item?: SidebarItemType
    collapsed: boolean
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { path, text, Icon } = item;
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={path}
        >
            {collapsed ? (
                <>
                    <Icon />
                    {t(text)}
                </>
            ) : <Icon />}

        </AppLink>
    );
});
