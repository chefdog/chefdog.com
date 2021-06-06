import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styles: [
  ]
})
export class SectionAboutComponent implements OnInit {
  content = new Array<Content>();
  constructor(private readonly contentService: ContentService) {
    this.contentService.getContent('section-about').subscribe(c => this.content = c);
  }

  ngOnInit(): void {
    
  }

}
