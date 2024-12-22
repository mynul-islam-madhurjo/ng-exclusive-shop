import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [TimerComponent, ServicesSectionComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [TimerComponent, ServicesSectionComponent, FooterComponent],
})
export class SharedModule {}
