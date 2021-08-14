import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnCardComponent } from './pkmn-card.component';

describe('PkmnCardComponent', () => {
  let component: PkmnCardComponent;
  let fixture: ComponentFixture<PkmnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmnCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
