import { Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss']
})
export class NavToolbarComponent {
  @Output() toggleSideBar = new EventEmitter();
  title = 'app';

  constructor() {
  }
}
