import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
