import { Author } from "./author.model";

export interface Post {
    author: Author,
    content: string,
    id: string,
    image: string,
    publishDate: Date,
    status: string,
    title: string
}