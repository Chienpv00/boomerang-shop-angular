import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from 'layout';

@NgModule({
  imports: [
    CommonModule,
    LayoutComponent,
  ],
  exports: [RouterModule],
})
export class ShellModule {}
