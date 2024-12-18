import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './core/components/top-nav/top-nav.component';
import { MainNavComponent } from './core/components/main-nav/main-nav.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
