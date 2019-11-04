import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entity-browser',
  templateUrl: './entity-browser.component.html',
  styleUrls: ['./entity-browser.component.sass']
})
export class EntityBrowserComponent implements OnInit {
  id: number;
  entity: string;
  private sub: any;

  constructor(private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.entity = params['entity'];
      this.id = +params['id'];
      console.log(params);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotToNewEntityView(){
    this.router.navigate(['/new/'+this.entity]);
  }

  

}
