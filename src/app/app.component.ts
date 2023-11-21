import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShellModule } from 'shell';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BrowserModule, ShellModule],
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'org';
}
