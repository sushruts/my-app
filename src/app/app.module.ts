import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntityBrowserComponent } from './shared/components/entity-browser/entity-browser.component';
import { EntityEditorComponent } from './shared/components/entity-editor/entity-editor.component';
import { EntityGuard } from './shared/services/guards/entity-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EntityBrowserComponent,
    EntityEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EntityGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
