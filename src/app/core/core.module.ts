import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layouts/header/header.component';
import { LandingComponent } from './components/layouts/landing/landing.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, LandingComponent, FooterComponent],
}) // 3 components will be exported i.e. we are granting the permission to access them outside of core module.
export class CoreModule {}
