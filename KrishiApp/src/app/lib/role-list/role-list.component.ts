import { Component, OnInit } from '@angular/core';
import { RoleLibService } from '../role-lib.service';
import { Role } from '../Role';

@Component({
  selector: 'lib-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  lob : string = "EKrushi";
  roles : Role[]=[] ;
  constructor(private roleSvc:RoleLibService){}

  ngOnInit(): void {
    this.roleSvc.getRoles(this.lob).subscribe((response)=>
    {
      this.roles=response;
    })
  }


}
