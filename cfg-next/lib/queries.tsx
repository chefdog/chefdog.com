import { gql, useQuery } from "@apollo/client";

export const articlesQuery = `query QueryArticles {
    posts {
      title,    
      publishDate,
      author {
        id,
        name
      }
      status
      id
    }
  }`

  
const ARTICLES_ID_QUERY = gql`query queryArticle {
  articles {
    id
  }
}`;

export function getArticlesId(fields: string[] = []) {
  console.log('--------');
  const result = useQuery(ARTICLES_ID_QUERY);
    
  return result?.data;
}