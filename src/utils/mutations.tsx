import { gql } from "@apollo/client";

export const createPostMutation = gql`
mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}`;