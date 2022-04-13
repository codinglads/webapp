import * as React from 'react';
import { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { Layout } from '../Layout';
import Comments from './Comments';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { request } from 'graphql-request';

// Copywright stamp
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

// Theme colors
const theme = createTheme({
    palette: {
        primary: {
            main: '#7bda57'
        }
    }
});

// Maps url parameters to properties on component
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

// This class renders a details page for a specific card on the landing page
class ViewDetails extends Component {

    // Builds state using the url param id of the card selected
    constructor(props) {
        super(props);

        var { idVal } = this.props.params;

        this.state = {
            id: idVal,
            loading: 'true',
            post: null,
        };
    }

    render() {

        // Builds query to find details on specific card selection
        var oneQuery = 'query GetOnePopspot{'
        oneQuery = oneQuery + 'popspotsConnection(where: { iden: ' + this.state.id;
        oneQuery = oneQuery + ' }) { edges { node { createdAt title description imageUrl class } } } }'

        // Using the components state, it checks if the state is loading, if so it grabs the data from
        // graphQL and sets the state to not longer be loading as well as to conatain the details data
        if (this.state.loading === 'true') {
            const queryByID = async (event) => {
                var data = await request(
                    'https://api-us-east-1.graphcms.com/v2/cl0y82ax546kp01z3hw2kc6ab/master',
                    oneQuery
                );

                await this.setState({
                    loading: 'false',
                    post: data.popspotsConnection.edges[0].node,
                });
            };

            queryByID();
        }

        // If state is loading then show a loading symbol
        if (this.state.loading === 'true') {
            return (<Layout>Loading...</Layout>);
        }

        // Otherwise display details using the state's post prop
        return (
            <Layout>
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: `url(${this.state.post.imageUrl})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '80%'
                            }}
                        />
                        <Container maxWidth="xs">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="left"
                                color="text.primary"
                            ><strong>{this.state.post.title}</strong></Typography>
                            <Rating name="spotRating" icon={<StarIcon sx={{ color: "primary" }} />} defaultValue={0} precision={0.5} />
                            <Typography variant="body1">
                                {this.state.post.description}
                            </Typography>
                            <Comments />
                        </Container>

                    </Grid>

                </ThemeProvider>
            </Layout>
        );

    }
}

export default withParams(ViewDetails);