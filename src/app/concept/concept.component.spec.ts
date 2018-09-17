import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptComponent } from './concept.component';

describe('ConceptComponent', () => {
  let component: ConceptComponent;
  let fixture: ComponentFixture<ConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptComponent ]
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
});
