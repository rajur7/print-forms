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
    // component.section = 'test section';
    component.member = {name: 'Test Question', set: false, datatype: 'Coded'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('code-sheet-concept')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-question')[0]).not.toBeNull();
    expect(compiled.getElementsByClassName('code-sheet-question')[0].textContent).toContain('Test Question');
    expect(compiled.getElementsByClassName('code-sheet-answer')[0]).not.toBeNull();
  });

  it('should display all answers in `answer-column` class', function () {
    component.member = {name: 'question', set: false, datatype: 'Coded', answers: ['Test-answer1', 'Test-answer2', 'Test-answer3']};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('answer-column').length).toBe(3);
    expect(compiled.getElementsByClassName('answer-row').length).toBe(1);
    expect(compiled.getElementsByClassName('answer-column')[0].textContent).toContain('Test-answer1');
    expect(compiled.getElementsByClassName('answer-column')[1].textContent).toContain('Test-answer2');
    expect(compiled.getElementsByClassName('answer-column')[2].textContent).toContain('Test-answer3');
  });

  it('should display all answers and 1 empty `p` tag with `answer-column` class when answers length%3 = 2', function () {
    component.member = {name: 'question', set: false, datatype: 'Coded', answers: ['Test-answer1',
        'Test-answer2', 'Test-answer3', 'Test-answer4', 'Test-answer5']};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('answer-column').length).toBe(6);
    expect(compiled.getElementsByClassName('answer-row').length).toBe(2);
    expect(compiled.getElementsByClassName('answer-column')[5].textContent).toEqual('');
  });

  it('should display all answers and 2 empty `p` tags with `answer-column` class when answers length%3 =1', function () {
    component.member = {name: 'question', set: false, datatype: 'Coded', answers: ['Test-answer1',
        'Test-answer2', 'Test-answer3', 'Test-answer4']};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('answer-column').length).toBe(6);
    expect(compiled.getElementsByClassName('answer-row').length).toBe(2);
    expect(compiled.getElementsByClassName('answer-column')[4].textContent).toEqual('');
    expect(compiled.getElementsByClassName('answer-column')[5].textContent).toEqual('');
  });


  it('should not display any answers in `answer-column` & `answer-row` class when answers is empty', function () {
    component.member = {name: 'Test Member', set: false, datatype: 'Coded', answers: []};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('answer-column').length).toBe(0);
    expect(compiled.getElementsByClassName('answer-row').length).toBe(0);
  });

  it('should not display any answers in `answer-column` & `answer-row` class when answers is undefined ', function () {
    component.member = {name: 'Test Member', set: false, datatype: 'Coded'};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('answer-column').length).toBe(0);
    expect(compiled.getElementsByClassName('answer-row').length).toBe(0);
  });

});
