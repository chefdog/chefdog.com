import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AboutDb } from './about-db';

@Injectable({
  providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'section-about' : AboutDb.content,
        }
    }
}
