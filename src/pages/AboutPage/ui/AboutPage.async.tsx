import { lazy } from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage'));

// export const AboutPageAsync = React.lazy(() => new Promise((resolve) => {
//     // @ts-ignore
//     // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//     setTimeout(() => resolve(import('./AboutPage')), 15000);
// }));
