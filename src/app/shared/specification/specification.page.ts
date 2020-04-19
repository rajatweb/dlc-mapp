import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.page.html',
  styleUrls: ['./specification.page.scss'],
})
export class SpecificationPage implements OnInit {
  specifications;
  constructor(public activatedRoute: ActivatedRoute, public router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.specifications = JSON.parse(res.specifications);
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
