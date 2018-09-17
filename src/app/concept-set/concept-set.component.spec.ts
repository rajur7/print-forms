import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptSetComponent } from './concept-set.component';
import { ConceptComponent } from '../concept/concept.component';

describe('ConceptSetComponent', () => {
  let component: ConceptSetComponent;
  let fixture: ComponentFixture<ConceptSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptSetComponent, ConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptSetComponent);
    component = fixture.componentInstance;
    component.member = {name: 'test member'};
    fixture.detectChanges();
  });

  it('should create concept-set component', () => {
    expect(component).toBeTruthy();
  });

  it('should display div elements with classes concept-set and concept-set-section', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('div')[0].getAttribute('class')).toEqual('concept-set-section');
    expect(compiled.querySelectorAll('div')[1].getAttribute('class')).toEqual('concept-set');
    expect(compiled.querySelectorAll('div')[1].innerText).toEqual('test member');
  });

  it('should display concept and concept-set component when set members list is not empty', function () {
    component.member = {name: 'test member', setMembers : [{name: 'member1', set: true}, {name: 'member2', set: false}]};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('app-concept-set').length).toBe(1);
    expect(compiled.querySelectorAll('app-concept').length).toBe(1);
    expect(compiled.querySelector('app-concept-set')).not.toBeNull();
    expect(compiled.querySelector('app-concept')).not.toBeNull();
  });

  it('should display only concept component when set members are not concept sets', function () {
    component.member = {name: 'test member', setMembers : [{name: 'member1', set: false}, {name: 'member2', set: false}]};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('app-concept').length).toBe(2);
    expect(compiled.querySelector('app-concept')).not.toBeNull();
    expect(compiled.querySelector('app-concept-set')).toBeNull();
  });

  it('should display only concept-set component when all set members are concept sets', function () {
    component.member = {name: 'test member', setMembers : [{name: 'member1', set: true, setMembers:
          [{name: 'member11', set: true}]}, {name: 'member2', set: true}]};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('app-concept-set').length).toBe(3);
    expect(compiled.querySelector('app-concept-set')).not.toBeNull();
    expect(compiled.querySelector('app-concept')).toBeNull();
  });

  it('should not display concept and concept-set components when set-members list is empty', function () {
    component.member = {name: 'test member'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-concept-set')).toBeNull();
    expect(compiled.querySelector('app-concept')).toBeNull();
  });
});
