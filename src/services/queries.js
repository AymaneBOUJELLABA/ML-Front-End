import { gql } from "apollo-boost";

export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      title
      link
      prediction
      date
    }
  }
`;
