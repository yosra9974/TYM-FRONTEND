import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistAgendaComponent } from './specialist-agenda.component';

describe('SpecialistAgendaComponent', () => {
  let component: SpecialistAgendaComponent;
  let fixture: ComponentFixture<SpecialistAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialistAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
