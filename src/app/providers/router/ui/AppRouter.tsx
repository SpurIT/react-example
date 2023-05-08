import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <main className="page-wrapper">
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    </main>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
