import { Component, OnInit } from '@angular/core';
import { Post, Result } from 'src/app/core/models';
import { GraphqlService } from 'src/app/shared/services';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [
  ]
})
export class ArticleComponent implements OnInit {

  model: Post | undefined;
  loading: boolean;
  constructor(private readonly graphService: GraphqlService) {
    this.loading = true;
  }

  ngOnInit(): void {
    const id = 'ckuspixts0034rcf9enmrhp3i';
    this.graphService.getPost(id).subscribe(x => {
      const result = x as Result;
      this.model = result.data.post;
      this.loading = x.loading;
    });
  }
}
