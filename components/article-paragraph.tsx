import Paragraph from "../types/paragraph";


const ArticleParagraph = (props: { paragraph: Paragraph}) => {
    return (
        <>
        {props.paragraph.content.document[0].children.map((child, i:number) => (
            <p className="mb-60 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" key={i}>
                {child.text}
            </p>
		))}
        </>
    )
}

export default ArticleParagraph