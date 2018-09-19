import { Component, Input, OnInit } from '@angular/core';
import { ConceptUtils } from '../utils/concept.utils';

@Component({
  selector: 'app-concept-set',
  templateUrl: './concept-set.component.html',
  styleUrls: ['./concept-set.component.scss']
})
export class ConceptSetComponent implements OnInit {

  @Input() member: any;
  abnormal: boolean;

  constructor() { }

  isTabular(member) {
    return ConceptUtils.isTabular(member);
  }
  ngOnInit(): void {
    this.abnormal = this.isAbnormal();
  }

  getMergedConcept() {
    for (const member of this.member.setMembers) {
      if (member.class !== 'Abnormal') {
        member.isAbnormal = true;
        return member;
      }
    }
  }

  private isAbnormal(): boolean {
    for (const member of this.member.setMembers) {
      if (member.class === 'Abnormal') {
        return true;
      }
    }
    return false;
  }
}
