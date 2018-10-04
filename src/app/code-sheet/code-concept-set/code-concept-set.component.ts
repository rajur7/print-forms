import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-concept-set',
  templateUrl: './code-concept-set.component.html',
  styleUrls: ['./code-concept-set.component.scss']
})
export class CodeConceptSetComponent implements OnInit {

  @Input() member: any;

  constructor() {
  }

  ngOnInit() {
  }

  getSectionName() {
    return this.member.name;
  }
}
