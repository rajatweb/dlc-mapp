import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.page.html',
  styleUrls: ['./passcode.page.scss'],
})
export class PasscodePage implements OnInit {
  user;
  userRole;
  passcodeForm: FormGroup;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.user = JSON.parse(res.user);
      this.userRole = res.role;
    });
    this.passcodeForm = new FormGroup({
      passcode: new FormControl('', Validators.required)
    });

  }

  onSubmit() {
    if (this.passcodeForm.value.passcode === this.user.passcode) {
      this.router.navigate([this.userRole], {
        queryParams: {
          userData: JSON.stringify(this.user)
        }
      });
    }
  }
}
