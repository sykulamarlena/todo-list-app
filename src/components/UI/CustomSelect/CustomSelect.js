import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class CustomSelect extends Component {
    render() {
        const options = this.props.options.map((option, i) => (
            <MenuItem key={i} value={option.value}>{option.title}</MenuItem>
        ));

        return (
            <form autoComplete="off">
                <FormControl style={{width: '100%'}}>
                    <Select
                        id={this.props.id}
                        name={this.props.name}
                        value={this.props.value }
                        className={this.props.className}
                        onChange={this.props.onChange}
                    >
                        {options}
                    </Select>
                </FormControl>
            </form>
        )
    }
}

CustomSelect.propTypes = {
    options: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default CustomSelect;