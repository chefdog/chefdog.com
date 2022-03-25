import Paragraph from "./paragraph"

type Article = {
    title: string
    introduction: string
    publishDate: string
    content: string
    image: {
        src: string
    },
    author: {
        name:string
    },
    paragraphs: [Paragraph]
    slug: string
}

export default Article