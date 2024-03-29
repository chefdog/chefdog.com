import { gql, useQuery } from "@apollo/client";
import Tag from "../types/tag";


const TAGS_QUERY = gql`query QueryTags {
    tags {
      name
      id
    }
  }`;

const TagList = () => {
    const { data, loading, error, fetchMore } = useQuery(TAGS_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) {
      return <>an error happened {error}</>;
    }

    return (
        <div className="widget widget-tags" data-aos="fade-up" data-aos-delay="500">
            <h3 className="widget-title"><span>TAGS</span></h3>
            <div className="items-list ul-li clearfix">
                <ul className="clearfix">
                {data?.tags.map((tag: Tag, i:number) => (
                    <li key={i}><a href="#!">{tag.name}</a></li>
                ))}                    
                </ul>
            </div>
        </div>
    )
}

export default TagList