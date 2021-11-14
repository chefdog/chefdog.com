import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ]
})
export class BannerComponent implements OnInit {
  @Input() postItem: Post | undefined;
  imageBaseUrl = environment.cms;
  constructor() { }

  ngOnInit(): void {
  }

}
