import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConceptsService } from '../concepts.service';
import { FormConfigBuilder } from '../utils/form.config.builder';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: String;
  form: any;

  constructor(private route: ActivatedRoute, private conceptService: ConceptsService) {
    this.route.params.subscribe(params => {
      this.name = params.formName;
    });
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.conceptService.getAppConfig().subscribe((config: { config: any }) => {
      this.conceptService.getFormDetails(this.name).subscribe((formDetails: { results: any }) => {
        this.form = FormConfigBuilder.build(formDetails.results[0], config.config.conceptSetUI);
      });
    });
  }
}
