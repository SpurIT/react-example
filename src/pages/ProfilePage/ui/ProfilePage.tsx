import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ReducersList } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
};
const ProfilePage = ({ className }: ProfilePageProps) => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <div className={classNames('', {}, [className])}>
            Profile Page
        </div>
    </DynamicModuleLoader>
);

export default ProfilePage;
