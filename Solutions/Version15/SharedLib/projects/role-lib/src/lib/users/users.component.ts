import { Component, OnInit } from '@angular/core';
import { RoleLibService } from '../role-lib.service';
import { User } from '../User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private roleSvc: RoleLibService, private route: ActivatedRoute, private router :Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let role = params.get('role');
      if (role)
        this.roleSvc.getUsersByRole(role).subscribe((res) => {
          this.users = res;
        })
    })
  }

  onClickUser(id:number)
  {
    this.router.navigate(["users/details",id]);
  }
}
