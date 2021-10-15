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
          content,
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
}
