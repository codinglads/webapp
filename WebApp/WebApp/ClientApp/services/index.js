import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPop = async () => {
    const query = gql`
    query MyQuery {
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

    const result = await request(graphqlAPI, query);

    return result.popspotsConnection.edges;
}

export const getSimilarPosts = async () => {
    const query = gql`
    query GetPostDetails($slug: String!, $catergories: [String!]) {
      popspots(
        where: {catergories_some: { slug_in: $categories}}
      ){
      title
      image{
        url
      }
      createdAt
      slug
    }
    }
  
  `

    const result = await request(graphqlAPI, query);

    return result.popspots;
}

export const getPostDetails = async (slug) => {
    const query = gql`
    query GetPostDetails($slug : String!) {
      popspot(where: {slug: $slug}) {
        title
        description
        link
        image {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        categories {
          name
          slug
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query, { slug });

    return result.popspot;
}


export const getCategories = async () => {
    const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
    const result = await request(graphqlAPI, query);

    return result.categories;
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
}

export const getComments = async (slug) => {
    const query = gql`
    query GetComments($slug: String!) {
      comments(where: {popspot: {slug:$slug}}) {
        name 
        createdAt
        comment
      }
    }
  `
    const result = await request(graphqlAPI, query, { slug });

    return result.comments;
}