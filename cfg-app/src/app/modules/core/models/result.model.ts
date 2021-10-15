import { PostData } from "./post-data.model";

export interface Result {
    data: PostData,
    loading: boolean,
    networkStatus: number,
}