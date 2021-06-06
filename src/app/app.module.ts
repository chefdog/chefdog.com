import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FakeDbService } from './fake-db/fake-db.service';

import { MobileNavComponent } from './components/nav/mobile-nav/mobile-nav.component';
import { TopNavComponent } from './components/nav/top-nav/top-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionAboutComponent } from './views/section-about/section-about.component';



@NgModule({
  declarations: [
    AppComponent,
    MobileNavComponent,
    TopNavComponent,
    HeaderComponent,
    SectionAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
