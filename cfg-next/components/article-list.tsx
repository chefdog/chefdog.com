
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image'
import Link from 'next/link';
import Article from '../types/article'


const ARTICLES_QUERY = gql`
query QueryArticles($take: Int, $orderBy: [ArticleOrderByInput!]!) {
    articles(take: $take, orderBy: $orderBy) {
      id,
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

const ArticleList = () => {

    const { data, loading, error, fetchMore } = useQuery(ARTICLES_QUERY, {
        variables: { take:3, "orderBy": [
            {
              "id": "desc"
            }
          ]  
        },
    });
    if (loading) return <p>Loading...</p>;
    if (error) {
      return <p>:( an error happened {error}</p>;
    }
 
    return (
        <>
        {data?.articles.map((post: Article, i:number) => (
            <div className="blog-list clearfix" data-aos="fade-up" data-aos-delay="100" key={i}>
            <Link href={`/blog/${encodeURIComponent(post.id)}`}>
              <a className="item-image">
                <img src={process.env.NEXT_PUBLIC_CMS_API + post.image.src} />
              </a>
            </Link>
                <div className="item-content">
                    <h3 className="item-title">
                      <Link href={`/blog/${encodeURIComponent(post.id)}`}>
                          <a>{post.title}</a>
                      </Link>
                    </h3>
                    <div className="post-meta ul-li mb-30 clearfix">
                        <ul className="clearfix">
                            <li>{post.publishDate}</li>
                            <li><a href="#!">
                                {post.author.name}
                            </a></li>
                        </ul>
                    </div>
                    <p className="mb-0">
                        {post.introduction}
                    </p>
                </div>
            </div>
        ))}
        </>
    )
}

export default ArticleList