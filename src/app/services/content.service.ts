import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpClient: HttpClient){}

  getContent(sectionId: string): Observable<Array<Content>> {
      return this.httpClient.get<Array<Content>>(`api/${sectionId}`);
  }
}
