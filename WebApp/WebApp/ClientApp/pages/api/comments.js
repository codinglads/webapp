// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req, res) {


    const graphQLClient = new GraphQLClient(graphqlAPI, {
        header: {
            Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
    })

    const query = gql`
    mutation createComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: {name:$name, email:$email, comment:$comment, popspot:{ connect: {slug:$slug}}}) {id}
    }
  
  `
    const publish = gql`
  mutation {
    publishManyCommentsConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  
      `
    try {
        const result = await graphQLClient.request(query, req.body)
        await graphQLClient.request(publish)
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send(error);

    }


}


