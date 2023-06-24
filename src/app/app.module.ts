import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteSelectFilterComponent } from './teste-select-filter/teste-select-filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragulaModule, DragulaService } from 'ng2-dragula';

import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { TesteDragDropDragulaComponent } from './teste-drag-drop-dragula/teste-drag-drop-dragula.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteSelectFilterComponent,
    DragAndDropComponent,
    TesteDragDropDragulaComponent,
    TesteDragDropDragulaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    NgDragDropModule.forRoot(),
    DragulaModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
