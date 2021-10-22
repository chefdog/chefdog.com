import { PostsData } from "./posts-data.model";


export interface ResultList {
    data: PostsData,
    loading: boolean,
    networkStatus: number,
}