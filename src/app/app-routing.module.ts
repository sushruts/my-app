import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntityBrowserComponent } from './shared/components/entity-browser/entity-browser.component';
import { EntityEditorComponent } from './shared/components/entity-editor/entity-editor.component';
import { EntityGuard } from './shared/services/guards/entity-guard.service';


const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'browse/:entity', component: EntityBrowserComponent, canActivate: [EntityGuard] },
  { path: 'new/:entity', component: EntityEditorComponent, canActivate: [EntityGuard] },
  { path: 'view/:entity/:id', component: EntityEditorComponent, canActivate: [EntityGuard] },
  { path: 'edit/:entity/:id', component: EntityEditorComponent, canActivate: [EntityGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
