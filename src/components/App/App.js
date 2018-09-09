import React, {Component} from 'react';
import counterpart from 'counterpart';
import Header from './Header';
import TodoItemsListWithFilters from '../../containers/TodoItemsListWithFilters';
import _EN from '../../locales/en-US.json';

counterpart.registerTranslations('en', _EN);
counterpart.setLocale('en');

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <TodoItemsListWithFilters/>
            </React.Fragment>
        );
    }
}

export default App;
