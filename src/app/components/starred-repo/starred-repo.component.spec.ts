import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredRepoComponent } from './starred-repo.component';

describe('StarredRepoComponent', () => {
  let component: StarredRepoComponent;
  let fixture: ComponentFixture<StarredRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarredRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
