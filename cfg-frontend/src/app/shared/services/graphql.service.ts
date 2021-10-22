import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) {    
  }

  public getPosts = () => {
    return this.apollo.query({
      query: gql`query Query {
        posts {
          title,
          image,
          intro,
          publishDate,
          author {
            id,
            name
          }
          status
          id
        }
      }`
    });      
  }

  public getPost = (id:string) => {
    return this.apollo.query({
      query: gql`query ExampleQuery($where: PostWhereUniqueInput!) {
        post(where: $where) {
          title
          status
          image
          intro
          content {
            id
            title
            content
          }
          publishDate
          author {
            name
            id
            email
          }
        }
      }`,
      variables:{
        "where": {
          "id": id
        }
      }
    });      
  }
}
