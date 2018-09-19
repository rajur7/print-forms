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
});
