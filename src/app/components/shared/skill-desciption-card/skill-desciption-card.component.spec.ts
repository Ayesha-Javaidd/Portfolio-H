import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDesciptionCardComponent } from './skill-desciption-card.component';

describe('SkillDesciptionCardComponent', () => {
  let component: SkillDesciptionCardComponent;
  let fixture: ComponentFixture<SkillDesciptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDesciptionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDesciptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
