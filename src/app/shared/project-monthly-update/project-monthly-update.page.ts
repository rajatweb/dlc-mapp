import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-project-monthly-update',
  templateUrl: './project-monthly-update.page.html',
  styleUrls: ['./project-monthly-update.page.scss'],
})
export class ProjectMonthlyUpdatePage implements OnInit {
  monthlyBudget;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.monthlyBudget = JSON.parse(res.monthlyBudget);
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
