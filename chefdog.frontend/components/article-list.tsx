import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Article from '../types/article'
import { POSTS_QUERY } from '../lib/queries';

const ArticleList = () => {
    const { data, loading, error, fetchMore } = useQuery(POSTS_QUERY, {
        variables: {
          "take": 10,
          "where": {
            "status": {
              "equals": "published"
            }
          }, 
          "orderby": {
            "id": "desc"
          }
        },
    });
    if (loading) return <p>Loading...</p>;
    if (error) {
      return <p>:( an error happened {error}</p>;
    }
 
    return (
        <>
        {console.log(process.env.NEXT_PUBLIC_CMS_API)}

        {data?.posts.map((post: Article, i:number) => (
            <div className="blog-list clearfix" data-aos="fade-up" data-aos-delay="100" key={i}>
            <Link as={`/articles/${post.slug}`} href="/articles/[slug]">              
              <a className="item-image">
                <img src={post.image?.url} />
              </a>
              
            </Link>
                <div className="item-content">
                    <h3 className="item-title">
                      <Link as={`/articles/${post.slug}`} href="/articles/[slug]">
                          <a>{post.title}</a>
                      </Link>
                    </h3>
                    <div className="post-meta ul-li mb-30 clearfix">
                        <ul className="clearfix">
                            <li>{post.publishDate}</li>
                            <li><a href="#!">
                                {post.author?.name}
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