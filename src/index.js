import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './components/App/App'
import {MuiThemeProvider} from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import theme from './styles/theme'
import './styles/globalStyles.scss';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
