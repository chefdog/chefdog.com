import { Author } from "./author.model";
import { Image } from "./image.model";
import { Paragraph } from "./paragraph.model";

export interface Post {
    author: Author,
    intro: string,
    id: string,
    publishDate: Date,
    status: string,
    title: string,
    content: Array<Paragraph>,
    image: Image,
}