import React, {Component} from 'react';
import {connect} from 'react-redux';
import counterpart from 'counterpart';
import {createTodoItem} from '../actions';
import {bindActionCreators} from 'redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/Add';

class CreateTodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.handleChangeTodoText = this.handleChangeTodoText.bind(this);
        this.handleCreateTodoItem = this.handleCreateTodoItem.bind(this);
    }

    handleChangeTodoText(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleCreateTodoItem() {
        this.props.createTodoItem(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <TextField
                    id={this.state.text}
                    name={this.state.text}
                    label={counterpart('app.todo.content')}
                    style={{width: '40%', marginRight: '10px'}}
                    value={this.state.text}
                    onChange={this.handleChangeTodoText}
                    margin="normal"
                    multiline
                    rowsMax="4"
                />

                <Button
                    style={{marginLeft: '10px'}}
                    variant="contained"
                    color="secondary"
                    disabled={this.state.text === ''}
                    onClick={this.handleCreateTodoItem}
                >
                    <PlusIcon/>
                    {counterpart('app.todo.addTodo')}
                </Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createTodoItem
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(CreateTodoForm)