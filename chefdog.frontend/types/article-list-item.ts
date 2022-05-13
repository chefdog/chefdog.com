import ContentItem from "./content-item";

type ArticleListItem = {
    index: number,
    id: string,
    title: string,
    content: ContentItem,
    publishDate: string,    
    thumbnail: {
        url: string
    },
    author: {
        name:string
    },   
    slug: string
}

export default ArticleListItem