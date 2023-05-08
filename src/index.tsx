import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import i18n from 'shared/config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';

render(
    <BrowserRouter>
        <StoreProvider>
            <I18nextProvider i18n={i18n}>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </I18nextProvider>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
