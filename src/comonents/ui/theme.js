import { createMuiTheme } from '@material-ui/core/styles';

const acrBlue = "#0B72B9";
const acrOrang = "#FFBA06";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${acrBlue}`,
            orange: `${acrOrang}`
        },
        primary: {
            main: `${acrBlue}`
        },
        secondary: {
            main: `${acrOrang}`
        }
    },
    typography: {
       tab: {
        fontFamily: "Raleway",
        textTransform: 'none',
        fontWeight: 700,
        fontSize: '1rem',
       },
       estimate: {
        fontFamily: "Pacifico",
        fontSize: '1rem',
        textTransform: 'none',
        color: 'white',
       }
    }
})