import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    sortAndFilter: {
        display: 'flex',
        alignItems: 'center',
        width: '960px',
        margin: '15px auto',
        justifyContent: 'center'
    },
    searchField: {
        padding: '20px 50px'
    },
    listComponent: {
        width: '960px',
        margin: '0 auto'
    },
    pagination: {
        justifyContent: 'center',
        marginTop: '20px'
    }
});