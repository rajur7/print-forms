import { Component, Input, OnInit } from '@angular/core';
import { ConceptUtils } from '../utils/concept.utils';

@Component({
  selector: 'app-concept-set',
  templateUrl: './concept-set.component.html',
  styleUrls: ['./concept-set.component.scss']
})
export class ConceptSetComponent {

  @Input() member: any;

  constructor() { }

  isTabular(member) {
    return ConceptUtils.isTabular(member);
  }
}
