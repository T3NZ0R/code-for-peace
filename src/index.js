import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client';
import App from './App';
import {AppProvider} from './contexts/AppContext';
import './index.css';
import './languages/i18n';
import {theme} from './theme/theme'
import {ThemeProvider} from "@mui/material";

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <AppProvider>
                    <App/>
                </AppProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>
);
