import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-concept',
  templateUrl: './code-concept.component.html',
  styleUrls: ['./code-concept.component.scss']
})
export class CodeConceptComponent implements OnInit {

  @Input() member: any;
  @Input() section: String;

  constructor() {
  }

  ngOnInit() {
  }

}
