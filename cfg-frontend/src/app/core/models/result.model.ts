import { PostData } from ".";

export interface Result {
    data: PostData,
    loading: boolean,
    networkStatus: number,
}