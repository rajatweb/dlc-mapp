import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      if (Object.keys(res).length > 0) {
        this.users = JSON.parse(res.userRole);
      } else {
        this.router.navigate(['/home']);
      }

    });
  }

  setPasscode(user, role) {
    this.router.navigate(['/passcode'], {
      queryParams: {
        user: JSON.stringify(user),
        role
      }
    });
  }

}
