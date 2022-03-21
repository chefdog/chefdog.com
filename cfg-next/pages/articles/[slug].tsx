import { useRouter } from 'next/router';
import ErrorPage from 'next/error'
import Props from '../../types/props';
import Client from '../../lib/apollo-client';
import Article from '../../types/article';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Container from '../../components/container';
import { ARTICLE_QUERY, ARTICLES_ID_QUERY } from '../../lib/queries';
import Paragraph from '../../types/paragraph';
import ArticleParagraph from '../../components/article-paragraph';

const ArticlePost = ({ post, morePosts, preview}: Props) => {
  const router = useRouter()
  if(!router.isFallback && !post?.article) {
   return <ErrorPage statusCode={404} />
  }
  return (
    
    <Layout preview={preview}>


    <Container>      

    <Header></Header>

      <section id="details-section" className="details-section blog-details sec-ptb-100 clearfix">
          <div className="container">
            <div className="details-content" data-aos="fade-up" data-aos-delay="100">
              <h2 className="item-title">{post?.article.title}</h2>
              <div className="post-meta ul-li mb-60 clearfix">
                <ul className="clearfix">
                  <li>{post?.article.publishDate}</li>
                  <li><a href="#!">{post?.article.author?.name}</a></li>
                </ul>
              </div>
            </div>

            <div className="details-image h-auto mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <img src={process.env.NEXT_PUBLIC_CMS_API + post?.article.image?.src} />
            </div>

            <div className="details-content mb-100">

            {post?.article.paragraphs.map((paragraph: Paragraph, i:number) => (
              <span key={i}>
                <p className="mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  {paragraph?.title}                 
                </p>
                <ArticleParagraph paragraph={paragraph}></ArticleParagraph>
              </span>
						 ))}
					</div>
        </div>
      </section>
    </Container>
    </Layout>
     
  )
}

export default ArticlePost


type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const { loading, error, data } = await Client.query({
    query: ARTICLE_QUERY, 
    variables: {
      "where": params
    } 
  });

  const article: Article = data.article;
  return {
    props: {
      post: {
        article
      },
    },
  }
}

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