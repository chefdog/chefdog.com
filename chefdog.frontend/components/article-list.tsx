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
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Latest news items
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
        {data?.posts.map((post: Article, i:number) => (
          <div className="w-5/6 sm:w-1/2 p-6" key={i}>
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              <Link as={`/articles/${post.slug}`} href="/articles/[slug]">
                  <a>{post.title}</a>
              </Link>
            </h3>
            <p className="text-gray-600 mb-8">
              {post.introduction}
              <br />
              <br />
              {post.publishDate}  / {post.author?.name}              
            </p>
            </div>
          ))}
          </div>
        </div>
    </section>
    )
}

export default ArticleList