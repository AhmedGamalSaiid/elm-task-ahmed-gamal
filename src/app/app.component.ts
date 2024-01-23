import { Component } from '@angular/core';
import { LangDir } from './lang-dir';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elm-task-ahmed-gamal';
  public dirController = new LangDir();
}
