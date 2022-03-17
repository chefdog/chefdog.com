import { useRouter } from 'next/router';
import ErrorPage from 'next/error'
import Props from '../../types/props';



const ArticlePost = ({ post, morePosts, preview}: Props) => {
  const router = useRouter()
  if(!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    {post?.title}
  )
}



export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}