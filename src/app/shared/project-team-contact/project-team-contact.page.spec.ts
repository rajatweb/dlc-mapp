import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectTeamContactPage } from './project-team-contact.page';

describe('ProjectTeamContactPage', () => {
  let component: ProjectTeamContactPage;
  let fixture: ComponentFixture<ProjectTeamContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTeamContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTeamContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
