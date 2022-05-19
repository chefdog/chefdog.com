import Link from 'next/link';
import Image from 'next/image'
import ArticleListItem from '../types/article-list-item';
import ContentDocument from '../types/content-document';
import ContentDocumentParagraph from '../types/content-document-paragraph';

const ArticleListItem = ({index, title, slug, content, publishDate, author, thumbnail} : ArticleListItem ) => {

    if(index === 0) {
        return (
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-6 mt-6 ">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <Link as={`/articles/${slug}`} href="/articles/[slug]">
                            <a>{title}</a>
                        </Link>
                    </h3>
                    {content.document.map((doc: ContentDocument) => ( 
                        doc.children.map((child: ContentDocumentParagraph, i:number) => (
                            <p className="text-gray-600 mb-8" key={100+i}>
                                {child.text}
                            </p>
                        ))
                    ))}
                    <ul className="port-metadata">
                        <li>{publishDate}</li>
                        <li>{author?.name}</li>
                    </ul>
                </div>    
                <div className="w-full sm:w-1/2 p-6">
                    <Image src={process.env.NEXT_PUBLIC_CMS_API + thumbnail?.url} alt={title} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 p-6">
                    <Image src={process.env.NEXT_PUBLIC_CMS_API + thumbnail?.url} alt={title} />
                </div>
                <div className="w-full sm:w-1/2 p-6 mt-6 ">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <Link as={`/articles/${slug}`} href="/articles/[slug]">
                            <a>{title}</a>
                        </Link>
                    </h3>    
                    {content.document.map((doc: ContentDocument) => ( 
                        doc.children.map((child: ContentDocumentParagraph, i:number) => (
                            <p className="text-gray-600 mb-8" key={500+i}>
                                {child.text}
                            </p>
                        ))
                    ))}
                    <ul className="port-metadata">
                        <li>{publishDate}</li>
                        <li>{author?.name}</li>
                    </ul>
                </div>
            </div>
        )
    }    
}
export default ArticleListItem;