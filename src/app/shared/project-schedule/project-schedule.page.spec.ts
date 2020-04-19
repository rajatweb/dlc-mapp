import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectSchedulePage } from './project-schedule.page';

describe('ProjectSchedulePage', () => {
  let component: ProjectSchedulePage;
  let fixture: ComponentFixture<ProjectSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
