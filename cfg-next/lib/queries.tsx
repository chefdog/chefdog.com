import { gql } from "@apollo/client";

export const ARTICLE_QUERY = gql`query queryArticle($where: ArticleWhereUniqueInput!) {
  article(where: $where) {
    id
    title
    publishDate
    slug
    introduction
    image {
      src
    }
    rating
    paragraphs {
      id
      title
      image {
        src
      }
      content {
        document
      }
    }
    author {
      name
    }
  }
}`;


export const ARTICLES_ID_QUERY = gql`query queryArticle {
  articles {
    id,
    slug
  }
}`;


export const ARTICLES_QUERY = gql`
query QueryArticles($take: Int, $orderBy: [ArticleOrderByInput!]!) {
    articles(take: $take, orderBy: $orderBy) {
      id,
      slug,
      title
      introduction
      image {
        ... on LocalImageFieldOutput {
          src
          height
          width
        }
      }
      publishDate
      articleType
      rating
      author {
        name
      }
    }
  }`;
