import { useQuery } from '@apollo/client';
import Article from '../types/article'
import { POSTS_QUERY } from '../lib/queries';
import ArticleListItem from './article-list-item';

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
      return <>an error happened {error}</>;
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
        
          {data?.posts.map((post: Article, i:number) => (
            <ArticleListItem key={i} 
              index={i%2}
              id={post.id}
              title={post.title}
              slug={post.slug}
              content={post.content}
              publishDate={post.publishDate}
              thumbnail={post.thumbnail}
              author={post.author}
              ></ArticleListItem>
          ))}
          </div>
    </section>
    )
}

export default ArticleList