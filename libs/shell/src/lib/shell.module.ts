import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './shell.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(shellRoutes, {
      scrollPositionRestoration: 'top',
    }),
  ],
})
export class ShellModule {}
