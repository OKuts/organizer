// Core
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

// Components
import { App } from './app';
// Instruments
import { queryClient } from './lib/react-query';
import { store } from './lib/redux/init/store';

// styles
import 'react-datepicker/dist/react-datepicker.css';
import './theme/styles/index.scss';


render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <Router>
                <App />
            </Router>
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },
);
