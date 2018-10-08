import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConceptComponent } from './code-concept.component';

describe('CodeConceptComponent', () => {
  let component: CodeConceptComponent;
  let fixture: ComponentFixture<CodeConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeConceptComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeConceptComponent);
    component = fixture.componentInstance;
    component.member = {set: false, datatype: 'Coded'};
    fixture.detectChanges();
  });

  it('should create CodeConcept Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have all basic elements', function () {
    component.section = 'test section';
    component.member = {name: 'Test Question', set: false, datatype: 'Coded'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('code-sheet-concept')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-section')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-section')[0].textContent).toContain('test section');
    expect(compiled.getElementsByClassName('code-sheet-question')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-question')[0].textContent).toContain('Test Question');
    expect(compiled.getElementsByClassName('code-sheet-answer')[0]).not.toBeNull();
  });

  it('should display all answers in `p` tag', function () {
    component.section = 'test section';
    component.member = {name: 'question', set: false, datatype: 'Coded', answers: ['Test-answer1', 'Test-answer2', 'Test-answer3']};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('code-sheet-answer-text').length).toBe(3);
    expect(compiled.getElementsByClassName('code-sheet-answer-text')[0].textContent).toContain('Test-answer1');
    expect(compiled.getElementsByClassName('code-sheet-answer-text')[1].textContent).toContain('Test-answer2');
    expect(compiled.getElementsByClassName('code-sheet-answer-text')[2].textContent).toContain('Test-answer3');
  });

  it('should not display any answers in `p` tag when answers is empty ', function () {
    component.section = 'test section';
    component.member = {name: 'Test Member', set: false, datatype: 'Coded', answers: []};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('code-sheet-answer-text').length).toBe(0);
  });

  it('should not display any answers in `p` tag when answers is undefined ', function () {
    component.section = 'test section';
    component.member = {name: 'Test Member', set: false, datatype: 'Coded'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('code-sheet-answer-text').length).toBe(0);
  });

});
