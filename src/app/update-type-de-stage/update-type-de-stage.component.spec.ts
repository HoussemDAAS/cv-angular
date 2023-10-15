import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeDeStageComponent } from './update-type-de-stage.component';

describe('UpdateTypeDeStageComponent', () => {
  let component: UpdateTypeDeStageComponent;
  let fixture: ComponentFixture<UpdateTypeDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeDeStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
