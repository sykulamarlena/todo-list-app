import React, { Component } from 'react';
import counterpart from 'counterpart';
import CreateTodoForm from '../../containers/CreateTodoForm';
import TodoFilterList from '../../containers/TodoFilterList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import _EN from '../../locales/en-US.json';

counterpart.registerTranslations('en', _EN);
counterpart.setLocale('en');

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {counterpart('app.title')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper>
                <CreateTodoForm />
                <TodoFilterList />
            </Paper>

        </React.Fragment>
    );
  }
}

export default App;
