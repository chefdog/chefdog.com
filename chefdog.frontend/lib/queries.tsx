import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`query queryPosts($where:PostWhereInput!,$take: Int, $orderby:[PostOrderByInput!]!) {
  posts(where: $where, take: $take, orderBy: $orderby) {
    id,
    title,
    slug,
    author {
      name
    },
    image {
      url
    },
    status,
     publishDate,
    tags {
      name
    }
  }
}`;