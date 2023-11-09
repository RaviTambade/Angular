import { Component, OnInit } from '@angular/core';
import { RoleLibService } from '../role-lib.service';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User | undefined;

  constructor(private roleSvc: RoleLibService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      if (id)
        this.roleSvc.getUsersDetails(id).subscribe((res) => {
          this.user = res;
        })
    })
  }
}


