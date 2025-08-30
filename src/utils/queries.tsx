import { gql } from "@apollo/client";

export const postsQuery = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
      body
      user {
        id
        name
        username
        email
      }
    }
    meta {
      totalCount
    }
  }
}`;

export const postQuery = gql`
  query(
    $id: ID!
  ) {
    post(id: $id) {
      id
      title
      body
      user {
        id
        name
        username
        email
      }
    }
  }`;

