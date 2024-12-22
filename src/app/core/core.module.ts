import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MainNavComponent,
    TopNavComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [HeaderComponent, MainNavComponent, TopNavComponent],
})
export class CoreModule {}
