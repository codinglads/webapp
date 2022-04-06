import { createTheme, ThemeProvider } from '@mui/material/styles';
import { request } from 'graphql-request';
import { Layout } from '../Layout';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import  LandingPage  from './landingpage.js';

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
const cards = [1, 2, 3,];




export default function Syracuse() {

    const [popspotsConnection, setPopSpots] = useState(null);
    
    var bigQuery = `{
        popspotsConnection {
          edges {
            node {
              createdAt
              title
              description
              link
              slug
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
            }
          }
        }
      }    
        
    `
    var bigQueryString = bigQuery.replace(/\n/g, ' ');
   

    useEffect(() => {
        const getPop = async () => {
            const { popspotsConnection } = await request(
                'https://api-us-east-1.graphcms.com/v2/cl0y82ax546kp01z3hw2kc6ab/master',

         
                bigQueryString

                
        
            );
            setPopSpots(popspotsConnection)
          //  console.log(popspotsConnection);

            
        };

        getPop();
        
    }, []);
    const cards = [1, 2, 3,];

    const theme = createTheme();
  
    //setTimeout(function[, 3000, console.log(popspotsConnection)]);
    //
    if (popspotsConnection != null) {
        
        var posts = [popspotsConnection][0].edges;
        console.log(posts)
       
        return (
            <Layout>
                 <LandingPage posts={posts} />
            </Layout>
        );
    } else {
        return (
            <Layout>
                <ThemeProvider theme={theme}>
                    penis
                    <Copyright sx={{ mt: 5 }} />
                </ThemeProvider>
            </Layout>
        );

    }


}


//


