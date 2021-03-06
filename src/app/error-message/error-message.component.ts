import { Component, Input, OnInit } from '@angular/core';
import { ngCopy } from 'angular-6-clipboard';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {

  hasVisibility = true;
  @Input() errorMessage: String;

  constructor() {
  }

  hideMessage() {
    if (this.hasVisibility) {
      this.hasVisibility = false;
    }
  }

  copyMessage() {
    ngCopy(this.errorMessage);
  }
}
