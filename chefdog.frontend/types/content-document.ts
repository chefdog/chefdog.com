import ContentDocumentParagraph from "./content-document-paragraph";

type ContentDocument = {   
    type: string,
    children: ContentDocumentParagraph[]
};

export default ContentDocument;