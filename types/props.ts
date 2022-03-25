import Article from "./article"

type Props = {
    post: { 
        article:Article
    },
    morePosts: Article[]
    preview?: boolean
}

export default Props