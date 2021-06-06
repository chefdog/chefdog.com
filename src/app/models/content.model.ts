import { Paragraph } from "./paragraph.model";

export interface Content {
    id: string,
    title: string,
    lastModified: Date,
    description: string;
    paragraphs: Array<Paragraph>;
}
