import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShellModule } from 'shell';

@Component({
  standalone: true,
  imports: [ShellModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'org';
}
