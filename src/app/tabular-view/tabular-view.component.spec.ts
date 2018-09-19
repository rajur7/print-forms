import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularViewComponent } from './tabular-view.component';
import { ConceptSetComponent } from '../concept-set/concept-set.component';
import { TextBoxComponent } from '../elements/text-box/text-box.component';
import { ConceptComponent } from '../concept/concept.component';
import { ConceptUtils } from '../utils/concept.utils';

describe('TabularViewComponent', () => {
  let component: TabularViewComponent;
  let fixture: ComponentFixture<TabularViewComponent>;
  let conceptUtils: ConceptUtils;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptSetComponent, ConceptComponent, TextBoxComponent, TabularViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularViewComponent);
    component = fixture.componentInstance;
    component.member = {setMembers: []};
    conceptUtils = spyOn(ConceptUtils, 'isTabular');
    fixture.detectChanges();
  });

  it('should create Tabular view component', () => {

    expect(component).toBeTruthy();
  });

  it('should call isTabular method of conceptUtils', () => {
    const member = {};
    component.isTabular(member);

    expect(conceptUtils).toHaveBeenCalledWith(member);
  });
});
