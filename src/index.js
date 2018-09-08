import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App/App'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import './styles/globalStyles.scss';

const store = createStore(rootReducer);
const theme = createMuiTheme();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
