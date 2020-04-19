import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectWeeklyUpdatePage } from './project-weekly-update.page';

describe('ProjectWeeklyUpdatePage', () => {
  let component: ProjectWeeklyUpdatePage;
  let fixture: ComponentFixture<ProjectWeeklyUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWeeklyUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectWeeklyUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
