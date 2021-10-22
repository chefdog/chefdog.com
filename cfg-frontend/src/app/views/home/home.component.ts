import { Component, OnInit } from '@angular/core';
import { Post, ResultList } from 'src/app/core/models';

import { GraphqlService } from 'src/app/shared/services';

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
      const result = x as ResultList;
      this.models = result.data.posts;
    });
  }

}
