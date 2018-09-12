import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: String;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.name = params.formName;
    });
  }

  ngOnInit() {
  }

}
