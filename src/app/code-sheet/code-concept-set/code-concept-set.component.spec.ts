import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConceptSetComponent } from './code-concept-set.component';
import { CodeConceptComponent } from '../code-concept/code-concept.component';

describe('CodeConceptSetComponent', () => {
  let component: CodeConceptSetComponent;
  let fixture: ComponentFixture<CodeConceptSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeConceptSetComponent, CodeConceptComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeConceptSetComponent);
    component = fixture.componentInstance;
    component.member = {set: true, setMembers: []};
    fixture.detectChanges();
  });

  it('should create CodeConceptSet component', () => {
    expect(component).toBeTruthy();
  });

  it('should return section name', () => {
    component.member = {name: 'Test-section-name', set: true, setMembers: []};

    expect(component.getSectionName()).toEqual('Test-section-name');
  });

  it('should have only code-concept when members are having set is false and datatype is coded', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.member = {
      name: 'Test Member', set: true, datatype: 'N/A',
      setMembers: [{name: 'test', set: false, datatype: 'Coded'}]
    };
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-code-concept').length).toBe(1);
    expect(compiled.querySelector('app-code-concept')).not.toBeNull();
    expect(compiled.querySelector('app-code-concept-set')).toBeNull();
  });

  it('should not have code-concept when members are having set is false but datatype is not coded', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.member = {
      name: 'Test Member', set: true, datatype: 'N/A',
      setMembers: [{name: 'test', set: false, datatype: 'Boolean'}]
    };
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-code-concept').length).toBe(0);
    expect(compiled.querySelector('app-code-concept')).toBeNull();
    expect(compiled.querySelector('app-code-concept-set')).toBeNull();
  });

  it('should have code-concept-set and code-concept when set is true and members having coded concept member', function () {
    const compiled = fixture.debugElement.nativeElement;
    component.member = {
      name: 'Test Member', set: true, datatype: 'N/A',
      setMembers: [{
        name: 'test', set: true, datatype: 'N/A',
        setMembers: [{name: 'test Member', set: false, setMembers: [], datatype: 'Coded'}]
      }]
    };
    fixture.detectChanges();

    expect(compiled.querySelectorAll('app-code-concept').length).toBe(1);
    expect(compiled.querySelectorAll('app-code-concept-set').length).toBe(1);
    expect(compiled.querySelector('app-code-concept')).not.toBeNull();
    expect(compiled.querySelector('app-code-concept-set')).not.toBeNull();
  });

});
