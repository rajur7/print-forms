import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  concepts: Array<String>;
  searchKeyWord: String;

  constructor() { }

  ngOnInit() {
  }

}
