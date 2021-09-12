import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateTableComponent } from './_template/template-table/template-table.component';
import { TemplateTableFormComponent } from './_template/template-table-form/template-table-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';
import { DataComponent } from './_service/data/data.component';
import { CreateComponent } from './_service/create/create.component';
import { EditComponent } from './_service/edit/edit.component';
import { DeleteComponent } from './_service/delete/delete.component';
import { TodoComponent } from './_interface/todo/todo.component';
import { EventpingComponent } from './_interface/eventping/eventping.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateTableComponent,
    TemplateTableFormComponent,
    TemplateHeaderComponent,
    DataComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    TodoComponent,
    EventpingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
