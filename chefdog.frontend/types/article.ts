import Paragraph from "./paragraph"
import ContentItem from "./content-item";

type Article = {
    id: string,
    title: string
    publishDate: string
    content: ContentItem,
    image: {
        url: string
    },
    thumbnail: {
        url: string
    },
    author: {
        name:string
    },
    paragraphs: [Paragraph]
    slug: string
}

export default Article