import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from './layout/header/header.component';
import { Footer } from './layout/footer/footer.component';

@NgModule({
  declarations: [Header, Footer],
  imports: [CommonModule, RouterModule],
  exports: [Header, Footer],
})
export class CoreModule {}
