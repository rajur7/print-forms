import {Component, DoCheck, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {Constants} from './constants';
import {ConceptsService} from './concepts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'print-forms';
  privileges: Array<{ name: String }>;
  listOfForms: Array<String>;
  hasPrivilege: boolean;
  noPrivilegeError = Constants.NO_PRIVILEGE_ERROR;

  constructor(private userService: UserService, private conceptService: ConceptsService) {
  }

  ngOnInit() {
    this.userService.getUserPrivileges().subscribe((response: Array<{ name: String }>) =>
      this.privileges = response
    );
    this.conceptService.getListOfForms().subscribe((response: {result: any}) => {
    });
  }

  ngDoCheck() {
    if (this.privileges) {
      for (const privilege of this.privileges) {
        if (privilege.name === Constants.PRINT_FORMS_PRIVILEGE) {
          this.hasPrivilege = true;
        }
      }
      if (!this.hasPrivilege) {
        this.hasPrivilege = false;
      }
    }
  }

}
