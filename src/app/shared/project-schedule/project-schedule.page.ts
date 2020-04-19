import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-project-schedule',
  templateUrl: './project-schedule.page.html',
  styleUrls: ['./project-schedule.page.scss'],
})
export class ProjectSchedulePage implements OnInit {
  schedule;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.schedule = JSON.parse(res.schedule);
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
