import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterModule, Routes } from '@angular/router';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RemovedPipe } from './tree/removed.pipe';


const appRoutes: Routes = [
  //{ path: 'tree', component: TreeComponent },
  //{ path: '**', redirectTo: 'tree' }
];


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    RemovedPipe,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
