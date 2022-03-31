import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Layout } from '../Layout';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Snapshot
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#7bda57'
        }
    }
});

export default function Syracuse() {
    return (
        <Layout>
            <ThemeProvider theme={theme}>
                <Copyright sx={{ mt: 5 }} />
            </ThemeProvider>
        </Layout>
    );
}