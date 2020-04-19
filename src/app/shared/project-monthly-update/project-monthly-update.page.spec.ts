import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectMonthlyUpdatePage } from './project-monthly-update.page';

describe('ProjectMonthlyUpdatePage', () => {
  let component: ProjectMonthlyUpdatePage;
  let fixture: ComponentFixture<ProjectMonthlyUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMonthlyUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectMonthlyUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
