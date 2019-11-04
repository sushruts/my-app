import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-editor',
  templateUrl: './entity-editor.component.html',
  styleUrls: ['./entity-editor.component.sass']
})
export class EntityEditorComponent implements OnInit {
  id: number;
  entity: string;
  private sub: any;

  constructor( private route: ActivatedRoute) { }

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

}
