import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-project-weekly-update',
  templateUrl: './project-weekly-update.page.html',
  styleUrls: ['./project-weekly-update.page.scss'],
})
export class ProjectWeeklyUpdatePage implements OnInit {
  weeklyUpdate;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.weeklyUpdate = JSON.parse(res.weeklyUpdate);
    });
  }


  async presentModal(key, name) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { key, name }
    });
    return await modal.present();
  }

}
