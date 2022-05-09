import Paragraph from "./paragraph"

type Article = {
    title: string
    introduction: string
    publishDate: string
    content: string
    image: {
        url: string
    },
    author: {
        name:string
    },
    paragraphs: [Paragraph]
    slug: string
}

export default Article