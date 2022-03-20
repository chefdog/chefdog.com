import { useRouter } from 'next/router';
import ErrorPage from 'next/error'
import Props from '../../types/props';
import { gql, useQuery } from '@apollo/client';
import { GetStaticPaths, GetStaticPathsResult } from 'next';
import { getArticlesId } from '../../lib/queries';
import Client from '../../lib/apollo-client';
import Article from '../../types/article';

const ARTICLE_QUERY = gql`query queryArticle($where: ArticleWhereUniqueInput!) {
  article(where: $where) {
    title
    slug
    introduction
    image {
      src
    }
    rating
    paragraphs {
      title
      image {
        src
      }
      content {
        document
      }
    }
  }
}`;



const ArticlePost = ({ post, morePosts, preview}: Props) => {
  const router = useRouter()
  if(!router.isFallback && !post?.slug) {

    console.log(router.isFallback);
    console.log(post?.slug);

    return <ErrorPage statusCode={404} />
  }
  return (
    <p>hallo</p>
  )
}

export default ArticlePost


export async function getStaticProps({ params }: Params) { 
  console.log(params);  

  const { data, loading, error, fetchMore } = useQuery(ARTICLE_QUERY, {
    variables: { 
      "where": 
        { "slug": "bocca-adado-yirgacheffe"   }
      
    },
  });
  console.log(data);
}


const ARTICLES_ID_QUERY = gql`query queryArticle {
  articles {
    id,
    slug
  }
}`;


export async function getStaticPaths() {
  const { loading, error, data } = await Client.query({ query: ARTICLES_ID_QUERY, variables: {slug: ['slug']} });
  const peths = data?.articles.map((post:Article) => ({    
    params: {slug: `articles/${post.slug}` },
  }));

   return {
      paths: peths,
      fallback: true,
   };
}