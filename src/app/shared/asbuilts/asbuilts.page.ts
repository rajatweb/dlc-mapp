import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-asbuilts',
  templateUrl: './asbuilts.page.html',
  styleUrls: ['./asbuilts.page.scss'],
})
export class AsbuiltsPage implements OnInit {
  asBuilts;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.asBuilts = JSON.parse(res.asBuilts);
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
