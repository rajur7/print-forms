import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptComponent } from './concept.component';
import { TextBoxComponent } from '../elements/text-box/text-box.component';

describe('ConceptComponent', () => {
  let component: ConceptComponent;
  let fixture: ComponentFixture<ConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptComponent, TextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptComponent);
    component = fixture.componentInstance;
    component.member = {name: 'abc'};
    fixture.detectChanges();
  });

  it('should create concept component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default concept div elements', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('div').getAttribute('class')).toEqual('concept');
    expect(compiled.querySelectorAll('div')[1].getAttribute('class')).toEqual('question');
    expect(compiled.querySelectorAll('div')[2].getAttribute('class')).toEqual('answer');
  });

  it('should have text box component when member datatype is text', function () {
    component.member = { name : 'test member', datatype : 'Text'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-text-box')).not.toBeNull();
  });

  it('should have text box component when member datatype is numeric', function () {
    component.member = { name : 'test member', datatype : 'Numeric'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-text-box')).not.toBeNull();
  });

  it('should have text box component when member datatype is date', function () {
    component.member = { name : 'test member', datatype : 'Date'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-text-box')).not.toBeNull();
  });

  it('should have asterick when config required is true', function () {
    component.member = { name : 'test member', datatype : 'Date', config: {required: true}};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('required')[0].textContent).toEqual('*');
  });

  it('should not have asterick when config required is false', function () {
    component.member = { name : 'test member', datatype : 'Date', config: {required: false}};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('required').length).toEqual(0);
  });

  it('should add units to label when units config is not null', function () {
    component.member = { name : 'test member', units: 'mm'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('units')[0].textContent).toBe(' (mm)');
  });

  it('should not add units to label when units config is null', function () {
    component.member = { name : 'test member'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('units').length).toBe(0);
  });
});
