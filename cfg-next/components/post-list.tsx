
import { gql, useQuery } from '@apollo/client';
import Article from '../types/article'

const POST_QUERY = gql`
query QueryPosts($take: Int, $orderBy: [PostOrderByInput!]!) {
    posts(take: $take, orderBy: $orderBy) {
      id,
      title,
      introduction,    
      publishDate,
      author {
        id,
        name
      }
      status
      image {
        src,
        width,
        height
      }
    }
  }`;

const PostList = () => {

    const { data, loading, error, fetchMore } = useQuery(POST_QUERY, {
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
        {data?.posts.map((post: Article, i:number) => (
            <div className="blog-list clearfix" data-aos="fade-up" data-aos-delay="100" key={i}>
                <a href="#!" className="item-image">
                    <img src={process.env.NEXT_PUBLIC_CMS_API+post.image.src} />
                </a>
                <div className="item-content">
                    <h3 className="item-title">
                        <a href="#!">
                            {post.title}
                        </a>
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

export default PostList