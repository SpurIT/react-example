import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <ul className={cls.linkList}>
                {
                    SidebarItemsList.map((item) => (
                        <li key={item.path} className={cls.linkItem}>
                            <SidebarItem collapsed={collapsed} item={item} />
                        </li>
                    ))
                }
            </ul>
            <Button
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.collapsedBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                square
                size={ButtonSize.XLARGE}
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </aside>
    );
});
