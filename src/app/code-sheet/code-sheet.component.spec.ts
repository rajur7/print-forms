import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSheetComponent } from './code-sheet.component';
import { CodeConceptComponent } from './code-concept/code-concept.component';
import { CodeConceptSetComponent } from './code-concept-set/code-concept-set.component';

describe('CodeSheetComponent', () => {
  let component: CodeSheetComponent;
  let fixture: ComponentFixture<CodeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeSheetComponent, CodeConceptComponent, CodeConceptSetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSheetComponent);
    component = fixture.componentInstance;
    component.form = {setMembers: ''};
    fixture.detectChanges();
  });

  it('should create CodeSheet component', () => {
    expect(component).toBeTruthy();
  });

  it('should have all basic elements', function () {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('code-sheet-table')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('table-header')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-section')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-question')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-answer')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('table-body')[0]).not.toBeNull();
  });

  it('should have sheet name', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.form = {setMembers: '', name: 'Form Name'};
    fixture.detectChanges();

    expect(compiled.getElementsByClassName('code-sheet-name')[0].textContent).toContain('Form Name');
  });

  it('should have code-concept when a member is not set and datatype is coded', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.form = {name: 'Form Name', setMembers: [{name: 'Test Member', set: false, datatype: 'Coded'}]};
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-code-concept').length).toBe(1);
    expect(compiled.querySelector('app-code-concept-set')).toBeNull();
  });


  it('should not have code-concept when a member is not set but  datatype is not coded', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.form = {name: 'Form Name', setMembers: [{name: 'Test Member', set: false, datatype: 'Text'}]};
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-code-concept').length).toBe(0);
    expect(compiled.querySelector('app-code-concept')).toBeNull();
    expect(compiled.querySelector('app-code-concept-set')).toBeNull();
  });

  it('should have code-concept-set when a member is set', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.form = {name: 'Form Name', setMembers: [{name: 'Test Member', set: true, datatype: 'N/A', setMembers: [{nane: 'test'}]}]};
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-code-concept-set').length).toBe(1);
    expect(compiled.querySelector('app-code-concept')).toBeNull();
  });

  it('should have code-concept-set & code-concept when set is true and members having coded concept member', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.form = {
      name: 'Form Name', setMembers: [{
        name: 'Test Member', set: true, datatype: 'N/A',
        setMembers: [{name: 'test', set: false, datatype: 'Coded', setMembers: []}]
      }]
    };
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-code-concept-set').length).toBe(1);
    expect(compiled.querySelectorAll('app-code-concept').length).toBe(1);
    expect(compiled.querySelector('app-code-concept')).not.toBeNull();
  });

});
