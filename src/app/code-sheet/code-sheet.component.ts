import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-sheet',
  templateUrl: './code-sheet.component.html',
  styleUrls: ['./code-sheet.component.scss']
})
export class CodeSheetComponent implements OnInit {

  @Input() form: any;

  constructor() {
  }

  ngOnInit() {
  }

}
