import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectPhotosPage } from './project-photos.page';

describe('ProjectPhotosPage', () => {
  let component: ProjectPhotosPage;
  let fixture: ComponentFixture<ProjectPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
