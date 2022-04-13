import { createTheme, ThemeProvider } from '@mui/material/styles';
import { request } from 'graphql-request';
import { Layout } from '../Layout';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { LandingPage }  from './landingpage.js';

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
const cards = [1, 2, 3,];

// This component renders the syracuse page and all its corresponding tiles
export default function Syracuse() {
   
    const [popspotsConnection, setPopSpots] = useState(null);

    // Query string to find tiles
    var bigQuery = `{
        popspotsConnection {
          edges {
            node {
              createdAt
              title
              description
              link
              slug
              class
              iden
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              categories {
                name
                slug
              }
              image {
                url
              }
              imageUrl
            }
          }
        }
      }    
        
    `
    var bigQueryString = bigQuery.replace(/\n/g, ' ');

    // Grabs the cards using the query
    useEffect(() => {
        const getPop = async () => {
            const { popspotsConnection } = await request(
                'https://api-us-east-1.graphcms.com/v2/cl0y82ax546kp01z3hw2kc6ab/master',
                bigQueryString);

            setPopSpots(popspotsConnection) 
        };

        getPop();
        
    }, []);
    const cards = [1, 2, 3,];

    const theme = createTheme();
    // Renders if the connection is successful
    if (popspotsConnection != null) {
        var posts = [popspotsConnection][0].edges;
       
        return (
            <Layout>
                 <LandingPage posts={posts} />
            </Layout>
        );
    } else {
        return (
            <Layout>
                <ThemeProvider theme={theme}>
                    <h2>Loading </h2>
                    <Copyright sx={{ mt: 5 }} />
                </ThemeProvider>
            </Layout>
        );
    }
}