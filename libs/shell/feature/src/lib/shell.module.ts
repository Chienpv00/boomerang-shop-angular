import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './shell.routes';
import { LayoutComponent } from 'layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shellRoutes),
    LayoutComponent,
  ],
  exports: [RouterModule],
})
export class ShellModule {}
