import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.page.html',
  styleUrls: ['./contractor.page.scss'],
})
export class ContractorPage implements OnInit {
  invoices: null;
  specifications: null;
  addendum: null;
  rfi: null;
  changeOrder: null;
  asBuilts: null;
  changeRequest: null;
  photo: null;
  projectId;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.userData));
      this.invoices = JSON.parse(res.userData).dues;
      this.specifications = JSON.parse(res.userData).specifications;
      this.addendum = JSON.parse(res.userData).addendum;
      this.rfi = JSON.parse(res.userData).rfi;
      this.changeOrder = JSON.parse(res.userData).changeOrder;
      this.asBuilts = JSON.parse(res.userData).built;
      this.changeRequest = JSON.parse(res.userData).changeRequest;
      this.photo = JSON.parse(res.userData).photo;
      this.projectId = res.projectId;
    });
  }

  setInvoices() {
    this.router.navigate(['/invoices'], {
      queryParams: {
        invoices: JSON.stringify(this.invoices)
      }
    });
  }

  setSpecification() {
    this.router.navigate(['/specification'], {
      queryParams: {
        specifications: JSON.stringify(this.specifications)
      }
    });
  }

  setAddendums() {
    this.router.navigate(['/addendums'], {
      queryParams: {
        addendum: JSON.stringify(this.addendum)
      }
    });
  }

  setRfi() {
    this.router.navigate(['/rfi'], {
      queryParams: {
        rfi: JSON.stringify(this.rfi)
      }
    });
  }

  setChangeOrder() {
    this.router.navigate(['/change-order'], {
      queryParams: {
        changeOrder: JSON.stringify(this.changeOrder)
      }
    });
  }
  setAsBuilts() {
    this.router.navigate(['/asbuilts'], {
      queryParams: {
        asBuilts: JSON.stringify(this.asBuilts)
      }
    });
  }

  setProjectPhoto() {
    this.router.navigate(['/project-photos'], {
      queryParams: {
        projectId: this.projectId,
        projectPhotos: JSON.stringify(this.photo)
      }
    });
  }

  setRequestChange() {
    this.router.navigate(['/request-change'], {
      queryParams: {
        projectId: this.projectId,
        changeRequest: JSON.stringify(this.changeRequest)
      }
    });
  }
}
