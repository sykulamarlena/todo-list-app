import {createMuiTheme} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: red,
        background: {
            default: '#eef5f9'
        }
    },
});

export default theme;
