import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { Result } from '../../core/models/result.model';
import { GraphqlService } from '../../shared/service/graphql.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  models: Array<Post> | undefined;
  constructor(private readonly graphService: GraphqlService) { }

  ngOnInit(): void {
    this.graphService.getPosts().subscribe(x => {
      const result = x as Result;
      this.models = result.data.posts;
    });
  }

}
