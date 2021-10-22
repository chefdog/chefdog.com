import { Author } from "./author.model";
import { Paragraph } from "./paragraph.model";

export interface Post {
    author: Author,
    intro: string,
    id: string,
    image: string,
    publishDate: Date,
    status: string,
    title: string,
    content: Array<Paragraph>
}