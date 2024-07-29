import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ChildActivationStart, ChildActivationEnd } from '@angular/router';
//import { LoginService } from '../../forms/loginservice';

@Component({
  selector: 'route-container',
  templateUrl: './route-container.component.html',
  styleUrls: ['./route-container.component.css'],
 
})
export class RouteContainerComponent implements OnInit {
 
  status:boolean=true;
  constructor(private router: Router, private route: ActivatedRoute ){
    
 /*
  links: Array<{ text: string, path: string }> = [];
  this.router.config.unshift(
    { path: 'page1', component: Comp1Component },
    { path: 'page2', component: Comp2Component }
  );

  this.links.push(
    { text: 'page1', path: 'page1' },
    { text: 'page2', path: 'page2' },
  );
  */
 

  router.events.subscribe(e => {
    if (e instanceof ChildActivationStart){
              console.log("++++"+e.snapshot);
    }
    else if (e instanceof ChildActivationEnd) {
      console.log("------"+ e.snapshot);
    }
  });
}
ngOnInit() {  }

}
