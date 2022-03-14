
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image'
import Article from '../types/article'


const ARTICLES_QUERY = gql`
query QueryArticles {
    posts {
      id,
      title,    
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

const ArticleList = () => {

    const { data, loading, error, fetchMore } = useQuery(ARTICLES_QUERY);
    if (loading) return <p>Loading...</p>;
    // check for errors
    if (error) {
      return <p>:( an error happened {error}</p>;
    }

    console.log(data)
  
    return (
        <>
        {data?.posts.map((post: Article, i:number) => (
            <div className="blog-list clearfix" data-aos="fade-up" data-aos-delay="100" key={i}>
                <a href="#!" className="item-image">
                    <Image src={post.image?.src} alt={post.title} width={post.image.width} height={post.image.height}></Image>
                </a>
                <div className="item-content">
                    <h3 className="item-title">
                        <a href="#!">
                            {post.title}
                        </a>
                    </h3>
                    <div className="post-meta ul-li mb-30 clearfix">
                        <ul className="clearfix">
                            <li>25 Feburary 2019</li>
                            <li><a href="#!"></a></li>
                        </ul>
                    </div>
                    <p className="mb-0">
                        
                    </p>
                </div>
            </div>
        ))}
        </>
    )
}

export default ArticleList