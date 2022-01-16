import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import grey from '@material-ui/core/colors/grey';

export const muitheme = createMuiTheme({
    palette: {
        primary: {
            main: lightGreen[500],
        },
        secondary: {
            main: grey[50],
        }
    },
});

muitheme.typography.h1 = {
    fontSize: "38px",
    '@media (max-width:600px)' : {
        fontSize: "30px"
    }
}

muitheme.typography.h2 = {
    fontSize: "34px",
    '@media (max-width:600px)' : {
        fontSize: "27px"
    }
}