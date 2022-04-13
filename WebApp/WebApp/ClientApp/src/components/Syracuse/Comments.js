import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


// Copywright stamp
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                SnapShot
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// Theme colors
const theme = createTheme({
    palette: {
        primary: {
            main: '#7bda57'
        }
    }
});

// This component renders the comment section when you view a spot page
export default function Comments() {

    // Handles a comment submit but is currently not implemented
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: "space-between"
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: "#7bda57" }}>
                        <CommentIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add a Comment
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="Name"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Email"
                                    label="Email" />
                            </Grid>

                            <Grid item allign xs={12}>
                                <TextField
                                    required
                                    multiline
                                    fullWidth
                                    id="Comment"
                                    label="Add a Comment"
                                    name="comment"
                                    autoComplete="comment"
                                />
                            </Grid>


                        </Grid>
                        <Grid container alignItems="center">
                            <Grid container justifyContent="flex-start" xs={6}>


                                <Button type="submit"  fullWidth variant="contained" a sx={{ mt: 3, mb: 2 , color:"white" }}>
                                    Submit Comment
                                </Button>

                            </Grid>
                            <Grid container justifyContent="flex-end" xs={6}>
                                <Link href="/" variant="body2">
                                    Cancel
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>

    );
}