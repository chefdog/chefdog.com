
import Image from 'next/image'

const ArticleItem = ({
    title,
    introduction,
    content,
    image,
    author
}: Article) => {
    return (
        <div className="blog-list clearfix" data-aos="fade-up" data-aos-delay="100">
        <a href="#!" className="item-image">
            <Image src={image} alt={title}></Image>
        </a>
        <div className="item-content">
            <h3 className="item-title">
                <a href="#!">
                    {title}
                </a>
            </h3>
            <div className="post-meta ul-li mb-30 clearfix">
                <ul className="clearfix">
                    <li>25 Feburary 2019</li>
                    <li><a href="#!">{author}</a></li>
                </ul>
            </div>
            <p className="mb-0">
                {introduction}
            </p>
        </div>
    </div>
    )
}

export default ArticleItem 