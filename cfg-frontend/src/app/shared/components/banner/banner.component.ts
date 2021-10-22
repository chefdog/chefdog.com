import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [
  ]
})
export class BannerComponent implements OnInit {
  @Input() postItem: Post | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
