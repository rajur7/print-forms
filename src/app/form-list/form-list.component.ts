import {Component, DoCheck, OnInit} from '@angular/core';
import {ConceptsService} from '../concepts.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit, DoCheck {
  formNames: Array<String>;
  observationTemplates: Array<any>;
  searchKeyWord: String;

  constructor( private conceptService: ConceptsService) { }

  ngOnInit() {
    this.conceptService.getAllObservationTemplates().subscribe((response: {results: any}) => {
      this.observationTemplates = response.results[0].setMembers;
    });
  }

  ngDoCheck() {
    if (this.observationTemplates) {
      this.formNames = this.observationTemplates.map((form) => form.display);
    }
  }

}
